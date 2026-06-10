// ─────────────────────────────────────────────────────────────────────────────
// components/sections/TrustPillars.tsx
// ─────────────────────────────────────────────────────────────────────────────

const pillars = [
  {
    id: "01",
    label: "Verification-First",
    body: "Counterparty status, documentation, and corridor flows verified by licensed firms under counsel-validated discipline.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="14" r="11" />
        <polyline points="9,14 12.5,17.5 19,11" />
      </svg>
    ),
  },
  {
    id: "02",
    label: "Non-Custodial",
    body: "SWAQAR does not custody funds, hold title to goods, or stand in the chain of finance at any point.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="8" width="18" height="13" rx="1" />
        <path d="M9 8V6a5 5 0 0 1 10 0v2" />
      </svg>
    ),
  },
  {
    id: "03",
    label: "Governance-Led",
    body: "Material decisions move through constitutional procedure under Supreme Council, Ethics & Oversight, and counsel of record.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 3 L25 8 L25 13 C25 19 20 23.5 14 25 C8 23.5 3 19 3 13 L3 8 Z" />
      </svg>
    ),
  },
  {
    id: "04",
    label: "Asset-Light",
    body: "The institution owns no cargo, no fleet, no terminal, no physical capacity. The perimeter is constitutional.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21 L10 14 L15 19 L20 12 L25 7" />
        <path d="M21 7 L25 7 L25 11" />
      </svg>
    ),
  },
  {
    id: "05",
    label: "Corridor-First",
    body: "Corridors are the unit of institutional operation. Sequential, sustained, demonstrated — not parallel or theoretical.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="5" cy="14" r="2.5" />
        <circle cx="14" cy="14" r="2.5" />
        <circle cx="23" cy="14" r="2.5" />
        <line x1="7.5" y1="14" x2="11.5" y2="14" />
        <line x1="16.5" y1="14" x2="20.5" y2="14" />
      </svg>
    ),
  },
];

export default function TrustPillars() {
  return (
    <section
      id="trust-pillars"
      aria-label="Institutional trust pillars"
      className="bg-swaqar-surface py-16"
    >
      <div className="swaqar-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.id} className="flex flex-col gap-4">
              <div className="text-swaqar-gold">
                {pillar.icon}
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-swaqar-heading mb-2">
                  {pillar.label}
                </p>
                <p className="text-sm text-swaqar-text leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
