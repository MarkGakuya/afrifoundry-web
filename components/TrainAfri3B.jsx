"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const WELCOME = {
  role: "afri3b",
  text: "Teach me a word or phrase I'm still learning, correct something I got wrong, or just leave feedback. Every message here goes straight into the training pipeline, reviewed before it's used.",
};

export default function TrainAfri3B() {
  const [consented, setConsented] = useState(false);
  const [messages, setMessages] = useState([WELCOME]);
  const [input, setInput] = useState("");
  const [company, setCompany] = useState(""); // honeypot, invisible to real users
  const [sending, setSending] = useState(false);
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
      const res = await fetch("/api/contribute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, consent: consented, company }),
      });
      const data = await res.json();

      if (!res.ok) {
        setMessages((m) => [...m, { role: "system", text: data.error || "Couldn't send that — try again." }]);
      } else if (data.reply) {
        setMessages((m) => [...m, { role: "afri3b", text: data.reply }]);
      } else {
        setMessages((m) => [...m, { role: "system", text: "Logged for review — thank you." }]);
      }
    } catch {
      setMessages((m) => [...m, { role: "system", text: "Couldn't reach the server — try again." }]);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="mt-6 max-w-md">
      {/* Pre-statement / consent */}
      <div className="rounded-md border border-line bg-bg-raised p-5">
        <p className="text-sm font-semibold text-ink">Before you start</p>
        <p className="mt-2 text-sm text-ink-dim">
          Anything sent here may be reviewed and used to train Afri3B. Don&apos;t share personal
          or private information about yourself or anyone else, or text you don&apos;t have the
          right to share. By continuing, you&apos;re confirming this is your own knowledge and
          you&apos;re comfortable with AfriFoundry using it to train Afri3B, per our{" "}
          <Link href="/privacy" className="text-gold underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms" className="text-gold underline">
            Terms
          </Link>
          .
        </p>
        <label className="mt-4 flex items-start gap-2 text-sm text-ink">
          <input
            type="checkbox"
            checked={consented}
            onChange={(e) => setConsented(e.target.checked)}
            className="mt-0.5"
          />
          I understand and agree.
        </label>
      </div>

      {/* Chat widget */}
      <div
        className={`mt-4 overflow-hidden rounded-md border border-line transition-opacity ${
          consented ? "opacity-100" : "pointer-events-none opacity-40"
        }`}
      >
        <div className="max-h-80 space-y-3 overflow-y-auto bg-bg p-4">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${
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
        <div className="flex gap-2 border-t border-line bg-bg-raised p-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Teach Afri3B something…"
            disabled={!consented}
            className="flex-1 rounded-md border border-line bg-bg px-3 py-2 text-sm"
          />
          {/* Honeypot — hidden from real users, bots often fill every field */}
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
            disabled={!consented || sending}
            className="rounded-md bg-gold px-4 py-2 text-sm font-semibold text-[#17140c] disabled:opacity-60"
          >
            {sending ? "…" : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
}
