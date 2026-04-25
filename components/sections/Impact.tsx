// ─────────────────────────────────────────────────────────────
// SECTION 9 — IMPACT
// Source: SWAQAR Website Blueprint (LOCKED)
//        + Page 7 (Strategic Impact & Economic Value)
//
// Purpose: Show institutional value — economic consequence,
// not just operational cleverness. This is the section that
// converts ministry interest into ministry alignment.
//
// Blueprint specification:
//   4-column grid
//   Each transaction creates:
//     • Verified Flow
//     • Economic Output
//     • Corridor Strength
//     • System Scale
//
// Design extension (institutional grade):
//   - Each card carries: label + operational descriptor + measurable output
//   - Closing strategic statement (from Page 7 final statement)
// ─────────────────────────────────────────────────────────────

const IMPACT_PILLARS = [
    {
        label: "Verified Flow",
        descriptor: "Only validated transactions enter the trade economy.",
        metric: "Transaction success rate",
    },
    {
        label: "Economic Output",
        descriptor:
            "Each completed transaction produces measurable cross-border value.",
        metric: "Trade volume facilitated",
    },
    {
        label: "Corridor Strength",
        descriptor: "Repeated execution reinforces and expands trade pathways.",
        metric: "Corridor maturity index",
    },
    {
        label: "System Scale",
        descriptor:
            "Network effects compound as verified counterparties accumulate.",
        metric: "Cross-border participation",
    },
] as const;

export default function Impact() {
    return (
        <section
            id="impact"
            aria-labelledby="impact-heading"
            className="swaqar-section swaqar-container"
        >
            {/* ───── SECTION HEADER ───── */}
            <div className="mb-14 max-w-3xl">
                <span className="block text-[10px] tracking-[0.25em] text-swaqar-gold uppercase font-bold mb-3">
                    Strategic Impact
                </span>
                <h2 id="impact-heading" className="text-swaqar-text">
                    Each Transaction Creates Compounding Value
                </h2>
                <p className="text-swaqar-muted mt-3 text-base leading-relaxed">
                    SWAQAR is not a single-deal facilitator. Every executed transaction
                    strengthens the broader trade infrastructure — for participants,
                    corridors, and economies.
                </p>
            </div>

            {/* ═══════════ 4-COLUMN IMPACT GRID ═══════════ */}
            <div
                role="list"
                aria-label="SWAQAR impact pillars"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr gap-px bg-swaqar-gold/30"
            >
                {IMPACT_PILLARS.map((pillar, i) => (
                    <ImpactPillar
                        key={`pillar-${i}`}
                        index={i + 1}
                        label={pillar.label}
                        descriptor={pillar.descriptor}
                        metric={pillar.metric}
                    />
                ))}
            </div>

            {/* ═══════════ STRATEGIC STATEMENT ═══════════ */}
            <div className="mt-10 border-l-4 border-swaqar-gold bg-swaqar-surface px-6 py-5">
                <div className="flex flex-col gap-2">
                    <span className="text-[10px] tracking-[0.25em] text-swaqar-gold uppercase font-bold">
                        Strategic Position
                    </span>
                    <p className="text-swaqar-text text-base md:text-lg font-medium leading-relaxed">
                        SWAQAR converts verified transactions into stable, scalable, and
                        measurable cross-border economic output —{" "}
                        <span className="text-swaqar-gold font-semibold">
                            strengthening trade corridors, improving governance, and enabling
                            long-term economic growth.
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────
// Sub-component: Single impact pillar
// ─────────────────────────────────────────────────────────────
type ImpactPillarProps = {
    index: number;
    label: string;
    descriptor: string;
    metric: string;
};

function ImpactPillar({ index, label, descriptor, metric }: ImpactPillarProps) {
    return (
        <div
            role="listitem"
            className="bg-swaqar-bg p-7 flex flex-col gap-5 min-h-[220px]"
        >
            {/* ───── HEADER: Pillar number + node ───── */}
            <div className="flex items-center justify-between">
                <span className="text-swaqar-muted text-[10px] tracking-[0.25em] uppercase font-medium">
                    Pillar {String(index).padStart(2, "0")}
                </span>
                <span
                    aria-hidden="true"
                    className="block w-2.5 h-2.5 bg-swaqar-gold"
                />
            </div>

            {/* ───── LABEL ───── */}
            <h3 className="text-swaqar-text text-lg font-semibold leading-tight">
                {label}
            </h3>

            {/* ───── DESCRIPTOR ───── */}
            <p className="text-swaqar-muted text-sm leading-relaxed flex-1">
                {descriptor}
            </p>

            {/* ───── METRIC FOOTER ───── */}
            <div className="pt-4 border-t border-swaqar-gold/20">
                <div className="flex flex-col gap-1">
                    <span className="text-swaqar-muted text-[9px] tracking-[0.2em] uppercase">
                        Measured By
                    </span>
                    <div className="flex items-center gap-2">
                        <span
                            aria-hidden="true"
                            className="text-swaqar-success text-xs font-bold"
                        >
                            ✔
                        </span>
                        <span className="text-swaqar-text text-xs font-semibold tracking-wide">
                            {metric}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}