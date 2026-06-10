// ─────────────────────────────────────────────────────────────────────────────
// components/sections/FourGates.tsx
// ─────────────────────────────────────────────────────────────────────────────

const GATES = [
  {
    numeral: "I",
    label: "GATE I",
    title: "Counterparty Verification",
    body: "Every corridor participant — exporter, buyer, logistics operator, and financial intermediary — is subject to SWAQAR's verification protocol before any coordination mandate is issued.",
    requirement: "Verified identity, legal standing, and documentation readiness",
  },
  {
    numeral: "II",
    label: "GATE II",
    title: "Documentation Readiness",
    body: "All trade documentation — commercial agreements, compliance instruments, regulatory declarations, and corridor-specific requirements — must meet SWAQAR's documentation standard prior to corridor activation.",
    requirement: "Counsel-reviewed documentation package complete",
  },
  {
    numeral: "III",
    label: "GATE III",
    title: "Corridor Governance Alignment",
    body: "The corridor structure, counterparty relationships, and execution framework must be aligned to SWAQAR's governance architecture and the applicable legal frameworks across all participating jurisdictions.",
    requirement: "Governance alignment confirmed by Supreme Council mandate",
  },
  {
    numeral: "IV",
    label: "GATE IV",
    title: "Execution Mandate Issuance",
    body: "Only after Gates I, II, and III are cleared does SWAQAR issue a formal Execution Mandate. This mandate governs the coordination engagement and defines the boundaries of SWAQAR's role within it.",
    requirement: "Execution Mandate issued and filed under institutional record",
  },
] as const;

export default function FourGates() {
  return (
    <section
      id="four-gates"
      aria-label="Corridor entry protocol"
      className="swaqar-section bg-white"
    >
      <div className="swaqar-container">
        <div className="text-center">
          <span className="swaqar-eyebrow">Corridor Entry Protocol</span>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-swaqar-heading text-center mt-4 max-w-3xl mx-auto">
            Every coordinated corridor moves through four governance gates.
          </h2>
          <p className="text-sm text-swaqar-muted text-center mt-4 max-w-2xl mx-auto">
            No corridor engagement proceeds until all four gates are passed.
            This is not a process preference. It is a constitutional
            governance requirement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {GATES.map((gate) => (
            <div
              key={gate.numeral}
              className="bg-swaqar-surface border border-swaqar-border rounded-sm p-6 flex flex-col relative"
            >
              <span
                aria-hidden="true"
                className="absolute top-4 right-4 font-serif text-6xl font-bold text-swaqar-navy/5"
              >
                {gate.numeral}
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-swaqar-gold">
                {gate.label}
              </span>
              <h3 className="font-serif text-lg font-semibold text-swaqar-heading mt-2">
                {gate.title}
              </h3>
              <hr className="border-t border-swaqar-border my-4" />
              <p className="text-sm text-swaqar-muted leading-relaxed flex-grow">
                {gate.body}
              </p>
              <p className="font-mono text-xs text-swaqar-gold mt-4">
                Required: {gate.requirement}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-swaqar-navy mt-12 rounded-sm p-6">
          <span className="font-mono text-xs uppercase tracking-widest text-swaqar-gold block mb-2 text-center">
            Governance Position
          </span>
          <p className="text-sm text-white/80 text-center">
            The Four-Gate Model is a constitutional governance mechanism, not
            a service workflow. Any engagement that bypasses any gate falls
            outside SWAQAR's institutional mandate and will not proceed.
          </p>
        </div>
      </div>
    </section>
  );
}
