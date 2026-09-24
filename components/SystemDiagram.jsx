function Node({ title, sub, accent }) {
  return (
    <div
      className={`flex flex-col gap-1 rounded-lg border px-5 py-4 text-sm font-semibold ${
        accent ? "border-gold/45 bg-gold/10" : "border-line bg-bg-raised"
      }`}
    >
      {title}
      <span className="font-mono text-xs font-normal text-ink-dim">{sub}</span>
    </div>
  );
}

export default function SystemDiagram() {
  return (
    <div className="mt-10">
      <div className="mx-auto max-w-xs rounded-lg border border-dashed border-line px-5 py-4 text-center text-sm font-semibold">
        AfriFoundry Limited
      </div>
      <div className="my-3 text-center font-mono text-ink-dim">↓</div>
      <div className="grid grid-cols-1 items-center gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
        <Node title="Terminal" sub="Ingest & curation — admin only" />
        <div className="hidden text-center font-mono text-ink-dim md:block">→</div>
        <Node title="Training" sub="Per domain, on real data" />
        <div className="hidden text-center font-mono text-ink-dim md:block">→</div>
        <Node title="Afri3B" sub="Hybrid router + 5 specialists" accent />
      </div>
      <div className="my-3 text-center font-mono text-ink-dim">↓</div>
      <div className="mx-auto grid max-w-lg grid-cols-1 gap-4 md:grid-cols-2">
        <Node title="Partner API" sub="/v1/search, /describe, /visual-search…" />
        <Node title="Consumer App" sub="Afri3B chat, any user" />
      </div>
    </div>
  );
}
