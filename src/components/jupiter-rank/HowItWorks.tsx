"use client";

import { useEffect, useRef, useState } from "react";

function useIntersectionObserver(delay: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return { ref, isVisible };
}

const tabContent = {
  0: {
    heading: "Connect your\nGoogle account.",
    subtext:
      "Secure one click connection using official Google APIs. Jupiter Rank reads your search and website data to start analyzing opportunities instantly.",
  },
  1: {
    heading: "Jupiter reads\neverything.",
    subtext:
      "Your keywords, traffic, and website health combined into one complete picture. Jupiter sees what Google sees about your business.",
  },
  2: {
    heading: "Get your\n60-day roadmap.",
    subtext:
      "Not generic advice. Your specific pages. Your specific keywords. Your rupee impact calculated from your actual data.",
  },
};

const steps = [
  { id: 0, label: "01 — Connect" },
  { id: 1, label: "02 — Analyse" },
  { id: 2, label: "03 — Roadmap" },
];

const stepNumbers = ["Step 01", "Step 02", "Step 03"];

const roadmapPhases = [
  {
    dot: "#10B981",
    label: "Month 1 — Fix the foundation",
    sub: "Meta titles, content, technical fixes",
  },
  {
    dot: "#F59E0B",
    label: "Month 2 — Convert traffic",
    sub: "CRO improvements, trust signals",
  },
  {
    dot: "#7C3AED",
    label: "Month 3 — Build authority",
    sub: "Content depth, FAQ schema, AIO",
  },
];

export default function HowItWorksRank() {
  const [activeTab, setActiveTab] = useState(0);
  const [analysisKey, setAnalysisKey] = useState(0);

  useIntersectionObserver(0);
  useIntersectionObserver(100);

  useEffect(() => {
    if (activeTab === 1) {
      setAnalysisKey((prev) => prev + 1);
    }
  }, [activeTab]);

  const currentContent = tabContent[activeTab as keyof typeof tabContent];

  return (
    <section
      id="how-it-works"
      className="relative"
      style={{
        backgroundColor: "#0F1117",
        padding: "80px 24px",
      }}
    >
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding: 60px 20px !important;
          }
        }
        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes progressFill {
          to {
            width: 100%;
          }
        }
      `}</style>

      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-20 items-center">
          {/* Left Side */}
          <div className="order-2 lg:order-1">
            {/* Section label — desktop only */}
            <p className="hidden lg:block text-xs font-semibold uppercase tracking-[0.12em] text-purple mb-4">
              HOW IT WORKS
            </p>

            {/* Step number indicator — desktop only */}
            <p className="hidden lg:block text-[0.72rem] text-muted mb-2 tracking-wide">
              {stepNumbers[activeTab]}
            </p>

            {/* Dynamic Heading — desktop only */}
            <h2 className="hidden lg:block text-[clamp(2rem,4vw,3rem)] font-extrabold text-white leading-[1.2] mb-4 transition-opacity duration-300 whitespace-pre-line">
              {currentContent.heading}
            </h2>

            {/* Dynamic Subtext — desktop only */}
            <p className="hidden lg:block text-base text-muted leading-relaxed max-w-[380px] mb-10 transition-opacity duration-300">
              {currentContent.subtext}
            </p>

            {/* Step Indicators — desktop only */}
            <div className="hidden lg:block space-y-2">
              {steps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveTab(step.id)}
                  className={`flex items-center gap-3 p-2 cursor-pointer transition-colors ${
                    activeTab === step.id
                      ? "text-white"
                      : "text-muted hover:text-white"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full transition-colors ${
                      activeTab === step.id ? "bg-purple" : "bg-border"
                    }`}
                  />
                  <span
                    className={`text-sm ${activeTab === step.id ? "font-semibold" : ""}`}
                  >
                    {step.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="order-1 lg:order-2">
            {/* Section label — mobile only, above interactive card */}
            <p className="lg:hidden text-xs font-semibold uppercase tracking-[0.12em] text-purple mb-4">
              HOW IT WORKS
            </p>
            <div className="bg-navy border border-border rounded-2xl overflow-hidden min-h-[420px]">
              {/* Tab Bar */}
              <div className="bg-[#0A0B0F] border-b border-border flex">
                {["Connect", "Analyse", "Roadmap"].map((tab, index) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(index)}
                    className={`flex-1 text-center py-3.5 px-4 text-xs font-medium cursor-pointer border-b-2 transition-all ${
                      activeTab === index
                        ? "text-white border-purple"
                        : "text-muted border-transparent hover:text-[#C7D4F0]"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-8 min-h-[360px] transition-opacity duration-300">
                {/* Tab 1 — Connect */}
                {activeTab === 0 && (
                  <div>
                    <h3 className="text-[0.9rem] font-semibold text-white mb-2">
                      Connect your data sources
                    </h3>
                    <p className="text-[0.8rem] text-muted mb-6">
                      One click. Jupiter reads everything.
                    </p>

                    <div className="space-y-3">
                      <div className="bg-surface border border-border rounded-lg p-4 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold"
                            style={{ backgroundColor: "#4285F4" }}
                          >
                            G
                          </div>
                          <div>
                            <p className="text-[0.85rem] text-white">
                              Google Search Console
                            </p>
                            <p className="text-[0.72rem] text-muted">
                              Keywords · Rankings · Clicks
                            </p>
                          </div>
                        </div>
                        <span
                          className="text-[0.7rem] px-2.5 py-1 rounded-full"
                          style={{
                            background: "rgba(16,185,129,0.1)",
                            border: "1px solid rgba(16,185,129,0.2)",
                            color: "#10B981",
                          }}
                        >
                          Connected ✓
                        </span>
                      </div>

                      <div className="bg-surface border border-border rounded-lg p-4 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold"
                            style={{ backgroundColor: "#34A853" }}
                          >
                            A
                          </div>
                          <div>
                            <p className="text-[0.85rem] text-white">
                              Google Analytics
                            </p>
                            <p className="text-[0.72rem] text-muted">
                              Traffic · Users · Behavior
                            </p>
                          </div>
                        </div>
                        <span
                          className="text-[0.7rem] px-2.5 py-1 rounded-full"
                          style={{
                            background: "rgba(16,185,129,0.1)",
                            border: "1px solid rgba(16,185,129,0.2)",
                            color: "#10B981",
                          }}
                        >
                          Connected ✓
                        </span>
                      </div>
                    </div>

                    <div className="border-t border-border my-5" />

                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-[0.85rem] text-white">🌐 Website</p>
                        <p className="text-[0.72rem] text-muted">
                          Automatic crawl on connect
                        </p>
                      </div>
                      <span
                        className="text-[0.7rem] px-2.5 py-1 rounded-full"
                        style={{
                          background: "rgba(16,185,129,0.1)",
                          border: "1px solid rgba(16,185,129,0.2)",
                          color: "#10B981",
                        }}
                      >
                        Crawled ✓
                      </span>
                    </div>

                    <p className="text-[0.72rem] text-muted text-center mt-5">
                      Your data stays private. We never share it with anyone.
                    </p>
                  </div>
                )}

                {/* Tab 2 — Analyse */}
                {activeTab === 1 && (
                  <div key={analysisKey}>
                    <h3 className="text-[0.9rem] font-semibold text-white mb-6">
                      Jupiter is reading your data
                    </h3>

                    <div className="space-y-0">
                      {[
                        "Keywords you rank for — analysed",
                        "Pages with opportunities — found",
                        "Technical issues — identified",
                        "Revenue impact — calculated",
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2.5 py-2.5 border-b border-border text-[0.85rem]"
                          style={{
                            animation: `fadeInSlide 0.4s ease forwards`,
                            animationDelay: `${index * 400}ms`,
                            opacity: 0,
                          }}
                        >
                          <span className="text-green-400">✓</span>
                          <span className="text-white">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6">
                      <p className="text-[0.8rem] text-muted mb-2">
                        Analysis complete
                      </p>
                      <div className="bg-border rounded-full h-1 overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            background:
                              "linear-gradient(90deg, #7C3AED, #A78BFA)",
                            animation: "progressFill 2s ease-out forwards",
                            width: "0%",
                          }}
                        />
                      </div>
                    </div>

                    <div
                      className="mt-5 p-4 rounded-lg border"
                      style={{
                        background: "rgba(124,58,237,0.05)",
                        borderColor: "rgba(124,58,237,0.15)",
                      }}
                    >
                      <p className="text-[0.875rem] font-semibold text-white">
                        Your personalised roadmap is ready
                      </p>
                      <p className="text-[0.8rem] text-muted mt-1">
                        Opportunities ranked by revenue impact
                      </p>
                    </div>
                  </div>
                )}

                {/* Tab 3 — Roadmap */}
                {activeTab === 2 && (
                  <div>
                    <h3
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        color: "white",
                        marginBottom: "24px",
                      }}
                    >
                      Your 90-day growth roadmap
                    </h3>

                    {/* Roadmap card */}
                    <div
                      style={{
                        background: "#131620",
                        border: "1px solid #1E2235",
                        borderRadius: "10px",
                        padding: "16px",
                      }}
                    >
                      {/* Phase rows with connecting line */}
                      <div className="relative">
                        {/* Vertical connecting line */}
                        <div
                          className="absolute left-[7px] top-[12px]"
                          style={{
                            width: "2px",
                            height: "calc(100% - 24px)",
                            background:
                              "linear-gradient(to bottom, #10B981, #F59E0B, #7C3AED)",
                            opacity: 0.3,
                          }}
                        />

                        <div className="space-y-5">
                          {roadmapPhases.map((phase, index) => (
                            <div
                              key={index}
                              className="flex items-start gap-4 relative"
                            >
                              {/* Dot */}
                              <div
                                className="w-4 h-4 rounded-full flex-shrink-0 mt-0.5 z-10"
                                style={{
                                  backgroundColor: phase.dot,
                                  boxShadow: `0 0 6px ${phase.dot}60`,
                                }}
                              />
                              <div>
                                <p
                                  style={{
                                    fontSize: "0.82rem",
                                    color: "white",
                                    fontWeight: 500,
                                  }}
                                >
                                  {phase.label}
                                </p>
                                <p
                                  style={{
                                    fontSize: "0.75rem",
                                    color: "#8892A4",
                                    marginTop: "2px",
                                  }}
                                >
                                  {phase.sub}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Revenue box */}
                      <div
                        style={{
                          background: "rgba(167,139,250,0.05)",
                          border: "1px solid rgba(167,139,250,0.1)",
                          borderRadius: "8px",
                          padding: "12px",
                          marginTop: "16px",
                          textAlign: "center",
                        }}
                      >
                        <p style={{ fontSize: "0.72rem", color: "#8892A4" }}>
                          Conservative estimate by month 3
                        </p>
                        <p
                          style={{
                            fontSize: "1rem",
                            fontWeight: 700,
                            color: "#A78BFA",
                            marginTop: "4px",
                          }}
                        >
                          ₹15,000 — ₹1,23,000/month
                        </p>
                        <p style={{ fontSize: "0.7rem", color: "#8892A4" }}>
                          Based on your actual data
                        </p>
                      </div>
                    </div>

                    {/* CTA */}
                    <a
                      href="#demo"
                      className="block w-full text-white rounded-lg py-3.5 text-[0.875rem] font-medium text-center transition-colors mt-6"
                      style={{ background: "#7C3AED" }}
                    >
                      Get your roadmap →
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
