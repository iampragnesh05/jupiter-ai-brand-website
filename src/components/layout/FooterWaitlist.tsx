"use client";

import { useState } from "react";

export default function FooterWaitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "footer" }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else if (response.status === 409) {
        setStatus("error");
        setErrorMessage("You're already subscribed!");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to subscribe. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex items-center gap-2 text-sm text-green-400">
        <span>✓</span>
        <span>You are on the list</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="w-full bg-[rgba(19,22,32,0.8)] border border-border rounded-lg px-3.5 py-2.5 text-sm text-white outline-none placeholder-muted focus:border-purple transition-colors"
        disabled={status === "loading"}
        required
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full text-white border-none rounded-lg px-5 py-2.5 text-sm font-medium cursor-pointer transition-colors disabled:opacity-60"
        style={{ backgroundColor: '#6D28D9' }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#5B21B6'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#6D28D9'}
      >
        {status === "loading" ? (
          <span className="flex items-center justify-center gap-2">
            <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
            Subscribing...
          </span>
        ) : (
          "Get notified"
        )}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-400">{errorMessage || "Try again"}</p>
      )}
    </form>
  );
}
