"use client";

import { useEffect, useRef, useState, FormEvent } from "react";
import Link from "next/link";

/* ─── shared InView hook ─── */
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

/* ─── floating particle canvas ─── */
function ParticleField({ count = 40 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let W = canvas.offsetWidth;
    let H = canvas.offsetHeight;
    canvas.width = W;
    canvas.height = H;
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.4,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.5 + 0.15,
    }));
    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(124,58,237,${p.alpha})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    const onResize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, [count]);
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
}

/* ─── animated workflow nodes ─── */
function WorkflowNodes() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1800);
    return () => clearInterval(id);
  }, []);
  const nodes = [
    { x: "8%", y: "22%", label: "Input" },
    { x: "28%", y: "12%", label: "Parse" },
    { x: "50%", y: "20%", label: "AI Core" },
    { x: "72%", y: "11%", label: "Output" },
    { x: "90%", y: "25%", label: "Deploy" },
    { x: "18%", y: "70%", label: "Monitor" },
    { x: "62%", y: "72%", label: "Feedback" },
  ];
  const lines = [
    { x1: "8%", y1: "22%", x2: "28%", y2: "12%" },
    { x1: "28%", y1: "12%", x2: "50%", y2: "20%" },
    { x1: "50%", y1: "20%", x2: "72%", y2: "11%" },
    { x1: "72%", y1: "11%", x2: "90%", y2: "25%" },
    { x1: "18%", y1: "70%", x2: "50%", y2: "20%" },
    { x1: "50%", y1: "20%", x2: "62%", y2: "72%" },
  ];
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.25 }}>
        {lines.map((l, i) => (
          <line
            key={i}
            x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
            stroke="#7C3AED"
            strokeWidth="1"
            strokeDasharray="4 6"
            strokeDashoffset={tick % 2 === 0 ? "0" : "5"}
            style={{ transition: "stroke-dashoffset 1.8s linear" }}
          />
        ))}
      </svg>
      {nodes.map((n, i) => (
        <div
          key={i}
          className="absolute flex items-center gap-1.5 px-2.5 py-1 rounded-full"
          style={{
            left: n.x, top: n.y,
            transform: "translate(-50%, -50%)",
            background: "rgba(124,58,237,0.10)",
            border: "1px solid rgba(124,58,237,0.30)",
            backdropFilter: "blur(6px)",
            animation: `float${i % 3} ${3 + i * 0.4}s ease-in-out infinite`,
            opacity: 0.85,
          }}
        >
          <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#7C3AED", display: "inline-block" }} />
          <span className="text-[0.6rem] font-medium" style={{ color: "#A78BFA", whiteSpace: "nowrap" }}>{n.label}</span>
        </div>
      ))}
    </div>
  );
}

/* ─── Section 01: Hero ─── */
function HeroSection() {
  const { ref, inView } = useInView(0.05);
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative overflow-hidden"
      style={{
        background: "#08090A",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 24px 80px",
      }}
    >
      {/* grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(124,58,237,0.13) 0%, transparent 70%)",
        }}
      />
      <ParticleField count={45} />
      <WorkflowNodes />

      <div
        className="relative text-center max-w-[820px] mx-auto"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(32px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        {/* label */}
        <div
          className="inline-flex items-center gap-2 mb-7 px-4 py-1.5 rounded-full text-[0.7rem] font-semibold tracking-[0.18em] uppercase"
          style={{
            background: "rgba(124,58,237,0.10)",
            border: "1px solid rgba(124,58,237,0.28)",
            color: "#A78BFA",
          }}
        >
          <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#7C3AED", display: "inline-block" }} />
          Contact Jupiter AI
        </div>

        {/* headline */}
        <h1
          className="font-extrabold leading-[1.12] mb-6"
          style={{ fontSize: "clamp(2.4rem, 6vw, 4.2rem)", color: "#fff", letterSpacing: "-0.02em" }}
        >
          Let&apos;s build smarter{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #7C3AED 0%, #A78BFA 55%, #C4B5FD 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            AI workflows
          </span>{" "}
          together.
        </h1>

        {/* subtext */}
        <p
          className="leading-relaxed max-w-[580px] mx-auto mb-12"
          style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)", color: "#8899B4" }}
        >
          Talk with the Jupiter AI team about AI systems, ecommerce automation,
          operational workflows, and custom solutions built around your business.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact-form"
            className="inline-flex items-center gap-2 rounded-xl font-semibold text-sm text-white px-8 py-3.5 transition-all"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #6D28D9)",
              boxShadow: "0 0 28px rgba(124,58,237,0.45)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 44px rgba(124,58,237,0.65)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.04)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 28px rgba(124,58,237,0.45)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
            }}
          >
            Start The Conversation →
          </a>
          <a
            href="#contact-form"
            className="inline-flex items-center gap-2 rounded-xl font-semibold text-sm px-8 py-3.5 transition-all"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(124,58,237,0.30)",
              color: "#C4B5FD",
              backdropFilter: "blur(8px)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(124,58,237,0.60)";
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(124,58,237,0.10)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(124,58,237,0.30)";
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.04)";
            }}
          >
            Submit Your Workflow →
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes float0 { 0%,100%{transform:translate(-50%,-50%) translateY(0)} 50%{transform:translate(-50%,-50%) translateY(-8px)} }
        @keyframes float1 { 0%,100%{transform:translate(-50%,-50%) translateY(0)} 50%{transform:translate(-50%,-50%) translateY(-5px)} }
        @keyframes float2 { 0%,100%{transform:translate(-50%,-50%) translateY(0)} 50%{transform:translate(-50%,-50%) translateY(-11px)} }
      `}</style>
    </section>
  );
}

/* ─── Section 02: Contact Form ─── */
const INDUSTRIES = [
  "Fashion & Apparel", "Ecommerce", "Retail", "Logistics",
  "Healthcare", "Finance", "Real Estate", "Technology", "Other",
];
const HELP_OPTIONS = [
  "AI Workflow Automation", "Ecommerce AI", "SEO Systems",
  "Customer Support AI", "Inventory Intelligence", "Custom AI Build", "Other",
];

function ContactFormSection() {
  const { ref, inView } = useInView(0.08);
  const [form, setForm] = useState({
    name: "", business: "", website: "", industry: "",
    helpWith: "", description: "", email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const inputStyle = (field: string): React.CSSProperties => ({
    width: "100%",
    background: "rgba(255,255,255,0.03)",
    border: `1px solid ${focused === field ? "rgba(124,58,237,0.65)" : "rgba(255,255,255,0.08)"}`,
    borderRadius: 10,
    padding: "12px 16px",
    color: "#fff",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.25s, box-shadow 0.25s",
    boxShadow: focused === field ? "0 0 0 3px rgba(124,58,237,0.12)" : "none",
    backdropFilter: "blur(6px)",
  });

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.75rem",
    fontWeight: 500,
    color: "#8899B4",
    marginBottom: 6,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'contact-page',
          sourcePage: '/contact',
          name: form.name,
          email: form.email,
          businessName: form.business,
          website: form.website,
          industry: form.industry,
          message: form.description,
          metadata: {
            helpWith: form.helpWith,
            submittedAt: new Date().toISOString()
          }
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setForm({
          name: "", business: "", website: "", industry: "",
          helpWith: "", description: "", email: "",
        });
      } else {
        setSubmitError(data.error || 'Something went wrong. Please try again.');
        console.error('Form submission error:', data);
      }
    } catch (err) {
      setSubmitError('Failed to submit. Please check your connection and try again.');
      console.error('Form submission failed:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact-form"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative overflow-hidden"
      style={{ background: "#08090A", padding: "120px 24px" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(124,58,237,0.07) 0%, transparent 70%)",
        }}
      />
      <ParticleField count={25} />

      <div
        className="relative max-w-[860px] mx-auto"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.85s ease, transform 0.85s ease",
        }}
      >
        {/* heading */}
        <div className="text-center mb-14">
          <p
            className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase mb-4"
            style={{ color: "#7C3AED" }}
          >
            — Start the conversation
          </p>
          <h2
            className="font-extrabold leading-[1.15] mb-5"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)", color: "#fff", letterSpacing: "-0.02em" }}
          >
            Tell us what you&apos;re{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A78BFA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              building
            </span>
          </h2>
          <p style={{ color: "#8899B4", fontSize: "1rem", maxWidth: 520, margin: "0 auto" }}>
            Describe your workflow, business challenge, or AI idea. Jupiter AI builds
            systems designed around real operations.
          </p>
        </div>

        {/* glass card */}
        <div
          style={{
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(124,58,237,0.18)",
            borderRadius: 24,
            padding: "clamp(32px, 5vw, 56px)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 0 80px rgba(124,58,237,0.07), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          {submitted ? (
            <div
              className="text-center py-16"
              style={{
                opacity: 1,
                animation: "fadeUp 0.6s ease forwards",
              }}
            >
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
                style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.4)" }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 700, marginBottom: 12 }}>
                Message received.
              </h3>
              <p style={{ color: "#8899B4", fontSize: "0.95rem" }}>
                The Jupiter AI team will be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: "20px 28px",
                }}
              >
                {/* Full Name */}
                <div>
                  <label style={labelStyle}>Full Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={inputStyle("name")}
                  />
                </div>

                {/* Business Name */}
                <div>
                  <label style={labelStyle}>Business Name</label>
                  <input
                    type="text"
                    placeholder="Your company or brand"
                    value={form.business}
                    onFocus={() => setFocused("business")}
                    onBlur={() => setFocused(null)}
                    onChange={(e) => setForm({ ...form, business: e.target.value })}
                    style={inputStyle("business")}
                  />
                </div>

                {/* Website URL */}
                <div>
                  <label style={labelStyle}>Website URL</label>
                  <input
                    type="url"
                    placeholder="https://yoursite.com"
                    value={form.website}
                    onFocus={() => setFocused("website")}
                    onBlur={() => setFocused(null)}
                    onChange={(e) => setForm({ ...form, website: e.target.value })}
                    style={inputStyle("website")}
                  />
                </div>

                {/* Industry */}
                <div>
                  <label style={labelStyle}>Industry</label>
                  <select
                    value={form.industry}
                    onFocus={() => setFocused("industry")}
                    onBlur={() => setFocused(null)}
                    onChange={(e) => setForm({ ...form, industry: e.target.value })}
                    style={{ ...inputStyle("industry"), appearance: "none" as const }}
                  >
                    <option value="" disabled style={{ background: "#0d0f1a" }}>Select your industry</option>
                    {INDUSTRIES.map((ind) => (
                      <option key={ind} value={ind} style={{ background: "#0d0f1a" }}>{ind}</option>
                    ))}
                  </select>
                </div>

                {/* What do you want help with */}
                <div>
                  <label style={labelStyle}>What do you want help with?</label>
                  <select
                    value={form.helpWith}
                    onFocus={() => setFocused("helpWith")}
                    onBlur={() => setFocused(null)}
                    onChange={(e) => setForm({ ...form, helpWith: e.target.value })}
                    style={{ ...inputStyle("helpWith"), appearance: "none" as const }}
                  >
                    <option value="" disabled style={{ background: "#0d0f1a" }}>Choose a focus area</option>
                    {HELP_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} style={{ background: "#0d0f1a" }}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Work Email */}
                <div>
                  <label style={labelStyle}>Work Email</label>
                  <input
                    required
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={inputStyle("email")}
                  />
                </div>

                {/* Textarea — full width */}
                <div style={{ gridColumn: "1 / -1" }}>
                  <label style={labelStyle}>Describe your workflow or AI idea</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your workflow, operational challenges, or the kind of AI system you want to build..."
                    value={form.description}
                    onFocus={() => setFocused("description")}
                    onBlur={() => setFocused(null)}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    style={{
                      ...inputStyle("description"),
                      resize: "vertical",
                      fontFamily: "inherit",
                      lineHeight: 1.6,
                    }}
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="mt-10 flex flex-col items-center gap-4">
                {submitError && (
                  <p className="text-sm text-red-400 text-center" style={{ maxWidth: '400px' }}>
                    {submitError}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 font-semibold text-sm text-white rounded-xl px-10 py-4 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    background: "linear-gradient(135deg, #7C3AED, #6D28D9)",
                    boxShadow: "0 0 32px rgba(124,58,237,0.45)",
                  }}
                  onMouseEnter={(e) => {
                    if (isSubmitting) return;
                    (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.04)";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 48px rgba(124,58,237,0.65)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 32px rgba(124,58,237,0.45)";
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>Start The Conversation →</>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
      `}</style>
    </section>
  );
}

/* ─── Section 03: Direct Contact ─── */
function DirectContactSection() {
  const { ref, inView } = useInView(0.1);
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative overflow-hidden"
      style={{ background: "#08090A", padding: "100px 24px" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          borderTop: "1px solid rgba(124,58,237,0.12)",
          borderBottom: "1px solid rgba(124,58,237,0.12)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(124,58,237,0.06) 0%, transparent 70%)",
        }}
      />
      <ParticleField count={20} />

      <div
        className="relative max-w-[640px] mx-auto text-center"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(32px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <p
          className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase mb-8"
          style={{ color: "rgba(124,58,237,0.8)" }}
        >
          — Direct Contact
        </p>

        <a
          href="mailto:info@jupiter-ai.co"
          className="block font-extrabold transition-all"
          style={{
            fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
            color: "#fff",
            letterSpacing: "-0.02em",
            textDecoration: "none",
            marginBottom: 12,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "#A78BFA";
            (e.currentTarget as HTMLAnchorElement).style.textShadow = "0 0 28px rgba(124,58,237,0.4)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
            (e.currentTarget as HTMLAnchorElement).style.textShadow = "none";
          }}
        >
          info@jupiter-ai.co
        </a>

        <p style={{ color: "#8899B4", fontSize: "0.95rem", marginBottom: 36 }}>
          Building AI systems for real industries.
        </p>

        {/* divider */}
        <div
          style={{
            height: 1,
            background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.35), transparent)",
            marginBottom: 36,
            maxWidth: 320,
            margin: "0 auto 36px",
          }}
        />

        {/* social links */}
        <div className="flex items-center justify-center gap-5">
          <Link
            href="https://www.linkedin.com/company/jupiterai/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(124,58,237,0.22)",
              color: "#C4B5FD",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "rgba(124,58,237,0.55)";
              el.style.boxShadow = "0 0 18px rgba(124,58,237,0.20)";
              el.style.background = "rgba(124,58,237,0.09)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "rgba(124,58,237,0.22)";
              el.style.boxShadow = "none";
              el.style.background = "rgba(255,255,255,0.04)";
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </Link>
          <Link
            href="https://www.instagram.com/jupiteraiofficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(124,58,237,0.22)",
              color: "#C4B5FD",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "rgba(124,58,237,0.55)";
              el.style.boxShadow = "0 0 18px rgba(124,58,237,0.20)";
              el.style.background = "rgba(124,58,237,0.09)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "rgba(124,58,237,0.22)";
              el.style.boxShadow = "none";
              el.style.background = "rgba(255,255,255,0.04)";
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Instagram
          </Link>
          <Link
            href="https://x.com/JupiterAI_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(124,58,237,0.22)",
              color: "#C4B5FD",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "rgba(124,58,237,0.55)";
              el.style.boxShadow = "0 0 18px rgba(124,58,237,0.20)";
              el.style.background = "rgba(124,58,237,0.09)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "rgba(124,58,237,0.22)";
              el.style.boxShadow = "none";
              el.style.background = "rgba(255,255,255,0.04)";
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            X
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 04: AI Topics ─── */
const AI_TOPICS = [
  { label: "AI Workflows", icon: "⬡" },
  { label: "Ecommerce Automation", icon: "⬡" },
  { label: "SEO Systems", icon: "⬡" },
  { label: "Customer Support AI", icon: "⬡" },
  { label: "Inventory Intelligence", icon: "⬡" },
  { label: "Workflow Automation", icon: "⬡" },
  { label: "Operational AI", icon: "⬡" },
  { label: "AI Systems", icon: "⬡" },
];

function AITopicsSection() {
  const { ref, inView } = useInView(0.08);
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative overflow-hidden"
      style={{ background: "#08090A", padding: "100px 24px 120px" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 55% 45% at 50% 60%, rgba(124,58,237,0.07) 0%, transparent 70%)",
        }}
      />
      <ParticleField count={18} />

      <div className="relative max-w-[1100px] mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase mb-4"
            style={{ color: "rgba(124,58,237,0.8)" }}
          >
            — AI Systems & Workflows
          </p>
          <h2
            className="font-extrabold"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              color: "#fff",
              letterSpacing: "-0.02em",
            }}
          >
            What Jupiter AI is building
          </h2>
        </div>

        {/* connection lines SVG behind cards */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ top: 180 }}>
          <svg className="w-full h-full" style={{ opacity: 0.12 }}>
            <line x1="12.5%" y1="25%" x2="37.5%" y2="25%" stroke="#7C3AED" strokeWidth="1" strokeDasharray="3 5" />
            <line x1="37.5%" y1="25%" x2="62.5%" y2="25%" stroke="#7C3AED" strokeWidth="1" strokeDasharray="3 5" />
            <line x1="62.5%" y1="25%" x2="87.5%" y2="25%" stroke="#7C3AED" strokeWidth="1" strokeDasharray="3 5" />
            <line x1="12.5%" y1="70%" x2="37.5%" y2="70%" stroke="#7C3AED" strokeWidth="1" strokeDasharray="3 5" />
            <line x1="37.5%" y1="70%" x2="62.5%" y2="70%" stroke="#7C3AED" strokeWidth="1" strokeDasharray="3 5" />
            <line x1="62.5%" y1="70%" x2="87.5%" y2="70%" stroke="#7C3AED" strokeWidth="1" strokeDasharray="3 5" />
          </svg>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: 16,
          }}
        >
          {AI_TOPICS.map((topic, i) => (
            <div
              key={topic.label}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView
                  ? hovered === i ? "translateY(-6px) scale(1.03)" : "translateY(0) scale(1)"
                  : "translateY(28px)",
                transition: `opacity 0.6s ease ${i * 0.07}s, transform ${hovered === i ? "0.25s" : `0.6s ease ${i * 0.07}s`}`,
                background: hovered === i
                  ? "rgba(124,58,237,0.10)"
                  : "rgba(255,255,255,0.025)",
                border: `1px solid ${hovered === i ? "rgba(124,58,237,0.50)" : "rgba(124,58,237,0.14)"}`,
                borderRadius: 16,
                padding: "28px 24px",
                cursor: "default",
                backdropFilter: "blur(10px)",
                boxShadow: hovered === i ? "0 0 32px rgba(124,58,237,0.15)" : "none",
              }}
            >
              <div
                className="flex items-center gap-3"
              >
                <span
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 9,
                    background: hovered === i ? "rgba(124,58,237,0.22)" : "rgba(124,58,237,0.10)",
                    border: "1px solid rgba(124,58,237,0.28)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.85rem",
                    color: "#7C3AED",
                    flexShrink: 0,
                    transition: "background 0.25s",
                  }}
                >
                  ✦
                </span>
                <span
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    color: hovered === i ? "#E4D4FF" : "#C4B5FD",
                    transition: "color 0.25s",
                    lineHeight: 1.3,
                  }}
                >
                  {topic.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Root Export ─── */
export default function ContactPage() {
  return (
    <main style={{ background: "#08090A" }}>
      <HeroSection />
      <ContactFormSection />
      <DirectContactSection />
      <AITopicsSection />
    </main>
  );
}
