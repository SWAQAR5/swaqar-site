const PILLARS = [
    {
        number: "01",
        title: "Verification Governance",
        description:
            "SWAQAR coordinates the verification standards and qualification criteria applied to corridor counterparties. Verification is conducted by accredited TIC partners — not by SWAQAR directly.",
    },
    {
        number: "02",
        title: "Documentation Alignment",
        description:
            "Trade documentation requirements are mapped and aligned across all corridor participants before execution begins. SWAQAR does not produce, hold, or guarantee documents.",
    },
    {
        number: "03",
        title: "Stakeholder Synchronisation",
        description:
            "Exporters, buyers, financial institutions, inspection firms, and regulatory bodies are aligned on requirements, timelines, and qualification standards before a corridor moves forward.",
    },
    {
        number: "04",
        title: "Corridor Intelligence",
        description:
            "Research, risk mapping, and counterparty data inform governance decisions. Intelligence supports coordination — it does not constitute advice, certification, or endorsement.",
    },
    {
        number: "05",
        title: "Governance Oversight",
        description:
            "SWAQAR's governance framework applies to every corridor decision. No corridor proceeds without passing the governance review gate.",
    },
    {
        number: "06",
        title: "Execution Readiness",
        description:
            "A corridor is confirmed ready for pilot activation only when all five preceding coordination functions have been completed and governance-reviewed.",
    },
] as const;

export default function CoordinationPillars() {
    return (
        <section
            id="what-swaqar-coordinates"
            aria-labelledby="pillars-heading"
            className="swaqar-section bg-swaqar-surface"
        >
            <div className="swaqar-container">

                {/* ── Section header ─────────────────────────────────────────── */}
                <div className="mb-14 max-w-3xl">
                    <span className="block text-[10px] tracking-[0.25em] text-swaqar-gold uppercase font-bold mb-3">
                        Coordination Functions
                    </span>
                    <h2 id="pillars-heading" className="text-swaqar-heading">
                        What SWAQAR Coordinates
                    </h2>
                    <p className="text-swaqar-text mt-3 text-base leading-relaxed">
                        SWAQAR Group coordinates six institutional functions across every
                        candidate corridor. Each function must be completed before a corridor
                        can be considered for pilot activation. SWAQAR coordinates — licensed
                        operators execute.
                    </p>
                </div>

                {/* ── Six pillar cards ───────────────────────────────────────── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PILLARS.map((pillar, i) => (
                        <div
                            key={`pillar-${i}`}
                            className="border-l-4 border-swaqar-gold bg-white border border-swaqar-border flex flex-col"
                        >
                            {/* Card header */}
                            <div className="px-6 pt-6 pb-4 border-b border-swaqar-gold/20">
                                <span className="text-[10px] tracking-[0.25em] text-swaqar-gold uppercase font-bold">
                                    {pillar.number}
                                </span>
                                <h3 className="text-swaqar-heading text-base font-semibold leading-snug mt-2">
                                    {pillar.title}
                                </h3>
                            </div>

                            {/* Card body */}
                            <div className="px-6 py-5 flex-1">
                                <p className="text-swaqar-text text-sm leading-relaxed">
                                    {pillar.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── Clarification line ─────────────────────────────────────── */}
                <div className="mt-10 border-l-4 border-swaqar-gold pl-6 py-3">
                    <p className="text-swaqar-muted text-sm leading-relaxed">
                        SWAQAR coordinates. Licensed operators execute under their own
                        regulatory authorisations.
                    </p>
                </div>

            </div>
        </section>
    );
}
