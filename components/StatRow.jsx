const stats = [
  { n: "7", label: "curation algorithms" },
  { n: "5", label: "specialist minimodels" },
  { n: "10+", label: "languages in progress" },
  { n: "0", label: "fabricated data points" },
];

export default function StatRow() {
  return (
    <div className="mt-16 grid grid-cols-2 gap-px border-y border-line bg-line md:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="bg-bg px-2 py-6 text-center">
          <b className="block font-mono text-2xl font-semibold text-gold md:text-4xl">{s.n}</b>
          <span className="text-xs text-ink-dim">{s.label}</span>
        </div>
      ))}
    </div>
  );
}
