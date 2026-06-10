// ─────────────────────────────────────────────────────────────────────────────
// components/sections/OperatingFunctions.tsx
// ─────────────────────────────────────────────────────────────────────────────

const FUNCTIONS = [
  {
    numeral: "I",
    title: "Verification & Counterparty Governance",
    body: "Every corridor participant — exporter, buyer, logistics operator, financial intermediary — passes SWAQAR's verification protocol before engagement. Verification is not a formality. It is the institutional foundation on which every coordination mandate rests.",
  },
  {
    numeral: "II",
    title: "Documentation & Corridor Readiness",
    body: "SWAQAR coordinates documentation readiness across every active corridor. This includes trade documentation alignment, legal instrument preparation, and pre-transaction readiness review — coordinated through counsel-validated frameworks.",
  },
  {
    numeral: "III",
    title: "Execution Coordination & Intelligence",
    body: "SWAQAR coordinates execution across verified counterparties, licensed operators, and institutional partners. Corridor intelligence — market signals, counterparty risk data, regulatory updates — is maintained as a standing institutional function.",
  },
  {
    numeral: "IV",
    title: "Institutional Relationship & Ecosystem Development",
    body: "SWAQAR maintains standing relationships with governments, banks, trade finance institutions, verification bodies, and free zone authorities. Ecosystem development is a permanent function, not a growth initiative.",
  },
] as const;

export default function OperatingFunctions() {
  return (
    <section
      id="operating-functions"
      aria-label="Standing functions"
      className="swaqar-section bg-white"
    >
      <div className="swaqar-container">
        <div className="text-center">
          <span className="swaqar-eyebrow">Standing Functions</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-swaqar-heading mt-3">
            Four Standing Functions.
          </h2>
          <p className="text-sm text-swaqar-muted leading-relaxed max-w-[640px] mx-auto mt-4">
            SWAQAR operates through four permanent institutional functions.
            These are not departments. They are standing mandates that govern
            every corridor engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {FUNCTIONS.map((fn) => (
            <div
              key={fn.numeral}
              className="bg-swaqar-surface border border-swaqar-border rounded-sm p-8 flex flex-col"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-swaqar-gold">
                {fn.numeral}
              </span>
              <h3 className="font-serif text-xl font-semibold text-swaqar-heading mt-2">
                {fn.title}
              </h3>
              <hr className="border-t border-swaqar-border my-4" />
              <p className="text-sm text-swaqar-muted leading-relaxed flex-grow">
                {fn.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
