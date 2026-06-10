const ACTIVATED = [
    "Governance Frameworks Established",
    "Institutional Architecture",
    "Verification Architecture",
    "Partner Qualification Frameworks",
    "Corridor Intelligence Capability",
    "Legal & Compliance Preparation",
] as const;

const NOT_YET_ACTIVATED = [
    "Brokerage Operations",
    "Escrow Services",
    "Logistics Operations",
    "Marketplace Functionality",
    "Live Corridor Execution",
] as const;

export default function Phase1Reality() {
    return (
        <section
            id="phase-1-focus"
            aria-labelledby="phase1-heading"
            className="swaqar-section bg-swaqar-surface"
        >
            <div className="swaqar-container">

                {/* ── Section header ─────────────────────────────────────────── */}
                <div className="mb-14 max-w-3xl">
                    <span className="block text-[10px] tracking-[0.25em] text-swaqar-gold uppercase font-bold mb-3">
                        Current Institutional Stage
                    </span>
                    <h2 id="phase1-heading" className="text-swaqar-heading">
                        Phase 1 — Foundation Stage
                    </h2>
                    <p className="text-swaqar-text mt-3 text-base leading-relaxed">
                        Phase 1 is focused on governance, verification, institutional alignment,
                        and corridor readiness. No brokerage, custody, logistics execution, or
                        marketplace operations are active.
                    </p>
                </div>

                {/* ── Two-column status grid ──────────────────────────────────── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* LEFT — Activated */}
                    <div className="border-l-4 border-swaqar-gold bg-white flex flex-col">
                        <div className="px-6 pt-6 pb-4 border-b border-swaqar-gold/20 flex items-center justify-between">
                            <span className="text-[10px] tracking-[0.25em] text-swaqar-muted uppercase font-medium">
                                Status
                            </span>
                            <div className="flex items-center gap-2">
                                <span aria-hidden="true" className="text-swaqar-gold font-bold text-sm">✔</span>
                                <span className="text-[10px] tracking-[0.25em] text-swaqar-gold uppercase font-bold">
                                    Foundation Elements Established
                                </span>
                            </div>
                        </div>
                        <ul className="px-6 py-5 flex flex-col divide-y divide-swaqar-gold/10">
                            {ACTIVATED.map((item, i) => (
                                <li
                                    key={`activated-${i}`}
                                    className="flex items-center gap-4 py-3.5 first:pt-0 last:pb-0"
                                >
                                    <span
                                        aria-hidden="true"
                                        className="text-swaqar-gold font-bold text-sm leading-none flex-shrink-0 w-4"
                                    >
                                        ✔
                                    </span>
                                    <span className="text-swaqar-heading text-sm font-medium leading-snug">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* RIGHT — Not Yet Activated */}
                    <div className="border-l-4 border-swaqar-text/20 bg-white flex flex-col">
                        <div className="px-6 pt-6 pb-4 border-b border-swaqar-gold/20 flex items-center justify-between">
                            <span className="text-[10px] tracking-[0.25em] text-swaqar-muted uppercase font-medium">
                                Status
                            </span>
                            <div className="flex items-center gap-2">
                                <span aria-hidden="true" className="text-swaqar-muted font-bold text-sm">○</span>
                                <span className="text-[10px] tracking-[0.25em] text-swaqar-muted uppercase font-bold">
                                    Future Capabilities (Not Active)
                                </span>
                            </div>
                        </div>
                        <ul className="px-6 py-5 flex flex-col divide-y divide-swaqar-gold/10">
                            {NOT_YET_ACTIVATED.map((item, i) => (
                                <li
                                    key={`pending-${i}`}
                                    className="flex items-center gap-4 py-3.5 first:pt-0 last:pb-0"
                                >
                                    <span
                                        aria-hidden="true"
                                        className="text-swaqar-muted font-bold text-sm leading-none flex-shrink-0 w-4"
                                    >
                                        ○
                                    </span>
                                    <span className="text-swaqar-text text-sm font-medium leading-snug">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* ── Closing statement ──────────────────────────────────────── */}
                <div className="mt-10 border-l-4 border-swaqar-gold pl-6 py-3">
                    <div className="flex flex-col gap-2">
                        <span className="text-[10px] tracking-[0.25em] text-swaqar-gold uppercase font-bold">
                            Institutional Position
                        </span>
                        <div className="flex flex-col gap-1 mt-1">
                            <p className="text-swaqar-heading text-lg md:text-xl font-medium leading-snug">
                                Trust before{" "}
                                <span className="text-swaqar-gold font-semibold">scale.</span>
                            </p>
                            <p className="text-swaqar-heading text-lg md:text-xl font-medium leading-snug">
                                Verification before{" "}
                                <span className="text-swaqar-gold font-semibold">volume.</span>
                            </p>
                            <p className="text-swaqar-heading text-lg md:text-xl font-medium leading-snug">
                                Governance before{" "}
                                <span className="text-swaqar-gold font-semibold">growth.</span>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
