const ENDPOINTS = {
    start: "Supply",
    end: "Demand",
} as const;

const GATED_STAGES = [
    { label: "Verification", gate: "Identity & Compliance" },
    { label: "Structuring", gate: "Terms & Payment" },
    { label: "Execution", gate: "Coordination" },
] as const;

const ENFORCEMENT_RULES = [
    "No verification → no progression",
    "No compliance → no execution",
    "No structure → no transaction",
] as const;

export default function SystemFlow() {
    return (
        <section
            id="system-flow"
            aria-labelledby="systemflow-heading"
            className="swaqar-section bg-swaqar-surface/30"
        >
            <div className="swaqar-container">
                <div className="mb-14 max-w-3xl">
                    <span className="block text-[10px] tracking-[0.25em] text-swaqar-gold uppercase font-bold mb-3">
                        Controlled Coordination Layer
                    </span>
                    <h2 id="systemflow-heading" className="text-swaqar-text">
                        How a Transaction Moves Through SWAQAR
                    </h2>
                    <p className="text-swaqar-muted mt-3 text-base leading-relaxed">
                        Every stage is validated and approved before progression. Supply
                        does not reach demand without passing every gate.
                    </p>
                </div>

                {/* DESKTOP: HORIZONTAL FLOW */}
                <div className="hidden lg:block">
                    <div className="border border-swaqar-gold bg-swaqar-bg p-10">
                        <div className="flex items-start justify-between">
                            <Endpoint label={ENDPOINTS.start} align="left" />

                            {GATED_STAGES.map((stage, i) => (
                                <div
                                    key={`stage-${i}`}
                                    className="flex items-start flex-1"
                                >
                                    <div className="flex flex-col items-center flex-1 mt-2.5 px-2">
                                        <div className="flex items-center w-full">
                                            <span className="block h-px w-full bg-swaqar-gold" />
                                            <span className="text-swaqar-gold text-[10px]">▶</span>
                                        </div>
                                        <span className="text-swaqar-success text-[9px] mt-2 font-bold tracking-wider whitespace-nowrap">
                                            ✔ {stage.gate}
                                        </span>
                                    </div>

                                    <div className="flex flex-col items-center gap-2.5 min-w-[100px]">
                                        <span
                                            aria-hidden="true"
                                            className="block w-3.5 h-3.5 bg-swaqar-gold"
                                        />
                                        <span className="text-sm text-swaqar-text font-semibold whitespace-nowrap">
                                            {stage.label}
                                        </span>
                                        <span className="text-[10px] text-swaqar-muted tracking-wider uppercase">
                                            Stage {i + 1}
                                        </span>
                                    </div>
                                </div>
                            ))}

                            <div className="flex flex-col items-center flex-1 mt-2.5 px-2">
                                <div className="flex items-center w-full">
                                    <span className="block h-px w-full bg-swaqar-gold" />
                                    <span className="text-swaqar-gold text-[10px]">▶</span>
                                </div>
                                <span className="text-swaqar-success text-[9px] mt-2 font-bold tracking-wider whitespace-nowrap">
                                    ✔ Cleared
                                </span>
                            </div>

                            <Endpoint label={ENDPOINTS.end} align="right" />
                        </div>
                    </div>
                </div>

                {/* PATCH #7: TABLET / MOBILE — tighter vertical rhythm.
            - py-3 → py-1.5 (gates)
            - py-2 → py-1 (stages)
            - Hidden "STAGE 1/2/3" labels (redundant on mobile)
            - h-5 → h-3 (connecting lines)
            Reduces total mobile diagram height by ~35%. */}
                <div className="lg:hidden">
                    <div className="border border-swaqar-gold bg-swaqar-bg p-5 sm:p-8">
                        <div className="text-center mb-3">
                            <div className="text-[10px] tracking-[0.25em] text-swaqar-muted uppercase mb-1">
                                Origin
                            </div>
                            <div className="text-swaqar-text text-lg font-semibold tracking-wide">
                                {ENDPOINTS.start}
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            {GATED_STAGES.map((stage, i) => (
                                <div key={`m-stage-${i}`} className="w-full max-w-sm">
                                    <div className="flex flex-col items-center py-1.5">
                                        <span className="block w-px h-3 bg-swaqar-gold" />
                                        <span className="text-swaqar-success text-[10px] font-bold tracking-wider mt-1.5">
                                            ✔ {stage.gate}
                                        </span>
                                        <span className="block w-px h-3 bg-swaqar-gold mt-1.5" />
                                        <span className="text-swaqar-gold text-xs">▼</span>
                                    </div>

                                    <div className="flex flex-col items-center gap-1 py-1">
                                        <span
                                            aria-hidden="true"
                                            className="block w-3.5 h-3.5 bg-swaqar-gold"
                                        />
                                        <span className="text-sm text-swaqar-text font-semibold">
                                            {stage.label}
                                        </span>
                                        {/* PATCH #7: Stage labels removed on mobile (redundant) */}
                                    </div>
                                </div>
                            ))}

                            <div className="flex flex-col items-center py-1.5">
                                <span className="block w-px h-3 bg-swaqar-gold" />
                                <span className="text-swaqar-success text-[10px] font-bold tracking-wider mt-1.5">
                                    ✔ Cleared
                                </span>
                                <span className="block w-px h-3 bg-swaqar-gold mt-1.5" />
                                <span className="text-swaqar-gold text-xs">▼</span>
                            </div>
                        </div>

                        <div className="text-center mt-3">
                            <div className="text-[10px] tracking-[0.25em] text-swaqar-muted uppercase mb-1">
                                Destination
                            </div>
                            <div className="text-swaqar-text text-lg font-semibold tracking-wide">
                                {ENDPOINTS.end}
                            </div>
                        </div>
                    </div>
                </div>

                {/* REJECTION BAND */}
                <div className="mt-6 border border-swaqar-error/40 bg-swaqar-bg">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 px-6 py-4">
                        <div className="flex items-center gap-3">
                            <span
                                aria-hidden="true"
                                className="text-swaqar-error font-bold text-base"
                            >
                                ✖
                            </span>
                            <span className="text-swaqar-error text-xs font-bold tracking-[0.2em] uppercase">
                                Failure Path
                            </span>
                        </div>
                        <div className="hidden sm:block w-px h-5 bg-swaqar-error/30" />
                        <p className="text-swaqar-muted text-sm leading-relaxed">
                            Any transaction failing a gate exits the system immediately.
                            No partial execution. No exception handling. No backdoor approval.
                        </p>
                    </div>
                </div>

                {/* ENFORCEMENT RULES */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 auto-rows-fr gap-px bg-swaqar-gold/20">
                    {ENFORCEMENT_RULES.map((rule, i) => (
                        <div
                            key={`rule-${i}`}
                            className="bg-swaqar-bg px-5 py-4 flex items-center gap-3"
                        >
                            <span
                                aria-hidden="true"
                                className="text-swaqar-gold text-sm font-bold"
                            >
                                ▣
                            </span>
                            <span className="text-swaqar-text text-sm font-medium">
                                {rule}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Endpoint({
    label,
    align,
}: {
    label: string;
    align: "left" | "right";
}) {
    return (
        <div
            className={`flex flex-col gap-2 min-w-[100px] ${align === "left" ? "items-start" : "items-end"
                }`}
        >
            <span className="text-[10px] tracking-[0.25em] text-swaqar-muted uppercase">
                {align === "left" ? "Origin" : "Destination"}
            </span>
            <span className="text-swaqar-text text-lg font-bold tracking-wide">
                {label}
            </span>
        </div>
    );
}