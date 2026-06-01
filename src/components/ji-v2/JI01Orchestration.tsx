"use client";

import { useEffect, useRef, useState } from "react";

// ─── SVG path data for connections ───────────────────────────────────────────
// ViewBox: 0 0 1000 520
// Engine center: cx=500, cy=261, r=80
// Left nodes (5) at x=50, y=65,163,261,359,457
// Right nodes (6) at x=950, y=52,135,218,301,384,467

const ENGINE_CX = 500;
const ENGINE_CY = 261;
const ENGINE_R  = 80;

const LEFT_NODES = [
  { cy: 65,  label: "Welcome Flow",     short: "WF" },
  { cy: 163, label: "Browse Drop",      short: "BD" },
  { cy: 261, label: "Cart Abandonment", short: "CA" },
  { cy: 359, label: "Product View",     short: "PV" },
  { cy: 457, label: "Session Exit",     short: "SE" },
];

const RIGHT_NODES = [
  { cy: 52,  label: "COD Conversion",   short: "CC" },
  { cy: 135, label: "Retention Trigger",short: "RT" },
  { cy: 218, label: "Smart Upsell",     short: "SU" },
  { cy: 301, label: "Winback Flow",     short: "WB" },
  { cy: 384, label: "WhatsApp Recovery",short: "WA" },
  { cy: 467, label: "Review Request",   short: "RR" },
];

const NODE_R    = 24;
const LEFT_X    = 50;
const RIGHT_X   = 950;
const L_ENTRY_X = ENGINE_CX - ENGINE_R; // 420
const R_EXIT_X  = ENGINE_CX + ENGINE_R; // 580

const leftPath = (cy: number, i: number) => {
  if (i === 2) return `M ${LEFT_X + NODE_R},${cy} L ${L_ENTRY_X},${ENGINE_CY}`;
  return `M ${LEFT_X + NODE_R},${cy} C 270,${cy} 370,${ENGINE_CY} ${L_ENTRY_X},${ENGINE_CY}`;
};

const rightPath = (cy: number) =>
  `M ${R_EXIT_X},${ENGINE_CY} C 640,${ENGINE_CY} 740,${cy} ${RIGHT_X - NODE_R},${cy}`;

// ─── Mobile fallback ──────────────────────────────────────────────────────────
function MobileView({ isVisible }: { isVisible: boolean }) {
  return (
    <div className="md:hidden flex flex-col items-center gap-6 px-4">
      {/* Inputs */}
      <div
        className="w-full rounded-2xl p-6 transition-all duration-700"
        style={{
          background: "rgba(13,15,28,0.8)",
          border: "1px solid rgba(124,58,237,0.2)",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(24px)",
        }}
      >
        <p style={{ color: "#A78BFA", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "16px" }}>
          Signal Inputs
        </p>
        <div className="flex flex-col gap-3">
          {LEFT_NODES.map((n, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#7C3AED", boxShadow: "0 0 6px #7C3AED" }} />
              <span style={{ color: "#C7D4F0", fontSize: "0.875rem", fontWeight: 500 }}>{n.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Arrow */}
      <div className="flex flex-col items-center gap-1" style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.7s ease 200ms" }}>
        <div style={{ width: "1px", height: "24px", background: "linear-gradient(to bottom, rgba(124,58,237,0.4), rgba(124,58,237,0.8))" }} />
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M6 8L0 0h12L6 8z" fill="rgba(124,58,237,0.8)"/></svg>
      </div>

      {/* Engine */}
      <div
        className="w-full rounded-2xl p-6 text-center transition-all duration-700"
        style={{
          background: "rgba(13,15,28,0.95)",
          border: "1.5px solid rgba(124,58,237,0.5)",
          boxShadow: "0 0 40px rgba(124,58,237,0.15)",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(24px)",
          transitionDelay: "150ms",
        }}
      >
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-[#22C55E]" style={{ animation: "pulse 2s infinite" }} />
          <span style={{ color: "#22C55E", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em" }}>LIVE</span>
        </div>
        <h3 className="font-extrabold text-white text-xl mb-1">Revenue Engine</h3>
        <p style={{ color: "#A78BFA", fontSize: "0.8125rem" }}>Autonomous Orchestration</p>
      </div>

      {/* Arrow */}
      <div className="flex flex-col items-center gap-1" style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.7s ease 300ms" }}>
        <div style={{ width: "1px", height: "24px", background: "linear-gradient(to bottom, rgba(34,197,94,0.8), rgba(34,197,94,0.4))" }} />
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M6 8L0 0h12L6 8z" fill="rgba(34,197,94,0.8)"/></svg>
      </div>

      {/* Outputs */}
      <div
        className="w-full rounded-2xl p-6 transition-all duration-700"
        style={{
          background: "rgba(13,15,28,0.8)",
          border: "1px solid rgba(34,197,94,0.2)",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(24px)",
          transitionDelay: "300ms",
        }}
      >
        <p style={{ color: "#22C55E", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "16px" }}>
          Revenue Outputs
        </p>
        <div className="flex flex-col gap-3">
          {RIGHT_NODES.map((n, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#22C55E", boxShadow: "0 0 6px #22C55E" }} />
              <span style={{ color: "#C7D4F0", fontSize: "0.875rem", fontWeight: 500 }}>{n.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Desktop SVG Visualization ────────────────────────────────────────────────
function DesktopViz({ isVisible }: { isVisible: boolean }) {
  // strokeDashoffset: large → 0 = draw-in effect
  const pathStyle = (delay: number, color: string, opacity = 0.35) => ({
    strokeDasharray: 900,
    strokeDashoffset: isVisible ? 0 : 900,
    transition: `stroke-dashoffset 1.4s ease ${delay}ms`,
    stroke: color,
    strokeWidth: 1.2,
    strokeOpacity: opacity,
    fill: "none",
  });

  const nodeStyle = (delay: number) => ({
    opacity: isVisible ? 1 : 0,
    transition: `opacity 0.6s ease ${delay}ms`,
  });

  return (
    <div className="hidden md:block w-full" style={{ position: "relative" }}>
      {/* Ambient engine glow behind SVG */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "420px",
          height: "420px",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.10) 0%, transparent 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      <svg
        viewBox="0 0 1000 520"
        className="w-full"
        style={{ overflow: "visible", maxHeight: "480px" }}
        aria-label="Autonomous Commerce Orchestration diagram"
      >
        <defs>
          {/* Engine gradient */}
          <radialGradient id="orch-engine-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
          </radialGradient>
          {/* Outer field gradient */}
          <radialGradient id="orch-field" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
          </radialGradient>

          {/* Define path shapes for animateMotion */}
          {LEFT_NODES.map((n, i) => (
            <path key={`lp-def-${i}`} id={`lp${i}`} d={leftPath(n.cy, i)} />
          ))}
          {RIGHT_NODES.map((n, i) => (
            <path key={`rp-def-${i}`} id={`rp${i}`} d={rightPath(n.cy)} />
          ))}
        </defs>

        {/* ── Dot grid background ── */}
        <pattern id="orch-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.8" fill="rgba(124,58,237,0.15)" />
        </pattern>
        <rect x="0" y="0" width="1000" height="520" fill="url(#orch-dots)" />

        {/* ── Engine ambient field ── */}
        <circle cx={ENGINE_CX} cy={ENGINE_CY} r="220" fill="url(#orch-field)" />

        {/* ── Orbital rings (use animateTransform for cross-browser compat) ── */}
        <g>
          <circle cx={ENGINE_CX} cy={ENGINE_CY} r="145" fill="none" stroke="rgba(124,58,237,0.07)" strokeWidth="1" strokeDasharray="3 12" />
          <animateTransform attributeName="transform" type="rotate" from={`0 ${ENGINE_CX} ${ENGINE_CY}`} to={`360 ${ENGINE_CX} ${ENGINE_CY}`} dur="45s" repeatCount="indefinite" />
        </g>
        <g>
          <circle cx={ENGINE_CX} cy={ENGINE_CY} r="120" fill="none" stroke="rgba(124,58,237,0.10)" strokeWidth="1" strokeDasharray="2 8" />
          <animateTransform attributeName="transform" type="rotate" from={`0 ${ENGINE_CX} ${ENGINE_CY}`} to={`-360 ${ENGINE_CX} ${ENGINE_CY}`} dur="30s" repeatCount="indefinite" />
        </g>

        {/* ── Left connection paths ── */}
        {LEFT_NODES.map((n, i) => (
          <path
            key={`lp-vis-${i}`}
            d={leftPath(n.cy, i)}
            style={pathStyle(i * 120, "rgba(124,58,237,0.7)", 0.45)}
            strokeDasharray={900}
            strokeDashoffset={isVisible ? 0 : 900}
          />
        ))}

        {/* ── Right connection paths ── */}
        {RIGHT_NODES.map((n, i) => (
          <path
            key={`rp-vis-${i}`}
            d={rightPath(n.cy)}
            style={pathStyle(600 + i * 100, "rgba(34,197,94,0.7)", 0.45)}
            strokeDasharray={900}
            strokeDashoffset={isVisible ? 0 : 900}
          />
        ))}

        {/* ── Left particles (flow to engine) ── */}
        {isVisible && LEFT_NODES.map((_, i) => (
          <g key={`lpart-${i}`}>
            <circle r="3.5" fill="#7C3AED" opacity="0.9">
              <animateMotion dur="2.6s" repeatCount="indefinite" begin={`${i * 0.5}s`}>
                <mpath href={`#lp${i}`} />
              </animateMotion>
            </circle>
            <circle r="2" fill="#A78BFA" opacity="0.5">
              <animateMotion dur="2.6s" repeatCount="indefinite" begin={`${i * 0.5 + 1.3}s`}>
                <mpath href={`#lp${i}`} />
              </animateMotion>
            </circle>
          </g>
        ))}

        {/* ── Right particles (flow from engine) ── */}
        {isVisible && RIGHT_NODES.map((_, i) => (
          <g key={`rpart-${i}`}>
            <circle r="3.5" fill="#22C55E" opacity="0.9">
              <animateMotion dur="2.8s" repeatCount="indefinite" begin={`${i * 0.45}s`}>
                <mpath href={`#rp${i}`} />
              </animateMotion>
            </circle>
            <circle r="2" fill="#86EFAC" opacity="0.5">
              <animateMotion dur="2.8s" repeatCount="indefinite" begin={`${i * 0.45 + 1.4}s`}>
                <mpath href={`#rp${i}`} />
              </animateMotion>
            </circle>
          </g>
        ))}

        {/* ── Left nodes ── */}
        {LEFT_NODES.map((n, i) => (
          <g key={`ln-${i}`} style={nodeStyle(i * 100)}>
            <circle cx={LEFT_X} cy={n.cy} r={NODE_R} fill="#0A0C15" stroke="rgba(124,58,237,0.5)" strokeWidth="1.2" />
            <circle cx={LEFT_X} cy={n.cy} r={NODE_R - 6} fill="rgba(124,58,237,0.06)" />
            {/* Pulse ring on active state */}
            {isVisible && (
              <circle cx={LEFT_X} cy={n.cy} r={NODE_R}>
                <animate attributeName="r" values={`${NODE_R};${NODE_R + 8};${NODE_R}`} dur="3s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
                <animate attributeName="stroke" values="rgba(124,58,237,0.5);rgba(124,58,237,0)" dur="3s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
              </circle>
            )}
            {/* Label: right of node */}
            <text
              x={LEFT_X + NODE_R + 12}
              y={n.cy + 5}
              fill="rgba(199,212,240,0.9)"
              fontSize="12"
              fontFamily="Inter, system-ui, sans-serif"
              fontWeight="600"
            >
              {n.label}
            </text>
          </g>
        ))}

        {/* ── Right nodes ── */}
        {RIGHT_NODES.map((n, i) => (
          <g key={`rn-${i}`} style={nodeStyle(600 + i * 100)}>
            <circle cx={RIGHT_X} cy={n.cy} r={NODE_R} fill="#0A0C15" stroke="rgba(34,197,94,0.5)" strokeWidth="1.2" />
            <circle cx={RIGHT_X} cy={n.cy} r={NODE_R - 6} fill="rgba(34,197,94,0.06)" />
            {isVisible && (
              <circle cx={RIGHT_X} cy={n.cy} r={NODE_R}>
                <animate attributeName="r" values={`${NODE_R};${NODE_R + 8};${NODE_R}`} dur="3.2s" begin={`${i * 0.55}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.35;0;0.35" dur="3.2s" begin={`${i * 0.55}s`} repeatCount="indefinite" />
                <animate attributeName="stroke" values="rgba(34,197,94,0.5);rgba(34,197,94,0)" dur="3.2s" begin={`${i * 0.55}s`} repeatCount="indefinite" />
              </circle>
            )}
            {/* Label: left of node */}
            <text
              x={RIGHT_X - NODE_R - 12}
              y={n.cy + 5}
              textAnchor="end"
              fill="rgba(199,212,240,0.9)"
              fontSize="12"
              fontFamily="Inter, system-ui, sans-serif"
              fontWeight="600"
            >
              {n.label}
            </text>
          </g>
        ))}

        {/* ── Column headers ── */}
        <text x={LEFT_X} y="20" textAnchor="middle" fill="rgba(124,58,237,0.7)" fontSize="9" fontFamily="Inter, system-ui, sans-serif" fontWeight="700" letterSpacing="2">SIGNAL INPUTS</text>
        <text x={RIGHT_X} y="20" textAnchor="middle" fill="rgba(34,197,94,0.7)" fontSize="9" fontFamily="Inter, system-ui, sans-serif" fontWeight="700" letterSpacing="2">REVENUE OUTPUTS</text>

        {/* ── Central Revenue Engine ── */}
        {/* Outer glow disc */}
        <circle cx={ENGINE_CX} cy={ENGINE_CY} r={ENGINE_R + 40} fill="rgba(124,58,237,0.04)" />

        {/* Main engine circle */}
        <circle
          cx={ENGINE_CX}
          cy={ENGINE_CY}
          r={ENGINE_R}
          fill="#0A0C15"
          stroke="rgba(124,58,237,0.6)"
          strokeWidth="1.5"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.8s ease 400ms",
          }}
        />
        <circle
          cx={ENGINE_CX}
          cy={ENGINE_CY}
          r={ENGINE_R}
          fill="url(#orch-engine-grad)"
        />

        {/* Engine pulse ring */}
        {isVisible && (
          <circle cx={ENGINE_CX} cy={ENGINE_CY} r={ENGINE_R} fill="none" stroke="rgba(124,58,237,0.5)" strokeWidth="1">
            <animate attributeName="r" values={`${ENGINE_R};${ENGINE_R + 18};${ENGINE_R}`} dur="3.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0;0.5" dur="3.5s" repeatCount="indefinite" />
          </circle>
        )}

        {/* Engine content */}
        {/* Live status */}
        <circle cx={ENGINE_CX - 9} cy={ENGINE_CY - 38} r="4" fill="#22C55E">
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
        </circle>
        <text
          x={ENGINE_CX + 3}
          y={ENGINE_CY - 33}
          textAnchor="middle"
          fill="#22C55E"
          fontSize="9"
          fontFamily="Inter, system-ui, sans-serif"
          fontWeight="700"
          letterSpacing="2"
        >
          LIVE
        </text>

        {/* Main title */}
        <text
          x={ENGINE_CX}
          y={ENGINE_CY - 10}
          textAnchor="middle"
          fill="white"
          fontSize="15.5"
          fontFamily="Inter, system-ui, sans-serif"
          fontWeight="800"
        >
          Revenue
        </text>
        <text
          x={ENGINE_CX}
          y={ENGINE_CY + 10}
          textAnchor="middle"
          fill="white"
          fontSize="15.5"
          fontFamily="Inter, system-ui, sans-serif"
          fontWeight="800"
        >
          Engine
        </text>

        {/* Divider */}
        <line
          x1={ENGINE_CX - 42}
          y1={ENGINE_CY + 21}
          x2={ENGINE_CX + 42}
          y2={ENGINE_CY + 21}
          stroke="rgba(124,58,237,0.3)"
          strokeWidth="0.8"
        />

        {/* Subtitle */}
        <text
          x={ENGINE_CX}
          y={ENGINE_CY + 36}
          textAnchor="middle"
          fill="rgba(167,139,250,0.65)"
          fontSize="8.5"
          fontFamily="Inter, system-ui, sans-serif"
        >
          Autonomous
        </text>
      </svg>
    </div>
  );
}

// ─── Main Orchestration Section ───────────────────────────────────────────────
export default function JI01Orchestration() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="ji01-orchestration"
      ref={sectionRef}
      className="relative overflow-hidden w-full"
      style={{
        paddingTop: "160px",
        paddingBottom: "160px",
        backgroundColor: "#05010A",
      }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Top divider */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2"
          style={{
            width: "480px",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(124,58,237,0.3) 50%, transparent 100%)",
          }}
        />
        {/* Center glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "700px",
            height: "500px",
            background:
              "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(124,58,237,0.07) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Bottom green ambient */}
        <div
          className="absolute bottom-[-80px] right-[-80px]"
          style={{
            width: "500px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(34,197,94,0.04) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div
          className="text-center mb-20 max-w-[700px] mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          <p
            style={{
              color: "#A78BFA",
              fontSize: "0.6875rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Autonomous Commerce Orchestration
          </p>
          <h2
            className="font-extrabold text-white leading-[1.08] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            Every signal processed.
            <br />
            Every revenue moment{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              acted on.
            </span>
          </h2>
          <p
            style={{
              color: "#8892A4",
              fontSize: "1.0625rem",
              lineHeight: 1.78,
            }}
          >
            A living AI infrastructure that intercepts every behavioral signal —
            and autonomously routes it into the highest-value revenue action.
          </p>
        </div>

        {/* Visualization */}
        <DesktopViz isVisible={isVisible} />
        <MobileView isVisible={isVisible} />

        {/* Bottom caption */}
        <div
          className="mt-16 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.8s ease 1200ms, transform 0.8s ease 1200ms",
          }}
        >
          <p style={{ color: "#8892A4", fontSize: "0.875rem", lineHeight: 1.7 }}>
            Signals flow from every customer touchpoint into the Revenue Engine — which autonomously dispatches the right action, at the right moment.
          </p>
        </div>
      </div>
    </section>
  );
}
