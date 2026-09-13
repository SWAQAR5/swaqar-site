'use client';
import { useEffect } from 'react';
import type { Lang } from '@/lib/translations';

// Shared page-chrome behaviour used by every locale page (home, /model, /arms — Stage 3 split).
// Extracted from the original single-page HomeClient so every page gets identical interactive
// behaviour: the custom cursor dot/ring, the nav "scrolled" shadow, the animated stat-counter
// roll-up, and the scroll-reveal (.r -> .up) IntersectionObserver. (The mobile burger/menu open
// state moved to React state in SiteHeader — see the comment there.) Effects that target
// elements a given page doesn't have (e.g. .stat-n outside home) are harmless no-ops — the
// querySelector/getElementById calls simply find nothing.
export function useSiteChrome(lang: Lang) {
  useEffect(() => {
    const dot = document.getElementById('cur-dot');
    const ring = document.getElementById('cur-ring');
    let mx = 0, my = 0, rx = 0, ry = 0;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (dot) { dot.style.left = mx + 'px'; dot.style.top = my + 'px'; }
    };
    const animRing = () => {
      rx += (mx - rx) * 0.14; ry += (my - ry) * 0.14;
      if (ring) { ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; }
      requestAnimationFrame(animRing);
    };
    document.addEventListener('mousemove', onMove);
    animRing();
    document.querySelectorAll('a,button,.arm,.pillar,.gate,.cor-card,.gov-card,.partner').forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('hov'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('hov'));
    });
    const nav = document.getElementById('nav');
    const onScroll = () => { if (nav) nav.classList.toggle('scrolled', window.scrollY > 10); };
    window.addEventListener('scroll', onScroll, { passive: true });
    // Note: the mobile burger/menu open-close toggle is NOT wired here — it's owned by React
    // state inside SiteHeader itself (see the comment there for why: this effect's mount-once
    // getElementById+addEventListener pattern stopped working after an App Router navigation
    // to a different locale recreated the underlying DOM nodes).
    document.querySelectorAll('.stat-n').forEach(c => {
      const tgt = c.textContent || '';
      const num = parseFloat(tgt);
      if (isNaN(num)) return;
      c.textContent = '0';
      const io2 = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (!e.isIntersecting) return;
          let s = 0; const step = num / 40;
          const timer = setInterval(() => {
            s += step;
            if (s >= num) { c.textContent = tgt; clearInterval(timer); }
            else c.textContent = tgt.includes('%') ? Math.round(s) + '%' : Math.round(s) + tgt.replace(/[0-9.]/g, '');
          }, 30);
          io2.unobserve(e.target);
        });
      }, { threshold: 0.5 });
      io2.observe(c as Element);
    });
    return () => {
      document.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.r').forEach(el => el.classList.add('up'));
      return;
    }
    const io = new IntersectionObserver(
      entries => { entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('up'); io.unobserve(e.target); } }); },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.06 }
    );
    document.querySelectorAll('.r:not(.up)').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [lang]);
}
