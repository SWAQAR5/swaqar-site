const regions = [
  {
    id: "01",
    name: "Africa",
    role: "Verified Supply",
    detail: "Verified supply, industrial inputs, agricultural flows, and emerging destination markets of institutional significance.",
    tags: ["VERIFIED SUPPLY", "ORIGIN · COMMODITIES"],
  },
  {
    id: "02",
    name: "Middle East",
    role: "Institutional Trust",
    detail: "Institutional and financial anchor; regional convening platform; multi-decade institutional capital depth.",
    tags: ["INSTITUTIONAL TRUST", "CAPITAL · GOVERNANCE"],
  },
  {
    id: "03",
    name: "Asia",
    role: "Industrial Scale",
    detail: "Industrial scale, manufacturing depth, and infrastructure participation across cross-regional flows.",
    tags: ["INDUSTRIAL SCALE", "MANUFACTURING · DEMAND"],
  },
];

export default function CorridorMap() {
  return (
    <section
      id="corridor-map"
      aria-label="Corridor regions"
      className="bg-white swaqar-section"
    >
      <div className="swaqar-container">
        <div className="max-w-[720px] mx-auto text-center mb-16">
          <div className="w-8 h-px bg-swaqar-gold mx-auto mb-8" aria-hidden="true" />
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-swaqar-gold" />
            <span className="swaqar-eyebrow">Africa · Middle East · Asia</span>
            <div className="h-px w-8 bg-swaqar-gold" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-swaqar-heading leading-tight mb-6">
            A coordinated corridor between three{" "}
            <em className="text-swaqar-gold not-italic">structurally complementary</em>{" "}
            regions.
          </h2>
          <p className="font-serif italic text-swaqar-text text-lg leading-relaxed">
            Three anchors. Complementary roles. One institutional coordination layer integrating verification, documentation, synchronization, and oversight across the corridors that connect them.
          </p>
        </div>

        {/* Visual diagram */}
        <div className="border border-swaqar-border p-8 mb-12">
          <div className="grid grid-cols-3 gap-4 mb-4">
            {regions.map((region, i) => (
              <div key={region.id} className="relative">
                <div className="bg-swaqar-navy p-8 text-center min-h-[200px] flex flex-col justify-between border border-swaqar-gold/20">
                  <p className="text-[9px] font-semibold tracking-[0.16em] uppercase text-swaqar-gold/60 text-left">
                    Region {region.id}
                  </p>
                  <div>
                    <h3 className="font-serif italic text-3xl font-bold text-white mb-4">
                      {region.name}
                    </h3>
                    {region.tags.map((tag) => (
                      <p key={tag} className="text-[9px] font-semibold tracking-[0.12em] uppercase text-white/50">
                        {tag}
                      </p>
                    ))}
                  </div>
                  <div className="w-2 h-2 rounded-full bg-swaqar-gold/40 mx-auto" />
                </div>
                {i < 2 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 z-10 items-center gap-1 -translate-y-1/2">
                    <div className="w-6 border-t border-dashed border-swaqar-gold/40" />
                    <span className="text-[8px] text-swaqar-gold/60 tracking-widest uppercase">Corridor</span>
                    <div className="w-2 border-t border-dashed border-swaqar-gold/40" />
                    <span className="text-swaqar-gold/60 text-xs">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="border border-swaqar-gold/30 bg-swaqar-gold/5 py-4 text-center">
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-swaqar-gold mb-1">
              SWAQAR GROUP
            </p>
            <p className="text-[9px] tracking-[0.16em] uppercase text-swaqar-muted">
              Coordination · Verification Layer
            </p>
          </div>
        </div>

        {/* Region detail cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {regions.map((region) => (
            <div key={region.id} className="border border-swaqar-border p-8">
              <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-swaqar-gold mb-3">
                Region {region.id}
              </p>
              <h3 className="font-serif text-2xl font-semibold text-swaqar-heading mb-4">
                {region.name}
              </h3>
              <p className="text-sm text-swaqar-text leading-relaxed">
                {region.detail}
              </p>
            </div>
          ))}
          <div className="border border-swaqar-gold/40 bg-swaqar-surface p-8">
            <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-swaqar-gold mb-3">
              Coordination Layer
            </p>
            <h3 className="font-serif text-2xl font-semibold text-swaqar-heading mb-4">
              SWAQAR Group
            </h3>
            <p className="text-sm text-swaqar-text leading-relaxed">
              Verification, documentation, synchronization, and governance oversight integrating the three regions as one corridor system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
