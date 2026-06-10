// ─────────────────────────────────────────────────────────────────────────────
// components/sections/CorridorStatement.tsx
// ─────────────────────────────────────────────────────────────────────────────

export default function CorridorStatement() {
  return (
    <section
      id="corridor-statement"
      aria-label="Corridor trust statement"
      className="bg-white py-24 overflow-hidden relative"
    >
      <div className="swaqar-container relative">
        <div className="max-w-[780px] mx-auto text-center">
          <div className="w-8 h-px bg-swaqar-gold mx-auto mb-10" aria-hidden="true" />
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-swaqar-heading leading-[1.1] mb-4">
            Corridors do not fail for lack of goods.
          </h2>
          <h2 className="font-serif italic text-4xl sm:text-5xl md:text-6xl font-bold text-swaqar-gold leading-[1.1] mb-12">
            They fail for lack of institutional trust.
          </h2>
          <div className="w-12 h-px bg-swaqar-gold mx-auto mb-8" aria-hidden="true" />
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-swaqar-muted">
            SWAQAR GROUP — GOVERNANCE-LED TRADE COORDINATION LAYER
          </p>
        </div>
      </div>
    </section>
  );
}
