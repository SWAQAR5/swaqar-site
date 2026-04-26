import SubmitForm from "@/components/SubmitForm";

const NEXT_STEPS = [
    {
        label: "Submit",
        detail: "You provide opportunity details through structured intake.",
    },
    {
        label: "Review",
        detail: "SWAQAR validates compliance and counterparty fit.",
    },
    {
        label: "Verification",
        detail: "Qualified opportunities enter formal structuring.",
    },
] as const;

export default function CTA() {
    return (
        <section
            id="cta"
            aria-labelledby="cta-heading"
            className="swaqar-section bg-swaqar-surface/30"
        >
            <div className="swaqar-container">

                {/* HEADER */}
                <div className="mb-14 max-w-3xl">
                    <span className="block text-[10px] tracking-[0.25em] text-swaqar-gold uppercase font-bold mb-3">
                        Entry Point
                    </span>
                    <h2 id="cta-heading" className="text-swaqar-text">
                        Start Your First Transaction
                    </h2>
                    <p className="text-swaqar-muted mt-3 text-base leading-relaxed">
                        Submit a trade opportunity or request a pilot discussion. The system
                        is ready.
                    </p>
                </div>

                {/* FORM — one instance only */}
                <div id="submit-opportunity">
                    <SubmitForm />
                </div>

                {/* WHAT HAPPENS NEXT */}
                <div className="mt-14 max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <span className="text-[10px] tracking-[0.25em] text-swaqar-muted uppercase font-medium">
                            What Happens After Submission
                        </span>
                    </div>

                    <div className="hidden md:flex items-start justify-between gap-2">
                        {NEXT_STEPS.map((step, i) => (
                            <div key={`step-${i}`} className="flex items-start flex-1 last:flex-none">
                                <div className="flex flex-col items-center gap-3 px-4 flex-1">
                                    <div className="flex items-center justify-center w-9 h-9 border border-swaqar-gold bg-swaqar-bg">
                                        <span className="text-swaqar-gold text-xs font-bold tracking-wider">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                    </div>
                                    <h3 className="text-swaqar-text text-sm font-semibold tracking-wide">
                                        {step.label}
                                    </h3>
                                    <p className="text-swaqar-muted text-xs leading-relaxed text-center max-w-[200px]">
                                        {step.detail}
                                    </p>
                                </div>
                                {i < NEXT_STEPS.length - 1 && (
                                    <div className="flex items-center justify-center mt-4">
                                        <span className="block h-px w-8 bg-swaqar-gold" />
                                        <span className="text-swaqar-gold text-xs leading-none -ml-1">▶</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="md:hidden flex flex-col gap-0">
                        {NEXT_STEPS.map((step, i) => (
                            <div key={`m-step-${i}`}>
                                <div className="flex items-start gap-4">
                                    <div className="flex items-center justify-center w-9 h-9 border border-swaqar-gold bg-swaqar-bg flex-shrink-0">
                                        <span className="text-swaqar-gold text-xs font-bold tracking-wider">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-1.5 pt-1.5 flex-1">
                                        <h3 className="text-swaqar-text text-sm font-semibold tracking-wide">
                                            {step.label}
                                        </h3>
                                        <p className="text-swaqar-muted text-xs leading-relaxed">
                                            {step.detail}
                                        </p>
                                    </div>
                                </div>
                                {i < NEXT_STEPS.length - 1 && (
                                    <div className="flex items-center gap-2 ml-4 py-2">
                                        <span className="block w-px h-5 bg-swaqar-gold" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* FOOTER STATEMENT */}
                <div id="contact" className="mt-14 text-center">
                    <p className="text-swaqar-muted text-sm leading-relaxed max-w-2xl mx-auto">
                        SWAQAR is a controlled coordination layer for cross-border trade.
                        <span className="text-swaqar-text font-medium">
                            {" "}Every transaction begins with a single, verified opportunity.
                        </span>
                    </p>
                </div>

            </div>
        </section>
    );
}