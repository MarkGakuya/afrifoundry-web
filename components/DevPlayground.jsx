"use client";

import { useEffect, useRef, useState } from "react";

export default function DevPlayground() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [company, setCompany] = useState("");
  const [sending, setSending] = useState(false);
  const [showRaw, setShowRaw] = useState(true);
  const sessionId = useRef(
    typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}`
  );
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [messages]);

  async function send() {
    const text = input.trim();
    if (!text || sending) return;

    const requestBody = {
      message: text,
      sessionId: sessionId.current,
      source: "developer-playground",
    };

    setMessages((m) => [...m, { role: "request", body: requestBody }]);
    setInput("");
    setSending(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...requestBody, company }),
      });
      const data = await res.json();
      setMessages((m) => [...m, { role: "response", ok: res.ok, body: data }]);
    } catch {
      setMessages((m) => [...m, { role: "response", ok: false, body: { error: "Network error." } }]);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="mt-6 max-w-2xl xl:max-w-3xl">
      <div className="flex items-center justify-between">
        <p className="text-sm text-ink-dim">
          Live against the same backend as the website and WhatsApp — real requests, real
          responses.
        </p>
        <button
          onClick={() => setShowRaw((s) => !s)}
          className="whitespace-nowrap rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-ink-dim hover:text-ink"
        >
          {showRaw ? "Hide raw JSON" : "Show raw JSON"}
        </button>
      </div>

      <div className="mt-3 overflow-hidden rounded-md border border-line">
        <div className="max-h-96 space-y-3 overflow-y-auto bg-bg p-4">
          {messages.length === 0 && (
            <p className="text-sm italic text-ink-dim">Send a message below to see it flow through /api/chat.</p>
          )}
          {messages.map((m, i) =>
            showRaw ? (
              <div key={i}>
                <div className="mb-1 font-mono text-xs font-semibold tracking-wide text-gold">
                  {m.role === "request" ? "REQUEST" : m.ok ? "RESPONSE" : "ERROR"}
                </div>
                <pre className="overflow-x-auto rounded-md border border-line bg-bg-raised p-3 text-xs text-ink">
                  {JSON.stringify(m.body, null, 2)}
                </pre>
              </div>
            ) : (
              <div key={i} className={`flex ${m.role === "request" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${
                    m.role === "request"
                      ? "bg-gold text-[#17140c]"
                      : m.ok
                      ? "bg-bg-raised text-ink"
                      : "bg-transparent text-xs italic text-ink-dim"
                  }`}
                >
                  {m.role === "request" ? m.body.message : m.body.reply || m.body.error}
                </div>
              </div>
            )
          )}
          <div ref={endRef} />
        </div>
        <div className="flex gap-2 border-t border-line bg-bg-raised p-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Try a query…"
            className="flex-1 rounded-md border border-line bg-bg px-3 py-2 text-sm"
          />
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />
          <button
            onClick={send}
            disabled={sending}
            className="rounded-md bg-gold px-4 py-2 text-sm font-semibold text-[#17140c] disabled:opacity-60"
          >
            {sending ? "…" : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
}
