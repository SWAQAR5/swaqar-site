// ─────────────────────────────────────────────────────────────────────────────
// components/sections/TrustStrip.tsx
// SWAQAR Group — Five Institutional Trust Pillars
// ─────────────────────────────────────────────────────────────────────────────

export default function TrustStrip() {
  const pillars = [
    {
      label: "Verification-First",
      detail: "No corridor proceeds without counterparty qualification.",
    },
    {
      label: "Non-Custodial",
      detail: "SWAQAR holds no funds, assets, or inventory.",
    },
    {
      label: "Governance-Led",
      detail: "Every decision passes through a structured control gate.",
    },
    {
      label: "Asset-Light",
      detail: "No owned infrastructure. No operational exposure.",
    },
    {
      label: "Corridor-First",
      detail: "Built for Africa ⇄ Middle East ⇄ Asia corridors.",
    },
  ];

  return (
    <section
      aria-label="Institutional trust pillars"
      className="bg-swaqar-navy border-y border-swaqar-gold/20"
    >
      <div className="swaqar-container">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-swaqar-gold/15">
          {pillars.map((pillar) => (
            <div
              key={pillar.label}
              className="px-6 py-7 flex flex-col gap-2"
            >
              <span className="text-[10px] font-semibold tracking-[0.14em] uppercase text-swaqar-gold">
                {pillar.label}
              </span>
              <p className="text-xs text-white/60 leading-relaxed">
                {pillar.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
