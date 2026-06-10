const ARMS = [
    {
        number: "01",
        name: "SWAQAR Corridors of Trust",
        description:
            "The primary coordination arm. Governs corridor qualification, verification governance, documentation alignment, and stakeholder synchronisation across Africa ⇄ Middle East ⇄ Asia.",
        status: "Foundation stage — governance architecture under development.",
        stage: "foundation",
    },
    {
        number: "02",
        name: "SWAQAR Intelligence",
        description:
            "Corridor intelligence, risk mapping, counterparty research, and institutional data to support verification and governance decisions.",
        status: "Capability under development. Not yet operational.",
        stage: "future",
    },
    {
        number: "03",
        name: "SWAQAR Digital Systems",
        description:
            "Technology infrastructure to support coordination, documentation alignment, and institutional record-keeping. Manual-first approach until governance processes are standardised.",
        status: "Under development. No proprietary platform operational.",
        stage: "future",
    },
    {
        number: "04",
        name: "SWAQAR Capital & Trade Finance Coordination",
        description:
            "Coordination support for trade finance structures between counterparties and licensed financial institutions. SWAQAR does not provide, hold, or guarantee any financial instruments.",
        status: "Future capability — subject to counsel-validated legal and regulatory review before activation.",
        stage: "future",
    },
    {
        number: "05",
        name: "SWAQAR Infrastructure & Logistics Coordination",
        description:
            "Coordination with licensed logistics operators and infrastructure partners. SWAQAR does not own, operate, or manage any logistics or freight infrastructure.",
        status: "Future capability — non-operating coordination role only.",
        stage: "future",
    },
    {
        number: "06",
        name: "SWAQAR Institutional Advisory",
        description:
            "Advisory coordination supporting corridor participants in governance readiness, verification preparation, and institutional alignment.",
        status: "Future capability — not yet active.",
        stage: "future",
    },
] as const;

export default function StrategicArms() {
    return (
        <section
            id="strategic-arms"
            aria-labelledby="strategic-arms-heading"
            className="swaqar-section bg-swaqar-surface/30"
        >
            <div className="swaqar-container">

                {/* ── Section header ─────────────────────────────────────────── */}
                <div className="mb-14 max-w-3xl">
                    <span className="block text-[10px] tracking-[0.25em] text-swaqar-gold uppercase font-bold mb-3">
                        Future Institutional Architecture
                    </span>
                    <h2 id="strategic-arms-heading" className="text-swaqar-heading">
                        Strategic Architecture
                    </h2>
                    <p className="text-swaqar-muted mt-3 text-base leading-relaxed">
                        SWAQAR Group is being built as a multi-arm institutional coordination
                        structure. The arms below represent the intended future architecture.
                        They are not currently operational. Each arm will be activated through
                        a governance-ratified process as the institution matures.
                    </p>
                </div>

                {/* ── Six arm cards ──────────────────────────────────────────── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ARMS.map((arm, i) => (
                        <div
                            key={`arm-${i}`}
                            className="border-l-4 border-swaqar-gold bg-white border border-swaqar-border flex flex-col"
                        >
                            {/* Card header */}
                            <div className="px-6 pt-6 pb-4 border-b border-swaqar-gold/20">
                                <span className="text-[10px] tracking-[0.25em] text-swaqar-gold uppercase font-bold">
                                    Arm {arm.number}
                                </span>
                                <h3 className="text-swaqar-heading text-base font-semibold leading-snug mt-2">
                                    {arm.name}
                                </h3>
                            </div>

                            {/* Card body */}
                            <div className="px-6 py-5 flex-1">
                                <p className="text-swaqar-text text-sm leading-relaxed">
                                    {arm.description}
                                </p>
                            </div>

                            {/* Status footer */}
                            <div className="px-6 py-4 border-t border-swaqar-gold/20 flex items-start gap-3">
                                <span
                                    aria-hidden="true"
                                    className={`text-xs font-bold mt-0.5 flex-shrink-0 ${
                                        arm.stage === "foundation"
                                            ? "text-swaqar-gold"
                                            : "text-swaqar-muted"
                                    }`}
                                >
                                    {arm.stage === "foundation" ? "▣" : "○"}
                                </span>
                                <p
                                    className={`text-xs leading-relaxed ${
                                        arm.stage === "foundation"
                                            ? "text-swaqar-gold"
                                            : "text-swaqar-muted"
                                    }`}
                                >
                                    {arm.status}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── Closing institutional note ─────────────────────────────── */}
                <div className="mt-10 border-l-4 border-swaqar-gold pl-6 py-3">
                    <div className="flex flex-col gap-2">
                        <span className="text-[10px] tracking-[0.25em] text-swaqar-gold uppercase font-bold">
                            Institutional Boundary
                        </span>
                        <p className="text-swaqar-text text-sm leading-relaxed">
                            All strategic arms are subject to governance-ratified activation.
                            No arm operates beyond its confirmed institutional mandate.
                            SWAQAR Group does not trade, broker, custody funds, provide escrow,
                            operate logistics, or function as a marketplace in any arm.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
