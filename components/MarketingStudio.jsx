"use client";

import { useEffect, useState } from "react";

const PLATFORMS = ["LinkedIn", "X", "Instagram", "WhatsApp Channel", "Newsletter"];
const STORAGE_KEY = "af_marketing_drafts";

function buildContext(platform) {
  return (
    `Marketing agent context: draft a ${platform} post for AfriFoundry. ` +
    `Voice: honest, no hype, matches AfriFoundry's website tone exactly — plain language, ` +
    `never fabricate metrics or claims, "earned not claimed." Length and format appropriate for ${platform}.`
  );
}

export default function MarketingStudio() {
  const [platform, setPlatform] = useState(PLATFORMS[0]);
  const [brief, setBrief] = useState("");
  const [draft, setDraft] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [saved, setSaved] = useState([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setSaved(JSON.parse(raw));
    } catch {
      // ignore — empty state is fine
    }
  }, []);

  function persist(next) {
    setSaved(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // storage full or unavailable — not fatal, just won't persist
    }
  }

  async function generate() {
    if (!brief.trim() || sending) return;
    setSending(true);
    setError("");
    setDraft("");
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: brief.trim(),
          source: "marketing-studio",
          context: buildContext(platform),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        return;
      }
      setDraft(data.reply);
    } catch {
      setError("Couldn't reach Afri3B.");
    } finally {
      setSending(false);
    }
  }

  function copyDraft() {
    navigator.clipboard?.writeText(draft);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  function saveDraft() {
    if (!draft) return;
    const next = [{ id: Date.now(), platform, brief, draft, savedAt: new Date().toISOString() }, ...saved];
    persist(next);
  }

  function deleteDraft(id) {
    persist(saved.filter((d) => d.id !== id));
  }

  return (
    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr]">
      {/* Draft composer */}
      <div>
        <div className="mb-3 font-mono text-xs font-semibold tracking-wide text-gold">DRAFT</div>
        <div className="flex flex-wrap gap-2">
          {PLATFORMS.map((p) => (
            <button
              key={p}
              onClick={() => setPlatform(p)}
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                platform === p ? "border-gold bg-gold text-[#17140c]" : "border-line text-ink-dim hover:text-ink"
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        <textarea
          value={brief}
          onChange={(e) => setBrief(e.target.value)}
          rows={3}
          placeholder="What's this post about? e.g. 'Announce the investor dashboard going live'"
          className="mt-4 w-full rounded-md border border-line bg-bg-raised px-3 py-2.5 text-sm"
        />
        <button
          onClick={generate}
          disabled={!brief.trim() || sending}
          className="mt-3 rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-[#17140c] disabled:opacity-60"
        >
          {sending ? "Drafting…" : `Draft for ${platform}`}
        </button>
        {error && <p className="mt-2 text-sm text-red-400">{error}</p>}

        {draft && (
          <div className="mt-5 rounded-md border border-line bg-bg-raised p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-mono text-xs text-ink-dim">{platform} — DRAFT</span>
              <div className="flex gap-2">
                <button onClick={copyDraft} className="text-xs font-semibold text-gold hover:underline">
                  {copied ? "Copied" : "Copy"}
                </button>
                <button onClick={saveDraft} className="text-xs font-semibold text-gold hover:underline">
                  Save
                </button>
              </div>
            </div>
            <p className="whitespace-pre-wrap text-sm text-ink">{draft}</p>
            <p className="mt-3 text-xs italic text-ink-dim">
              A draft, not a scheduled post — review it, edit it if needed, then post it yourself.
            </p>
          </div>
        )}
      </div>

      {/* Saved drafts + analytics placeholder */}
      <div>
        <div className="mb-3 font-mono text-xs font-semibold tracking-wide text-gold">
          SAVED DRAFTS ({saved.length})
        </div>
        {saved.length === 0 ? (
          <p className="text-sm text-ink-dim">Nothing saved yet — drafts you save appear here.</p>
        ) : (
          <div className="space-y-3">
            {saved.map((d) => (
              <div key={d.id} className="rounded-md border border-line bg-bg-raised p-3">
                <div className="mb-1 flex items-center justify-between">
                  <span className="font-mono text-xs text-gold">{d.platform}</span>
                  <button
                    onClick={() => deleteDraft(d.id)}
                    className="text-xs text-ink-dim hover:text-ink"
                  >
                    Remove
                  </button>
                </div>
                <p className="text-sm text-ink-dim line-clamp-3">{d.draft}</p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 border-t border-line pt-6">
          <div className="mb-2 font-mono text-xs font-semibold tracking-wide text-gold">ANALYTICS</div>
          <p className="max-w-[50ch] text-sm text-ink-dim">
            Not connected — real per-platform analytics need that platform&apos;s own API
            (LinkedIn, X, Instagram Graph API each require their own app review and access
            token). Nothing fabricated to fill the gap. See{" "}
            <code className="text-xs">BACKEND_REQUIREMENTS.md</code> once those are ready to
            wire in.
          </p>
        </div>
      </div>
    </div>
  );
}
