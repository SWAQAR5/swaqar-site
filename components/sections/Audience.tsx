const PARTICIPANTS = [
    {
        title: "Verified Suppliers",
        description:
            "Export-ready businesses with documented capacity and verified compliance.",
    },
    {
        title: "Qualified Buyers",
        description:
            "Entities sourcing internationally through structured procurement processes.",
    },
    {
        title: "Strategic Investors",
        description:
            "Capital partners supporting structured trade and corridor expansion.",
    },
    {
        title: "Institutional Partners",
        description:
            "Banks, agencies, and bodies enabling cross-border coordination.",
    },
] as const;

export default function Audience() {
    return (
        <section
            id="who-this-is-for"
            aria-labelledby="audience-heading"
            className="swaqar-section swaqar-container"
        >
            <div className="mb-12 max-w-2xl">
                <h2 id="audience-heading" className="text-swaqar-text">
                    Who This System Is For
                </h2>
                <p className="text-swaqar-muted mt-3 text-base leading-relaxed">
                    Access is limited to structured participants in cross-border trade.
                </p>
            </div>

            {/* auto-rows-fr ensures all cards are equal height */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr gap-px bg-swaqar-gold/30">
                {PARTICIPANTS.map((p, i) => (
                    <div
                        key={`participant-${i}`}
                        className="bg-swaqar-bg p-7 flex flex-col gap-3 min-h-[180px]"
                    >
                        <span
                            aria-hidden="true"
                            className="block w-2 h-2 bg-swaqar-gold mb-2"
                        />
                        <h3 className="text-swaqar-text text-lg font-semibold leading-tight">
                            {p.title}
                        </h3>
                        <p className="text-swaqar-muted text-sm leading-relaxed">
                            {p.description}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-10 flex items-center gap-3 border-l-2 border-swaqar-error pl-4 py-2">
                <span aria-hidden="true" className="text-swaqar-error font-bold">
                    ✖
                </span>
                <p className="text-swaqar-error text-sm font-semibold tracking-wide">
                    Unverified participants are not admitted into the system.
                </p>
            </div>
        </section>
    );
}