"use client";

import { useState, useEffect, useRef } from "react";

const TYPING_PROMPT = "I want AI that replies to WhatsApp customer questions automatically";

const PROCESSING_STEPS = [
  "Understanding workflow...",
  "Mapping business logic...",
  "Connecting business data...",
  "Building AI system...",
];

const NODES = [
  { id: "customer", label: "Customer Queries", angle: 210, dist: 130 },
  { id: "whatsapp", label: "WhatsApp", angle: 270, dist: 130 },
  { id: "inventory", label: "Inventory", angle: 330, dist: 130 },
  { id: "orders", label: "Orders", angle: 30, dist: 130 },
  { id: "reviews", label: "Reviews", angle: 90, dist: 130 },
  { id: "catalogue", label: "Catalogue", angle: 150, dist: 130 },
  { id: "analytics", label: "Analytics", angle: 0, dist: 170 },
];

const CAPABILITY_CARDS = [
  "AI Customer Support",
  "Catalogue Intelligence",
  "WhatsApp Automation",
  "Workflow Automation",
  "Business Insights",
];

function toXY(angleDeg: number, dist: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: Math.cos(rad) * dist, y: Math.sin(rad) * dist };
}

type Phase = "idle" | "typing" | "processing" | "graph" | "cards";

export default function BuildHero() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [typedText, setTypedText] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [processStep, setProcessStep] = useState(0);
  const [visibleNodes, setVisibleNodes] = useState<number[]>([]);
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [centerVisible, setCenterVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const autoStarted = useRef(false);

  useEffect(() => {
    if (autoStarted.current) return;
    autoStarted.current = true;
    const t = setTimeout(() => startTyping(), 1200);
    return () => clearTimeout(t);
  }, []);

  function startTyping() {
    setPhase("typing");
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTypedText(TYPING_PROMPT.slice(0, i));
      if (i >= TYPING_PROMPT.length) {
        clearInterval(interval);
        setTimeout(() => runProcessing(), 700);
      }
    }, 38);
  }

  function runProcessing() {
    setPhase("processing");
    setProcessStep(0);
    let step = 0;
    const interval = setInterval(() => {
      step++;
      setProcessStep(step);
      if (step >= PROCESSING_STEPS.length) {
        clearInterval(interval);
        setTimeout(() => showGraph(), 500);
      }
    }, 700);
  }

  function showGraph() {
    setPhase("graph");
    setCenterVisible(true);
    NODES.forEach((_, idx) => {
      setTimeout(() => {
        setVisibleNodes((p) => [...p, idx]);
        setTimeout(() => setVisibleLines((p) => [...p, idx]), 200);
      }, idx * 120);
    });
    setTimeout(() => showCards(), NODES.length * 120 + 600);
  }

  function showCards() {
    setPhase("cards");
    CAPABILITY_CARDS.forEach((_, idx) => {
      setTimeout(() => setVisibleCards((p) => [...p, idx]), idx * 150);
    });
  }

  function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    if (!inputValue.trim()) return;
    setTypedText(inputValue);
    setInputValue("");
    setVisibleNodes([]);
    setVisibleLines([]);
    setVisibleCards([]);
    setCenterVisible(false);
    setProcessStep(0);
    setTimeout(() => runProcessing(), 300);
  }

  function handleReset() {
    setPhase("idle");
    setTypedText("");
    setInputValue("");
    setProcessStep(0);
    setVisibleNodes([]);
    setVisibleLines([]);
    setVisibleCards([]);
    setCenterVisible(false);
    autoStarted.current = false;
    setTimeout(() => {
      autoStarted.current = true;
      startTyping();
    }, 400);
  }

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#08090A", padding: "130px 0 90px" }}
    >
      {/* Ambient background glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 65% 45%, rgba(124,58,237,0.10) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: "10%",
          left: "-10%",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 65%)",
          borderRadius: "50%",
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[48%_52%] gap-10 lg:gap-16 items-center">
          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col items-start">
            {/* Platform label */}
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-7 text-xs font-semibold rounded-full tracking-widest uppercase"
              style={{
                background: "rgba(124,58,237,0.10)",
                border: "1px solid rgba(124,58,237,0.25)",
                color: "#A78BFA",
                letterSpacing: "0.12em",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#7C3AED", boxShadow: "0 0 6px #7C3AED" }}
              />
              Platform Product
            </span>

            {/* Headline */}
            <h1
              className="font-extrabold leading-[1.12] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.2rem,4.5vw,3.75rem)" }}
            >
              <span className="block text-white">Describe your{" "}
                <span style={{ color: "#7C3AED" }}>AI workflow.</span>
              </span>
              <span className="block text-white mt-1">
                Jupiter Build turns it into{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #7C3AED, #A78BFA)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  reality.
                </span>
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base leading-[1.75] mb-4 max-w-[480px]" style={{ color: "#8892A4" }}>
              Jupiter Build helps businesses turn operational problems and AI ideas into working{" "}
              <span style={{ color: "#A78BFA" }}>custom AI systems</span> built around real{" "}
              <span style={{ color: "#A78BFA" }}>workflow</span>, data, and{" "}
              <span style={{ color: "#A78BFA" }}>business</span> needs.
            </p>

            {/* Supporting lines */}
            <ul className="flex flex-col gap-1.5 mb-8 text-sm" style={{ color: "#8892A4" }}>
              {["No generic tools", "No complex setup", "Built specifically for your business"].map((line) => (
                <li key={line} className="flex items-center gap-2">
                  <span style={{ color: "#7C3AED" }}>✦</span>
                  {line}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-8">
              <a
                href="#submit"
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded-xl transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #6D28D9)",
                  boxShadow: "0 0 24px rgba(124,58,237,0.40), 0 2px 8px rgba(0,0,0,0.4)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 40px rgba(124,58,237,0.65), 0 4px 16px rgba(0,0,0,0.5)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 24px rgba(124,58,237,0.40), 0 2px 8px rgba(0,0,0,0.4)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                Submit Your Idea
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </a>
              <a
                href="#discovery"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded-xl transition-all duration-300"
                style={{
                  border: "1px solid rgba(124,58,237,0.35)",
                  background: "rgba(124,58,237,0.06)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.65)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.12)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(124,58,237,0.20)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.35)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.06)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                Book a Discovery Call →
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-4 text-xs" style={{ color: "#8892A4" }}>
              {["Custom AI systems", "Built around your workflow", "48 hour response"].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <span
                    className="w-4 h-4 rounded-full flex items-center justify-center text-[9px]"
                    style={{ background: "rgba(124,58,237,0.18)", color: "#A78BFA" }}
                  >
                    ✓
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN — Interactive AI Builder ── */}
          <div className="flex flex-col">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "rgba(19,22,32,0.70)",
                border: "1px solid rgba(124,58,237,0.18)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                boxShadow:
                  "0 0 0 1px rgba(255,255,255,0.04) inset, 0 0 60px rgba(124,58,237,0.12), 0 24px 80px rgba(0,0,0,0.5)",
              }}
            >
              {/* Top bar */}
              <div
                className="flex items-center justify-between px-5 py-3"
                style={{
                  borderBottom: "1px solid rgba(124,58,237,0.12)",
                  background: "rgba(10,12,21,0.60)",
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF5F57" }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#FFBD2E" }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#28C840" }} />
                </div>
                <span className="text-xs font-medium" style={{ color: "#A78BFA" }}>
                  ✦ Jupiter Build — AI Workflow Generator
                </span>
                {phase !== "idle" && (
                  <button
                    onClick={handleReset}
                    className="text-xs transition-colors"
                    style={{ color: "#8892A4" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#A78BFA")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#8892A4")}
                  >
                    Reset
                  </button>
                )}
              </div>

              {/* Body */}
              <div className="p-5">
                {/* Prompt input area */}
                <div
                  className="rounded-xl p-4 mb-5"
                  style={{
                    background: "rgba(10,12,21,0.60)",
                    border: "1px solid rgba(124,58,237,0.14)",
                  }}
                >
                  <p className="text-[0.65rem] uppercase tracking-widest mb-2" style={{ color: "#8892A4" }}>
                    Describe your workflow
                  </p>
                  {phase === "idle" ? (
                    <form onSubmit={handleSubmit} className="flex gap-2">
                      <input
                        ref={inputRef}
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Describe what you want AI to do..."
                        className="flex-1 bg-transparent text-sm outline-none"
                        style={{ color: "#FFFFFF" }}
                      />
                      <button
                        type="submit"
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white transition-all"
                        style={{
                          background: "linear-gradient(135deg,#7C3AED,#6D28D9)",
                          boxShadow: "0 0 16px rgba(124,58,237,0.4)",
                        }}
                      >
                        Build →
                      </button>
                    </form>
                  ) : (
                    <div className="flex items-start gap-2">
                      <span style={{ color: "#7C3AED" }} className="mt-0.5 text-xs">✦</span>
                      <p className="text-sm text-white leading-relaxed">
                        {typedText}
                        {phase === "typing" && (
                          <span
                            className="inline-block w-0.5 h-4 ml-0.5 align-middle"
                            style={{
                              background: "#7C3AED",
                              animation: "blink 0.7s step-end infinite",
                            }}
                          />
                        )}
                      </p>
                    </div>
                  )}
                </div>

                {/* Processing steps */}
                {(phase === "processing" || phase === "graph" || phase === "cards") && (
                  <div className="mb-5 space-y-2">
                    {PROCESSING_STEPS.map((step, idx) => {
                      const done = idx < processStep;
                      const active = idx === processStep - 1 && phase === "processing";
                      return (
                        <div
                          key={step}
                          className="flex items-center gap-3 text-xs transition-all duration-500"
                          style={{
                            opacity: done || active ? 1 : 0.3,
                            transform: done || active ? "translateX(0)" : "translateX(-8px)",
                          }}
                        >
                          <span
                            className="w-4 h-4 rounded-full flex items-center justify-center text-[9px] flex-shrink-0"
                            style={{
                              background: done
                                ? "rgba(124,58,237,0.3)"
                                : active
                                ? "rgba(124,58,237,0.15)"
                                : "rgba(255,255,255,0.05)",
                              border: `1px solid ${done ? "#7C3AED" : active ? "rgba(124,58,237,0.5)" : "rgba(255,255,255,0.08)"}`,
                              color: done ? "#A78BFA" : active ? "#7C3AED" : "#8892A4",
                            }}
                          >
                            {done ? "✓" : active ? "◉" : "○"}
                          </span>
                          <span style={{ color: done ? "#A78BFA" : active ? "#FFFFFF" : "#8892A4" }}>
                            {step}
                          </span>
                          {active && (
                            <span className="flex gap-0.5 ml-auto">
                              {[0, 1, 2].map((i) => (
                                <span
                                  key={i}
                                  className="w-1 h-1 rounded-full"
                                  style={{
                                    background: "#7C3AED",
                                    animation: `bounce 0.8s ease-in-out infinite`,
                                    animationDelay: `${i * 0.15}s`,
                                  }}
                                />
                              ))}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Workflow graph */}
                {(phase === "graph" || phase === "cards") && (
                  <div
                    className="relative mx-auto mb-5 flex items-center justify-center"
                    style={{ height: "300px", maxWidth: "360px" }}
                  >
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      viewBox="-180 -160 360 320"
                    >
                      <defs>
                        <radialGradient id="lineGrad" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.1" />
                        </radialGradient>
                        <filter id="glow">
                          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>
                      {NODES.map((node, idx) => {
                        const { x, y } = toXY(node.angle, node.dist);
                        return (
                          <line
                            key={node.id}
                            x1="0"
                            y1="0"
                            x2={x}
                            y2={y}
                            stroke="url(#lineGrad)"
                            strokeWidth="1.2"
                            filter="url(#glow)"
                            style={{
                              opacity: visibleLines.includes(idx) ? 1 : 0,
                              transition: "opacity 0.5s ease",
                              strokeDasharray: "4 3",
                              animation: visibleLines.includes(idx)
                                ? "dashMove 2s linear infinite"
                                : "none",
                            }}
                          />
                        );
                      })}
                    </svg>

                    {/* Central node */}
                    <div
                      className="absolute z-10 flex flex-col items-center justify-center rounded-full text-center"
                      style={{
                        width: "80px",
                        height: "80px",
                        background: "linear-gradient(135deg, rgba(124,58,237,0.4), rgba(109,40,217,0.25))",
                        border: "1.5px solid rgba(124,58,237,0.6)",
                        boxShadow: centerVisible
                          ? "0 0 30px rgba(124,58,237,0.5), 0 0 60px rgba(124,58,237,0.2)"
                          : "none",
                        opacity: centerVisible ? 1 : 0,
                        transform: centerVisible ? "scale(1)" : "scale(0.6)",
                        transition: "all 0.6s cubic-bezier(0.34,1.56,0.64,1)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      <span className="text-[0.5rem] font-bold leading-tight text-white px-1">
                        Jupiter<br />AI System
                      </span>
                    </div>

                    {/* Orbit nodes */}
                    {NODES.map((node, idx) => {
                      const { x, y } = toXY(node.angle, node.dist);
                      const isVisible = visibleNodes.includes(idx);
                      return (
                        <div
                          key={node.id}
                          className="absolute flex flex-col items-center"
                          style={{
                            left: `calc(50% + ${x}px)`,
                            top: `calc(50% + ${y}px)`,
                            transform: "translate(-50%, -50%)",
                            opacity: isVisible ? 1 : 0,
                            scale: isVisible ? "1" : "0.5",
                            transition: `opacity 0.4s ease ${idx * 0.05}s, scale 0.4s cubic-bezier(0.34,1.56,0.64,1) ${idx * 0.05}s`,
                          }}
                        >
                          <div
                            className="rounded-lg px-2 py-1 text-center whitespace-nowrap"
                            style={{
                              background: "rgba(19,22,32,0.85)",
                              border: "1px solid rgba(124,58,237,0.28)",
                              backdropFilter: "blur(6px)",
                              boxShadow: "0 0 12px rgba(124,58,237,0.12)",
                            }}
                          >
                            <span className="text-[0.6rem] font-medium" style={{ color: "#A78BFA" }}>
                              {node.label}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Capability cards */}
                {phase === "cards" && (
                  <div>
                    <p
                      className="text-[0.65rem] uppercase tracking-widest mb-3"
                      style={{ color: "#8892A4" }}
                    >
                      Generated AI capabilities
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {CAPABILITY_CARDS.map((cap, idx) => (
                        <div
                          key={cap}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium"
                          style={{
                            background: "rgba(124,58,237,0.12)",
                            border: "1px solid rgba(124,58,237,0.28)",
                            color: "#A78BFA",
                            opacity: visibleCards.includes(idx) ? 1 : 0,
                            transform: visibleCards.includes(idx) ? "translateY(0)" : "translateY(8px)",
                            transition: `opacity 0.4s ease ${idx * 0.1}s, transform 0.4s ease ${idx * 0.1}s`,
                          }}
                        >
                          <span style={{ color: "#7C3AED", fontSize: "0.6rem" }}>✓</span>
                          {cap}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Idle placeholder */}
                {phase === "idle" && (
                  <div
                    className="rounded-xl flex flex-col items-center justify-center py-12 text-center"
                    style={{
                      background: "rgba(10,12,21,0.40)",
                      border: "1px dashed rgba(124,58,237,0.18)",
                    }}
                  >
                    <span className="text-3xl mb-3" style={{ color: "rgba(124,58,237,0.3)" }}>✦</span>
                    <p className="text-sm text-white mb-1">Describe your workflow above</p>
                    <p className="text-xs" style={{ color: "#8892A4" }}>
                      Watch Jupiter Build turn it into a working AI system
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes dashMove {
          to { stroke-dashoffset: -14; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
      `}</style>
    </section>
  );
}
