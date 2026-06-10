const NAV_LINKS = [
    { label: "What We Do", href: "#why-swaqar-exists" },
    { label: "Corridor Model", href: "#candidate-corridor-flow" },
    { label: "Governance", href: "#governance" },
    { label: "Strategic Architecture", href: "#strategic-arms" },
    { label: "Institutional Inquiry", href: "#institutional-inquiry" },
] as const;

const LEGAL_LINKS = [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms of Use", href: "/legal/terms" },
    { label: "Compliance", href: "/legal/compliance" },
] as const;

const CONTACT_LINKS = [
    { label: "Institutional Inquiry", href: "mailto:opportunities@swaqar.com" },
    { label: "Partnerships", href: "mailto:partnerships@swaqar.com" },
] as const;

export default function Footer() {
    return (
        <footer
            id="footer"
            aria-label="Site footer"
            className="border-t border-swaqar-gold/30 bg-swaqar-navy"
        >
            <div className="swaqar-container">

                {/* ═══════════ MAIN FOOTER GRID ═══════════ */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-14">

                    {/* ───── LEFT: Identity block (5 cols) ───── */}
                    <div className="md:col-span-5 flex flex-col gap-4">
                        <span className="text-swaqar-gold font-bold text-lg tracking-[0.2em]">
                            SWAQAR Group
                        </span>
                        <p className="text-white text-sm font-medium leading-relaxed max-w-xs">
                            Governance-Led Trade Coordination Layer
                        </p>
                        <p className="text-swaqar-muted text-sm leading-relaxed max-w-xs">
                            A governance-led, asset-light, non-custodial coordination
                            infrastructure across Africa, the Middle East, and Asia.
                        </p>

                        {/* Region indicator */}
                        <div className="flex items-center gap-2 mt-2 flex-wrap">
                            <span className="text-swaqar-muted text-[10px] tracking-[0.2em] uppercase">
                                Africa
                            </span>
                            <span aria-hidden="true" className="text-swaqar-gold text-xs">⇄</span>
                            <span className="text-swaqar-muted text-[10px] tracking-[0.2em] uppercase">
                                Middle East
                            </span>
                            <span aria-hidden="true" className="text-swaqar-gold text-xs">⇄</span>
                            <span className="text-swaqar-muted text-[10px] tracking-[0.2em] uppercase">
                                Asia
                            </span>
                        </div>

                        {/* Phase indicator */}
                        <div className="flex items-center gap-2 mt-1">
                            <span aria-hidden="true" className="block w-1.5 h-1.5 bg-swaqar-gold" />
                            <span className="text-swaqar-gold text-[10px] tracking-[0.12em] uppercase font-semibold">
                                Phase 1 — Foundation Stage
                            </span>
                        </div>
                    </div>

                    {/* ───── MIDDLE: Navigation (4 cols) ───── */}
                    <div className="md:col-span-4 flex flex-col gap-4">
                        <span className="text-[10px] tracking-[0.25em] text-swaqar-gold uppercase font-bold">
                            Navigation
                        </span>
                        <ul className="flex flex-col gap-3">
                            {NAV_LINKS.map((link) => (
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

                    {/* ───── RIGHT: Contact + Legal (3 cols) ───── */}
                    <div className="md:col-span-3 flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
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

                        <div className="flex flex-col gap-4">
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
                        </div>
                    </div>
                </div>

                {/* ═══════════ DISCLAIMER ═══════════ */}
                <div className="border-t border-swaqar-gold/20 py-6 border-l-2 border-l-swaqar-gold/40 pl-4">
                    <p className="text-swaqar-muted text-xs leading-relaxed max-w-4xl">
                        SWAQAR Group is a governance-led, non-custodial Trade
                        Coordination Layer. This website does not constitute brokerage,
                        commodity trading, logistics operation, or any regulated financial
                        activity. All institutional engagement is subject to
                        counsel-validated due diligence per jurisdiction. SWAQAR Group
                        does not accept unsolicited commodity offers, speculative trade
                        proposals, or brokerage representations of any kind.
                    </p>
                </div>

                {/* ═══════════ BOTTOM BAR ═══════════ */}
                <div className="border-t border-swaqar-gold/20 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <p className="text-swaqar-muted text-xs">
                        © 2025 SWAQAR Group. All rights reserved. Trade Coordination Infrastructure · swaqar.com
                    </p>
                </div>

            </div>
        </footer>
    );
}
