// ─────────────────────────────────────────────────────────────────────────────
// components/sections/TrustPillars.tsx
// ─────────────────────────────────────────────────────────────────────────────

const PILLARS = [
  {
    name: "Governance-Led",
    desc: "Supreme Council, Ethics Council, External Trustee Panel",
  },
  {
    name: "Verification-First",
    desc: "Every counterparty verified before engagement",
  },
  {
    name: "Asset-Light",
    desc: "No owned infrastructure, cargo, or capital positions",
  },
  {
    name: "Non-Custodial",
    desc: "SWAQAR never holds funds or title to goods",
  },
] as const;

export default function TrustPillars() {
  return (
    <section
      id="trust-pillars"
      aria-label="Institutional trust pillars"
      className="swaqar-section bg-swaqar-navy"
    >
      <div className="swaqar-container">
        <span className="swaqar-eyebrow text-swaqar-gold">
          Institutional Identity
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-8">
          {/* LEFT COLUMN */}
          <div>
            <h2 className="font-serif text-3xl font-semibold text-white">
              A coordination layer,
              <br />
              not a counterparty.
            </h2>
            <p className="text-sm text-white/50 leading-relaxed mt-4 max-w-lg">
              SWAQAR governs the space between verified exporters,
              institutional buyers, licensed operators, and trade finance
              providers. It coordinates without owning. Verifies without
              brokering. Connects without custodying.
            </p>

            <div className="grid grid-cols-2 gap-px mt-8 bg-swaqar-border">
              {PILLARS.map((pillar) => (
                <div
                  key={pillar.name}
                  className="bg-swaqar-navy p-5 border-l-2 border-transparent hover:border-swaqar-gold transition-colors"
                >
                  <p className="font-mono text-xs uppercase tracking-widest text-white/85 font-medium mb-1">
                    {pillar.name}
                  </p>
                  <p className="text-xs text-white/40 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="bg-[#071530] border border-swaqar-border p-10 relative">
            <div className="absolute top-0 left-8 w-16 h-0.5 bg-swaqar-gold" />

            <p className="font-serif text-2xl text-white leading-relaxed font-normal italic mb-6">
              SWAQAR coordinates without owning. Verifies without brokering.
              Connects without{" "}
              <span className="font-bold not-italic text-swaqar-gold">
                custodying.
              </span>
            </p>

            <div className="border-t border-swaqar-border pt-5 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-swaqar-gold/10 border border-swaqar-border flex items-center justify-center font-mono text-xs text-swaqar-gold">
                ✦
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-white/65">
                  SWAQAR Group
                </p>
                <p className="font-mono text-xs text-white/30 mt-0.5">
                  Founding Governance Doctrine
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
