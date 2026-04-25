const STAGES = [
    { label: "Opportunity", gate: null },
    { label: "Verification", gate: "Verified" },
    { label: "Structuring", gate: "Approved" },
    { label: "Execution", gate: "Cleared" },
] as const;

export default function HeroFlow() {
    return (
        <div
            role="img"
            aria-label="SWAQAR controlled coordination layer: Opportunity, Verification, Structuring, Execution. Each gate must approve before progression. Unverified transactions are blocked."
            className="w-full max-w-[560px]"
        >
            <div className="border border-swaqar-gold bg-swaqar-surface">
                {/* PATCH #6: Header label uses shorter text on mobile
            ("CONTROL LAYER" vs "CONTROLLED COORDINATION LAYER")
            to prevent awkward wrap on narrow screens. */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-swaqar-gold/40">
                    <span className="text-[10px] tracking-[0.25em] text-swaqar-muted uppercase font-medium">
                        <span className="hidden sm:inline">Controlled Coordination Layer</span>
                        <span className="sm:hidden">Control Layer</span>
                    </span>
                    <span className="text-[10px] tracking-[0.25em] text-swaqar-gold uppercase font-bold">
                        SWAQAR
                    </span>
                </div>

                {/* DESKTOP: HORIZONTAL FLOW */}
                <div className="hidden lg:block px-6 py-8">
                    <div className="flex items-start justify-between">
                        {STAGES.map((stage, i) => (
                            <div
                                key={`stage-${i}`}
                                className="flex items-start flex-1 last:flex-none"
                            >
                                <div className="flex flex-col items-center gap-2.5 min-w-[72px]">
                                    <span
                                        aria-hidden="true"
                                        className="block w-3 h-3 bg-swaqar-gold"
                                    />
                                    <span className="text-xs text-swaqar-text whitespace-nowrap text-center font-semibold">
                                        {stage.label}
                                    </span>
                                </div>

                                {i < STAGES.length - 1 && (
                                    <div
                                        aria-hidden="true"
                                        className="flex flex-col items-center flex-1 mt-1.5 px-1"
                                    >
                                        <div className="flex items-center w-full">
                                            <span className="block h-px w-full bg-swaqar-gold" />
                                            <span className="text-swaqar-gold text-[10px] leading-none">
                                                ▶
                                            </span>
                                        </div>
                                        <span className="text-swaqar-success text-[9px] mt-1.5 font-bold tracking-wide whitespace-nowrap">
                                            ✔ {STAGES[i + 1].gate}
                                        </span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* MOBILE / TABLET: VERTICAL FLOW */}
                <div className="lg:hidden px-5 py-5">
                    {STAGES.map((stage, i) => (
                        <div key={`m-stage-${i}`}>
                            <div className="flex items-center gap-3">
                                <span
                                    aria-hidden="true"
                                    className="block w-3 h-3 bg-swaqar-gold"
                                />
                                <span className="text-sm text-swaqar-text font-semibold">
                                    {stage.label}
                                </span>
                            </div>
                            {i < STAGES.length - 1 && (
                                <div
                                    aria-hidden="true"
                                    className="flex items-center gap-2 ml-1.5 py-1.5"
                                >
                                    <span className="block w-px h-4 bg-swaqar-gold" />
                                    <span className="text-swaqar-success text-[10px] font-bold tracking-wide">
                                        ✔ {STAGES[i + 1].gate}
                                    </span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* REJECTION FOOTER */}
                <div className="border-t border-swaqar-gold/40 px-5 py-3 bg-swaqar-bg/40">
                    <div className="flex items-center gap-2.5 flex-wrap">
                        <span aria-hidden="true" className="text-swaqar-error font-bold text-sm">
                            ✖
                        </span>
                        <span className="text-swaqar-muted text-xs">Failed verification</span>
                        <span aria-hidden="true" className="text-swaqar-muted text-xs">
                            →
                        </span>
                        <span className="text-swaqar-error text-xs font-bold tracking-[0.15em]">
                            BLOCKED
                        </span>
                    </div>
                </div>
            </div>

            <p className="text-swaqar-muted text-[11px] mt-3 tracking-wide text-center">
                Each stage validated and approved before progression.
            </p>
        </div>
    );
}