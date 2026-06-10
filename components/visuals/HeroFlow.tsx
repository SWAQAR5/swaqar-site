// @ts-nocheck
// ─────────────────────────────────────────────────────────────────────────────
// components/sections/Hero.tsx
// SWAQAR Group — Hero Section
//
// Purpose:
//   First section the visitor sees. Establishes institutional identity,
//   mission statement, geographic scope, and Phase 1 status signal.
//   Two CTAs: institutional inquiry + phase 1 context anchor.
//
// Identity rules enforced:
//   — No transaction language
//   — No marketplace language
//   — No operational claims
//   — No partner names
//   — No revenue or volume figures
//   — Phase 1 status shown honestly
// ─────────────────────────────────────────────────────────────────────────────

export default function Hero() {
    return (
        <section
            aria-label="SWAQAR Group — Institutional Identity"
            className="bg-[#0B1F3A] text-white"
        >
            {/* ── Outer container ─────────────────────────────────────────────── */}
            <div className="max-w-[1100px] mx-auto px-6 py-24 md:py-32">

                {/* ── Phase status badge ──────────────────────────────────────────
            Honest, visible, non-promotional.
            Tells a regulator or institutional visitor immediately:
            this institution is in its foundation stage.
        ─────────────────────────────────────────────────────────────────── */}
                <div className="mb-10">
                    <span className="inline-flex items-center gap-2 border border-[#B8923A]/40 text-[#B8923A] text-xs font-semibold tracking-[0.12em] uppercase px-4 py-2 rounded-sm">
                        <span
                            className="w-1.5 h-1.5 rounded-full bg-[#B8923A] opacity-80"
                            aria-hidden="true"
                        />
                        Phase 1 — Foundation Stage
                    </span>
                </div>

                {/* ── Primary headline ────────────────────────────────────────────
            Playfair Display via the font stack in globals.css / layout.tsx.
            If the project uses a font class on <html> or <body>, this
            inherits. If not, the serif stack below provides the fallback.
        ─────────────────────────────────────────────────────────────────── */}
                <h1
                    className="
            font-serif font-black
            text-4xl sm:text-5xl md:text-6xl
            leading-[1.1] tracking-tight
            text-white
            mb-4
          "
                >
                    SWAQAR Group
                </h1>

                {/* ── Tagline ─────────────────────────────────────────────────────
            Master brand tagline — always gold, always italic.
            Never used as a marketing slogan. Used as a category statement.
        ─────────────────────────────────────────────────────────────────── */}
                <p
                    className="
            font-serif italic
            text-2xl sm:text-3xl md:text-4xl
            text-[#B8923A]
            mb-10 leading-snug
          "
                >
                    Corridors of Trust.
                </p>

                {/* ── Gold rule divider ───────────────────────────────────────────
            Brand-compliant horizontal separator.
        ─────────────────────────────────────────────────────────────────── */}
                <div
                    className="w-16 h-px bg-[#B8923A] mb-10"
                    aria-hidden="true"
                />

                {/* ── Mission subheadline ─────────────────────────────────────────
            The single most important sentence on the website.
            Must define the category precisely and defensibly.
            Max width constrained for readability per brand spacing rules.
        ─────────────────────────────────────────────────────────────────── */}
                <p
                    className="
            text-base sm:text-lg
            text-[#A0AEC0]
            leading-[1.75]
            max-w-[680px]
            mb-12
          "
                >
                    A governance-led, asset-light, non-custodial Trade Coordination Layer
                    coordinating verification, documentation alignment, stakeholder
                    synchronization, and institutional trust across{" "}
                    <span className="text-white font-medium">
                        Africa ⇄ Middle East ⇄ Asia
                    </span>
                    .
                </p>

                {/* ── CTA buttons ─────────────────────────────────────────────────
            Primary: Submit Institutional Inquiry — anchors to SubmitForm
            Secondary: View Phase 1 Focus — anchors to Phase1Reality section
            Both use institutional language. Neither implies a transaction.
        ─────────────────────────────────────────────────────────────────── */}
                <div className="flex flex-col sm:flex-row gap-4">

                    {/* Primary CTA */}
                    <a
                        href="#institutional-inquiry"
                        className="
                    inline-block
                    bg-[#B8923A] hover:bg-[#D4A843]
                    text-[#0B1F3A]
                    text-sm font-semibold tracking-[0.08em] uppercase
                    px-8 py-4
                    transition-colors duration-200
                    text-center
                    "
                    >
                        Submit Institutional Inquiry
                    </a>

                    {/* Secondary CTA */}
                    <a
                        href="#phase-1-focus"
                        className="
                inline-block
                border border-white/30 hover:border-white/60
                text-white hover:text-white
                text-sm font-semibold tracking-[0.08em] uppercase
                px-8 py-4
                transition-colors duration-200
                text-center
                "
                    >
                        View Phase 1 Focus
                    </a>

                </div>

                {/* ── Geographic scope strip ──────────────────────────────────────
            Visual reinforcement of the three-region mandate.
            Purely informational. No implied partnerships or approvals.
        ─────────────────────────────────────────────────────────────────── */}
                <div
                    className="
            mt-16 pt-10
            border-t border-white/10
            flex flex-col sm:flex-row
            gap-6 sm:gap-0
            items-start sm:items-center
          "
                >

                    {/* Region: Africa */}
                    <div className="flex-1">
                        <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#718096] mb-1">
                            Origin &amp; Supply
                        </p>
                        <p className="text-sm font-semibold text-white">Africa</p>
                    </div>

                    {/* Connector arrow */}
                    <div
                        className="hidden sm:block text-[#B8923A] text-xl px-4 select-none"
                        aria-hidden="true"
                    >
                        ⇄
                    </div>

                    {/* Region: Middle East */}
                    <div className="flex-1">
                        <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#718096] mb-1">
                            Trust &amp; Capital
                        </p>
                        <p className="text-sm font-semibold text-white">Middle East</p>
                    </div>

                    {/* Connector arrow */}
                    <div
                        className="hidden sm:block text-[#B8923A] text-xl px-4 select-none"
                        aria-hidden="true"
                    >
                        ⇄
                    </div>

                    {/* Region: Asia */}
                    <div className="flex-1">
                        <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#718096] mb-1">
                            Industrial Scale &amp; Demand
                        </p>
                        <p className="text-sm font-semibold text-white">Asia</p>
                    </div>

                    {/* Identity descriptors — right-aligned on desktop */}
                    <div
                        className="
              sm:ml-auto
              flex flex-wrap gap-2
              sm:justify-end
            "
                    >
                        {[
                            "Governance-Led",
                            "Asset-Light",
                            "Non-Custodial",
                        ].map((label) => (
                            <span
                                key={label}
                                className="
                  text-[10px] font-semibold tracking-[0.1em] uppercase
                  border border-white/15
                  text-[#A0AEC0]
                  px-3 py-1.5
                "
                            >
                                {label}
                            </span>
                        ))}
                    </div>

                </div>
            </div >
        </section >
    );
}