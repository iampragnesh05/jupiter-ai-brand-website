"use client";

import { useEffect, useRef, useState } from "react";

// ─── Deployment items ─────────────────────────────────────────────────────────
const DEPLOY_ITEMS = [
  {
    label: "Custom Shopify Architecture",
    detail:
      "Zero-template build, engineered around your brand's conversion goals and Indian buyer behaviour.",
  },
  {
    label: "AI-Native Implementation",
    detail:
      "Every layer ships with intelligence — AIO, schema, LLMs.txt, and catalog-trained AI chatbot.",
  },
  {
    label: "Automation Deployment",
    detail:
      "All WhatsApp flows configured, tested, and live before handoff. No setup left to you.",
  },
  {
    label: "Infrastructure Setup",
    detail:
      "Analytics, pixel, GTM, Razorpay, WhatsApp Business API — complete stack configured and verified.",
  },
  {
    label: "Strategic Partnership",
    detail:
      "Weekly intelligence reports and a direct line to our team. We don't disappear after launch.",
  },
];

// ─── Comparison table data ────────────────────────────────────────────────────
const COMPARE_ROWS = [
  { aspect: "Build approach",       jupiter: "Zero-template, custom",    others: "Shopify themes / templates" },
  { aspect: "Delivery",             jupiter: "1–2 weeks",                others: "6–10 weeks" },
  { aspect: "AI layer",             jupiter: "Always included",           others: "Rarely available" },
  { aspect: "Automation",           jupiter: "Complete stack, live",      others: "Extra cost or DIY" },
  { aspect: "Post-launch support",  jupiter: "Weekly intelligence",       others: "Paid retainer or none" },
  { aspect: "Indian optimization",  jupiter: "Built-in from day one",     others: "Rarely considered" },
];

// ─── Deployment Section ───────────────────────────────────────────────────────
export default function JI01Deployment() {
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

  const reveal = (delay = 0) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
  });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden w-full"
      style={{ paddingTop: "160px", paddingBottom: "160px" }}
    >
      {/* Top divider */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2"
        style={{
          width: "480px",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(124,58,237,0.25) 50%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="mb-20" style={reveal(0)}>
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
            Done-For-You Deployment
          </p>
          <h2
            className="font-extrabold text-white leading-[1.08] tracking-tight mb-5"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", maxWidth: "700px" }}
          >
            We architect and deploy
            <br />
            your revenue system.
          </h2>
          <p
            style={{
              color: "#8892A4",
              fontSize: "1.0625rem",
              lineHeight: 1.78,
              maxWidth: "520px",
            }}
          >
            Not a website project. A full AI-native commerce infrastructure —
            architected, configured, tested, and handed to you production-ready.
          </p>
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left: What we deploy */}
          <div style={reveal(100)}>
            <p
              style={{
                color: "#8892A4",
                fontSize: "0.6875rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "28px",
              }}
            >
              What we deploy
            </p>

            <div className="flex flex-col gap-0">
              {DEPLOY_ITEMS.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 py-6 group"
                  style={{
                    borderBottom:
                      i < DEPLOY_ITEMS.length - 1
                        ? "1px solid rgba(30,34,53,1)"
                        : "none",
                  }}
                >
                  {/* Number */}
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[0.75rem] font-bold mt-0.5"
                    style={{
                      background: "rgba(124,58,237,0.10)",
                      border: "1px solid rgba(124,58,237,0.25)",
                      color: "#A78BFA",
                    }}
                  >
                    {i + 1}
                  </div>

                  <div>
                    <div
                      className="font-semibold text-white mb-1.5"
                      style={{ fontSize: "0.9375rem" }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        color: "#8892A4",
                        fontSize: "0.875rem",
                        lineHeight: 1.68,
                      }}
                    >
                      {item.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA sub-link */}
            <div className="mt-10">
              <a
                id="ji01-deploy-cta"
                href="YOUR_CALENDLY_LINK"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 transition-all duration-300 font-semibold"
                style={{
                  color: "#A78BFA",
                  fontSize: "0.9375rem",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "white";
                  (e.currentTarget as HTMLElement).style.gap = "16px";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#A78BFA";
                  (e.currentTarget as HTMLElement).style.gap = "";
                }}
              >
                Book a strategy session
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Comparison table */}
          <div style={reveal(200)}>
            <p
              style={{
                color: "#8892A4",
                fontSize: "0.6875rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "28px",
              }}
            >
              How we compare
            </p>

            <div
              style={{
                border: "1px solid rgba(30,34,53,1)",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              {/* Table header */}
              <div
                className="grid grid-cols-3 text-center"
                style={{
                  background: "rgba(13,15,28,0.8)",
                  borderBottom: "1px solid rgba(30,34,53,1)",
                  padding: "14px 12px",
                }}
              >
                <div style={{ color: "#8892A4", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Aspect
                </div>
                <div style={{ color: "#A78BFA", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Jupiter
                </div>
                <div style={{ color: "#8892A4", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Traditional
                </div>
              </div>

              {/* Table rows */}
              {COMPARE_ROWS.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 text-center items-center transition-colors duration-200"
                  style={{
                    borderBottom:
                      i < COMPARE_ROWS.length - 1
                        ? "1px solid rgba(30,34,53,1)"
                        : "none",
                    padding: "14px 12px",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(124,58,237,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "";
                  }}
                >
                  {/* Aspect */}
                  <div style={{ color: "#8892A4", fontSize: "0.8125rem" }}>
                    {row.aspect}
                  </div>

                  {/* Jupiter column */}
                  <div
                    className="flex items-center justify-center gap-1.5"
                    style={{ color: "#22C55E", fontSize: "0.8125rem", fontWeight: 600 }}
                  >
                    <span style={{ fontSize: "0.7rem" }}>✓</span>
                    {row.jupiter}
                  </div>

                  {/* Others column */}
                  <div style={{ color: "#8892A4", fontSize: "0.8125rem" }}>
                    {row.others}
                  </div>
                </div>
              ))}
            </div>

            {/* Recommended badge */}
            <div className="mt-8 flex items-center gap-3">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[0.6875rem] font-bold tracking-widest uppercase"
                style={{
                  background: "rgba(124,58,237,0.12)",
                  border: "1px solid rgba(124,58,237,0.3)",
                  color: "#A78BFA",
                }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#7C3AED", boxShadow: "0 0 6px #7C3AED" }}
                />
                Jupiter Intelligence
              </div>
              <span style={{ color: "#8892A4", fontSize: "0.8125rem" }}>
                30 brands deployed · 5 years
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
