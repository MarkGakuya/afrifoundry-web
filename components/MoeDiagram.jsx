const experts = [
  { title: "Language", sub: "per language" },
  { title: "Market", sub: "real sectors" },
  { title: "Search", sub: "semantic" },
  { title: "Vision", sub: "product ID" },
  { title: "Voice", sub: "TTS / STT" },
];

export default function MoeDiagram() {
  return (
    <div className="mt-8 max-w-xl">
      <div className="flex flex-wrap gap-2 pb-8 md:flex-nowrap md:gap-3">
        {experts.map((e) => (
          <div key={e.title} className="relative flex-1 basis-[30%] md:basis-auto">
            <div className="rounded-lg border border-line bg-bg-raised px-2 py-3 text-center text-sm font-semibold">
              {e.title}
              <span className="mt-1 block font-mono text-[0.62rem] font-normal text-ink-dim">{e.sub}</span>
            </div>
            <div className="absolute left-1/2 top-full h-8 w-px -translate-x-1/2 bg-line" />
          </div>
        ))}
      </div>
      <div className="-mt-8 h-px bg-line" />
      <div className="mx-auto h-6 w-px bg-line" />
      <div className="mx-auto max-w-[280px] rounded-lg border border-gold bg-gold/10 px-4 py-4 text-center font-semibold">
        Hybrid Router
        <span className="mt-1 block font-mono text-xs font-normal text-ink-dim">maturity-gated, per domain</span>
      </div>
      <div className="mx-auto h-6 w-px bg-line" />
      <div className="mx-auto max-w-[180px] rounded-lg border border-line bg-bg-raised px-4 py-3.5 text-center font-display font-bold">
        Afri3B
      </div>
    </div>
  );
}
