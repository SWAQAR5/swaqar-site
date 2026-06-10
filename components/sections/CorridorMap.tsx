// ─────────────────────────────────────────────────────────────────────────────
// components/sections/CorridorMap.tsx
// ─────────────────────────────────────────────────────────────────────────────

const CORRIDORS = [
  {
    region: "Africa Corridor",
    title: "Origin & Supply",
    body: "Agricultural commodities, industrial minerals, and verified exporter networks. SWAQAR coordinates verification readiness and documentation alignment for African supply-side participants.",
    tags: ["Verified Exporters", "Documentation", "Corridor Readiness"],
  },
  {
    region: "Middle East Corridor",
    title: "Trust & Capital Hub",
    body: "The institutional anchor of the SWAQAR model. Trade finance coordination, sovereign engagement, and free zone interface. SWAQAR does not custody funds or act as financial principal.",
    tags: ["Trade Finance", "Sovereign Engagement", "Free Zone Interface"],
  },
  {
    region: "Asia Corridor",
    title: "Demand & Industrial Scale",
    body: "Verified offtake counterparties, institutional buyers, and industrial demand coordination. SWAQAR aligns documentation and governance readiness for Asia-side engagement.",
    tags: ["Verified Buyers", "Offtake Coordination", "Industrial Scale"],
  },
] as const;

export default function CorridorMap() {
  return (
    <section
      id="corridor-map"
      aria-label="Corridor regions"
      className="swaqar-section bg-swaqar-navy"
    >
      <div className="swaqar-container">
        {/* Header row */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
          <div>
            <span className="swaqar-eyebrow text-swaqar-gold">
              Corridor Architecture
            </span>
            <h2 className="font-serif text-3xl text-white font-semibold mt-4">
              Three regions.
              <br />
              <em className="italic text-swaqar-gold">
                One coordination layer.
              </em>
            </h2>
          </div>
          <p className="max-w-xs text-sm text-white/40 leading-relaxed text-right">
            SWAQAR coordinates verified trade flow across the three most
            strategically aligned regions in global South–South trade.
          </p>
        </div>

        {/* SVG map container */}
        <div className="bg-[#071530] border border-swaqar-border p-12 flex items-center justify-center min-h-72 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(184,146,58,0.04),transparent_70%)] pointer-events-none"
            aria-hidden="true"
          />
          <svg
            viewBox="0 0 780 240"
            width="100%"
            className="max-w-3xl relative"
            aria-hidden="true"
          >
            <path
              d="M 160,120 Q 330,72 440,120 Q 550,168 620,120"
              fill="none"
              stroke="rgba(184,146,58,0.22)"
              strokeWidth="1.4"
              strokeDasharray="6 10"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-80"
                dur="3s"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M 160,120 Q 330,168 440,120 Q 550,72 620,120"
              fill="none"
              stroke="rgba(184,146,58,0.09)"
              strokeWidth="1"
              strokeDasharray="4 8"
            />

            {/* Africa node */}
            <circle
              cx="160"
              cy="120"
              r="11"
              fill="rgba(184,146,58,0.13)"
              stroke="rgba(184,146,58,0.45)"
            />
            <circle cx="160" cy="120" r="4.5" fill="rgba(184,146,58,0.8)">
              <animate
                attributeName="r"
                values="4.5;7;4.5"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </circle>
            <text
              x="160"
              y="144"
              textAnchor="middle"
              fontFamily="DM Mono, monospace"
              fontSize="7"
              fill="rgba(184,146,58,0.6)"
              letterSpacing="2"
            >
              AFRICA
            </text>

            {/* Middle East node */}
            <circle
              cx="440"
              cy="120"
              r="13"
              fill="rgba(184,146,58,0.13)"
              stroke="rgba(184,146,58,0.45)"
            />
            <circle cx="440" cy="120" r="5.5" fill="rgba(184,146,58,0.8)">
              <animate
                attributeName="r"
                values="5.5;9;5.5"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </circle>
            <text
              x="440"
              y="147"
              textAnchor="middle"
              fontFamily="DM Mono, monospace"
              fontSize="7"
              fill="rgba(184,146,58,0.6)"
              letterSpacing="2"
            >
              MIDDLE EAST
            </text>

            {/* Asia node */}
            <circle
              cx="620"
              cy="120"
              r="11"
              fill="rgba(184,146,58,0.13)"
              stroke="rgba(184,146,58,0.45)"
            />
            <circle cx="620" cy="120" r="4.5" fill="rgba(184,146,58,0.8)">
              <animate
                attributeName="r"
                values="4.5;7;4.5"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </circle>
            <text
              x="620"
              y="144"
              textAnchor="middle"
              fontFamily="DM Mono, monospace"
              fontSize="7"
              fill="rgba(184,146,58,0.6)"
              letterSpacing="2"
            >
              ASIA
            </text>

            {/* Center label */}
            <text
              x="390"
              y="96"
              textAnchor="middle"
              fontFamily="DM Mono, monospace"
              fontSize="6.5"
              fill="rgba(184,146,58,0.3)"
              letterSpacing="3"
            >
              SWAQAR COORDINATION LAYER
            </text>

            {/* Animated pulse dot */}
            <circle r="3.5" fill="rgba(184,146,58,0.9)">
              <animateMotion
                dur="3s"
                repeatCount="indefinite"
                path="M 160,120 Q 330,72 440,120 Q 550,168 620,120"
              />
            </circle>
          </svg>
        </div>

        {/* Corridor cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-swaqar-border mt-px">
          {CORRIDORS.map((corridor) => (
            <div
              key={corridor.region}
              className="bg-swaqar-navy/80 hover:bg-[#071530] p-8 relative overflow-hidden transition-colors group"
            >
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-swaqar-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              <p className="font-mono text-xs tracking-widest uppercase text-swaqar-gold mb-2">
                {corridor.region}
              </p>
              <h3 className="font-serif text-xl text-white font-medium mb-3">
                {corridor.title}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed mb-5">
                {corridor.body}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {corridor.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs uppercase tracking-wider text-swaqar-gold border border-swaqar-border/50 px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
