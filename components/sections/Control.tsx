// ─────────────────────────────────────────────────────────────
// SECTION 4 — CONTROL (ACCEPT vs REJECT)
// Source: SWAQAR Website Blueprint (LOCKED)
//
// "MOST IMPORTANT" section per visual specification.
// This is where SWAQAR's category becomes undeniable:
// trust is engineered through visible decisions.
//
// Blueprint specification:
//   - 50/50 split layout (mandatory)
//   - LEFT: green border, ✔ icons, accepted criteria → APPROVED
//   - RIGHT: red border, ✖ icons, rejected criteria → BLOCKED
//   - Subtle surface background per card
//   - Bottom center: 🔒 "Only compliant transactions proceed"
// ─────────────────────────────────────────────────────────────

const ACCEPTED_CRITERIA = [
    "Verified supplier",
    "Complete documentation",
    "Structured payment",
    "Compliant counterparty",
] as const;

const REJECTED_CRITERIA = [
    "Unverified supplier",
    "Incomplete documents",
    "Unclear payment",
    "Sanctioned counterparty",
] as const;

export default function Control() {
    return (
        <section
            id="control"
            aria-labelledby="control-heading"
            className="swaqar-section swaqar-container"
        >
            {/* ───── SECTION HEADER ───── */}
            <div className="mb-14 max-w-3xl">
                <span className="block text-[10px] tracking-[0.25em] text-swaqar-gold uppercase font-bold mb-3">
                    Control & Decision Layer
                </span>
                <h2 id="control-heading" className="text-swaqar-text">
                    Every Transaction Faces a Decision
                </h2>
                <p className="text-swaqar-muted mt-3 text-base leading-relaxed">
                    SWAQAR does not negotiate. Every opportunity is either approved for
                    execution or blocked at entry. There is no middle path.
                </p>
            </div>

            {/* ═══════════ 50/50 SPLIT — ACCEPT vs REJECT ═══════════ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* ───────── LEFT: ACCEPTED ───────── */}
                <ControlColumn
                    status="APPROVED"
                    variant="accepted"
                    headerLabel="Accepted Path"
                    criteria={ACCEPTED_CRITERIA}
                />

                {/* ───────── RIGHT: REJECTED ───────── */}
                <ControlColumn
                    status="BLOCKED"
                    variant="rejected"
                    headerLabel="Rejected Path"
                    criteria={REJECTED_CRITERIA}
                />
            </div>

            {/* ═══════════ BOTTOM CENTER — 🔒 ENFORCEMENT STATEMENT ═══════════ */}
            <div className="mt-10 flex justify-center">
                <div className="inline-flex items-center gap-3 border border-swaqar-gold bg-swaqar-bg px-6 py-4">
                    <span
                        aria-hidden="true"
                        className="text-swaqar-gold text-base font-bold"
                    >
                        ▣
                    </span>
                    <span className="text-swaqar-text text-sm font-semibold tracking-[0.15em] uppercase">
                        Only compliant transactions proceed
                    </span>
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────
// Sub-component: Control Column
// Renders one side of the 50/50 split (accepted or rejected)
// ─────────────────────────────────────────────────────────────
type ControlColumnProps = {
    status: "APPROVED" | "BLOCKED";
    variant: "accepted" | "rejected";
    headerLabel: string;
    criteria: readonly string[];
};

function ControlColumn({
    status,
    variant,
    headerLabel,
    criteria,
}: ControlColumnProps) {
    const isAccepted = variant === "accepted";

    // Variant-specific tokens — each side has distinct semantic color
    const borderColor = isAccepted ? "border-swaqar-success" : "border-swaqar-error";
    const accentColor = isAccepted ? "text-swaqar-success" : "text-swaqar-error";
    const icon = isAccepted ? "✔" : "✖";
    const arrowText = isAccepted ? "Approved for execution" : "Rejected at entry";

    return (
        <div
            className={`border-l-4 ${borderColor} bg-swaqar-surface flex flex-col`}
        >
            {/* ───── COLUMN HEADER ───── */}
            <div className="px-6 pt-6 pb-4 border-b border-swaqar-gold/20">
                <div className="flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.25em] text-swaqar-muted uppercase font-medium">
                        {headerLabel}
                    </span>
                    <span className={`${accentColor} text-lg font-bold`}>{icon}</span>
                </div>
            </div>

            {/* ───── CRITERIA LIST ───── */}
            <ul className="px-6 py-6 flex flex-col gap-4 flex-1">
                {criteria.map((item, i) => (
                    <li
                        key={`${variant}-${i}`}
                        className="flex items-start gap-3"
                    >
                        <span
                            aria-hidden="true"
                            className={`${accentColor} font-bold text-base leading-tight mt-0.5`}
                        >
                            {icon}
                        </span>
                        <span className="text-swaqar-text text-base leading-relaxed">
                            {item}
                        </span>
                    </li>
                ))}
            </ul>

            {/* ───── DECISION OUTCOME ───── */}
            <div className="px-6 py-5 border-t border-swaqar-gold/20 bg-swaqar-bg/50">
                <div className="flex flex-col gap-2">
                    <span className="text-swaqar-muted text-[10px] tracking-[0.2em] uppercase">
                        Outcome
                    </span>
                    <div className="flex items-center gap-3">
                        <span aria-hidden="true" className={`${accentColor} text-lg`}>
                            ↓
                        </span>
                        <span
                            className={`${accentColor} text-xl font-bold tracking-[0.2em] uppercase`}
                        >
                            {status}
                        </span>
                    </div>
                    <span className="text-swaqar-muted text-xs mt-1">
                        {arrowText}
                    </span>
                </div>
            </div>
        </div>
    );
}