// ─────────────────────────────────────────────────────────────────────────────
// components/sections/StrategicArms.tsx
// ─────────────────────────────────────────────────────────────────────────────

const ARMS = [
  {
    number: "01",
    name: "Industrial Trade Development",
    desc: "Commodity corridor development, supply-side verification, and industrial trade readiness coordination across Africa ⇄ Middle East ⇄ Asia.",
  },
  {
    number: "02",
    name: "Capital & Trade Finance Coordination",
    desc: "Facilitating access to licensed trade finance institutions. SWAQAR does not custody funds or act as financial principal under any circumstance.",
  },
  {
    number: "03",
    name: "Infrastructure & Logistics Coordination",
    desc: "Coordinating timing signals, documentation alignment, and synchronization context for licensed logistics operators. SWAQAR does not own or operate logistics infrastructure.",
  },
  {
    number: "04",
    name: "Intelligence & Research",
    desc: "Corridor intelligence, market signals, counterparty risk data, and regulatory monitoring as a standing institutional function — lawfully gathered, ethically sourced.",
  },
  {
    number: "05",
    name: "Digital Systems",
    desc: "Governance-layer digital coordination: documentation and verification management. Counsel-validated, governance-aligned. Standardise before digitise.",
  },
  {
    number: "06",
    name: "Institutional Advisory",
    desc: "Government, ministry, and institutional counterpart engagement at sovereign-grade discretion. Non-substitution discipline preserved.",
  },
] as const;

const METRICS = [
  { value: "Phase I", label: "Foundation Stage" },
  { value: "IV", label: "Gates · Entry Protocol" },
  { value: "3", label: "Regions · Corridor Mandate" },
  { value: "100%", label: "Non-Custodial" },
] as const;

export default function StrategicArms() {
  return (
    <section
      id="strategic-arms"
      aria-labelledby="strategic-arms-heading"
      className="swaqar-section bg-swaqar-surface"
    >
      <div className="swaqar-container">
        <span className="swaqar-eyebrow text-swaqar-gold">
          Institutional Architecture
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-14">
          {/* LEFT COLUMN */}
          <div>
            <h2
              id="strategic-arms-heading"
              className="font-serif text-3xl text-swaqar-heading font-semibold mb-2"
            >
              Six strategic arms.{" "}
              <em className="italic text-swaqar-gold">
                One institutional mission.
              </em>
            </h2>

            <div>
              {ARMS.map((arm) => (
                <div
                  key={arm.number}
                  className="border-b border-swaqar-border py-5 flex gap-5 items-start cursor-default hover:pl-2 transition-all duration-300"
                >
                  <span className="font-serif text-sm text-swaqar-gold/55 flex-shrink-0 mt-0.5">
                    {arm.number}
                  </span>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-swaqar-heading/90 font-medium mb-1.5">
                      {arm.name}
                    </p>
                    <p className="text-sm text-swaqar-muted leading-relaxed">
                      {arm.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="bg-white border border-swaqar-border p-10 relative overflow-hidden">
            <div
              className="absolute -right-11 -bottom-11 w-44 h-44 rounded-full border border-swaqar-border/30 pointer-events-none"
              aria-hidden="true"
            />

            <p className="font-mono text-xs uppercase tracking-widest text-swaqar-gold mb-4">
              Institutional Foundation
            </p>
            <h3 className="font-serif text-2xl text-swaqar-heading font-semibold leading-snug mb-4">
              Built for a multi-decade institutional horizon.
            </h3>
            <p className="text-sm text-swaqar-muted leading-relaxed mb-8">
              SWAQAR is not a startup seeking scale. It is a coordination
              institution being built to last — verification-governed,
              governance-anchored, designed to compound institutional
              credibility over time, not transaction volume.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-swaqar-border">
              {METRICS.map((metric) => (
                <div key={metric.label}>
                  <p className="font-serif text-2xl text-swaqar-gold font-semibold">
                    {metric.value}
                  </p>
                  <p className="font-mono text-xs uppercase tracking-widest text-swaqar-muted mt-1">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
