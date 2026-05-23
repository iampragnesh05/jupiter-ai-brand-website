"use client";

import { useEffect, useRef, useState } from "react";

const FEATURES = [
  {
    icon: "📦",
    tag: "01",
    title: "Catalogue Intelligence",
    desc: "Jupiter Chat understands your products, pricing, collections, and availability directly from your store.",
    bullets: ["Real-time inventory sync", "Collection-aware answers", "Price & variant detection"],
    accent: "rgba(124,58,237,0.15)",
  },
  {
    icon: "📡",
    tag: "02",
    title: "Multichannel Support",
    desc: "Support customers across website, WhatsApp, Instagram, and future channels using one connected AI system.",
    bullets: ["Single AI, multiple touchpoints", "Unified conversation history", "Channel-specific tone tuning"],
    accent: "rgba(99,102,241,0.12)",
  },
  {
    icon: "👗",
    tag: "03",
    title: "Fashion Aware Conversations",
    desc: "Handle sizing questions, product recommendations, delivery updates, and customer support automatically.",
    bullets: ["Size guide integration", "Style recommendations", "Order & delivery answers"],
    accent: "rgba(139,92,246,0.12)",
  },
  {
    icon: "🌐",
    tag: "04",
    title: "Multilingual Support",
    desc: "Built for modern ecommerce brands with support for Hindi, English, Tamil, Telugu, and more.",
    bullets: ["Auto language detection", "Regional tone matching", "Multi-language catalogue"],
    accent: "rgba(124,58,237,0.1)",
  },
];

function FeatureCard({ feature, index, visible }: {
  feature: typeof FEATURES[0];
  index: number;
  visible: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: hovered
          ? "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(13,15,28,0.95) 100%)"
          : "rgba(13,15,28,0.7)",
        border: hovered ? "1px solid rgba(124,58,237,0.4)" : "1px solid rgba(30,34,53,0.8)",
        borderRadius: "20px",
        padding: "32px",
        backdropFilter: "blur(16px)",
        transition: "all 0.35s ease",
        boxShadow: hovered
          ? "0 0 0 1px rgba(124,58,237,0.2), 0 20px 60px rgba(124,58,237,0.15), 0 0 80px rgba(124,58,237,0.08)"
          : "0 4px 24px rgba(0,0,0,0.4)",
        cursor: "default",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        animationDelay: `${index * 80}ms`,
        transitionDelay: visible ? `${index * 80}ms` : "0ms",
        overflow: "hidden",
      }}
    >
      {/* Glow blob on hover */}
      {hovered && (
        <div style={{
          position: "absolute", top: "-40px", right: "-40px",
          width: "160px", height: "160px",
          background: "radial-gradient(ellipse at center, rgba(124,58,237,0.25) 0%, transparent 65%)",
          pointerEvents: "none",
          filter: "blur(20px)",
        }} />
      )}

      {/* Tag */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        marginBottom: "20px",
      }}>
        <div style={{
          width: "48px", height: "48px", borderRadius: "14px",
          background: feature.accent,
          border: "1px solid rgba(124,58,237,0.25)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1.35rem",
          transition: "transform 0.3s ease",
          transform: hovered ? "scale(1.1) rotate(-4deg)" : "scale(1)",
        }}>
          {feature.icon}
        </div>
        <span style={{
          fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em",
          color: "rgba(124,58,237,0.6)", fontFamily: "monospace",
        }}>
          {feature.tag}
        </span>
      </div>

      <h3 style={{
        fontSize: "1.1rem", fontWeight: 700,
        color: hovered ? "white" : "#C7D4F0",
        marginBottom: "12px", margin: "0 0 12px 0",
        transition: "color 0.2s ease",
        letterSpacing: "-0.01em",
      }}>
        {feature.title}
      </h3>

      <p style={{
        fontSize: "0.875rem", color: "#8892A4",
        lineHeight: 1.7, margin: "0 0 20px 0",
      }}>
        {feature.desc}
      </p>

      {/* Bullets */}
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        {feature.bullets.map((b) => (
          <div key={b} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{
              width: "5px", height: "5px", borderRadius: "50%",
              background: "#7C3AED", flexShrink: 0,
              boxShadow: hovered ? "0 0 6px rgba(124,58,237,0.8)" : "none",
              transition: "box-shadow 0.3s ease",
            }} />
            <span style={{ fontSize: "0.8rem", color: "#8892A4" }}>{b}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Features() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08 }
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
      {/* Background glows */}
      <div style={{
        position: "absolute", top: 0, left: "30%",
        width: "600px", height: "300px",
        background: "radial-gradient(ellipse at top, rgba(124,58,237,0.06) 0%, transparent 65%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div style={{
          textAlign: "center", marginBottom: "72px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}>
          <p style={{
            fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em",
            textTransform: "uppercase", color: "#7C3AED", marginBottom: "16px",
          }}>
            FEATURES
          </p>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800,
            color: "white", lineHeight: 1.2, letterSpacing: "-0.02em",
            margin: 0,
          }}>
            Built for fashion. Designed for{" "}
            <span style={{
              background: "linear-gradient(135deg, #7C3AED, #A78BFA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              real conversations.
            </span>
          </h2>
        </div>

        {/* Cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
        }}
          className="features-grid"
        >
          {FEATURES.map((f, i) => (
            <FeatureCard key={i} feature={f} index={i} visible={visible} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
