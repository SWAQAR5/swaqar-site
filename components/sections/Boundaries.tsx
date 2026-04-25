const NOT_BOUNDARIES = [
    {
        boundary: "Own or trade goods",
        detail: "SWAQAR holds no inventory, takes no title, transfers no goods.",
    },
    {
        boundary: "Hold or manage funds",
        detail: "SWAQAR is non-custodial. Capital flows through licensed channels only.",
    },
    {
        boundary: "Operate logistics",
        detail: "SWAQAR coordinates logistics partners — it does not execute transport.",
    },
    {
        boundary: "Act as buyer or seller",
        detail: "SWAQAR is never a counterparty to a transaction it coordinates.",
    },
] as const;

const IS_FUNCTIONS = [
    {
        function: "Verifies counterparties",
        detail: "Identity, license, capacity, and compliance validation.",
    },
    {
        function: "Structures transactions",
        detail: "Designs commercial, financial, and execution frameworks.",
    },
    {
        function: "Coordinates execution",
        detail: "Orchestrates verified parties through structured stages.",
    },
    {
        function: "Governs decisions",
        detail: "Enforces control gates that determine what proceeds.",
    },
] as const;

export default function Boundaries() {
    return (
        <section
            id="boundaries"
            aria-labelledby="boundaries-heading"
            className="swaqar-section bg-swaqar-surface/30"
        >
            <div className="swaqar-container">
                <div className="mb-14 max-w-3xl">
                    <span className="block text-[10px] tracking-[0.25em] text-swaqar-gold uppercase font-bold mb-3">
                        System Boundaries
                    </span>
                    <h2 id="boundaries-heading" className="text-swaqar-text">
                        What SWAQAR Is — and What It Is Not
                    </h2>
                    <p className="text-swaqar-muted mt-3 text-base leading-relaxed">
                        Clarity removes risk. SWAQAR's authority depends on what it
                        refuses to do, as much as what it does.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <BoundaryColumn
                        variant="not"
                        headerLabel="Not Permitted"
                        heading="SWAQAR does not"
                        items={NOT_BOUNDARIES.map((b) => ({
                            label: b.boundary,
                            detail: b.detail,
                        }))}
                    />

                    <BoundaryColumn
                        variant="is"
                        headerLabel="System Function"
                        heading="SWAQAR does"
                        items={IS_FUNCTIONS.map((f) => ({
                            label: f.function,
                            detail: f.detail,
                        }))}
                    />
                </div>

                {/* PATCH #9: COMPLIANCE STATEMENT — reduced gold emphasis.
            Previously the entire second sentence was gold (too much).
            Now only the key clause "Risk is filtered before execution"
            is gold-emphasized. Rest is white. */}
                <div className="mt-10 border-l-4 border-swaqar-gold pl-6 py-3">
                    <div className="flex flex-col gap-3">
                        <span className="text-[10px] tracking-[0.25em] text-swaqar-gold uppercase font-bold">
                            Compliance Position
                        </span>
                        <p className="text-swaqar-text text-base md:text-lg font-medium leading-relaxed">
                            SWAQAR is a coordination infrastructure, not a counterparty.{" "}
                            <span className="text-swaqar-gold font-semibold">
                                Risk is filtered before execution
                            </span>
                            {" "}— never absorbed after.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

type BoundaryColumnProps = {
    variant: "not" | "is";
    headerLabel: string;
    heading: string;
    items: readonly { label: string; detail: string }[];
};

function BoundaryColumn({
    variant,
    headerLabel,
    heading,
    items,
}: BoundaryColumnProps) {
    const isNot = variant === "not";
    const accentColor = isNot ? "text-swaqar-error" : "text-swaqar-success";
    const borderColor = isNot ? "border-swaqar-error" : "border-swaqar-success";
    const icon = isNot ? "✖" : "✔";

    return (
        <div className={`border-l-4 ${borderColor} bg-swaqar-bg flex flex-col`}>
            <div className="px-6 pt-6 pb-4 border-b border-swaqar-gold/20">
                <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] tracking-[0.25em] text-swaqar-muted uppercase font-medium">
                        {headerLabel}
                    </span>
                    <span className={`${accentColor} text-lg font-bold`}>{icon}</span>
                </div>
                <h3 className="text-swaqar-text text-xl font-semibold tracking-tight">
                    {heading}
                </h3>
            </div>

            <ul className="px-6 py-5 flex flex-col flex-1 divide-y divide-swaqar-gold/10">
                {items.map((item, i) => (
                    <li
                        key={`${variant}-${i}`}
                        className="flex items-start gap-4 py-4 first:pt-0 last:pb-0"
                    >
                        <span
                            aria-hidden="true"
                            className={`${accentColor} font-bold text-base leading-tight mt-0.5 w-4 flex-shrink-0`}
                        >
                            {icon}
                        </span>

                        <div className="flex flex-col gap-1 flex-1">
                            <span className="text-swaqar-text text-base font-semibold leading-tight">
                                {item.label}
                            </span>
                            <span className="text-swaqar-muted text-sm leading-relaxed">
                                {item.detail}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}