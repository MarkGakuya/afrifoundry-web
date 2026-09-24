import Link from "next/link";

export const metadata = { title: "Page not found — AfriFoundry" };

export default function NotFound() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="mb-3 font-mono text-xs font-semibold tracking-wide text-gold">404</div>
        <h1 className="font-display text-4xl font-bold md:text-5xl">
          This page doesn&apos;t exist.
        </h1>
        <p className="mt-5 text-lg text-ink-dim">
          The page you&apos;re looking for may have moved, or never existed. Let&apos;s get you
          back on track.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-md bg-gold px-6 py-3 font-semibold text-[#17140c]"
        >
          Back to homepage
        </Link>
      </div>
    </section>
  );
}
