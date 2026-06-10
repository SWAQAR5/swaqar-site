const PROBLEMS = [
    {
        number: "01",
        title: "Fragmented Verification",
        lines: [
            "Counterparty identity, licensing, capacity, and compliance are assessed inconsistently across corridors — or not assessed at all. There is no shared institutional standard for who qualifies to participate in cross-border trade at a governance level.",
            "Without consistent verification, institutions cannot establish reliable trust in counterparties, introducing compliance risk and transaction failure before execution begins.",
        ],
        coordination: "SWAQAR coordinates verification standards and qualification methodology across corridor participants.",
    },
    {
        number: "02",
        title: "Documentation Drift",
        lines: [
            "Trade documentation is produced by multiple parties across different jurisdictions without alignment — documents diverge, contradict, or arrive incomplete.",
            "Documentation misalignment cannot be corrected at execution; it must be coordinated in preparation.",
        ],
        coordination: "SWAQAR coordinates documentation alignment across all participants before any execution stage is entered.",
    },
    {
        number: "03",
        title: "Disconnected Stakeholders",
        lines: [
            "Exporters, buyers, investors, financial institutions, and regulatory bodies operate in separate institutional silos with no coordination layer connecting their requirements, timelines, or qualification standards.",
            "Trade corridors require all participants to be synchronised — not merely introduced to one another.",
        ],
        coordination: "SWAQAR coordinates stakeholder synchronisation across the corridor — aligning institutional requirements before execution.",
    },
    {
        number: "04",
        title: "Corridor Trust Gaps",
        lines: [
            "Across Africa ⇄ Middle East ⇄ Asia corridors, no established institutional trust infrastructure exists, requiring counterparties to rebuild confidence from zero on every engagement.",
            "Without verified trust infrastructure, corridors remain fragile, unrepeatable, and inaccessible to institutional capital.",
        ],
        coordination: "SWAQAR is building the governance and verification infrastructure required for trust to be established, recorded, and extended across corridors.",
    },
] as const;

export default function WhySwaqarExists() {
    return (
        <section
            id="why-swaqar-exists"
            aria-labelledby="why-heading"
            className="swaqar-section bg-white"
        >
            <div className="swaqar-container">

                {/* ── Section header ─────────────────────────────────────────── */}
                <div className="mb-14 max-w-3xl">
                    <span className="block text-[10px] tracking-[0.25em] text-swaqar-gold uppercase font-bold mb-3">
                        Why SWAQAR Exists
                    </span>
                    <h2 id="why-heading" className="text-swaqar-heading">
                        The corridor trust gap must be coordinated before it can be scaled.
                    </h2>
                    <p className="text-swaqar-text mt-3 text-base leading-relaxed">
                        Cross-border trade across Africa, the Middle East, and Asia is structurally
                        impeded by four compounding problems. Each one erodes institutional confidence,
                        delays counterparty readiness, and prevents verified transactions from
                        proceeding. SWAQAR Group exists to address these gaps through governance-led
                        coordination — before execution begins.
                    </p>
                </div>

                {/* ── Four problem cards ─────────────────────────────────────── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {PROBLEMS.map((problem, i) => (
                        <div
                            key={`problem-${i}`}
                            className="border-l-4 border-swaqar-gold bg-swaqar-surface flex flex-col"
                        >
                            {/* Card header */}
                            <div className="px-6 pt-6 pb-4 border-b border-swaqar-gold/20">
                                <span className="text-[10px] tracking-[0.25em] text-swaqar-gold uppercase font-bold">
                                    Problem {problem.number}
                                </span>
                                <h3 className="text-swaqar-heading text-lg font-semibold leading-tight mt-2">
                                    {problem.title}
                                </h3>
                            </div>

                            {/* Card body */}
                            <div className="px-6 py-5 flex flex-col gap-3 flex-1">
                                {problem.lines.map((line, j) => (
                                    <p
                                        key={`line-${i}-${j}`}
                                        className="text-swaqar-text text-sm leading-relaxed"
                                    >
                                        {line}
                                    </p>
                                ))}
                            </div>

                            {/* Coordination note */}
                            <div className="px-6 py-4 border-t border-swaqar-gold/20 flex items-start gap-3">
                                <span
                                    aria-hidden="true"
                                    className="text-swaqar-gold text-xs font-bold mt-0.5 flex-shrink-0"
                                >
                                    ▣
                                </span>
                                <p className="text-swaqar-text text-xs leading-relaxed">
                                    {problem.coordination}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── Closing statement ──────────────────────────────────────── */}
                <div className="mt-10 border-l-4 border-swaqar-gold pl-6 py-3">
                    <div className="flex flex-col gap-2">
                        <span className="text-[10px] tracking-[0.25em] text-swaqar-gold uppercase font-bold">
                            Coordination Imperative
                        </span>
                        <p className="text-swaqar-text text-lg md:text-xl font-medium leading-relaxed">
                            These problems require{" "}
                            <span className="text-swaqar-gold font-semibold">
                                governance-led coordination
                            </span>
                            , verified counterparty qualification, and institutional alignment —
                            built before execution, not corrected after.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
