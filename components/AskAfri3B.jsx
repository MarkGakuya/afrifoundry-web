"use client";

import { useEffect, useRef, useState } from "react";

const WELCOME = {
  role: "afri3b",
  text: "Ask me something real — a market question, a project idea, a word in Swahili. No account needed here.",
};

export default function AskAfri3B() {
  const [messages, setMessages] = useState([WELCOME]);
  const [input, setInput] = useState("");
  const [company, setCompany] = useState("");
  const [sending, setSending] = useState(false);
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

    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    setSending(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          sessionId: sessionId.current,
          source: "website",
          company,
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        setMessages((m) => [
          ...m,
          { role: "system", text: data.error || "Something went wrong — try again." },
        ]);
      } else {
        setMessages((m) => [...m, { role: "afri3b", text: data.reply }]);
      }
    } catch {
      setMessages((m) => [...m, { role: "system", text: "Couldn't reach Afri3B — try again." }]);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-line">
      <div className="flex items-center gap-2 border-b border-line bg-bg-raised px-4 py-3">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
        </span>
        <span className="text-sm font-semibold text-ink">Ask Afri3B</span>
        <span className="ml-auto font-mono text-xs text-ink-dim">the actual product</span>
      </div>

      <div className="max-h-72 space-y-3 overflow-y-auto bg-bg p-4 lg:max-h-[22rem] lg:p-5">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[85%] rounded-lg px-3 py-2 text-sm lg:px-4 lg:py-2.5 lg:text-[0.95rem] ${
                m.role === "user"
                  ? "bg-gold text-[#17140c]"
                  : m.role === "system"
                  ? "bg-transparent text-xs italic text-ink-dim"
                  : "bg-bg-raised text-ink"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
        <div ref={endRef} />
      </div>

      <div className="flex gap-2 border-t border-line bg-bg-raised p-3 lg:p-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Ask something…"
          className="flex-1 rounded-md border border-line bg-bg px-3 py-2 text-sm lg:px-4 lg:py-2.5 lg:text-[0.95rem]"
        />
        {/* Honeypot */}
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
  );
}
