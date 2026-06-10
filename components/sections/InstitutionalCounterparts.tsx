// ─────────────────────────────────────────────────────────────────────────────
// components/sections/InstitutionalCounterparts.tsx
// ─────────────────────────────────────────────────────────────────────────────

const COUNTERPARTS = [
  {
    number: "01",
    title: "Sovereign & Ministerial Bodies",
    body: "Government ministries, sovereign trade authorities, and state-level institutional bodies engaging at the coordination layer for corridor development and trade governance alignment.",
  },
  {
    number: "02",
    title: "Licensed Banks & Trade Finance Institutions",
    body: "Established banks and trade finance institutions coordinating alongside SWAQAR's documentation and verification framework. SWAQAR does not custody, lend, or stand in the chain of finance.",
  },
  {
    number: "03",
    title: "Verified Exporters & Commodity Producers",
    body: "Producers and exporters of verified commodities — agricultural, industrial, and natural resource — whose documentation, counterparty standing, and corridor readiness meet SWAQAR's verification protocol.",
  },
  {
    number: "04",
    title: "Verified Buyers & Offtake Counterparties",
    body: "Institutional buyers and offtake counterparties whose payment capacity, documentation standing, and corridor eligibility are verified prior to coordination engagement.",
  },
  {
    number: "05",
    title: "Licensed Logistics & Infrastructure Operators",
    body: "Freight operators, customs brokers, port authorities, and logistics infrastructure providers operating under valid licenses within SWAQAR-coordinated corridors. SWAQAR does not own or operate logistics infrastructure.",
  },
  {
    number: "06",
    title: "Strategic & Capital Partners",
    body: "Institutional investors, development finance bodies, and strategic partners engaging under counsel-validated frameworks. Not a fund offering, not a security, not a solicitation of any kind.",
  },
] as const;

export default function InstitutionalCounterparts() {
  return (
    <section
      id="counterparts"
      aria-label="Institutional counterparts"
      className="swaqar-section bg-swaqar-surface"
    >
      <div className="swaqar-container">
        <div className="text-center">
          <span className="swaqar-eyebrow">Institutional Counterparts</span>
          <h2 className="font-serif font-semibold text-3xl sm:text-4xl text-swaqar-heading mt-3">
            SWAQAR engages institutional-calibre participants.
          </h2>
          <p className="text-sm text-swaqar-muted leading-relaxed max-w-2xl mx-auto mt-4">
            Coordination is extended to verified institutional counterparts
            only. Six categories of engagement are recognised under the
            SWAQAR institutional framework.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {COUNTERPARTS.map((counterpart) => (
            <div
              key={counterpart.number}
              className="bg-white border border-swaqar-border rounded-sm p-6 flex flex-col"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-swaqar-gold">
                {counterpart.number}
              </span>
              <h3 className="font-serif text-lg font-semibold text-swaqar-heading mt-2">
                {counterpart.title}
              </h3>
              <p className="text-sm text-swaqar-muted leading-relaxed mt-3 flex-grow">
                {counterpart.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
