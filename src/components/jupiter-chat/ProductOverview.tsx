"use client";

import { useEffect, useRef, useState } from "react";

const NODES = [
  { label: "Product Catalogue", icon: "📦", x: 12, y: 20 },
  { label: "Customer Profile", icon: "👤", x: 75, y: 12 },
  { label: "Order History", icon: "🧾", x: 88, y: 58 },
  { label: "Support Tickets", icon: "🎫", x: 60, y: 80 },
  { label: "Brand Voice", icon: "✦", x: 20, y: 72 },
];

export default function ProductOverview() {
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
        @keyframes nodeFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes linePulse {
          0% { opacity: 0.2; }
          50% { opacity: 0.7; }
          100% { opacity: 0.2; }
        }
        @keyframes overviewFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes centralGlow {
          0%, 100% { box-shadow: 0 0 30px rgba(124,58,237,0.3), 0 0 60px rgba(124,58,237,0.15); }
          50% { box-shadow: 0 0 50px rgba(124,58,237,0.5), 0 0 100px rgba(124,58,237,0.25); }
        }
      `}</style>

      {/* Background glow */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "800px", height: "400px",
        background: "radial-gradient(ellipse at center, rgba(124,58,237,0.07) 0%, transparent 65%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div style={{
          textAlign: "center", marginBottom: "72px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}>
          <p style={{
            fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em",
            textTransform: "uppercase", color: "#7C3AED", marginBottom: "16px",
          }}>
            PRODUCT OVERVIEW
          </p>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800,
            color: "white", lineHeight: 1.2, letterSpacing: "-0.02em",
            marginBottom: "20px",
          }}>
            AI that understands your{" "}
            <span style={{
              background: "linear-gradient(135deg, #7C3AED, #A78BFA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              brand and customers
            </span>
          </h2>
          <p style={{
            fontSize: "1.05rem", color: "#8892A4", lineHeight: 1.75,
            maxWidth: "560px", margin: "0 auto",
          }}>
            Jupiter Chat helps fashion brands handle customer conversations more efficiently without losing brand consistency or support quality.
          </p>
        </div>

        {/* Visual */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "center",
        }}
          className="overview-grid"
        >
          {/* Left — workflow visual */}
          <div style={{
            position: "relative",
            height: "400px",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.8s ease 0.2s",
          }}>
            {/* Connection lines to center */}
            <svg
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {NODES.map((node, i) => (
                <line
                  key={i}
                  x1={`${node.x}%`} y1={`${node.y}%`}
                  x2="50%" y2="50%"
                  stroke="rgba(124,58,237,0.3)"
                  strokeWidth="0.4"
                  strokeDasharray="2,2"
                  style={{ animation: `linePulse ${2 + i * 0.4}s ease-in-out infinite` }}
                />
              ))}
            </svg>

            {/* Satellite nodes */}
            {NODES.map((node, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  transform: "translate(-50%, -50%)",
                  background: "rgba(13,15,28,0.9)",
                  border: "1px solid rgba(124,58,237,0.3)",
                  borderRadius: "12px",
                  padding: "8px 12px",
                  display: "flex", alignItems: "center", gap: "6px",
                  backdropFilter: "blur(12px)",
                  animation: `nodeFloat ${3.5 + i * 0.5}s ease-in-out ${i * 0.3}s infinite`,
                  whiteSpace: "nowrap",
                }}
              >
                <span style={{ fontSize: "0.85rem" }}>{node.icon}</span>
                <span style={{ fontSize: "0.72rem", color: "#C7D4F0", fontWeight: 500 }}>{node.label}</span>
              </div>
            ))}

            {/* Central node */}
            <div style={{
              position: "absolute", left: "50%", top: "50%",
              transform: "translate(-50%, -50%)",
              width: "80px", height: "80px",
              borderRadius: "20px",
              background: "linear-gradient(135deg, rgba(124,58,237,0.8), rgba(167,139,250,0.6))",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1.5rem",
              animation: "centralGlow 3s ease-in-out infinite",
              boxShadow: "0 0 40px rgba(124,58,237,0.4)",
            }}>
              ✦
            </div>
          </div>

          {/* Right — text content */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(30px)",
            transition: "opacity 0.8s ease 0.35s, transform 0.8s ease 0.35s",
          }}>
            {[
              {
                icon: "◈",
                title: "Learns your catalogue instantly",
                desc: "Connect your store and Jupiter Chat maps every product, collection, price, and availability in real time.",
              },
              {
                icon: "◈",
                title: "Maintains brand voice",
                desc: "Every response sounds like your brand — not a generic bot. Customise tone, language, and escalation rules.",
              },
              {
                icon: "◈",
                title: "Handles the full conversation",
                desc: "From first question to order confirmation, Jupiter Chat manages the complete customer journey automatically.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex", gap: "16px", marginBottom: "32px",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 0.6s ease ${0.4 + i * 0.15}s, transform 0.6s ease ${0.4 + i * 0.15}s`,
                }}
              >
                <span style={{
                  color: "#7C3AED", fontSize: "1.1rem", marginTop: "2px", flexShrink: 0,
                }}>
                  {item.icon}
                </span>
                <div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "white", marginBottom: "6px", margin: "0 0 6px 0" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "#8892A4", lineHeight: 1.7, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .overview-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
