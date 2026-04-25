const GOVERNANCE_LAYERS = [
    {
        layer: "Verification Layer",
        role: "Supply validation",
        functions: [
            "Identity & license verification",
            "Capacity & compliance checks",
            "Counterparty due diligence",
        ],
        authority: "Verifies who enters",
    },
    {
        layer: "Financial Control",
        role: "Payment structure",
        functions: [
            "Bank/escrow framework design",
            "Transaction integrity enforcement",
            "Settlement structure validation",
        ],
        authority: "Controls how value moves",
    },
    {
        layer: "System Governance",
        role: "Final approval",
        functions: [
            "Execution control & oversight",
            "Decision-gate enforcement",
            "Transaction closure & audit",
        ],
        authority: "Approves what proceeds",
    },
] as const;

const ENFORCEMENT_RULES = [
    { condition: "No verification", consequence: "No transaction" },
    { condition: "No compliance", consequence: "No execution" },
    { condition: "No structure", consequence: "No financial movement" },
] as const;

export default function Governance() {
    return (
        <section
            id="governance"
            aria-labelledby="governance-heading"
            className="swaqar-section swaqar-container"
        >
            <div className="mb-14 max-w-3xl">
                <span className="block text-[10px] tracking-[0.25em] text-swaqar-gold uppercase font-bold mb-3">
                    Authority & Control
                </span>
                <h2 id="governance-heading" className="text-swaqar-text">
                    Three Layers Govern Every Transaction
                </h2>
                <p className="text-swaqar-muted mt-3 text-base leading-relaxed">
                    SWAQAR is not run by individual judgment. Every decision passes
                    through a structured authority hierarchy with defined responsibility.
                </p>
            </div>

            <div
                role="list"
                aria-label="Governance layers"
                className="grid grid-cols-1 md:grid-cols-3 auto-rows-fr gap-px bg-swaqar-gold/30"
            >
                {GOVERNANCE_LAYERS.map((layer, i) => (
                    <GovernanceLayerCard
                        key={`layer-${i}`}
                        index={i + 1}
                        layer={layer.layer}
                        role={layer.role}
                        functions={layer.functions}
                        authority={layer.authority}
                    />
                ))}
            </div>

            {/* RULES BLOCK */}
            <div className="mt-10 border border-swaqar-gold bg-swaqar-bg">
                <div className="px-6 py-4 border-b border-swaqar-gold/40 flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.25em] text-swaqar-gold uppercase font-bold">
                        Enforcement Rules
                    </span>
                    <span aria-hidden="true" className="text-swaqar-gold text-base font-bold">
                        ▣
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-fr divide-y md:divide-y-0 md:divide-x divide-swaqar-gold/20">
                    {ENFORCEMENT_RULES.map((rule, i) => (
                        <div
                            key={`rule-${i}`}
                            className="px-6 py-5 flex items-center gap-4"
                        >
                            <span className="text-swaqar-error text-xs font-bold tracking-wider whitespace-nowrap">
                                {rule.condition}
                            </span>
                            <span aria-hidden="true" className="text-swaqar-muted text-sm flex-shrink-0">
                                →
                            </span>
                            <span className="text-swaqar-text text-sm font-semibold">
                                {rule.consequence}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* PATCH #3: AUTHORITY STATEMENT — no surface background.
          Removed bg-swaqar-surface so it stops looking like an alert box.
          Just clean gold left border + transparent background.
          Typography carries the weight, not the box. */}
            <div className="mt-10 border-l-4 border-swaqar-gold pl-6 py-3">
                <div className="flex flex-col gap-3">
                    <span className="text-[10px] tracking-[0.25em] text-swaqar-gold uppercase font-bold">
                        Authority Statement
                    </span>
                    <p className="text-swaqar-text text-lg md:text-xl font-medium leading-relaxed">
                        All decisions follow a structured control-gate system,{" "}
                        <span className="text-swaqar-gold font-semibold">
                            not individual discretion.
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
}

type GovernanceLayerCardProps = {
    index: number;
    layer: string;
    role: string;
    functions: readonly string[];
    authority: string;
};

function GovernanceLayerCard({
    index,
    layer,
    role,
    functions,
    authority,
}: GovernanceLayerCardProps) {
    return (
        <div
            role="listitem"
            // PATCH #10: Reduced internal padding/gaps for tighter mobile cards
            className="bg-swaqar-bg p-5 sm:p-7 flex flex-col gap-4"
        >
            <div className="flex items-center justify-between">
                <span className="text-swaqar-muted text-[10px] tracking-[0.25em] uppercase font-medium">
                    Layer {index}
                </span>
                <span aria-hidden="true" className="block w-2.5 h-2.5 bg-swaqar-gold" />
            </div>

            <div className="flex flex-col gap-1.5">
                <h3 className="text-swaqar-text text-lg font-semibold leading-tight">
                    {layer}
                </h3>
                <span className="text-swaqar-gold text-xs font-medium tracking-wider uppercase">
                    {role}
                </span>
            </div>

            <ul className="flex flex-col gap-3 flex-1">
                {functions.map((fn, i) => (
                    <li
                        key={`fn-${index}-${i}`}
                        className="flex items-start gap-3"
                    >
                        <span
                            aria-hidden="true"
                            className="block w-1.5 h-1.5 bg-swaqar-gold mt-2 flex-shrink-0"
                        />
                        <span className="text-swaqar-muted text-sm leading-relaxed">
                            {fn}
                        </span>
                    </li>
                ))}
            </ul>

            <div className="pt-4 border-t border-swaqar-gold/20">
                <div className="flex items-center gap-2">
                    <span aria-hidden="true" className="text-swaqar-success text-xs font-bold">
                        ✔
                    </span>
                    <span className="text-swaqar-text text-xs font-semibold tracking-wide">
                        {authority}
                    </span>
                </div>
            </div>
        </div>
    );
}