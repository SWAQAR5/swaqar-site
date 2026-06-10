// ─────────────────────────────────────────────────────────────────────────────
// components/sections/AudienceNav.tsx
// ─────────────────────────────────────────────────────────────────────────────

const AUDIENCES = [
  {
    label: "SOVEREIGN · MINISTERIAL",
    title: "Government & Ministry",
    body: "Engagement at institutional counterpart standard under sovereign-grade discretion. Non-substitution discipline preserved.",
    link: "Governance Architecture →",
  },
  {
    label: "BANKING · TRADE FINANCE",
    title: "Bank & Trade Finance",
    body: "Coordination alongside licensed banking activity. SWAQAR does not custody, finance as principal, or stand in the chain of finance.",
    link: "Operating Approach →",
  },
  {
    label: "EXPORTER · BUYER",
    title: "Exporter & Buyer",
    body: "Coordinated corridor participation under verification-first, documentation-aligned, governance-overseen institutional discipline.",
    link: "4-Gate Model →",
  },
  {
    label: "INSTITUTIONAL PARTNER",
    title: "Capital & Strategic Partner",
    body: "Counsel-validated institutional engagement under multi-decade horizon. Not a security, not a fund offering, not a solicitation.",
    link: "Institutional Architecture →",
  },
] as const;

export default function AudienceNav() {
  return (
    <section
      id="audience-nav"
      aria-label="Institutional entry points"
      className="swaqar-section bg-swaqar-surface"
    >
      <div className="swaqar-container">
        <div className="max-w-[600px] mx-auto text-center mb-12">
          <span className="swaqar-eyebrow">Institutional Entry Points</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-swaqar-heading mt-3 mb-4">
            Different roles. One coordination layer.
          </h2>
          <p className="text-sm text-swaqar-muted leading-relaxed">
            Different institutional counterparts engage SWAQAR for different
            purposes. The shortcuts below route to the most relevant section
            based on role.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {AUDIENCES.map((audience) => (
            <div
              key={audience.title}
              className="bg-white border border-swaqar-border rounded-sm p-8 flex flex-col h-full hover:border-swaqar-gold transition-colors"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-swaqar-gold">
                {audience.label}
              </span>
              <h3 className="font-serif text-xl font-semibold text-swaqar-heading mt-2">
                {audience.title}
              </h3>
              <p className="text-sm text-swaqar-muted mt-3 flex-grow">
                {audience.body}
              </p>
              <a
                href="#"
                className="font-mono text-xs uppercase tracking-widest text-swaqar-gold mt-6 hover:underline"
              >
                {audience.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
