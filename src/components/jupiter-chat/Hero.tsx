"use client";

import { useEffect, useRef, useState } from "react";

const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 1,
  delay: Math.random() * 4,
  dur: Math.random() * 6 + 6,
}));

const CHAT_MESSAGES = [
  { role: "user", text: "Do you have this kurta in size M?" },
  { role: "ai", text: "Yes! The Ivory Mughal Kurta is available in M. ₹2,499 · Ships in 2 days." },
  { role: "user", text: "What about the embroidered dupatta?" },
  { role: "ai", text: "The dupatta is in stock. Would you like me to add both to your cart?" },
];

export default function JupiterChatHero() {
  const [visible, setVisible] = useState(false);
  const [msgCount, setMsgCount] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const t = setInterval(() => {
      setMsgCount((c) => (c < CHAT_MESSAGES.length ? c + 1 : c));
    }, 900);
    return () => clearInterval(t);
  }, [visible]);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        backgroundColor: "#08090A",
        overflow: "hidden",
        padding: "130px 24px 100px",
      }}
    >
      {/* Ambient gradients */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 70% 60% at 65% 40%, rgba(124,58,237,0.1) 0%, transparent 65%)",
      }} />
      <div style={{
        position: "absolute", top: "20%", left: "-10%", width: "500px", height: "400px",
        background: "radial-gradient(ellipse at center, rgba(124,58,237,0.05) 0%, transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />

      {/* Floating particles */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            style={{
              position: "absolute",
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              borderRadius: "50%",
              background: "rgba(124,58,237,0.5)",
              animation: `chatFloat ${p.dur}s ease-in-out ${p.delay}s infinite`,
              opacity: 0.6,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes chatFloat {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.4; }
          50% { transform: translateY(-18px) scale(1.15); opacity: 0.9; }
        }
        @keyframes chatFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes chatPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(124,58,237,0.4); }
          50% { box-shadow: 0 0 0 12px rgba(124,58,237,0); }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes msgSlideIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes dotBlink {
          0%, 80%, 100% { opacity: 0.2; transform: scale(0.8); }
          40% { opacity: 1; transform: scale(1); }
        }
      `}</style>

      <div style={{ maxWidth: "1320px", margin: "0 auto", position: "relative", zIndex: 10 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "center",
        }}
          className="hero-grid"
        >
          {/* Left */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}>
            {/* Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "6px 16px", borderRadius: "100px", marginBottom: "32px",
              background: "rgba(124,58,237,0.12)",
              border: "1px solid rgba(124,58,237,0.3)",
            }}>
              <span style={{
                width: "6px", height: "6px", borderRadius: "50%",
                background: "#7C3AED",
                animation: "chatPulse 2s ease-in-out infinite",
                display: "inline-block",
              }} />
              <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#A78BFA", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                COMING SOON
              </span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: "24px",
              color: "white",
            }}>
              AI customer support{" "}
              <span style={{ display: "block" }}>built for{" "}
                <span style={{
                  background: "linear-gradient(135deg, #7C3AED 0%, #A78BFA 50%, #7C3AED 100%)",
                  backgroundSize: "200% 200%",
                  animation: "gradientShift 4s ease infinite",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  fashion brands.
                </span>
              </span>
            </h1>

            {/* Subtext */}
            <p style={{
              fontSize: "1.1rem", color: "#8892A4", lineHeight: 1.75,
              maxWidth: "480px", marginBottom: "16px",
            }}>
              Jupiter Chat understands your catalogue, products, sizing, and customer questions to deliver instant support across every customer touchpoint.
            </p>

            {/* Supporting lines */}
            <div style={{ marginBottom: "36px", display: "flex", flexDirection: "column", gap: "8px" }}>
              {["Built around fashion workflows", "Not generic chatbot templates"].map((line) => (
                <div key={line} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ color: "#7C3AED", fontSize: "0.85rem" }}>◈</span>
                  <span style={{ fontSize: "0.875rem", color: "#C7D4F0" }}>{line}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "32px" }}>
              <a
                href="#waitlist"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  padding: "14px 28px", borderRadius: "10px",
                  background: "#7C3AED", color: "white",
                  fontSize: "0.9rem", fontWeight: 600, textDecoration: "none",
                  transition: "all 0.25s ease",
                  boxShadow: "0 0 32px rgba(124,58,237,0.35)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#6D28D9";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 48px rgba(124,58,237,0.5)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#7C3AED";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 32px rgba(124,58,237,0.35)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                }}
              >
                Join The Waitlist →
              </a>
              <a
                href="#waitlist"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  padding: "14px 28px", borderRadius: "10px",
                  background: "transparent", color: "white",
                  fontSize: "0.9rem", fontWeight: 600, textDecoration: "none",
                  border: "1px solid rgba(124,58,237,0.35)",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(124,58,237,0.7)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(124,58,237,0.08)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(124,58,237,0.35)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                }}
              >
                Get Early Access →
              </a>
            </div>

            {/* Trust indicators */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
              {["Fashion focused AI ✓", "Multichannel support ✓", "Built for ecommerce brands ✓"].map((t) => (
                <span key={t} style={{ fontSize: "0.8rem", color: "#8892A4" }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Right — Chat Mockup */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s",
          }}>
            {/* Floating chat window */}
            <div style={{
              position: "relative",
              background: "rgba(13,15,28,0.85)",
              border: "1px solid rgba(124,58,237,0.25)",
              borderRadius: "20px",
              overflow: "hidden",
              backdropFilter: "blur(24px)",
              boxShadow: "0 0 80px rgba(124,58,237,0.15), 0 40px 80px rgba(0,0,0,0.6)",
            }}>
              {/* Header */}
              <div style={{
                padding: "16px 20px",
                background: "rgba(10,12,21,0.9)",
                borderBottom: "1px solid rgba(30,34,53,0.8)",
                display: "flex", alignItems: "center", gap: "12px",
              }}>
                <div style={{
                  width: "36px", height: "36px", borderRadius: "10px",
                  background: "linear-gradient(135deg, #7C3AED, #A78BFA)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1rem",
                }}>
                  ✦
                </div>
                <div>
                  <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "white", margin: 0 }}>Jupiter Chat</p>
                  <p style={{ fontSize: "0.72rem", color: "#10B981", margin: 0 }}>● Online · AI Support Active</p>
                </div>
                <div style={{ marginLeft: "auto", display: "flex", gap: "8px" }}>
                  {["#FF5F57","#FFBD2E","#28C840"].map((c) => (
                    <div key={c} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c }} />
                  ))}
                </div>
              </div>

              {/* WhatsApp-style chat */}
              <div style={{ padding: "20px", minHeight: "300px", display: "flex", flexDirection: "column", gap: "12px" }}>
                {CHAT_MESSAGES.slice(0, msgCount).map((msg, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                      animation: "msgSlideIn 0.4s ease forwards",
                    }}
                  >
                    {msg.role === "ai" && (
                      <div style={{
                        width: "28px", height: "28px", borderRadius: "8px",
                        background: "linear-gradient(135deg, #7C3AED, #A78BFA)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "0.65rem", marginRight: "8px", flexShrink: 0, alignSelf: "flex-end",
                      }}>✦</div>
                    )}
                    <div style={{
                      maxWidth: "75%",
                      padding: "10px 14px",
                      borderRadius: msg.role === "user" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
                      background: msg.role === "user"
                        ? "linear-gradient(135deg, #7C3AED, #6D28D9)"
                        : "rgba(19,22,32,0.95)",
                      border: msg.role === "ai" ? "1px solid rgba(124,58,237,0.2)" : "none",
                      fontSize: "0.82rem",
                      color: "white",
                      lineHeight: 1.55,
                    }}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {msgCount > 0 && msgCount < CHAT_MESSAGES.length && (
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{
                      width: "28px", height: "28px", borderRadius: "8px",
                      background: "linear-gradient(135deg, #7C3AED, #A78BFA)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "0.65rem",
                    }}>✦</div>
                    <div style={{
                      padding: "10px 14px", borderRadius: "14px 14px 14px 4px",
                      background: "rgba(19,22,32,0.95)",
                      border: "1px solid rgba(124,58,237,0.2)",
                      display: "flex", gap: "4px", alignItems: "center",
                    }}>
                      {[0,1,2].map((d) => (
                        <span key={d} style={{
                          width: "6px", height: "6px", borderRadius: "50%",
                          background: "#7C3AED",
                          display: "inline-block",
                          animation: `dotBlink 1.2s ease ${d * 0.2}s infinite`,
                        }} />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Input bar */}
              <div style={{
                padding: "14px 16px",
                borderTop: "1px solid rgba(30,34,53,0.8)",
                background: "rgba(10,12,21,0.9)",
                display: "flex", gap: "10px", alignItems: "center",
              }}>
                <div style={{
                  flex: 1, background: "rgba(30,34,53,0.6)", borderRadius: "10px",
                  padding: "10px 14px", fontSize: "0.78rem", color: "#8892A4",
                  border: "1px solid rgba(124,58,237,0.15)",
                }}>
                  Ask about products, sizing, orders...
                </div>
                <div style={{
                  width: "36px", height: "36px", borderRadius: "10px",
                  background: "#7C3AED", display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: "0.85rem", color: "white",
                  flexShrink: 0,
                }}>→</div>
              </div>
            </div>

            {/* Floating channel badges */}
            {[
              { label: "WhatsApp", emoji: "💬", top: "-18px", right: "60px" },
              { label: "Instagram", emoji: "📸", bottom: "60px", right: "-20px" },
              { label: "Website", emoji: "🌐", bottom: "-16px", left: "60px" },
            ].map((badge) => (
              <div
                key={badge.label}
                style={{
                  position: "absolute",
                  ...(badge.top ? { top: badge.top } : {}),
                  ...(badge.bottom ? { bottom: badge.bottom } : {}),
                  ...(badge.right ? { right: badge.right } : {}),
                  ...(badge.left ? { left: badge.left } : {}),
                  background: "rgba(13,15,28,0.9)",
                  border: "1px solid rgba(124,58,237,0.3)",
                  borderRadius: "100px",
                  padding: "6px 14px",
                  display: "flex", alignItems: "center", gap: "6px",
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
                  animation: `chatFloat ${5 + Math.random() * 3}s ease-in-out ${Math.random() * 2}s infinite`,
                }}
              >
                <span style={{ fontSize: "0.8rem" }}>{badge.emoji}</span>
                <span style={{ fontSize: "0.72rem", color: "white", fontWeight: 500 }}>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
