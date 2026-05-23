"use client";

import { useEffect, useRef, useState } from "react";

const WORKFLOW_TAGS = ["Customer Support", "Inventory", "SEO", "WhatsApp", "Analytics"];

const STEPS = [
  {
    number: "01",
    title: "Describe Your Workflow",
    description:
      "Tell us what your business does, where operations slow down, or what kind of AI system you want to build.",
  },
  {
    number: "02",
    title: "We Scope The System",
    description:
      "Our team reviews your workflow, identifies opportunities, and maps the best way to build your AI system.",
  },
  {
    number: "03",
    title: "We Build It",
    description:
      "Jupiter AI develops a working AI system designed around your business operations and workflows.",
  },
];

const SYSTEM_NODES = ["Customer Data", "Operations", "Analytics", "Integrations"];

function useInView(threshold = 0.25) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ── Step 01 micro-interaction ── */
function Step01Visual({ active }: { active: boolean }) {
  const [cursor, setCursor] = useState(true);
  const [visibleTags, setVisibleTags] = useState<number[]>([]);

  useEffect(() => {
    if (!active) return;
    const blink = setInterval(() => setCursor((p) => !p), 530);
    WORKFLOW_TAGS.forEach((_, i) =>
      setTimeout(() => setVisibleTags((p) => [...p, i]), 400 + i * 280)
    );
    return () => clearInterval(blink);
  }, [active]);

  return (
    <div className="flex flex-col gap-3">
      {/* fake text input */}
      <div
        className="rounded-lg px-4 py-3 text-sm flex items-center gap-1.5"
        style={{
          background: "rgba(10,12,21,0.70)",
          border: "1px solid rgba(124,58,237,0.22)",
          color: "#C7D4F0",
        }}
      >
        <span>We need AI for customer WhatsApp queries</span>
        <span
          className="inline-block w-0.5 h-4 align-middle"
          style={{
            background: "#7C3AED",
            opacity: active && cursor ? 1 : 0,
            transition: "opacity 0.1s",
          }}
        />
      </div>
      {/* floating tags */}
      <div className="flex flex-wrap gap-2">
        {WORKFLOW_TAGS.map((tag, i) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-full text-xs font-medium"
            style={{
              background: "rgba(124,58,237,0.12)",
              border: "1px solid rgba(124,58,237,0.25)",
              color: "#A78BFA",
              opacity: visibleTags.includes(i) ? 1 : 0,
              transform: visibleTags.includes(i) ? "translateY(0) scale(1)" : "translateY(6px) scale(0.9)",
              transition: `opacity 0.4s ease ${i * 0.08}s, transform 0.4s ease ${i * 0.08}s`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Step 02 micro-interaction ── */
function Step02Visual({ active }: { active: boolean }) {
  const [scanY, setScanY] = useState(0);
  const [linesVisible, setLinesVisible] = useState(false);

  useEffect(() => {
    if (!active) return;
    setLinesVisible(false);
    setScanY(0);
    let start: number | null = null;
    const DURATION = 1400;
    const raf = requestAnimationFrame(function tick(ts) {
      if (!start) start = ts;
      const p = Math.min((ts - start) / DURATION, 1);
      setScanY(p * 100);
      if (p < 1) requestAnimationFrame(tick);
      else setLinesVisible(true);
    });
    return () => cancelAnimationFrame(raf);
  }, [active]);

  const boxes = [
    { label: "Workflow Map", w: 70, x: 0, y: 0 },
    { label: "AI Scope", w: 56, x: 76, y: 0 },
    { label: "Integration Plan", w: 88, x: 0, y: 44 },
    { label: "Build Spec", w: 50, x: 92, y: 44 },
  ];

  return (
    <div
      className="relative rounded-lg overflow-hidden"
      style={{
        background: "rgba(10,12,21,0.65)",
        border: "1px solid rgba(124,58,237,0.18)",
        height: "90px",
        padding: "12px 16px",
      }}
    >
      {/* Blueprint grid lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.12 }}>
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#7C3AED" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* scan line */}
      <div
        className="absolute left-0 right-0 pointer-events-none"
        style={{
          top: `${scanY}%`,
          height: "2px",
          background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.7), transparent)",
          boxShadow: "0 0 10px rgba(124,58,237,0.5)",
          opacity: active && scanY < 100 ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      />

      {/* boxes */}
      <div className="relative z-10 flex flex-wrap gap-2">
        {boxes.map((b, i) => (
          <div
            key={b.label}
            className="px-2 py-1 rounded text-[0.55rem] font-semibold"
            style={{
              background: "rgba(124,58,237,0.14)",
              border: "1px solid rgba(124,58,237,0.3)",
              color: "#A78BFA",
              opacity: linesVisible ? 1 : 0,
              transform: linesVisible ? "scale(1)" : "scale(0.85)",
              transition: `opacity 0.35s ease ${i * 0.1}s, transform 0.35s ease ${i * 0.1}s`,
            }}
          >
            {b.label}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Step 03 micro-interaction ── */
function Step03Visual({ active }: { active: boolean }) {
  const [nodeVis, setNodeVis] = useState<number[]>([]);
  const [lineVis, setLineVis] = useState<number[]>([]);
  const [centerVis, setCenterVis] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!active) return;
    setNodeVis([]);
    setLineVis([]);
    setCenterVis(false);
    setReady(false);

    setTimeout(() => setCenterVis(true), 200);
    SYSTEM_NODES.forEach((_, i) => {
      setTimeout(() => setNodeVis((p) => [...p, i]), 400 + i * 200);
      setTimeout(() => setLineVis((p) => [...p, i]), 600 + i * 200);
    });
    setTimeout(() => setReady(true), 400 + SYSTEM_NODES.length * 200 + 400);
  }, [active]);

  const angles = [225, 315, 45, 135];

  return (
    <div className="flex flex-col gap-3">
    <div className="relative flex items-center justify-center" style={{ height: "140px" }}>
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 320 110">
        <defs>
          <radialGradient id="lineG3" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.05" />
          </radialGradient>
          <filter id="glow3">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        {SYSTEM_NODES.map((_, i) => {
          const rad = (angles[i] * Math.PI) / 180;
          const cx = 160, cy = 55, r = 46;
          const x2 = cx + Math.cos(rad) * r;
          const y2 = cy + Math.sin(rad) * r;
          return (
            <line
              key={i}
              x1={cx} y1={cy} x2={x2} y2={y2}
              stroke="url(#lineG3)"
              strokeWidth="1.2"
              filter="url(#glow3)"
              style={{
                opacity: lineVis.includes(i) ? 1 : 0,
                transition: "opacity 0.4s ease",
                strokeDasharray: "3 2",
                animation: lineVis.includes(i) ? "dashMove3 1.8s linear infinite" : "none",
              }}
            />
          );
        })}
      </svg>

      {/* center node */}
      <div
        className="relative z-10 flex flex-col items-center justify-center rounded-full text-center"
        style={{
          width: "64px",
          height: "64px",
          background: "linear-gradient(135deg,rgba(124,58,237,0.38),rgba(109,40,217,0.22))",
          border: `1.5px solid rgba(124,58,237,${centerVis ? 0.7 : 0.1})`,
          boxShadow: centerVis ? "0 0 24px rgba(124,58,237,0.45),0 0 48px rgba(124,58,237,0.15)" : "none",
          opacity: centerVis ? 1 : 0,
          transform: centerVis ? "scale(1)" : "scale(0.5)",
          transition: "all 0.5s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      >
        <span className="text-[0.45rem] font-bold text-white leading-tight px-1">
          Jupiter<br />AI System
        </span>
      </div>

      {/* orbit nodes */}
      {SYSTEM_NODES.map((node, i) => {
        const rad = (angles[i] * Math.PI) / 180;
        const r = 46;
        const x = Math.cos(rad) * r;
        const y = Math.sin(rad) * r;
        return (
          <div
            key={node}
            className="absolute z-10"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: "translate(-50%,-50%)",
              opacity: nodeVis.includes(i) ? 1 : 0,
              scale: nodeVis.includes(i) ? "1" : "0.5",
              transition: `opacity 0.35s ease ${i * 0.05}s, scale 0.35s cubic-bezier(0.34,1.56,0.64,1) ${i * 0.05}s`,
            }}
          >
            <div
              className="px-1.5 py-0.5 rounded text-[0.5rem] font-medium whitespace-nowrap"
              style={{
                background: "rgba(19,22,32,0.9)",
                border: "1px solid rgba(124,58,237,0.28)",
                color: "#A78BFA",
              }}
            >
              {node}
            </div>
          </div>
        );
      })}

      <style>{`
        @keyframes dashMove3 { to { stroke-dashoffset: -10; } }
        @keyframes pulse3 { 0%,100%{opacity:1;} 50%{opacity:0.4;} }
      `}</style>
    </div>

      {/* System Ready badge — outside the graph so it never overlaps nodes */}
      <div
        className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold self-end"
        style={{
          background: "rgba(124,58,237,0.18)",
          border: "1px solid rgba(124,58,237,0.35)",
          color: "#A78BFA",
          opacity: ready ? 1 : 0,
          transform: ready ? "translateY(0)" : "translateY(6px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "#7C3AED", boxShadow: "0 0 6px #7C3AED", animation: "pulse3 1.5s ease-in-out infinite" }}
        />
        System Ready
      </div>
    </div>
  );
}

/* ── Main component ── */
export default function HowItWorksBuild() {
  const { ref: sectionRef, inView } = useInView(0.15);
  const [activeStep, setActiveStep] = useState(-1);
  const [line1, setLine1] = useState(0);
  const [line2, setLine2] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const t0 = setTimeout(() => setActiveStep(0), 200);
    const t1 = setTimeout(() => {
      const start = performance.now();
      const dur = 600;
      const raf = (ts: number) => {
        setLine1(Math.min((ts - start) / dur, 1) * 100);
        if ((ts - start) / dur < 1) requestAnimationFrame(raf);
        else {
          setActiveStep(1);
          const t2 = setTimeout(() => {
            const s2 = performance.now();
            const raf2 = (ts2: number) => {
              setLine2(Math.min((ts2 - s2) / dur, 1) * 100);
              if ((ts2 - s2) / dur < 1) requestAnimationFrame(raf2);
              else setActiveStep(2);
            };
            requestAnimationFrame(raf2);
          }, 300);
          return () => clearTimeout(t2);
        }
      };
      requestAnimationFrame(raf);
    }, 900);
    return () => { clearTimeout(t0); clearTimeout(t1); };
  }, [inView]);

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      style={{ backgroundColor: "#08090A", padding: "100px 0 110px", position: "relative", overflow: "hidden" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(124,58,237,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 text-xs font-semibold rounded-full tracking-widest uppercase"
            style={{
              background: "rgba(124,58,237,0.10)",
              border: "1px solid rgba(124,58,237,0.22)",
              color: "#A78BFA",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#7C3AED", boxShadow: "0 0 6px #7C3AED" }}
            />
            How It Works
          </span>

          <h2
            className="font-extrabold leading-[1.12] tracking-tight mb-5"
            style={{
              fontSize: "clamp(2rem,4vw,3.25rem)",
              color: "#FFFFFF",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.65s ease 0.1s, transform 0.65s ease 0.1s",
            }}
          >
            From workflow idea
            <br />
            <span
              style={{
                background: "linear-gradient(135deg,#7C3AED,#A78BFA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              to working AI system
            </span>
          </h2>

          <p
            className="text-base leading-relaxed max-w-[500px] mx-auto"
            style={{
              color: "#8892A4",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.65s ease 0.2s, transform 0.65s ease 0.2s",
            }}
          >
            Jupiter Build transforms business workflows into AI systems designed around real
            operations and business needs.
          </p>
        </div>

        {/* ── Desktop timeline ── */}
        <div className="hidden lg:block">
          {/* Connection line track */}
          <div className="relative mb-0">
            <div className="flex items-stretch gap-0">
              {STEPS.map((step, idx) => {
                const isActive = activeStep >= idx;
                const isLast = idx === STEPS.length - 1;

                return (
                  <div key={step.number} className="flex items-center" style={{ flex: 1 }}>
                    {/* Card */}
                    <div
                      className="w-full group relative rounded-2xl p-6 transition-all duration-500 cursor-default"
                      style={{
                        background: isActive
                          ? "rgba(19,22,32,0.80)"
                          : "rgba(13,15,28,0.55)",
                        border: `1px solid ${isActive ? "rgba(124,58,237,0.30)" : "rgba(255,255,255,0.05)"}`,
                        backdropFilter: "blur(18px)",
                        WebkitBackdropFilter: "blur(18px)",
                        boxShadow: isActive
                          ? "0 0 40px rgba(124,58,237,0.10), 0 8px 32px rgba(0,0,0,0.35)"
                          : "0 4px 16px rgba(0,0,0,0.2)",
                        opacity: inView ? 1 : 0,
                        transform: inView ? "translateY(0)" : "translateY(20px)",
                        transition: `opacity 0.6s ease ${0.1 + idx * 0.15}s, transform 0.6s ease ${0.1 + idx * 0.15}s, background 0.5s, border-color 0.5s, box-shadow 0.5s`,
                      }}
                    >
                      {/* Active indicator top glow */}
                      {isActive && (
                        <div
                          className="absolute top-0 left-6 right-6 h-px"
                          style={{
                            background: "linear-gradient(90deg,transparent,rgba(124,58,237,0.6),transparent)",
                          }}
                        />
                      )}

                      {/* Step number */}
                      <div className="flex items-center justify-between mb-5">
                        <span
                          className="text-4xl font-black leading-none"
                          style={{
                            color: isActive ? "rgba(124,58,237,0.5)" : "rgba(255,255,255,0.06)",
                            transition: "color 0.5s",
                          }}
                        >
                          {step.number}
                        </span>
                        {/* Futuristic icon */}
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center text-base"
                          style={{
                            background: isActive ? "rgba(124,58,237,0.15)" : "rgba(255,255,255,0.04)",
                            border: `1px solid ${isActive ? "rgba(124,58,237,0.35)" : "rgba(255,255,255,0.07)"}`,
                            transition: "all 0.4s",
                          }}
                        >
                          {idx === 0 ? "✦" : idx === 1 ? "◈" : "⬡"}
                        </div>
                      </div>

                      {/* Title */}
                      <h3
                        className="text-lg font-bold mb-2 leading-snug"
                        style={{ color: isActive ? "#FFFFFF" : "#8892A4", transition: "color 0.4s" }}
                      >
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p
                        className="text-sm leading-relaxed mb-5"
                        style={{ color: "#8892A4", lineHeight: "1.7" }}
                      >
                        {step.description}
                      </p>

                      {/* Micro interaction visual */}
                      <div
                        style={{
                          opacity: isActive ? 1 : 0.3,
                          transition: "opacity 0.6s ease",
                        }}
                      >
                        {idx === 0 && <Step01Visual active={isActive} />}
                        {idx === 1 && <Step02Visual active={isActive} />}
                        {idx === 2 && <Step03Visual active={isActive} />}
                      </div>
                    </div>

                    {/* Connector */}
                    {!isLast && (
                      <div
                        className="flex-shrink-0 mx-3 relative"
                        style={{ width: "52px", height: "2px", background: "rgba(255,255,255,0.05)" }}
                      >
                        {/* Animated fill */}
                        <div
                          className="absolute inset-y-0 left-0"
                          style={{
                            width: `${idx === 0 ? line1 : line2}%`,
                            background: "linear-gradient(90deg,#7C3AED,#A78BFA)",
                            boxShadow: "0 0 8px rgba(124,58,237,0.6)",
                            borderRadius: "2px",
                            transition: "none",
                          }}
                        />
                        {/* Arrow head */}
                        <div
                          className="absolute right-0 top-1/2 -translate-y-1/2"
                          style={{
                            width: 0,
                            height: 0,
                            borderTop: "4px solid transparent",
                            borderBottom: "4px solid transparent",
                            borderLeft: `6px solid ${(idx === 0 ? line1 : line2) >= 95 ? "#A78BFA" : "rgba(255,255,255,0.08)"}`,
                            transition: "border-left-color 0.3s",
                          }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Mobile vertical timeline ── */}
        <div className="lg:hidden relative">
          {/* vertical track */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{ background: "rgba(124,58,237,0.12)" }}
          />

          <div className="flex flex-col gap-8">
            {STEPS.map((step, idx) => {
              const isActive = activeStep >= idx;
              return (
                <div
                  key={step.number}
                  className="relative pl-16"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(16px)",
                    transition: `opacity 0.6s ease ${0.1 + idx * 0.15}s, transform 0.6s ease ${0.1 + idx * 0.15}s`,
                  }}
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-4 top-6 -translate-x-1/2 w-4 h-4 rounded-full flex items-center justify-center"
                    style={{
                      background: isActive ? "rgba(124,58,237,0.3)" : "rgba(255,255,255,0.06)",
                      border: `2px solid ${isActive ? "#7C3AED" : "rgba(255,255,255,0.1)"}`,
                      boxShadow: isActive ? "0 0 12px rgba(124,58,237,0.4)" : "none",
                      transition: "all 0.5s",
                    }}
                  >
                    {isActive && (
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#A78BFA" }} />
                    )}
                  </div>

                  {/* Card */}
                  <div
                    className="rounded-2xl p-5"
                    style={{
                      background: isActive ? "rgba(19,22,32,0.80)" : "rgba(13,15,28,0.55)",
                      border: `1px solid ${isActive ? "rgba(124,58,237,0.28)" : "rgba(255,255,255,0.05)"}`,
                      backdropFilter: "blur(16px)",
                      WebkitBackdropFilter: "blur(16px)",
                      boxShadow: isActive ? "0 0 30px rgba(124,58,237,0.09)" : "none",
                      transition: "all 0.5s",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="text-3xl font-black"
                        style={{ color: isActive ? "rgba(124,58,237,0.5)" : "rgba(255,255,255,0.07)" }}
                      >
                        {step.number}
                      </span>
                      <h3
                        className="text-base font-bold"
                        style={{ color: isActive ? "#FFFFFF" : "#8892A4", transition: "color 0.4s" }}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "#8892A4" }}>
                      {step.description}
                    </p>
                    <div style={{ opacity: isActive ? 1 : 0.3, transition: "opacity 0.6s" }}>
                      {idx === 0 && <Step01Visual active={isActive} />}
                      {idx === 1 && <Step02Visual active={isActive} />}
                      {idx === 2 && <Step03Visual active={isActive} />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
