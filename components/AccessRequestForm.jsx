"use client";

import { useState } from "react";

export default function AccessRequestForm({ purpose, ctaLabel }) {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  async function submit() {
    if (status === "sending" || !email.trim()) return;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/access/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), purpose, company }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setError(data.error || "Something went wrong.");
        return;
      }
      setStatus("sent");
    } catch {
      setStatus("error");
      setError("Couldn't reach the server.");
    }
  }

  if (status === "sent") {
    return (
      <div className="mt-6 max-w-md rounded-md border border-line bg-bg-raised p-5">
        <p className="text-sm font-semibold text-ink">Check your email.</p>
        <p className="mt-2 text-sm text-ink-dim">
          A verification link was sent to {email}. It expires in 15 minutes.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6 flex max-w-md flex-wrap items-start gap-3">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && submit()}
        placeholder="you@email.com"
        className="min-w-[220px] flex-1 rounded-md border border-line bg-bg-raised px-3 py-2.5 text-sm"
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
        onClick={submit}
        disabled={status === "sending" || !email.trim()}
        className="rounded-md bg-gold px-6 py-3 font-semibold text-[#17140c] disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : ctaLabel}
      </button>
      {status === "error" && <p className="w-full text-sm text-red-400">{error}</p>}
    </div>
  );
}
