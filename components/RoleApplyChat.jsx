"use client";

import { useEffect, useRef, useState } from "react";

export default function RoleApplyChat({ role }) {
  const [started, setStarted] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "afri3b",
      text: `Tell me a bit about yourself and why the ${role} role caught your eye. This becomes part of your application — a person reads it after.`,
    },
  ]);
  const [input, setInput] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [sending, setSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle"); // idle | submitting | submitted | error
  const [submitError, setSubmitError] = useState("");
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
          source: "team-application",
          context: `Applicant conversation for the "${role}" role at AfriFoundry.`,
          company,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setMessages((m) => [...m, { role: "system", text: data.error || "Couldn't send that — try again." }]);
      } else {
        setMessages((m) => [...m, { role: "afri3b", text: data.reply }]);
      }
    } catch {
      setMessages((m) => [...m, { role: "system", text: "Couldn't reach the server — try again." }]);
    } finally {
      setSending(false);
    }
  }

  async function submitApplication() {
    if (submitStatus === "submitting") return;
    setSubmitStatus("submitting");
    setSubmitError("");
    try {
      const res = await fetch("/api/team/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          role,
          email,
          transcript: messages.filter((m) => m.role === "user" || m.role === "afri3b"),
          company,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setSubmitStatus("error");
        setSubmitError(data.error || "Something went wrong.");
        return;
      }
      setSubmitStatus("submitted");
    } catch {
      setSubmitStatus("error");
      setSubmitError("Couldn't reach the server.");
    }
  }

  if (!started) {
    return (
      <button
        onClick={() => setStarted(true)}
        className="rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-[#17140c]"
      >
        Start application conversation
      </button>
    );
  }

  if (submitStatus === "submitted") {
    return (
      <div className="max-w-md rounded-md border border-line bg-bg-raised p-5">
        <p className="text-sm font-semibold text-ink">Sent — thank you.</p>
        <p className="mt-2 text-sm text-ink-dim">
          A human reads every application personally. You&apos;ll hear back directly.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-md">
      <div className="overflow-hidden rounded-md border border-line">
        <div className="max-h-72 space-y-3 overflow-y-auto bg-bg p-4">
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
            placeholder="Type your reply…"
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

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email (so we can reply)"
          className="min-w-[200px] flex-1 rounded-md border border-line bg-bg-raised px-3 py-2 text-sm"
        />
        <button
          onClick={submitApplication}
          disabled={submitStatus === "submitting" || messages.filter((m) => m.role === "user").length === 0}
          className="rounded-md border border-line px-4 py-2 text-sm font-semibold text-ink disabled:opacity-60"
        >
          {submitStatus === "submitting" ? "Sending…" : "Submit application"}
        </button>
      </div>
      {submitStatus === "error" && <p className="mt-2 text-sm text-red-400">{submitError}</p>}
    </div>
  );
}
