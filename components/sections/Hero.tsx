import HeroFlow from "@/components/visuals/HeroFlow";

export default function Hero() {
    return (
        <section
            aria-labelledby="hero-headline"
            className="swaqar-section swaqar-container"
        >
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12 lg:items-center">
                {/* ═══════════ LEFT: TEXT ═══════════ */}
                <div className="lg:col-span-6 max-w-[560px] flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <h1 id="hero-headline" className="text-swaqar-text">
                            Structured Trade Coordination System
                        </h1>
                        <p className="text-swaqar-gold text-xl md:text-2xl font-semibold leading-snug">
                            Only verified transactions move forward.
                        </p>
                    </div>

                    <div className="swaqar-corridor w-16" />

                    <div className="flex flex-col gap-5">
                        <p className="text-swaqar-muted text-base leading-relaxed">
                            SWAQAR governs how cross-border trade is verified, structured,
                            and executed across Africa and the Middle East.
                        </p>
                        <p className="text-swaqar-text text-base font-medium leading-relaxed">
                            A controlled coordination layer — not a marketplace, not a broker.
                        </p>
                        <p className="text-swaqar-error text-sm font-semibold flex items-center gap-2 tracking-wide">
                            <span aria-hidden="true">✖</span>
                            <span>Unverified transactions are blocked at entry.</span>
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <a
                            href="#submit-opportunity"
                            className="inline-flex items-center justify-center bg-swaqar-gold text-swaqar-bg font-semibold px-7 py-3.5 transition-opacity hover:opacity-90 focus-visible:opacity-90"
                        >
                            Submit a Trade Opportunity
                        </a>
                        <a
                            href="#request-discussion"
                            className="inline-flex items-center justify-center border border-swaqar-text/60 text-swaqar-text font-medium px-7 py-3.5 transition-colors hover:border-swaqar-gold hover:text-swaqar-gold focus-visible:border-swaqar-gold focus-visible:text-swaqar-gold"
                        >
                            Request Discussion
                        </a>
                    </div>
                </div>

                {/* ═══════════ RIGHT: FLOW DIAGRAM ═══════════ */}
                <div className="lg:col-span-6 flex justify-center lg:justify-end">
                    <HeroFlow />
                </div>
            </div>
        </section>
    );
}