// ─────────────────────────────────────────────────────────────────────────────
// components/sections/CategoryClarity.tsx
// ─────────────────────────────────────────────────────────────────────────────

const IS_ITEMS = [
  "A governance-led Trade Coordination Layer",
  "Verification-first across all corridors and counterparties",
  "Asset-light and non-custodial by constitutional design",
  "A coordination layer working above licensed operators",
  "Governed by Supreme Council, Ethics & Oversight Council, and External Trustee Panel",
  "Operating under counsel-validated legal and compliance frameworks",
  "Currently in Phase 1 — Foundation Stage",
  "Built for a multi-decade institutional horizon",
] as const;

const IS_NOT_ITEMS = [
  "A commodity trader, broker, or dealer of any kind",
  "A bank, lender, escrow provider, or regulated financial institution",
  "A logistics operator, freight company, or cargo owner",
  "A marketplace, exchange, or transactional platform",
  "A custodian or paymaster of any kind",
  "A fintech, SaaS company, or speculative technology startup",
  "A counterparty to any transaction it coordinates",
  "An investment vehicle or capital-raising vehicle of any kind",
] as const;

export default function CategoryClarity() {
  return (
    <section
      id="category-clarity"
      aria-label="Category definition"
      className="swaqar-section bg-swaqar-navy"
    >
      <div className="swaqar-container">
        <div className="text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-swaqar-gold">
            Category Definition
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white text-center mt-4 max-w-3xl mx-auto">
            The category is defined by what the institution is — as much as
            what it is not.
          </h2>
          <p className="text-sm text-white/70 text-center mt-4 max-w-xl mx-auto">
            Institutional clarity requires both definitions. Read both
            columns before engaging.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-swaqar-gold mb-6">
              SWAQAR IS
            </p>
            {IS_ITEMS.map((item) => (
              <div
                key={item}
                className="flex border-b border-white/10 pb-3 mb-3"
              >
                <span className="w-5 flex-shrink-0 text-swaqar-gold">—</span>
                <span className="flex-grow text-sm text-white leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-red-400 mb-6">
              SWAQAR IS NOT
            </p>
            {IS_NOT_ITEMS.map((item) => (
              <div
                key={item}
                className="flex border-b border-white/10 pb-3 mb-3"
              >
                <span className="w-5 flex-shrink-0 text-red-400">✕</span>
                <span className="flex-grow text-sm text-white/80 leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-t border-white/20 mt-10" />
        <p className="text-xs text-white/50 text-center mt-6 max-w-2xl mx-auto">
          This category definition is a constitutional governance statement
          of SWAQAR Group. It is not marketing language. Any engagement
          inconsistent with this definition falls outside SWAQAR's
          institutional mandate.
        </p>
      </div>
    </section>
  );
}
