"use client";

import { useEffect, useRef, useState } from "react";

const ORDER_OPTIONS = [
  "Less than 100 orders/month",
  "100–500 orders/month",
  "500–1,000 orders/month",
  "1,000–5,000 orders/month",
  "5,000+ orders/month",
];

function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  required = false,
}: {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "#8892A4", letterSpacing: "0.04em" }}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: "100%",
          background: "rgba(13,15,28,0.8)",
          border: focused ? "1px solid rgba(124,58,237,0.6)" : "1px solid rgba(30,34,53,0.9)",
          borderRadius: "10px",
          padding: "12px 16px",
          fontSize: "0.875rem",
          color: "white",
          outline: "none",
          transition: "border-color 0.2s ease, box-shadow 0.2s ease",
          boxShadow: focused ? "0 0 0 3px rgba(124,58,237,0.12)" : "none",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "#8892A4", letterSpacing: "0.04em" }}>
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: "100%",
          background: "rgba(13,15,28,0.9)",
          border: focused ? "1px solid rgba(124,58,237,0.6)" : "1px solid rgba(30,34,53,0.9)",
          borderRadius: "10px",
          padding: "12px 16px",
          fontSize: "0.875rem",
          color: value ? "white" : "#8892A4",
          outline: "none",
          appearance: "none",
          cursor: "pointer",
          transition: "border-color 0.2s ease, box-shadow 0.2s ease",
          boxShadow: focused ? "0 0 0 3px rgba(124,58,237,0.12)" : "none",
          boxSizing: "border-box",
        }}
      >
        <option value="" disabled style={{ background: "#0D0F1C" }}>Select monthly orders</option>
        {options.map((o) => (
          <option key={o} value={o} style={{ background: "#0D0F1C" }}>{o}</option>
        ))}
      </select>
    </div>
  );
}

export default function Waitlist() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [fullName, setFullName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [website, setWebsite] = useState("");
  const [orders, setOrders] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: "jupiter-chat",
          name: fullName,
          brand: brandName,
          website,
          monthlyOrders: orders,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setStatus("success");
        setMessage("You're on the list. We'll be in touch when Jupiter Chat launches.");
        setFullName(""); setBrandName(""); setWebsite(""); setOrders(""); setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="waitlist"
      ref={sectionRef}
      style={{
        position: "relative",
        backgroundColor: "#08090A",
        padding: "100px 24px",
        overflow: "hidden",
        borderTop: "1px solid rgba(30,34,53,0.6)",
      }}
    >
      <style>{`
        @keyframes wlGlow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>

      {/* Ambient glows */}
      <div style={{
        position: "absolute", top: "0", left: "50%",
        transform: "translateX(-50%)",
        width: "800px", height: "400px",
        background: "radial-gradient(ellipse at top, rgba(124,58,237,0.1) 0%, transparent 60%)",
        filter: "blur(80px)", pointerEvents: "none",
        animation: "wlGlow 5s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", bottom: 0, right: "10%",
        width: "400px", height: "300px",
        background: "radial-gradient(ellipse at bottom, rgba(124,58,237,0.06) 0%, transparent 65%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "680px", margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div style={{
          textAlign: "center", marginBottom: "52px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}>
          <p style={{
            fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em",
            textTransform: "uppercase", color: "#7C3AED", marginBottom: "16px",
          }}>
            EARLY ACCESS
          </p>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800,
            color: "white", lineHeight: 1.2, letterSpacing: "-0.02em",
            margin: "0 0 16px 0",
          }}>
            Be first when{" "}
            <span style={{
              background: "linear-gradient(135deg, #7C3AED, #A78BFA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Jupiter Chat
            </span>{" "}launches
          </h2>
          <p style={{ fontSize: "0.95rem", color: "#8892A4", lineHeight: 1.7, margin: 0 }}>
            Join the early access list to receive launch updates, product previews, and first access when Jupiter Chat becomes available.
          </p>
        </div>

        {/* Glass form card */}
        <div style={{
          background: "rgba(13,15,28,0.75)",
          border: "1px solid rgba(124,58,237,0.2)",
          borderRadius: "24px",
          padding: "40px",
          backdropFilter: "blur(20px)",
          boxShadow: "0 0 60px rgba(124,58,237,0.1), 0 40px 80px rgba(0,0,0,0.5)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
        }}>
          {status === "success" ? (
            <div style={{ textAlign: "center", padding: "32px 0" }}>
              <div style={{
                width: "64px", height: "64px", borderRadius: "18px",
                background: "linear-gradient(135deg, rgba(124,58,237,0.8), rgba(167,139,250,0.6))",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.8rem", margin: "0 auto 20px",
                boxShadow: "0 0 32px rgba(124,58,237,0.4)",
              }}>
                ✦
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "white", margin: "0 0 10px 0" }}>
                You're on the list.
              </h3>
              <p style={{ fontSize: "0.875rem", color: "#8892A4", margin: 0 }}>{message}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}
                className="waitlist-two-col"
              >
                <Input label="Full Name" placeholder="Your name" value={fullName} onChange={setFullName} required />
                <Input label="Brand Name" placeholder="Your brand" value={brandName} onChange={setBrandName} required />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}
                className="waitlist-two-col"
              >
                <Input label="Website URL" placeholder="yourstore.com" value={website} onChange={setWebsite} />
                <Select label="Monthly Orders" value={orders} onChange={setOrders} options={ORDER_OPTIONS} />
              </div>
              <Input label="Work Email" placeholder="you@brand.com" type="email" value={email} onChange={setEmail} required />

              <button
                type="submit"
                disabled={status === "loading"}
                style={{
                  width: "100%", padding: "14px 24px",
                  background: status === "loading" ? "rgba(124,58,237,0.5)" : "#7C3AED",
                  border: "none", borderRadius: "10px",
                  fontSize: "0.95rem", fontWeight: 600,
                  color: "white", cursor: status === "loading" ? "not-allowed" : "pointer",
                  transition: "all 0.25s ease",
                  boxShadow: status === "loading" ? "none" : "0 0 28px rgba(124,58,237,0.35)",
                  marginTop: "4px",
                }}
                onMouseEnter={(e) => {
                  if (status !== "loading") {
                    (e.currentTarget as HTMLButtonElement).style.background = "#6D28D9";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 44px rgba(124,58,237,0.5)";
                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                  }
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "#7C3AED";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 28px rgba(124,58,237,0.35)";
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                }}
              >
                {status === "loading" ? "Joining..." : "Join The Waitlist →"}
              </button>

              {status === "error" && (
                <p style={{ fontSize: "0.85rem", color: "#F87171", textAlign: "center", margin: 0 }}>
                  {message}
                </p>
              )}

              <p style={{ fontSize: "0.75rem", color: "#8892A4", textAlign: "center", margin: 0 }}>
                Early access only · Built for fashion brands · No spam
              </p>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .waitlist-two-col {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
