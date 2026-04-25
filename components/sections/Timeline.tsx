// ─────────────────────────────────────────────────────────────
// SECTION 5 — REAL TRANSACTION (TIMELINE)
//
// IDs: #real-transaction (semantic) + #execution (navbar alias)
// Both anchors land here.
// ─────────────────────────────────────────────────────────────

const TIMELINE_STEPS = [
    {
        label: "Supplier Verified",
        detail: "Identity, license, and capacity confirmed",
        duration: "2–4 days",
    },
    {
        label: "Documents Checked",
        detail: "Origin, compliance, and regulatory clearance",
        duration: "3–5 days",
    },
    {
        label: "Payment Structured",
        detail: "Bank/escrow framework agreed and confirmed",
        duration: "5–7 days",
    },
    {
        label: "Execution Approved",
        detail: "Logistics partners engaged, shipment coordinated",
        duration: "2–7 days",
    },
    {
        label: "Delivery Completed",
        detail: "Settlement executed, transaction closed and recorded",
        duration: "1–3 days",
    },
] as const;

export default function Timeline() {
    return (
        <section
            id="real-transaction"
            aria-labelledby="timeline-heading"
            className="swaqar-section bg-swaqar-surface/30"
        >
            {/* Invisible alias anchor — lets navbar's #execution land here */}
            <span id="execution" aria-hidden="true" className="sr-only" />

            <div className="swaqar-container">
                {/* ───── SECTION HEADER ───── */}
                <div className="mb-14 max-w-3xl">
                    <span className="block text-[10px] tracking-[0.25em] text-swaqar-gold uppercase font-bold mb-3">
                        Real Transaction Lifecycle
                    </span>
                    <h2 id="timeline-heading" className="text-swaqar-text">
                        What an Actual Transaction Looks Like
                    </h2>
                    <p className="text-swaqar-muted mt-3 text-base leading-relaxed">
                        Every approved opportunity moves through five validated stages.
                        Each step is documented, time-bound, and gated.
                    </p>
                </div>

                {/* ═══════════ VERTICAL TIMELINE ═══════════ */}
                <div className="max-w-3xl mx-auto">
                    <ol
                        aria-label="Transaction lifecycle stages"
                        className="relative"
                    >
                        {TIMELINE_STEPS.map((step, i) => (
                            <TimelineStep
                                key={`step-${i}`}
                                index={i + 1}
                                label={step.label}
                                detail={step.detail}
                                duration={step.duration}
                                isLast={i === TIMELINE_STEPS.length - 1}
                            />
                        ))}
                    </ol>
                </div>

                {/* ═══════════ CYCLE CAPTION ═══════════ */}
                <div className="mt-14 flex justify-center">
                    <div className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 border border-swaqar-gold bg-swaqar-bg px-6 py-4">
                        <div className="flex items-center gap-3">
                            <span
                                aria-hidden="true"
                                className="text-swaqar-gold text-base font-bold"
                            >
                                ◷
                            </span>
                            <span className="text-swaqar-gold text-[10px] tracking-[0.25em] uppercase font-bold">
                                Typical Cycle
                            </span>
                        </div>
                        <div className="hidden sm:block w-px h-6 bg-swaqar-gold/40" />
                        <span className="text-swaqar-text text-sm font-medium">
                            2–4 weeks depending on transaction complexity
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────
// Sub-component: Single timeline step
// ─────────────────────────────────────────────────────────────
type TimelineStepProps = {
    index: number;
    label: string;
    detail: string;
    duration: string;
    isLast: boolean;
};

function TimelineStep({
    index,
    label,
    detail,
    duration,
    isLast,
}: TimelineStepProps) {
    return (
        <li className="relative flex gap-6 pb-10 last:pb-0">
            {/* ───── LEFT: Node + Connecting Line ───── */}
            <div className="relative flex flex-col items-center flex-shrink-0">
                <div className="relative z-10 flex items-center justify-center w-10 h-10 bg-swaqar-bg border border-swaqar-gold">
                    <span
                        aria-hidden="true"
                        className="block w-3 h-3 bg-swaqar-gold"
                    />
                </div>

                {!isLast && (
                    <span
                        aria-hidden="true"
                        className="absolute top-10 left-1/2 -translate-x-1/2 w-px bg-swaqar-gold"
                        style={{ height: "calc(100% - 2.5rem)" }}
                    />
                )}
            </div>

            {/* ───── RIGHT: Step Content ───── */}
            <div className="flex-1 pt-1.5">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 flex-wrap">
                        <span className="text-swaqar-muted text-[10px] tracking-[0.25em] uppercase font-medium">
                            Step {index}
                        </span>
                        <span className="block w-1 h-1 bg-swaqar-muted" aria-hidden="true" />
                        <span className="text-swaqar-success text-xs font-bold tracking-wider">
                            ✔ Validated
                        </span>
                        <span className="block w-1 h-1 bg-swaqar-muted" aria-hidden="true" />
                        <span className="text-swaqar-muted text-[10px] tracking-wider uppercase">
                            {duration}
                        </span>
                    </div>

                    <h3 className="text-swaqar-text text-lg font-semibold leading-tight">
                        {label}
                    </h3>

                    <p className="text-swaqar-muted text-sm leading-relaxed">
                        {detail}
                    </p>
                </div>
            </div>
        </li>
    );
}