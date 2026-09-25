import { cookies } from "next/headers";
import Link from "next/link";
import { verifyToken } from "@/lib/jwt";
import DevPlayground from "@/components/DevPlayground";

export const metadata = { title: "Developer Playground — AfriFoundry" };

export default function DeveloperPlayground() {
  const secret = process.env.ACCESS_AUTH_SECRET;
  const token = cookies().get("af_developer_session")?.value;
  const payload = token && secret ? verifyToken(token, secret) : null;

  if (!payload || payload.purpose !== "developer") {
    return (
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:max-w-6xl xl:max-w-7xl xl:px-10">
          <div className="mb-3 font-mono text-xs font-semibold tracking-wide text-gold">
            NOT VERIFIED
          </div>
          <h1 className="font-display text-3xl font-bold md:text-4xl">
            That link expired or isn&apos;t valid.
          </h1>
          <p className="mt-4 max-w-[55ch] text-ink-dim">
            Request a fresh one — links are only good for 15 minutes.
          </p>
          <Link
            href="/developers"
            className="mt-6 inline-block rounded-md bg-gold px-6 py-3 font-semibold text-[#17140c]"
          >
            Back to Developers
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:max-w-6xl xl:max-w-7xl xl:px-10">
        <div className="mb-3 font-mono text-xs font-semibold tracking-wide text-gold">
          VERIFIED — DEVELOPER PLAYGROUND
        </div>
        <h1 className="max-w-[26ch] font-display text-3xl font-bold md:text-4xl">
          Try Afri3B live, {payload.email}.
        </h1>
        <DevPlayground />
      </div>
    </section>
  );
}
