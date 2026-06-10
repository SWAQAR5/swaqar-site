// ─────────────────────────────────────────────────────────────────────────────
// components/sections/RegulatedBoundary.tsx
// ─────────────────────────────────────────────────────────────────────────────

const LICENSED_PARTNER_ITEMS = [
  "Accept, hold, transfer, or custody funds of any kind",
  "Issue letters of credit, guarantees, or financial instruments",
  "Conduct KYC/AML/CFT as the regulated obliged entity",
  "Operate as customs broker, freight forwarder, or licensed logistics operator",
  "Provide legal advice, audit, or licensed professional services",
  "Issue investment instruments, securities, or fund interests",
] as const;

const SWAQAR_COORDINATION_ITEMS = [
  "Counterparty verification and documentation readiness review",
  "Corridor governance alignment and institutional coordination",
  "Facilitating access to licensed banking and trade finance partners",
  "Coordinating with licensed logistics and inspection operators",
  "Institutional relationship management and ecosystem development",
  "Corridor intelligence, monitoring, and execution oversight",
] as const;

export default function RegulatedBoundary() {
  return (
    <section
      id="regulated-boundary"
      aria-label="Regulated activity boundary"
      className="swaqar-section bg-swaqar-surface"
    >
      <div className="swaqar-container">
        <div className="text-center">
          <span className="swaqar-eyebrow">Regulated Activity Boundary</span>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-swaqar-heading text-center mt-4 max-w-3xl mx-auto">
            SWAQAR coordinates. It does not conduct regulated activity.
          </h2>
          <p className="text-sm text-swaqar-muted text-center mt-4 max-w-2xl mx-auto">
            The boundary between coordination and regulated activity is not
            ambiguous. It is constitutional. The following activities are
            conducted exclusively by licensed, regulated counterparties —
            never by SWAQAR.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-swaqar-gold mb-6">
              What Licensed Partners Do
            </p>
            <div className="bg-white border border-swaqar-border rounded-sm p-8">
              {LICENSED_PARTNER_ITEMS.map((item, i) => (
                <div
                  key={item}
                  className={`flex ${
                    i < LICENSED_PARTNER_ITEMS.length - 1
                      ? "border-b border-swaqar-border pb-3 mb-3"
                      : ""
                  }`}
                >
                  <span className="w-5 flex-shrink-0 text-swaqar-gold">
                    →
                  </span>
                  <span className="text-sm text-swaqar-text leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-swaqar-gold mb-6">
              What SWAQAR Coordinates
            </p>
            <div className="bg-white border border-swaqar-border rounded-sm p-8">
              {SWAQAR_COORDINATION_ITEMS.map((item, i) => (
                <div
                  key={item}
                  className={`flex ${
                    i < SWAQAR_COORDINATION_ITEMS.length - 1
                      ? "border-b border-swaqar-border pb-3 mb-3"
                      : ""
                  }`}
                >
                  <span className="w-5 flex-shrink-0 text-swaqar-heading">
                    —
                  </span>
                  <span className="text-sm text-swaqar-text leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white border border-swaqar-border rounded-sm p-6 mt-8 max-w-3xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-swaqar-gold block mb-3 text-center">
            Legal Position
          </span>
          <p className="text-xs text-swaqar-muted text-center leading-relaxed">
            All regulated activities within SWAQAR-coordinated corridors are
            conducted exclusively by licensed, regulated, and
            counsel-validated counterparties. SWAQAR Group does not hold any
            regulated financial, legal, customs, or logistics license, and
            does not conduct regulated activity in any jurisdiction. This is
            a constitutional governance position, not a disclaimer of
            convenience.
          </p>
        </div>
      </div>
    </section>
  );
}
