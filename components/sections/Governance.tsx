// ─────────────────────────────────────────────────────────────────────────────
// components/sections/Governance.tsx
// ─────────────────────────────────────────────────────────────────────────────

const LAYERS = [
  {
    badge: "Layer I",
    name: "Supreme Council",
    desc: "The highest governance authority. Oversees constitutional mandate, reserved matters, and institutional continuity. Supermajority required on all mission-critical decisions.",
  },
  {
    badge: "Layer II",
    name: "Ethics & Oversight Council",
    desc: "Independent institutional review body responsible for ethical governance, mission alignment, and counterparty conduct standards across all corridor engagements.",
  },
  {
    badge: "Layer III",
    name: "External Trustee Panel",
    desc: "Senior external advisors providing independent institutional oversight. Ensures non-substitution discipline and multi-jurisdictional governance accountability.",
    note: "The externally visible layer of SWAQAR's governance — designed specifically to sustain institutional counterpart confidence.",
  },
] as const;

export default function Governance() {
  return (
    <section
      id="governance"
      aria-labelledby="governance-heading"
      className="swaqar-section bg-swaqar-navy"
    >
      <div className="swaqar-container">
        <span className="swaqar-eyebrow text-swaqar-gold">
          Governance Structure
        </span>
        <h2
          id="governance-heading"
          className="font-serif text-3xl text-white font-semibold mt-4"
        >
          Three layers of institutional{" "}
          <em className="italic text-swaqar-gold">governance oversight.</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
          {LAYERS.map((layer) => (
            <div
              key={layer.badge}
              className="bg-[#071530] border border-swaqar-border p-9 relative hover:-translate-y-1.5 transition-transform duration-300"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-swaqar-gold to-swaqar-gold/60" />

              <span className="font-mono text-xs uppercase tracking-widest text-swaqar-gold bg-swaqar-gold/8 border border-swaqar-border px-2.5 py-1 inline-block mb-3 mt-1">
                {layer.badge}
              </span>
              <h3 className="font-serif text-xl text-white font-medium mb-3">
                {layer.name}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed">
                {layer.desc}
              </p>

              {"note" in layer && (
                <p className="font-mono text-xs text-swaqar-gold/65 mt-4 pt-4 border-t border-swaqar-border leading-relaxed">
                  {layer.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
