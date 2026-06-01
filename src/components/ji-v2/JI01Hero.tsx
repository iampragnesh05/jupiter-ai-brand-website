"use client";

import { useEffect, useState } from "react";

// ─── Flow Node ────────────────────────────────────────────────────────────────
function FlowNode({
  label,
  sublabel,
  active,
  isCenter,
  delay,
}: {
  label: string;
  sublabel?: string;
  active: boolean;
  isCenter?: boolean;
  delay: number;
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  if (isCenter) {
    return (
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0.88)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
          background:
            "linear-gradient(145deg, rgba(124,58,237,0.18) 0%, rgba(124,58,237,0.08) 100%)",
          border: "1px solid rgba(124,58,237,0.55)",
          borderRadius: "14px",
          padding: "14px 22px",
          textAlign: "center",
          minWidth: "160px",
          position: "relative",
          boxShadow:
            "0 0 0 1px rgba(124,58,237,0.12), 0 8px 32px rgba(124,58,237,0.2)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
            marginBottom: "4px",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#22C55E",
              boxShadow: "0 0 6px rgba(34,197,94,0.8)",
              display: "inline-block",
              animation: "ji-pulse-dot 2s infinite",
            }}
          />
          <span
            style={{
              color: "#22C55E",
              fontSize: "0.6rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            LIVE
          </span>
        </div>
        <div
          style={{
            color: "white",
            fontSize: "0.95rem",
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
        >
          {label}
        </div>
        {sublabel && (
          <div
            style={{
              color: "rgba(167,139,250,0.7)",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
              marginTop: "2px",
            }}
          >
            {sublabel}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(10px)",
        background: active
          ? "rgba(124,58,237,0.10)"
          : "rgba(13,15,28,0.9)",
        border: active
          ? "1px solid rgba(124,58,237,0.40)"
          : "1px solid rgba(30,34,53,0.9)",
        borderRadius: "10px",
        padding: "10px 18px",
        textAlign: "center",
        minWidth: "148px",
        backdropFilter: "blur(12px)",
        transition: "opacity 0.5s ease, transform 0.5s ease, border-color 0.3s ease",
      }}
    >
      <div
        style={{
          color: active ? "#E2D9FA" : "#8892A4",
          fontSize: "0.78rem",
          fontWeight: 600,
          letterSpacing: "0.01em",
        }}
      >
        {label}
      </div>
      {sublabel && (
        <div
          style={{
            color: active ? "rgba(167,139,250,0.65)" : "rgba(136,146,164,0.55)",
            fontSize: "0.62rem",
            fontWeight: 500,
            marginTop: "2px",
          }}
        >
          {sublabel}
        </div>
      )}
    </div>
  );
}

// ─── Capability Card ──────────────────────────────────────────────────────────
function CapabilityCard({
  label,
  icon,
  delay,
  floatOffset = 0,
}: {
  label: string;
  icon: string;
  delay: number;
  floatOffset?: number;
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(14px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
        animation: visible
          ? `ji-float-card ${3.5 + floatOffset * 0.4}s ease-in-out infinite`
          : "none",
        animationDelay: `${floatOffset * 0.3}s`,
        background: "rgba(13,15,28,0.88)",
        border: "1px solid rgba(30,34,53,0.95)",
        borderRadius: "10px",
        padding: "9px 13px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        backdropFilter: "blur(16px)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
        cursor: "default",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(124,58,237,0.45)";
        el.style.background = "rgba(124,58,237,0.08)";
        el.style.boxShadow =
          "0 4px 24px rgba(0,0,0,0.4), 0 0 0 1px rgba(124,58,237,0.2)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(30,34,53,0.95)";
        el.style.background = "rgba(13,15,28,0.88)";
        el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.4)";
      }}
    >
      <span style={{ fontSize: "0.8rem" }}>{icon}</span>
      <span
        style={{
          color: "#C7D4F0",
          fontSize: "0.72rem",
          fontWeight: 600,
          letterSpacing: "0.01em",
        }}
      >
        {label}
      </span>
    </div>
  );
}


// ─── Commerce Engine Visualization ───────────────────────────────────────────
function CommerceEngineViz() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((s) => (s + 1) % 6);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const flowNodes = [
    { label: "Customer Browses", sublabel: "Session starts", delay: 400 },
    { label: "AI Detects Intent", sublabel: "Signal identified", delay: 600 },
    { label: "Smart Recommendations", sublabel: "Products served", delay: 800 },
    {
      label: "Recovery Automation",
      sublabel: "Cart saved",
      delay: 1000,
    },
    { label: "Conversational Flow", sublabel: "WhatsApp engaged", delay: 1200 },
    { label: "Revenue Recovered", sublabel: "Conversion complete", delay: 1400 },
  ];

  return (
    <div
      className="relative w-full select-none"
      style={{ minHeight: "520px" }}
      aria-hidden="true"
    >
      {/* ── Ambient glow ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "360px",
          height: "360px",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.09) 0%, transparent 68%)",
          filter: "blur(40px)",
        }}
      />

      {/* ── Layout: left cards | center flow | right cards ── */}
      <div
        className="relative flex items-center justify-center"
        style={{ minHeight: "520px", gap: "0" }}
      >
        {/* Left capability cards */}
        <div
          className="flex flex-col gap-2.5"
          style={{ alignItems: "flex-end", marginRight: "18px", zIndex: 2 }}
        >
          <CapabilityCard
            label="Smart Product Discovery"
            icon="🔍"
            delay={700}
            floatOffset={0}
          />
          <CapabilityCard
            label="AI Search Optimization"
            icon="⚡"
            delay={900}
            floatOffset={1}
          />
          <CapabilityCard
            label="Shopify Infrastructure"
            icon="🏗"
            delay={1100}
            floatOffset={2}
          />
        </div>

        {/* Center flow column */}
        <div
          className="relative flex flex-col items-center"
          style={{ gap: "0", zIndex: 1 }}
        >
          {/* SVG signal lines between nodes */}
          <svg
            className="absolute inset-0 pointer-events-none"
            style={{ width: "100%", height: "100%", overflow: "visible" }}
          >
            {/* Vertical connector lines */}
            {[0, 1, 2, 3, 4].map((i) => (
              <line
                key={i}
                x1="50%"
                y1={`${(i + 1) * (100 / 7)}%`}
                x2="50%"
                y2={`${(i + 2) * (100 / 7)}%`}
                stroke={
                  activeStep === i || activeStep === i + 1
                    ? "rgba(124,58,237,0.50)"
                    : "rgba(30,34,53,0.8)"
                }
                strokeWidth="1.5"
                strokeDasharray="4 4"
                style={{ transition: "stroke 0.6s ease" }}
              />
            ))}
          </svg>

          {/* Top: Customer Browses → AI Detects */}
          <FlowNode
            label={flowNodes[0].label}
            sublabel={flowNodes[0].sublabel}
            active={activeStep === 0}
            delay={flowNodes[0].delay}
          />
          <div style={{ height: "22px" }} />
          <FlowNode
            label={flowNodes[1].label}
            sublabel={flowNodes[1].sublabel}
            active={activeStep === 1}
            delay={flowNodes[1].delay}
          />
          <div style={{ height: "22px" }} />
          <FlowNode
            label={flowNodes[2].label}
            sublabel={flowNodes[2].sublabel}
            active={activeStep === 2}
            delay={flowNodes[2].delay}
          />
          <div style={{ height: "22px" }} />

          {/* Center: AI Commerce Engine (accent node) */}
          <FlowNode
            label="AI Commerce Engine"
            sublabel="Orchestrating"
            active={false}
            isCenter
            delay={500}
          />

          <div style={{ height: "22px" }} />
          <FlowNode
            label={flowNodes[3].label}
            sublabel={flowNodes[3].sublabel}
            active={activeStep === 3}
            delay={flowNodes[3].delay}
          />
          <div style={{ height: "22px" }} />
          <FlowNode
            label={flowNodes[4].label}
            sublabel={flowNodes[4].sublabel}
            active={activeStep === 4}
            delay={flowNodes[4].delay}
          />
          <div style={{ height: "22px" }} />
          <FlowNode
            label={flowNodes[5].label}
            sublabel={flowNodes[5].sublabel}
            active={activeStep === 5}
            delay={flowNodes[5].delay}
          />
        </div>

        {/* Right capability cards */}
        <div
          className="flex flex-col gap-2.5"
          style={{ alignItems: "flex-start", marginLeft: "18px", zIndex: 2 }}
        >
          <CapabilityCard
            label="Revenue Recovery"
            icon="💰"
            delay={800}
            floatOffset={3}
          />
          <CapabilityCard
            label="Conversational Commerce"
            icon="💬"
            delay={1000}
            floatOffset={4}
          />
          <CapabilityCard
            label="Intelligent Journeys"
            icon="🗺"
            delay={1200}
            floatOffset={5}
          />
        </div>
      </div>

      {/* ── Metric pills ── */}
      <div
        className="absolute bottom-0 left-0 right-0 flex justify-center gap-3"
        style={{ zIndex: 3 }}
      >
        {[
          { val: "100+", label: "Stores Built", color: "#A78BFA" },
          { val: "54X", label: "Recovery ROI", color: "#22C55E" },
          { val: "99.9%", label: "Uptime", color: "#7C3AED" },
        ].map((m, i) => (
          <MetricPill key={i} val={m.val} label={m.label} color={m.color} delay={1600 + i * 120} />
        ))}
      </div>

      {/* keyframes */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes ji-pulse-dot {
            0%, 100% { box-shadow: 0 0 6px rgba(34,197,94,0.8); opacity: 1; }
            50%       { box-shadow: 0 0 14px rgba(34,197,94,1); opacity: 0.7; }
          }
          @keyframes ji-float-card {
            0%, 100% { transform: translateY(0px); }
            50%       { transform: translateY(-5px); }
          }
        `,
        }}
      />
    </div>
  );
}

function MetricPill({
  val,
  label,
  color,
  delay,
}: {
  val: string;
  label: string;
  color: string;
  delay: number;
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(10px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
        background: "rgba(13,15,28,0.9)",
        border: `1px solid ${color}33`,
        borderRadius: "8px",
        padding: "8px 14px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1px",
        backdropFilter: "blur(12px)",
      }}
    >
      <span style={{ color, fontSize: "0.95rem", fontWeight: 800, letterSpacing: "-0.02em" }}>
        {val}
      </span>
      <span style={{ color: "#8892A4", fontSize: "0.62rem", fontWeight: 500 }}>
        {label}
      </span>
    </div>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
export default function JI01Hero() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 100);
    const t2 = setTimeout(() => setPhase(2), 450);
    const t3 = setTimeout(() => setPhase(3), 850);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const reveal = (minPhase: number, delay = 0) => ({
    opacity: phase >= minPhase ? 1 : 0,
    transform: phase >= minPhase ? "translateY(0px)" : "translateY(24px)",
    transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
  });

  return (
    <section
      className="relative overflow-hidden w-full"
      style={{
        paddingTop: "120px",
        paddingBottom: "100px",
      }}
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Subtle grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(124,58,237,0.14) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
            opacity: 0.18,
          }}
        />
        {/* Left edge glow */}
        <div
          className="absolute top-0 left-0 bottom-0"
          style={{
            width: "560px",
            background:
              "radial-gradient(ellipse 80% 80% at -10% 55%, rgba(124,58,237,0.07) 0%, transparent 70%)",
          }}
        />
        {/* Right ambient */}
        <div
          className="absolute top-0 right-0 bottom-0"
          style={{
            width: "560px",
            background:
              "radial-gradient(ellipse 80% 80% at 110% 45%, rgba(124,58,237,0.05) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div
          className="flex flex-col lg:flex-row items-center gap-14 lg:gap-10 xl:gap-16"
        >
          {/* ─────────────────── LEFT: Typography + CTAs ─────────────────── */}
          <div
            className="flex-1 min-w-0 text-center lg:text-left flex flex-col items-center lg:items-start"
            style={{ maxWidth: "580px" }}
          >
            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-8 rounded-full"
              style={{
                background: "rgba(124,58,237,0.09)",
                border: "1px solid rgba(124,58,237,0.28)",
                ...reveal(1, 0),
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#7C3AED",
                  boxShadow: "0 0 8px rgba(124,58,237,0.9)",
                  display: "inline-block",
                  animation: "pulse 2s infinite",
                }}
              />
              <span
                style={{
                  color: "#A78BFA",
                  fontSize: "0.6875rem",
                  letterSpacing: "0.13em",
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              >
                AI Commerce Infrastructure
              </span>
            </div>

            {/* H1 — tight 2-3 line heading */}
            <h1
              className="font-extrabold text-white leading-[1.08] mb-6 tracking-[-0.025em]"
              style={{
                fontSize: "clamp(2.6rem, 5.2vw, 4.5rem)",
                ...reveal(1, 80),
              }}
            >
              <span className="block">The AI Operating System</span>
              <span
                className="block"
                style={{
                  background:
                    "linear-gradient(135deg, #C4B5FD 0%, #A78BFA 45%, #7C3AED 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                for Modern Ecommerce
              </span>
            </h1>

            {/* Subheading */}
            <p
              className="mb-10 text-center lg:text-left"
              style={{
                color: "#8892A4",
                fontSize: "1.0625rem",
                lineHeight: 1.78,
                maxWidth: "500px",
                ...reveal(2, 0),
              }}
            >
              We build AI-enabled Shopify ecosystems that automate discovery,
              recovery, customer journeys, and conversational commerce for
              modern D2C brands.
            </p>

            {/* CTA buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto"
              style={reveal(2, 100)}
            >
              <a
                id="ji01-hero-cta-primary"
                href="YOUR_CALENDLY_LINK"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #6D28D9)",
                  boxShadow:
                    "0 0 28px rgba(124,58,237,0.38), 0 4px 16px rgba(0,0,0,0.5)",
                  borderRadius: "12px",
                  padding: "14px 28px",
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  color: "white",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow =
                    "0 0 48px rgba(124,58,237,0.60), 0 6px 22px rgba(0,0,0,0.6)";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow =
                    "0 0 28px rgba(124,58,237,0.38), 0 4px 16px rgba(0,0,0,0.5)";
                  el.style.transform = "";
                }}
              >
                Book Strategy Session
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <a
                id="ji01-hero-cta-secondary"
                href="#ji01-orchestration"
                className="inline-flex items-center justify-center gap-2 transition-all duration-300"
                style={{
                  border: "1px solid rgba(124,58,237,0.30)",
                  background: "rgba(124,58,237,0.06)",
                  borderRadius: "12px",
                  padding: "14px 28px",
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  color: "white",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(124,58,237,0.55)";
                  el.style.background = "rgba(124,58,237,0.11)";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(124,58,237,0.30)";
                  el.style.background = "rgba(124,58,237,0.06)";
                  el.style.transform = "";
                }}
              >
                Explore Infrastructure
              </a>
            </div>

            {/* Trust line */}
            <div
              className="flex items-center gap-2.5"
              style={reveal(3, 0)}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      background: `hsl(${260 + i * 15}, 60%, ${40 + i * 8}%)`,
                      border: "2px solid #08090A",
                      marginLeft: i > 0 ? "-8px" : "0",
                    }}
                  />
                ))}
              </div>
              <span
                style={{
                  color: "#8892A4",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                }}
              >
                <span style={{ color: "#22C55E", fontWeight: 700 }}>100+</span>{" "}
                Commerce Experiences Built
              </span>
            </div>
          </div>

          {/* ─────────────────── RIGHT: Commerce Engine Viz ─────────────────── */}
          <div
            className="flex-shrink-0 w-full"
            style={{
              maxWidth: "520px",
              ...reveal(2, 200),
            }}
          >
            <CommerceEngineViz />
          </div>
        </div>
      </div>
    </section>
  );
}
