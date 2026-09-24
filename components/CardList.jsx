export default function CardList({ items }) {
  return (
    <div className="mt-10">
      {items.map((item, i) => (
        <div
          key={i}
          className="relative border-t border-line py-9 pl-0 last:border-b md:pl-24"
        >
          <div className="font-mono text-3xl font-semibold text-gold opacity-55 md:absolute md:left-0 md:top-9 md:text-4xl">
            {String(i + 1).padStart(2, "0")}
          </div>
          <h3 className="mt-2 max-w-[28ch] text-xl font-semibold md:mt-0">{item.title}</h3>
          <p className="mt-2 max-w-[48ch] text-ink-dim">{item.body}</p>
        </div>
      ))}
    </div>
  );
}
