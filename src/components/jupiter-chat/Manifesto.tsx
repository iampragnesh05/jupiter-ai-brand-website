"use client";

import { useEffect, useRef, useState } from "react";

const CONTRASTS = [
  { bad: "Answers questions", good: "Understands context" },
  { bad: "Generic templates", good: "Fashion-aware conversations" },
  { bad: "Disconnected tools", good: "One connected AI system" },
  { bad: "English only", good: "Multilingual by default" },
];

export default function Manifesto() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
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
        @keyframes manifestoGlow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
      `}</style>

      {/* Deep glow */}
      <div style={{
        position: "absolute", top: "40%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "900px", height: "500px",
        background: "radial-gradient(ellipse at center, rgba(124,58,237,0.09) 0%, transparent 65%)",
        filter: "blur(80px)", pointerEvents: "none",
        animation: "manifestoGlow 6s ease-in-out infinite",
      }} />

      {/* Grid lines */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `
          linear-gradient(rgba(124,58,237,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(124,58,237,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }} />

      <div style={{ maxWidth: "1000px", margin: "0 auto", position: "relative" }}>
        {/* Label */}
        <div style={{
          textAlign: "center", marginBottom: "48px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}>
          <p style={{
            fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em",
            textTransform: "uppercase", color: "#7C3AED",
          }}>
            WHY JUPITER CHAT
          </p>
        </div>

        {/* Manifesto headline */}
        <div style={{
          textAlign: "center", marginBottom: "64px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
        }}>
          <h2 style={{
            fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
            fontWeight: 900,
            color: "white",
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            margin: "0 0 24px 0",
          }}>
            Most support tools answer questions.{" "}
            <span style={{ display: "block", marginTop: "4px" }}>
              Jupiter Chat{" "}
              <span style={{
                background: "linear-gradient(135deg, #7C3AED, #A78BFA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                understands the customer journey.
              </span>
            </span>
          </h2>
          <p style={{
            fontSize: "1.05rem", color: "#8892A4",
            lineHeight: 1.75, maxWidth: "640px", margin: "0 auto",
          }}>
            Generic chatbots struggle with operational context, product understanding, and fashion specific conversations. Jupiter Chat is designed around how fashion brands actually interact with customers.
          </p>
        </div>

        {/* Contrast table */}
        <div style={{
          background: "rgba(13,15,28,0.7)",
          border: "1px solid rgba(124,58,237,0.2)",
          borderRadius: "20px",
          overflow: "hidden",
          backdropFilter: "blur(16px)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s",
        }}>
          {/* Header row */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 48px 1fr",
            borderBottom: "1px solid rgba(30,34,53,0.8)",
          }}>
            <div style={{
              padding: "14px 24px",
              background: "rgba(30,34,53,0.4)",
              borderRight: "1px solid rgba(30,34,53,0.6)",
            }}>
              <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", color: "#8892A4", textTransform: "uppercase" }}>
                Generic Chatbot
              </span>
            </div>
            <div style={{ background: "rgba(30,34,53,0.4)", borderRight: "1px solid rgba(30,34,53,0.6)" }} />
            <div style={{ padding: "14px 24px", background: "rgba(124,58,237,0.08)" }}>
              <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", color: "#7C3AED", textTransform: "uppercase" }}>
                Jupiter Chat
              </span>
            </div>
          </div>

          {/* Contrast rows */}
          {CONTRASTS.map((row, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 48px 1fr",
                borderBottom: i < CONTRASTS.length - 1 ? "1px solid rgba(30,34,53,0.5)" : "none",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(10px)",
                transition: `opacity 0.5s ease ${0.35 + i * 0.08}s, transform 0.5s ease ${0.35 + i * 0.08}s`,
              }}
            >
              <div style={{
                padding: "18px 24px",
                borderRight: "1px solid rgba(30,34,53,0.5)",
                display: "flex", alignItems: "center", gap: "10px",
              }}>
                <span style={{ color: "#FF5F57", fontSize: "0.75rem" }}>✕</span>
                <span style={{ fontSize: "0.875rem", color: "#8892A4" }}>{row.bad}</span>
              </div>
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                borderRight: "1px solid rgba(30,34,53,0.5)",
                background: "rgba(13,15,28,0.5)",
              }}>
                <span style={{ fontSize: "0.75rem", color: "#7C3AED" }}>→</span>
              </div>
              <div style={{
                padding: "18px 24px",
                background: "rgba(124,58,237,0.04)",
                display: "flex", alignItems: "center", gap: "10px",
              }}>
                <span style={{ color: "#10B981", fontSize: "0.75rem" }}>✓</span>
                <span style={{ fontSize: "0.875rem", color: "white", fontWeight: 500 }}>{row.good}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
