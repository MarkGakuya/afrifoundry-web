const stages = [
  {
    tag: "V1",
    status: "live",
    title: "Hybrid Afri3B",
    body: "General-purpose reasoning wrapped in real African context, live today — with a real, signed partner integration already running against it.",
  },
  {
    tag: "V2",
    status: "in progress",
    title: "Specialists earn their domains",
    body: "Language, Market, Search, Vision, and Voice each fine-tuned on verified data. The hybrid router shifts traffic to a specialist only once it's earned that trust — never on a fixed date.",
  },
  {
    tag: "V3",
    status: "planned",
    title: "Full mixture-of-experts",
    body: "All five specialists carrying their own domains, ten-plus languages past the seed stage, and the self-building dictionary compounding on its own.",
  },
  {
    tag: "V4",
    status: "vision",
    title: "The fully-equipped AI workstation",
    body: "One African intelligence layer — data, models, and API — that other builders work on top of, the way Bloomberg's terminal became the layer finance was built on.",
  },
];

const statusStyle = {
  live: "border-gold/45 bg-gold/10 text-gold",
  "in progress": "border-line bg-bg-raised text-ink-dim",
  planned: "border-line bg-bg-raised text-ink-dim",
  vision: "border-line bg-bg-raised text-ink-dim",
};

export default function RoadmapDiagram() {
  return (
    <div className="mt-10 grid grid-cols-1 gap-0 md:grid-cols-4 md:gap-0">
      {stages.map((s, i) => (
        <div key={s.tag} className="relative flex gap-4 pb-10 md:flex-col md:gap-0 md:pb-0 md:pr-6">
          {/* connector */}
          {i < stages.length - 1 && (
            <div className="absolute left-[15px] top-9 h-[calc(100%-2.25rem)] w-px bg-line md:left-auto md:right-0 md:top-[15px] md:h-px md:w-full" />
          )}
          <div className="z-10 flex h-8 w-8 flex-none items-center justify-center rounded-full border border-gold bg-bg font-mono text-xs font-bold text-gold md:mb-4">
            {s.tag}
          </div>
          <div className="md:pr-2">
            <span
              className={`inline-block rounded-full border px-2.5 py-0.5 font-mono text-[0.65rem] font-semibold uppercase tracking-wide ${statusStyle[s.status]}`}
            >
              {s.status}
            </span>
            <h3 className="mt-2 text-base font-semibold">{s.title}</h3>
            <p className="mt-1.5 max-w-[32ch] text-sm text-ink-dim">{s.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
