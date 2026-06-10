// ─────────────────────────────────────────────────────────────────────────────
// components/sections/CandidateCorridorPrep.tsx
// ─────────────────────────────────────────────────────────────────────────────

const STEPS = [
  {
    label: "STEP 01",
    title: "Corridor Identification",
    body: "SWAQAR identifies candidate corridors based on verified trade flow potential, counterparty availability, documentation readiness, and legal framework alignment across participating jurisdictions.",
  },
  {
    label: "STEP 02",
    title: "Counterparty Assessment",
    body: "All candidate counterparties — exporters, buyers, logistics operators, and financial intermediaries — are assessed against SWAQAR's verification protocol before corridor preparation proceeds.",
  },
  {
    label: "STEP 03",
    title: "Governance Readiness Review",
    body: "The corridor's legal structure, documentation framework, and compliance alignment are reviewed against SWAQAR's governance architecture and applicable jurisdictional requirements.",
  },
] as const;

export default function CandidateCorridorPrep() {
  return (
    <section
      id="corridor-prep"
      aria-label="Candidate corridor preparation"
      className="swaqar-section bg-swaqar-surface"
    >
      <div className="swaqar-container">
        <div className="text-center">
          <span className="swaqar-eyebrow">Corridor Preparation</span>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-swaqar-heading text-center mt-4">
            Candidate Corridor Preparation.
          </h2>
          <p className="text-sm text-swaqar-muted text-center mt-4 max-w-2xl mx-auto">
            Before any corridor is activated, SWAQAR conducts a structured
            preparation assessment. This is not an application process. It is
            an institutional readiness evaluation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {STEPS.map((step) => (
            <div
              key={step.label}
              className="bg-white border border-swaqar-border rounded-sm p-6"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-swaqar-gold">
                {step.label}
              </span>
              <h3 className="font-serif text-lg font-semibold text-swaqar-heading mt-2">
                {step.title}
              </h3>
              <p className="text-sm text-swaqar-muted leading-relaxed mt-3">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-swaqar-navy rounded-sm p-6 mt-10 max-w-3xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-swaqar-gold block text-center mb-3">
            Governance Disclaimer
          </span>
          <p className="text-sm text-white/80 text-center leading-relaxed">
            Corridor preparation does not constitute a commitment by SWAQAR
            Group to activate, coordinate, or guarantee any corridor or
            transaction. All corridor activation is subject to completion of
            the Four-Gate Model, Supreme Council mandate, and
            counsel-validated legal and compliance review. SWAQAR Group is
            currently in Phase 1 — Foundation Stage and is not yet
            operationally active.
          </p>
        </div>
      </div>
    </section>
  );
}
