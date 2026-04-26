"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
    { label: "System", href: "#system-flow" },
    { label: "Audience", href: "#who-this-is-for" },
    { label: "Execution", href: "#execution" },
    { label: "Governance", href: "#governance" },
    { label: "Contact", href: "#contact" },
] as const;

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 16);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-colors duration-200 border-b ${scrolled
                ? "border-swaqar-gold/30"
                : "border-swaqar-gold/15"
                }`}
            // Always solid black so logo dark elements are visible
            style={{ backgroundColor: "#000000" }}
        >
            <div className="swaqar-container">
                <div className="flex items-center justify-between h-16">

                    {/* ───── LOGO ───── */}
                    <Link href="/" aria-label="SWAQAR — home">
                        <Image
                            src="/logo.png"
                            alt="SWAQAR"
                            width={160}
                            height={52}
                            priority
                            className="h-13 w-auto object-contain"
                            style={{ height: "52px", width: "auto" }}
                        />
                    </Link>

                    {/* ───── DESKTOP NAV ───── */}
                    <nav aria-label="Primary" className="hidden md:flex items-center gap-7">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="relative text-swaqar-text text-sm font-medium group py-1"
                            >
                                {link.label}
                                <span
                                    aria-hidden="true"
                                    className="absolute left-0 bottom-0 h-px w-0 bg-swaqar-gold transition-all duration-200 group-hover:w-full group-focus-visible:w-full"
                                />
                            </a>
                        ))}
                    </nav>

                    {/* ───── DESKTOP CTA ───── */}
                    <a
                        href="#submit-opportunity"
                        className="hidden md:inline-flex items-center justify-center bg-swaqar-gold text-swaqar-bg text-sm font-semibold px-5 py-2.5 transition-opacity hover:opacity-90"
                    >
                        Submit Opportunity
                    </a>

                    {/* ───── MOBILE TOGGLE ───── */}
                    <button
                        type="button"
                        onClick={() => setMobileOpen((v) => !v)}
                        className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                        aria-expanded={mobileOpen}
                        aria-controls="mobile-menu"
                    >
                        <span className={`block w-5 h-px bg-swaqar-text transition-transform ${mobileOpen ? "translate-y-[6px] rotate-45" : ""}`} />
                        <span className={`block w-5 h-px bg-swaqar-text transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
                        <span className={`block w-5 h-px bg-swaqar-text transition-transform ${mobileOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
                    </button>
                </div>

                {/* ───── MOBILE MENU ───── */}
                <div
                    id="mobile-menu"
                    className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${mobileOpen ? "max-h-96" : "max-h-0"}`}
                >
                    <nav aria-label="Mobile primary" className="flex flex-col gap-1 pb-4 pt-2 border-t border-swaqar-gold/20 mt-2">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="text-swaqar-text text-sm font-medium py-3 border-b border-swaqar-surface hover:text-swaqar-gold transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#submit-opportunity"
                            onClick={() => setMobileOpen(false)}
                            className="mt-3 inline-flex items-center justify-center bg-swaqar-gold text-swaqar-bg text-sm font-semibold py-3"
                        >
                            Submit Opportunity
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
}