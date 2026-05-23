"use client";

import { useEffect, useRef, useState } from "react";

const PERIPHERAL_NODES = [
  { label: "Website Chat",      icon: "🌐", angle: -90,  r: 200 },
  { label: "WhatsApp",          icon: "💬", angle: -30,  r: 200 },
  { label: "Instagram",         icon: "📸", angle: 30,   r: 200 },
  { label: "Product Catalogue", icon: "📦", angle: 90,   r: 200 },
  { label: "Orders",            icon: "🧾", angle: 150,  r: 200 },
  { label: "Customer Support",  icon: "🎫", angle: 210,  r: 200 },
  { label: "Recommendations",   icon: "⭐", angle: 270,  r: 200 },
];

function getXY(angle: number, r: number) {
  const rad = (angle * Math.PI) / 180;
  return {
    x: 280 + r * Math.cos(rad),
    y: 280 + r * Math.sin(rad),
  };
}

export default function WorkflowVisualization() {
  const [visible, setVisible] = useState(false);
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const t = setInterval(() => setPulse((p) => (p + 1) % PERIPHERAL_NODES.length), 1200);
    return () => clearInterval(t);
  }, [visible]);

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
        @keyframes wfNodeFloat {
          0%, 100% { transform: translate(-50%, -50%) translateY(0); }
          50% { transform: translate(-50%, -50%) translateY(-8px); }
        }
        @keyframes wfCentralPulse {
          0%, 100% { box-shadow: 0 0 40px rgba(124,58,237,0.4), 0 0 80px rgba(124,58,237,0.2); }
          50% { box-shadow: 0 0 70px rgba(124,58,237,0.7), 0 0 140px rgba(124,58,237,0.35); }
        }
        @keyframes wfLineDraw {
          from { stroke-dashoffset: 300; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes wfParticleTravelH {
          0% { transform: translateX(0); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateX(var(--travel-x)); opacity: 0; }
        }
      `}</style>

      {/* Background */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "700px", height: "700px",
        background: "radial-gradient(ellipse at center, rgba(124,58,237,0.08) 0%, transparent 60%)",
        filter: "blur(80px)", pointerEvents: "none",
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
            WORKFLOW
          </p>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800,
            color: "white", lineHeight: 1.2, letterSpacing: "-0.02em",
            margin: "0 0 20px 0",
          }}>
            One AI system across every{" "}
            <span style={{
              background: "linear-gradient(135deg, #7C3AED, #A78BFA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              customer touchpoint
            </span>
          </h2>
          <p style={{ fontSize: "0.95rem", color: "#8892A4" }}>
            Built around ecommerce conversations and operational workflows.
          </p>
        </div>

        {/* Diagram */}
        <div style={{
          position: "relative", width: "100%", maxWidth: "560px",
          margin: "0 auto",
          aspectRatio: "1 / 1",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.8s ease 0.2s",
        }}>
          {/* SVG Lines */}
          <svg
            viewBox="0 0 560 560"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
          >
            {PERIPHERAL_NODES.map((node, i) => {
              const { x, y } = getXY(node.angle, node.r);
              const isActive = activeNode === i || pulse === i;
              return (
                <g key={i}>
                  <line
                    x1={280} y1={280}
                    x2={x} y2={y}
                    stroke={isActive ? "rgba(124,58,237,0.8)" : "rgba(124,58,237,0.2)"}
                    strokeWidth={isActive ? "1.5" : "0.8"}
                    strokeDasharray="4,4"
                    style={{ transition: "stroke 0.3s ease, stroke-width 0.3s ease" }}
                  />
                  {isActive && (
                    <circle r="3" fill="#A78BFA">
                      <animateMotion
                        dur="1.2s"
                        repeatCount="indefinite"
                        path={`M ${280},${280} L ${x},${y}`}
                      />
                    </circle>
                  )}
                </g>
              );
            })}
            {/* Orbit ring */}
            <circle
              cx={280} cy={280} r={200}
              fill="none"
              stroke="rgba(124,58,237,0.08)"
              strokeWidth="1"
              strokeDasharray="4,8"
            />
          </svg>

          {/* Central node */}
          <div style={{
            position: "absolute", left: "50%", top: "50%",
            transform: "translate(-50%, -50%)",
            width: "120px", height: "120px",
            borderRadius: "28px",
            background: "linear-gradient(135deg, rgba(124,58,237,0.9), rgba(109,40,217,0.8))",
            border: "1px solid rgba(124,58,237,0.6)",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            gap: "6px",
            animation: "wfCentralPulse 3s ease-in-out infinite",
            zIndex: 10,
          }}>
            <span style={{ fontSize: "1.8rem" }}>✦</span>
            <span style={{ fontSize: "0.6rem", fontWeight: 700, color: "rgba(255,255,255,0.85)", textAlign: "center", letterSpacing: "0.04em" }}>
              JUPITER CHAT
              <br />AI SYSTEM
            </span>
          </div>

          {/* Peripheral nodes */}
          {PERIPHERAL_NODES.map((node, i) => {
            const { x, y } = getXY(node.angle, node.r);
            const pct_x = (x / 560) * 100;
            const pct_y = (y / 560) * 100;
            const isActive = activeNode === i || pulse === i;

            return (
              <div
                key={i}
                onMouseEnter={() => setActiveNode(i)}
                onMouseLeave={() => setActiveNode(null)}
                style={{
                  position: "absolute",
                  left: `${pct_x}%`,
                  top: `${pct_y}%`,
                  transform: "translate(-50%, -50%)",
                  background: isActive
                    ? "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(13,15,28,0.95))"
                    : "rgba(13,15,28,0.85)",
                  border: isActive ? "1px solid rgba(124,58,237,0.6)" : "1px solid rgba(30,34,53,0.8)",
                  borderRadius: "12px",
                  padding: "8px 14px",
                  display: "flex", alignItems: "center", gap: "6px",
                  backdropFilter: "blur(12px)",
                  boxShadow: isActive ? "0 0 20px rgba(124,58,237,0.3)" : "0 4px 16px rgba(0,0,0,0.4)",
                  transition: "all 0.3s ease",
                  cursor: "default",
                  whiteSpace: "nowrap",
                  zIndex: 5,
                  animation: `wfNodeFloat ${3 + i * 0.4}s ease-in-out ${i * 0.2}s infinite`,
                }}
              >
                <span style={{ fontSize: "0.9rem" }}>{node.icon}</span>
                <span style={{
                  fontSize: "0.72rem",
                  color: isActive ? "white" : "#C7D4F0",
                  fontWeight: 500,
                  transition: "color 0.2s ease",
                }}>
                  {node.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
