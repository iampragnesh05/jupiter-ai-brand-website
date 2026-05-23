"use client";

import { useEffect, useRef, useState } from "react";

/* ── in-view hook ── */
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ── floating background nodes ── */
const BG_NODES = [
  { x: "8%",  y: "20%", size: 5,  delay: 0 },
  { x: "18%", y: "65%", size: 4,  delay: 1.2 },
  { x: "30%", y: "40%", size: 3,  delay: 0.6 },
  { x: "42%", y: "80%", size: 6,  delay: 2 },
  { x: "55%", y: "15%", size: 4,  delay: 0.9 },
  { x: "68%", y: "55%", size: 5,  delay: 1.6 },
  { x: "78%", y: "30%", size: 3,  delay: 0.3 },
  { x: "88%", y: "72%", size: 4,  delay: 1.8 },
];

const BG_LINES = [
  { x1: "8%",  y1: "20%", x2: "30%", y2: "40%" },
  { x1: "30%", y1: "40%", x2: "42%", y2: "80%" },
  { x1: "55%", y1: "15%", x2: "68%", y2: "55%" },
  { x1: "68%", y1: "55%", x2: "88%", y2: "72%" },
  { x1: "18%", y1: "65%", x2: "42%", y2: "80%" },
];

/* ── field wrapper ── */
function Field({
  label,
  children,
  delay,
  inView,
}: {
  label: string;
  children: React.ReactNode;
  delay: number;
  inView: boolean;
}) {
  return (
    <div
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(12px)",
        transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`,
      }}
    >
      <label
        className="block text-xs font-semibold mb-2 uppercase tracking-widest"
        style={{ color: "#8892A4" }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

const INPUT_BASE: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  background: "rgba(8,9,10,0.65)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "12px",
  color: "#FFFFFF",
  fontSize: "0.875rem",
  outline: "none",
  transition: "border-color 0.25s, box-shadow 0.25s",
};

function useFieldFocus() {
  const [focused, setFocused] = useState(false);
  return {
    focused,
    focusProps: {
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
    },
    style: {
      ...INPUT_BASE,
      borderColor: focused ? "rgba(124,58,237,0.60)" : "rgba(255,255,255,0.08)",
      boxShadow: focused ? "0 0 0 3px rgba(124,58,237,0.12)" : "none",
    } as React.CSSProperties,
  };
}

/* ══════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════ */
export default function ContactSection() {
  const { ref: sectionRef, inView } = useInView();

  const [formData, setFormData] = useState({
    name: "",
    business: "",
    industry: "Fashion",
    idea: "",
    email: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errMsg, setErrMsg] = useState("");

  const nameField  = useFieldFocus();
  const bizField   = useFieldFocus();
  const emailField = useFieldFocus();
  const ideaField  = useFieldFocus();
  const indField   = useFieldFocus();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrMsg("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "jupiter-build-contact",
          sourcePage: "/fashion-ai/jupiter-build",
          name: formData.name,
          email: formData.email,
          businessName: formData.business,
          website: null,
          industry: formData.industry,
          message: formData.idea,
          metadata: { timestamp: new Date().toISOString() },
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", business: "", industry: "Fashion", idea: "", email: "" });
      } else {
        setStatus("error");
        setErrMsg(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setErrMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="submit"
      ref={sectionRef as React.RefObject<HTMLElement>}
      style={{
        backgroundColor: "#08090A",
        padding: "100px 0 120px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Ambient glow ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 60%, rgba(124,58,237,0.08) 0%, transparent 70%)",
        }}
      />

      {/* ── Background floating nodes + lines ── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.18 }}
        preserveAspectRatio="none"
      >
        <defs>
          <radialGradient id="nodeGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="1" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
          </radialGradient>
        </defs>
        {BG_LINES.map((l, i) => (
          <line
            key={i}
            x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
            stroke="#7C3AED"
            strokeWidth="0.8"
            strokeDasharray="4 5"
            style={{
              opacity: inView ? 0.5 : 0,
              transition: `opacity 1s ease ${i * 0.2}s`,
              animation: inView ? `dashDrift ${6 + i}s linear infinite` : "none",
            }}
          />
        ))}
        {BG_NODES.map((n, i) => (
          <circle
            key={i}
            cx={n.x} cy={n.y} r={n.size}
            fill="url(#nodeGrad)"
            style={{
              opacity: inView ? 0.7 : 0,
              transition: `opacity 0.8s ease ${n.delay}s`,
              animation: inView ? `floatNode ${4 + n.delay}s ease-in-out infinite alternate` : "none",
            }}
          />
        ))}
      </svg>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[42%_58%] gap-12 lg:gap-20 items-start">

          {/* ══ LEFT ══ */}
          <div className="flex flex-col">
            {/* Label */}
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 self-start text-xs font-semibold rounded-full tracking-widest uppercase"
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
              Contact
            </span>

            {/* Headline */}
            <h2
              className="font-extrabold leading-[1.12] tracking-tight mb-6"
              style={{
                fontSize: "clamp(2rem,3.8vw,3.25rem)",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.65s ease 0.1s, transform 0.65s ease 0.1s",
              }}
            >
              <span className="text-white">Let&apos;s build your</span>
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg,#7C3AED,#A78BFA)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                next AI system.
              </span>
            </h2>

            {/* Subtext */}
            <p
              className="text-base leading-[1.75] mb-10 max-w-[400px]"
              style={{
                color: "#8892A4",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.65s ease 0.18s, transform 0.65s ease 0.18s",
              }}
            >
              Describe your workflow, operational challenge, or AI idea.{" "}
              <span style={{ color: "#A78BFA" }}>Jupiter Build</span> helps businesses turn
              workflows into working AI systems.
            </p>

            {/* Contact email */}
            <div
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.65s ease 0.26s, transform 0.65s ease 0.26s",
              }}
            >
              <a
                href="mailto:info@jupiter-ai.co"
                className="group inline-flex items-center gap-3 mb-6"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-sm flex-shrink-0"
                  style={{
                    background: "rgba(124,58,237,0.12)",
                    border: "1px solid rgba(124,58,237,0.25)",
                    color: "#A78BFA",
                  }}
                >
                  ✉
                </div>
                <span
                  className="text-sm font-medium transition-colors duration-200 group-hover:text-white"
                  style={{ color: "#8892A4" }}
                >
                  info@jupiter-ai.co
                </span>
              </a>
            </div>

            {/* Supporting line */}
            <p
              className="text-xs flex items-center gap-2"
              style={{
                color: "#4B5563",
                opacity: inView ? 1 : 0,
                transition: "opacity 0.65s ease 0.32s",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: "#7C3AED", boxShadow: "0 0 5px #7C3AED" }}
              />
              Building AI systems for real industries.
            </p>

            {/* Decorative glass stat cards */}
            <div
              className="mt-10 flex flex-col gap-3"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.65s ease 0.38s, transform 0.65s ease 0.38s",
              }}
            >
              {[
                { icon: "⬡", stat: "48h", label: "Response time" },
                { icon: "◈", stat: "Custom", label: "Built for your workflow" },
                { icon: "✦", stat: "Real", label: "Business data & operations" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-xl px-4 py-3"
                  style={{
                    background: "rgba(16,18,30,0.65)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-xs flex-shrink-0"
                    style={{
                      background: "rgba(124,58,237,0.12)",
                      border: "1px solid rgba(124,58,237,0.22)",
                      color: "#A78BFA",
                    }}
                  >
                    {item.icon}
                  </span>
                  <span className="text-sm font-bold text-white">{item.stat}</span>
                  <span className="text-xs" style={{ color: "#8892A4" }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ══ RIGHT — Form card ══ */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "rgba(16,18,30,0.75)",
                border: "1px solid rgba(124,58,237,0.18)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                boxShadow:
                  "0 0 0 1px rgba(255,255,255,0.03) inset, 0 0 60px rgba(124,58,237,0.10), 0 24px 80px rgba(0,0,0,0.45)",
              }}
            >
              {/* Card top bar */}
              <div
                className="flex items-center justify-between px-6 py-4"
                style={{
                  borderBottom: "1px solid rgba(124,58,237,0.10)",
                  background: "rgba(8,9,10,0.50)",
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF5F57" }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#FFBD2E" }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#28C840" }} />
                </div>
                <span className="text-xs font-medium" style={{ color: "#A78BFA" }}>
                  ✦ Jupiter Build — Submit Your Idea
                </span>
                <span className="text-xs" style={{ color: "#4B5563" }}>v1.0</span>
              </div>

              {/* Form body */}
              <div className="p-6 lg:p-8">
                {status === "success" ? (
                  <div
                    className="flex flex-col items-center justify-center text-center py-12"
                    style={{
                      animation: "fadeUp 0.5s ease both",
                    }}
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-5"
                      style={{
                        background: "rgba(124,58,237,0.18)",
                        border: "1px solid rgba(124,58,237,0.4)",
                        boxShadow: "0 0 30px rgba(124,58,237,0.25)",
                      }}
                    >
                      ✓
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Idea received.</h3>
                    <p className="text-sm leading-relaxed max-w-[300px]" style={{ color: "#8892A4" }}>
                      Our team will review your workflow and reach out within{" "}
                      <span style={{ color: "#A78BFA" }}>48 hours</span>.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-8 text-xs px-4 py-2 rounded-lg transition-colors"
                      style={{
                        background: "rgba(124,58,237,0.12)",
                        border: "1px solid rgba(124,58,237,0.25)",
                        color: "#A78BFA",
                      }}
                    >
                      Submit another idea →
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Row: Name + Business */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label="Full Name" delay={0.3} inView={inView}>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your name"
                          required
                          style={nameField.style}
                          {...nameField.focusProps}
                        />
                      </Field>
                      <Field label="Business Name" delay={0.35} inView={inView}>
                        <input
                          type="text"
                          value={formData.business}
                          onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                          placeholder="Your business"
                          required
                          style={bizField.style}
                          {...bizField.focusProps}
                        />
                      </Field>
                    </div>

                    {/* Row: Industry + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label="Industry" delay={0.4} inView={inView}>
                        <select
                          value={formData.industry}
                          onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                          style={{
                            ...indField.style,
                            colorScheme: "dark",
                          }}
                          {...indField.focusProps}
                        >
                          {["Fashion", "Food", "Healthcare", "Education", "Real Estate", "Other"].map(
                            (opt) => <option key={opt} value={opt}>{opt}</option>
                          )}
                        </select>
                      </Field>
                      <Field label="Work Email" delay={0.45} inView={inView}>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@company.com"
                          required
                          style={emailField.style}
                          {...emailField.focusProps}
                        />
                      </Field>
                    </div>

                    {/* Textarea */}
                    <Field label="Describe Your Workflow" delay={0.5} inView={inView}>
                      <textarea
                        value={formData.idea}
                        onChange={(e) => setFormData({ ...formData, idea: e.target.value })}
                        required
                        rows={5}
                        placeholder="Tell us what you want your AI system to do, what slows your workflow down, or what kind of operational system you want to build..."
                        style={{
                          ...ideaField.style,
                          resize: "none",
                          lineHeight: "1.7",
                        } as React.CSSProperties}
                        {...ideaField.focusProps}
                      />
                    </Field>

                    {/* Error */}
                    {errMsg && (
                      <p className="text-xs text-center" style={{ color: "#FCA5A5" }}>{errMsg}</p>
                    )}

                    {/* Submit */}
                    <div
                      style={{
                        opacity: inView ? 1 : 0,
                        transform: inView ? "translateY(0)" : "translateY(8px)",
                        transition: "opacity 0.55s ease 0.55s, transform 0.55s ease 0.55s",
                      }}
                    >
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white rounded-xl transition-all duration-300 disabled:opacity-60"
                        style={{
                          background: "linear-gradient(135deg,#7C3AED,#6D28D9)",
                          boxShadow: "0 0 24px rgba(124,58,237,0.38), 0 4px 16px rgba(0,0,0,0.4)",
                        }}
                        onMouseEnter={(e) => {
                          if (status === "loading") return;
                          (e.currentTarget as HTMLElement).style.boxShadow =
                            "0 0 44px rgba(124,58,237,0.60), 0 6px 20px rgba(0,0,0,0.5)";
                          (e.currentTarget as HTMLElement).style.transform = "translateY(-2px) scale(1.01)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.boxShadow =
                            "0 0 24px rgba(124,58,237,0.38), 0 4px 16px rgba(0,0,0,0.4)";
                          (e.currentTarget as HTMLElement).style.transform = "translateY(0) scale(1)";
                        }}
                      >
                        {status === "loading" ? (
                          <>
                            <span
                              className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white"
                              style={{ animation: "spin 0.7s linear infinite" }}
                            />
                            Submitting...
                          </>
                        ) : (
                          "Submit My Idea →"
                        )}
                      </button>
                    </div>

                    <p className="text-center text-[0.65rem]" style={{ color: "#4B5563" }}>
                      Our team reviews every submission within 48 hours.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes dashDrift { to { stroke-dashoffset: -18; } }
        @keyframes floatNode {
          from { transform: translateY(0px); }
          to   { transform: translateY(-6px); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}
