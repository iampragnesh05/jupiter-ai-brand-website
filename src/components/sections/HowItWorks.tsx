"use client";

import Link from "next/link";
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
    subtext: "One click OAuth connection. We use official Google APIs. We never store your Google password. Disconnect anytime.",
  },
  1: {
    heading: "Jupiter reads\nall your data.",
    subtext: "Your keywords, traffic, and website health combined into one complete picture. Jupiter sees what Google sees about your business.",
  },
  2: {
    heading: "Get your\nspecific action plan.",
    subtext: "Not generic advice. Your specific pages. Your specific keywords. Your rupee impact calculated from your actual data.",
  },
};

const steps = [
  { id: 0, label: "01 — Connect" },
  { id: 1, label: "02 — Analyse" },
  { id: 2, label: "03 — Act" },
];

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState(0);
  const [analysisKey, setAnalysisKey] = useState(0);

  const leftAnim = useIntersectionObserver(0);
  const rightAnim = useIntersectionObserver(100);

  const fadeInClass = (isVisible: boolean) =>
    `transition-all duration-600 ease-out ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
    }`;

  // Reset analysis animation when switching to tab 1
  useEffect(() => {
    if (activeTab === 1) {
      setAnalysisKey((prev) => prev + 1);
    }
  }, [activeTab]);

  const currentContent = tabContent[activeTab as keyof typeof tabContent];

  return (
    <section id="how-it-works" className="relative bg-surface py-24 md:py-32 px-4 sm:px-6 lg:px-8 min-h-[400px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-20 lg:gap-20 items-center">
          {/* Left Side */}
          <div className="order-2 lg:order-1">
            {/* Label */}
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-purple mb-4">
              HOW IT WORKS
            </p>

            {/* Dynamic Heading */}
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-white leading-[1.2] mb-4 transition-opacity duration-300 whitespace-pre-line">
              {currentContent.heading}
            </h2>

            {/* Dynamic Subtext */}
            <p className="text-base text-muted leading-relaxed max-w-[380px] mb-10 transition-opacity duration-300">
              {currentContent.subtext}
            </p>

            {/* Step Indicators */}
            <div className="space-y-2">
              {steps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveTab(step.id)}
                  className={`flex items-center gap-3 p-2 cursor-pointer transition-colors ${
                    activeTab === step.id ? "text-white" : "text-muted hover:text-white"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full transition-colors ${
                      activeTab === step.id ? "bg-purple" : "bg-border"
                    }`}
                  />
                  <span className={`text-sm ${activeTab === step.id ? "font-semibold" : ""}`}>
                    {step.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="order-1 lg:order-2">
            {/* Outer Container */}
            <div className="bg-navy border border-border rounded-2xl overflow-hidden min-h-[420px]">
              {/* Tab Bar */}
              <div className="bg-[#0A0B0F] border-b border-border flex">
                {["Connect", "Analyse", "Act"].map((tab, index) => (
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
                {activeTab === 0 && (
                  <div>
                    <h3 className="text-[0.9rem] font-semibold text-white mb-2">
                      Connect your data sources
                    </h3>
                    <p className="text-[0.8rem] text-muted mb-6">One click. Jupiter reads everything.</p>

                    {/* Connection Cards */}
                    <div className="space-y-3">
                      {/* Google Search Console */}
                      <div className="bg-surface border border-border rounded-lg p-4 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold"
                            style={{ backgroundColor: "#4285F4" }}
                          >
                            G
                          </div>
                          <div>
                            <p className="text-[0.85rem] text-white">Google Search Console</p>
                            <p className="text-[0.72rem] text-muted">Keywords · Rankings · Clicks</p>
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

                      {/* Google Analytics */}
                      <div className="bg-surface border border-border rounded-lg p-4 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold"
                            style={{ backgroundColor: "#34A853" }}
                          >
                            A
                          </div>
                          <div>
                            <p className="text-[0.85rem] text-white">Google Analytics</p>
                            <p className="text-[0.72rem] text-muted">Traffic · Users · Behavior</p>
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

                    {/* Divider */}
                    <div className="border-t border-border my-5" />

                    {/* Website Crawl */}
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-[0.85rem] text-white">🌐 Website</p>
                        <p className="text-[0.72rem] text-muted">Automatic crawl on connect</p>
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

                    {/* Privacy Note */}
                    <p className="text-[0.72rem] text-muted text-center mt-5">
                      Your data stays private. We never share it with anyone.
                    </p>
                  </div>
                )}

                {activeTab === 1 && (
                  <div key={analysisKey}>
                    <h3 className="text-[0.9rem] font-semibold text-white mb-6">
                      Jupiter is reading your data
                    </h3>

                    {/* Animated Checklist */}
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
                            animation: `fadeIn 0.4s ease forwards`,
                            animationDelay: `${index * 400}ms`,
                            opacity: 0,
                          }}
                        >
                          <span className="text-green-400">✓</span>
                          <span className="text-white">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-6">
                      <p className="text-[0.8rem] text-muted mb-2">Analysis complete</p>
                      <div className="bg-border rounded-full h-1 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-2000 ease-out"
                          style={{
                            background: "linear-gradient(90deg, #7C3AED, #A78BFA)",
                            animation: "progressFill 2s ease-out forwards",
                            width: "0%",
                          }}
                        />
                      </div>
                    </div>

                    {/* Completion Message */}
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

                    <style jsx>{`
                      @keyframes fadeIn {
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
                  </div>
                )}

                {activeTab === 2 && (
                  <div>
                    <h3 className="text-[0.9rem] font-semibold text-white mb-6">
                      Your action plan from Jupiter
                    </h3>

                    {/* Chat Bubble */}
                    <div>
                      <p className="text-[0.72rem] text-lavender mb-1.5">Jupiter ✦</p>
                      <div className="bg-surface border border-border rounded-xl rounded-tl-sm p-4">
                        <p className="text-[0.85rem] text-[#C7D4F0] leading-relaxed">
                          Based on your data I found your biggest opportunity. One page is getting strong
                          Google visibility but almost no clicks.
                          <br />
                          <br />
                          Here is exactly what to change, why it matters, and what it is worth to your
                          business — in rupees.
                        </p>
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <div className="mt-5 space-y-2.5">
                      {[
                        "Which page to fix first — ranked by revenue impact",
                        "Exactly what to change — platform-specific steps",
                        "What it is worth — your rupee impact calculated from your real data",
                      ].map((bullet, index) => (
                        <div key={index} className="flex gap-2.5 items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple mt-1.5 flex-shrink-0" />
                          <p className="text-[0.82rem] text-[#C7D4F0]">{bullet}</p>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Link
                      href="https://jupiterrank.jupiter-ai.co"
                      scroll={true}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-purple text-white rounded-lg py-3.5 text-[0.875rem] font-medium text-center hover:bg-purple/90 transition-colors mt-6"
                    >
                      See it with your data →
                    </Link>
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
