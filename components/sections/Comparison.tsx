const COMPARISON_ROWS = [
    {
        dimension: "Trust",
        traditional: "Trust assumed",
        swaqar: "Trust verified",
    },
    {
        dimension: "Execution",
        traditional: "Informal deals",
        swaqar: "Structured execution",
    },
    {
        dimension: "Risk",
        traditional: "High risk",
        swaqar: "Controlled system",
    },
    {
        dimension: "Outcomes",
        traditional: "Unclear outcomes",
        swaqar: "Governed flow",
    },
    {
        dimension: "Decisions",
        traditional: "Individual judgment",
        swaqar: "Control-gate enforcement",
    },
] as const;

export default function Comparison() {
    return (
        <section
            id="comparison"
            aria-labelledby="comparison-heading"
            className="swaqar-section swaqar-container"
        >
            <div className="mb-14 max-w-3xl">
                <span className="block text-[10px] tracking-[0.25em] text-swaqar-gold uppercase font-bold mb-3">
                    Category Positioning
                </span>
                <h2 id="comparison-heading" className="text-swaqar-text">
                    Traditional Trade vs SWAQAR
                </h2>
                <p className="text-swaqar-muted mt-3 text-base leading-relaxed">
                    Cross-border trade has historically operated on assumed trust and
                    informal coordination. SWAQAR replaces that with a verified,
                    structured system.
                </p>
            </div>

            {/* PATCH #2: DESKTOP — original 3-column table layout */}
            <div className="hidden md:block border border-swaqar-gold/30 overflow-hidden">
                {/* TABLE HEADER */}
                <div className="grid grid-cols-12 bg-swaqar-bg border-b border-swaqar-gold/30">
                    <div className="col-span-3 px-5 py-4 border-r border-swaqar-gold/20">
                        <span className="text-[10px] tracking-[0.25em] text-swaqar-muted uppercase font-medium">
                            Dimension
                        </span>
                    </div>

                    <div className="col-span-4 px-5 py-4 border-r border-swaqar-gold/20">
                        <div className="flex items-center gap-2">
                            <span aria-hidden="true" className="text-swaqar-error font-bold text-sm">
                                ✖
                            </span>
                            <span className="text-[10px] tracking-[0.25em] text-swaqar-error uppercase font-bold">
                                Traditional Trade
                            </span>
                        </div>
                    </div>

                    <div className="col-span-5 px-5 py-4 bg-swaqar-surface border-l-2 border-swaqar-gold">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span aria-hidden="true" className="text-swaqar-success font-bold text-sm">
                                    ✔
                                </span>
                                <span className="text-[10px] tracking-[0.25em] text-swaqar-gold uppercase font-bold">
                                    SWAQAR System
                                </span>
                            </div>
                            <span aria-hidden="true" className="block w-2 h-2 bg-swaqar-gold" />
                        </div>
                    </div>
                </div>

                {/* TABLE ROWS */}
                <div role="table" aria-label="Traditional trade vs SWAQAR comparison">
                    {COMPARISON_ROWS.map((row, i) => (
                        <div
                            key={`row-${i}`}
                            role="row"
                            className={`grid grid-cols-12 ${i < COMPARISON_ROWS.length - 1 ? "border-b border-swaqar-gold/20" : ""
                                }`}
                        >
                            <div
                                role="cell"
                                className="col-span-3 px-5 py-5 border-r border-swaqar-gold/20 bg-swaqar-bg flex items-center"
                            >
                                <span className="text-swaqar-gold text-xs font-bold tracking-wider uppercase">
                                    {row.dimension}
                                </span>
                            </div>

                            <div
                                role="cell"
                                className="col-span-4 px-5 py-5 border-r border-swaqar-gold/20 bg-swaqar-bg flex items-center"
                            >
                                <div className="flex items-start gap-3">
                                    <span
                                        aria-hidden="true"
                                        className="text-swaqar-error font-bold text-sm leading-tight mt-0.5 flex-shrink-0"
                                    >
                                        ✖
                                    </span>
                                    <span className="text-swaqar-muted text-sm md:text-base leading-relaxed">
                                        {row.traditional}
                                    </span>
                                </div>
                            </div>

                            <div
                                role="cell"
                                className="col-span-5 px-5 py-5 bg-swaqar-surface border-l-2 border-swaqar-gold flex items-center"
                            >
                                <div className="flex items-start gap-3">
                                    <span
                                        aria-hidden="true"
                                        className="text-swaqar-success font-bold text-sm leading-tight mt-0.5 flex-shrink-0"
                                    >
                                        ✔
                                    </span>
                                    <span className="text-swaqar-text text-sm md:text-base font-semibold leading-relaxed">
                                        {row.swaqar}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* PATCH #2: MOBILE — stacked cards, one per dimension.
          Each card shows: Dimension label → Traditional row → SWAQAR row.
          Eliminates table-on-narrow-screen wrapping issues. */}
            <div className="md:hidden border border-swaqar-gold/30">
                <div className="flex flex-col">
                    {COMPARISON_ROWS.map((row, i) => (
                        <div
                            key={`m-row-${i}`}
                            className={`bg-swaqar-bg ${i < COMPARISON_ROWS.length - 1 ? "border-b border-swaqar-gold/20" : ""
                                }`}
                        >
                            {/* Dimension header */}
                            <div className="px-5 py-3 bg-swaqar-surface/50 border-b border-swaqar-gold/15">
                                <span className="text-swaqar-gold text-[11px] font-bold tracking-[0.2em] uppercase">
                                    {row.dimension}
                                </span>
                            </div>

                            {/* Traditional row */}
                            <div className="px-5 py-4 flex items-start gap-3 border-b border-swaqar-gold/10">
                                <span
                                    aria-hidden="true"
                                    className="text-swaqar-error font-bold text-sm leading-tight mt-0.5 flex-shrink-0 w-4"
                                >
                                    ✖
                                </span>
                                <div className="flex flex-col gap-0.5 flex-1">
                                    <span className="text-[9px] tracking-[0.2em] text-swaqar-error uppercase font-bold">
                                        Traditional
                                    </span>
                                    <span className="text-swaqar-muted text-sm">
                                        {row.traditional}
                                    </span>
                                </div>
                            </div>

                            {/* SWAQAR row — elevated background */}
                            <div className="px-5 py-4 flex items-start gap-3 bg-swaqar-surface border-l-2 border-swaqar-gold">
                                <span
                                    aria-hidden="true"
                                    className="text-swaqar-success font-bold text-sm leading-tight mt-0.5 flex-shrink-0 w-4"
                                >
                                    ✔
                                </span>
                                <div className="flex flex-col gap-0.5 flex-1">
                                    <span className="text-[9px] tracking-[0.2em] text-swaqar-gold uppercase font-bold">
                                        SWAQAR
                                    </span>
                                    <span className="text-swaqar-text text-sm font-semibold">
                                        {row.swaqar}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-10 border-l-4 border-swaqar-gold bg-swaqar-bg px-6 py-5">
                <div className="flex flex-col gap-2">
                    <span className="text-[10px] tracking-[0.25em] text-swaqar-gold uppercase font-bold">
                        Category Position
                    </span>
                    <p className="text-swaqar-text text-base md:text-lg font-medium leading-relaxed">
                        SWAQAR is not a faster version of traditional trade.{" "}
                        <span className="text-swaqar-gold font-semibold">
                            It is a different category — trade infrastructure with engineered trust.
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
}