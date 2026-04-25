// ─────────────────────────────────────────────────────────────
// FOOTER
// Institutional identity reaffirmation + legal + contact
// Legal links are placeholders until docs are drafted.
// ─────────────────────────────────────────────────────────────

const LEGAL_LINKS = [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms of Use", href: "/legal/terms" },
    { label: "Compliance", href: "/legal/compliance" },
] as const;

const CONTACT_LINKS = [
    { label: "Trade Opportunities", href: "mailto:opportunities@swaqar.com" },
    { label: "Partnerships", href: "mailto:partnerships@swaqar.com" },
] as const;

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer
            id="footer"
            aria-label="Site footer"
            className="border-t border-swaqar-gold/30 bg-swaqar-bg"
        >
            <div className="swaqar-container">
                {/* ═══════════ MAIN FOOTER GRID ═══════════ */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-14">
                    {/* ───── LEFT: Identity block (5 cols) ───── */}
                    <div className="md:col-span-5 flex flex-col gap-4">
                        {/* Logo */}
                        <span className="text-swaqar-gold font-bold text-lg tracking-[0.2em]">
                            SWAQAR
                        </span>

                        {/* Tagline */}
                        <p className="text-swaqar-text text-sm font-medium leading-relaxed max-w-xs">
                            Structured Trade Coordination System
                        </p>
                        <p className="text-swaqar-muted text-sm leading-relaxed max-w-xs">
                            A controlled coordination layer governing cross-border trade
                            between Africa and the Middle East.
                        </p>

                        {/* Region indicator */}
                        <div className="flex items-center gap-3 mt-2">
                            <span className="text-swaqar-muted text-[10px] tracking-[0.2em] uppercase">
                                Africa
                            </span>
                            <span className="block h-px w-8 bg-swaqar-gold/50" />
                            <span
                                aria-hidden="true"
                                className="block w-1.5 h-1.5 bg-swaqar-gold"
                            />
                            <span className="block h-px w-8 bg-swaqar-gold/50" />
                            <span className="text-swaqar-muted text-[10px] tracking-[0.2em] uppercase">
                                Middle East
                            </span>
                        </div>
                    </div>

                    {/* ───── MIDDLE: Contact (3 cols) ───── */}
                    <div className="md:col-span-3 flex flex-col gap-4">
                        <span className="text-[10px] tracking-[0.25em] text-swaqar-gold uppercase font-bold">
                            Contact
                        </span>
                        <ul className="flex flex-col gap-3">
                            {CONTACT_LINKS.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-swaqar-muted text-sm hover:text-swaqar-gold focus-visible:text-swaqar-gold transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ───── RIGHT: Legal (4 cols) ───── */}
                    <div className="md:col-span-4 flex flex-col gap-4">
                        <span className="text-[10px] tracking-[0.25em] text-swaqar-gold uppercase font-bold">
                            Legal
                        </span>
                        <ul className="flex flex-col gap-3">
                            {LEGAL_LINKS.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-swaqar-muted text-sm hover:text-swaqar-gold focus-visible:text-swaqar-gold transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* System status indicator */}
                        <div className="mt-4 flex items-center gap-2">
                            <span
                                aria-hidden="true"
                                className="block w-1.5 h-1.5 bg-swaqar-success"
                            />
                            <span className="text-swaqar-muted text-[10px] tracking-wider uppercase">
                                System Operational
                            </span>
                        </div>
                    </div>
                </div>

                {/* ═══════════ BOTTOM BAR ═══════════ */}
                <div className="border-t border-swaqar-gold/20 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <p className="text-swaqar-muted text-xs">
                        © {year} SWAQARrr. All rights reserved.
                    </p>
                    <p className="text-swaqar-muted text-xs">
                        Trade Coordination Infrastructure · swaqar.com
                    </p>
                </div>
            </div>
        </footer>
    );
}