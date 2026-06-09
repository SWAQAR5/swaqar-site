const STEPS = [
    {
        number: "01",
        title: "Counterparty Qualification",
        description:
            "Exporters and buyers are assessed through a structured qualification gate covering identity, licensing, capacity, compliance standing, and reputational integrity.",
    },
    {
        number: "02",
        title: "Documentation Alignment",
        description:
            "All trade documentation requirements across the corridor are mapped, reviewed for completeness, and aligned before execution begins.",
    },
    {
        number: "03",
        title: "Licensed Partner Coordination",
        description:
            "Relevant licensed operators — banking institutions, TIC firms, legal counsel, and logistics partners — are identified and coordinated for the corridor.",
    },
    {
        number: "04",
        title: "Governance Review",
        description:
            "The corridor structure, counterparty qualifications, and documentation package are reviewed under SWAQAR's governance framework before any pilot decision is made.",
    },
    {
        number: "05",
        title: "Pilot Readiness Decision",
        description:
            "A governance-ratified decision determines whether the corridor is ready for pilot activation. No execution proceeds without this gate being passed.",
    },
] as const;

export default function CandidateCorridorFlow() {
    return (
        <section
            id="candidate-corridor-flow"
            aria-labelledby="corridor-heading"
            className="swaqar-section bg-swaqar-surface/30"
        >
            <div className="swaqar-container">

                {/* ── Section header ─────────────────────────────────────────── */}
                <div className="mb-14 max-w-3xl">
                    <span className="block text-[10px] tracking-[0.25em] text-swaqar-gold uppercase font-bold mb-3">
                        Candidate Corridor Preparation
                    </span>
                    <h2 id="corridor-heading" className="text-swaqar-text">
                        Five steps determine whether a corridor is ready for pilot activation.
                    </h2>
                    <p className="text-swaqar-muted mt-3 text-base leading-relaxed">
                        Before any corridor moves toward execution, SWAQAR Group coordinates
                        a structured preparation process. Each step must be completed and
                        reviewed in sequence. No step is optional. No pilot decision is made
                        without all five gates being passed.
                    </p>
                </div>

                {/* ── Five-step sequence ─────────────────────────────────────── */}
                <div className="max-w-3xl">
                    <ol aria-label="Candidate corridor preparation steps">
                        {STEPS.map((step, i) => (
                            <li
                                key={`step-${i}`}
                                className="relative flex gap-6 pb-10 last:pb-0"
                            >
                                {/* Left: step number badge + connecting line */}
                                <div className="relative flex flex-col items-center flex-shrink-0">
                                    <div className="relative z-10 flex items-center justify-center w-10 h-10 border border-swaqar-gold bg-swaqar-bg">
                                        <span className="text-swaqar-gold text-xs font-bold tracking-wider">
                                            {step.number}
                                        </span>
                                    </div>
                                    {i < STEPS.length - 1 && (
                                        <span
                                            aria-hidden="true"
                                            className="absolute top-10 left-1/2 -translate-x-1/2 w-px bg-swaqar-gold/30"
                                            style={{ height: "calc(100% - 2.5rem)" }}
                                        />
                                    )}
                                </div>

                                {/* Right: step content */}
                                <div className="flex-1 pt-1.5 flex flex-col gap-2">
                                    <span className="text-swaqar-muted text-[10px] tracking-[0.25em] uppercase font-medium">
                                        Step {step.number}
                                    </span>
                                    <h3 className="text-swaqar-text text-lg font-semibold leading-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-swaqar-muted text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>

                {/* ── Closing note ───────────────────────────────────────────── */}
                <div className="mt-10 border-l-4 border-swaqar-gold pl-6 py-3">
                    <p className="text-swaqar-muted text-sm leading-relaxed">
                        SWAQAR coordinates the preparation process. Licensed operators
                        execute under their own regulatory authorisations.
                    </p>
                </div>

            </div>
        </section>
    );
}
