"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function FashionAI() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Helper for fade-in animations
  const fadeUpClass = (delayClass: string, isBox = false) => {
    const baseTranslate = isBox ? "translate-y-4" : "translate-y-8";
    const duration = isBox ? "duration-500" : "duration-700";
    return `transition-all ${duration} ${delayClass} ease-out ${
      isVisible ? "opacity-100 translate-y-0" : `opacity-0 ${baseTranslate}`
    }`;
  };

  return (
    <section
      ref={sectionRef}
      id="products"
      className="py-20 md:py-28 max-w-[1100px] mx-auto px-6"
    >
      {/* Section Header (centered) */}
      <div className="text-center mb-16">
        <p
          className={`text-[#7C3AED] text-xs font-semibold tracking-[0.12em] uppercase mb-4 text-center ${fadeUpClass(
            "delay-[0ms]"
          )}`}
        >
          LIVE NOW
        </p>
        <h2
          className={`text-white font-extrabold text-3xl md:text-5xl leading-tight mb-6 text-center ${fadeUpClass(
            "delay-[150ms]"
          )}`}
        >
          Meet Jupiter Rank.<br />
          <span className="bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] bg-clip-text text-transparent">
            Your AI Store Intelligence.
          </span>
        </h2>
        <p
          className={`text-[#8892A4] text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-center ${fadeUpClass(
            "delay-[300ms]"
          )}`}
        >
          Connects with your real Google data, analyzes every product page, and
          shows exactly where you are losing revenue — with every fix tied to
          rupees.
        </p>
      </div>

      {/* Main Spotlight Card Outer Wrapper */}
      <div className={`relative max-w-3xl mx-auto ${fadeUpClass("delay-[200ms]")}`}>
        {/* Subtle purple glow behind card */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.06)_0%,transparent_70%)] pointer-events-none" />

        {/* Card */}
        <div
          className="relative bg-[#0F1117] border border-[#7C3AED]/30 rounded-2xl overflow-hidden"
          style={{ boxShadow: "0 0 80px rgba(124,58,237,0.15)" }}
        >
          {/* Card Top Bar */}
          <div className="px-8 py-5 border-b border-[#1E2235] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs font-semibold">LIVE</span>
              </div>
              <span className="text-white font-bold text-base">Jupiter Rank</span>
            </div>
            <span className="text-[#A78BFA] text-xs font-semibold tracking-widest uppercase">
              AI Store Intelligence
            </span>
          </div>

          {/* Card Body */}
          <div className="p-6 md:p-8">
            {/* Top Stats Row */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {/* Stat 1 */}
              <div
                className={`bg-[#131620] border border-[#1E2235] rounded-xl p-3 md:p-4 text-center ${fadeUpClass(
                  "delay-[300ms]",
                  true
                )}`}
              >
                <div className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] bg-clip-text text-transparent">
                  0–100
                </div>
                <div className="text-[#8892A4] text-xs mt-1">Jupiter Score</div>
              </div>

              {/* Stat 2 */}
              <div
                className={`bg-[#131620] border border-[#1E2235] rounded-xl p-3 md:p-4 text-center ${fadeUpClass(
                  "delay-[400ms]",
                  true
                )}`}
              >
                <div className="text-xl md:text-2xl font-extrabold text-white">
                  ₹6.9L+
                </div>
                <div className="text-[#8892A4] text-xs mt-1">Revenue Found</div>
              </div>

              {/* Stat 3 */}
              <div
                className={`bg-[#131620] border border-[#1E2235] rounded-xl p-3 md:p-4 text-center ${fadeUpClass(
                  "delay-[500ms]",
                  true
                )}`}
              >
                <div className="text-xl md:text-2xl font-extrabold text-white">
                  8
                </div>
                <div className="text-[#8892A4] text-xs mt-1">AI Modules</div>
              </div>
            </div>

            {/* Feature List */}
            <div className="flex flex-col gap-3 mb-8">
              {[
                "Jupiter Score — combined SEO + CRO + AI visibility score (0-100)",
                "Product Intelligence — every page analyzed with ₹ revenue impact",
                "AI Shopping Suite — appear on ChatGPT, Gemini and Perplexity",
                "90-Day Growth Plan — 26 tasks with revenue tied to every action",
                "Festive Calendar — all Indian festivals with WhatsApp copy",
                "Monday Digest — weekly revenue intelligence every Monday 8am IST",
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#7C3AED]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#7C3AED] text-xs">✓</span>
                  </div>
                  <span className="text-[#8892A4] text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* Demo Result Box */}
            <div className="bg-[#131620] border border-[#1E2235] rounded-xl p-5 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
                <span className="text-[#8892A4] text-xs font-semibold uppercase tracking-wider">
                  Real Demo Result — Notique Studio
                </span>
              </div>
              <p className="text-white text-sm leading-relaxed">
                ₹6,94,117/month revenue potential found across 37 products in minutes.
              </p>
              <div className="flex items-center gap-6 mt-3 flex-wrap">
                <div className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#7C3AED]" />
                  <span className="text-[#8892A4] text-xs">Jupiter Score: 67/100</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#7C3AED]" />
                  <span className="text-[#8892A4] text-xs">Top fix: COD badge → ₹38,988/mo</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#7C3AED]" />
                  <span className="text-[#8892A4] text-xs">26-task growth plan generated</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="w-full">
              <a
                href="https://app.jupiterrank.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white py-4 rounded-xl font-semibold transition-all duration-200 text-base text-center block hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]"
              >
                Try Jupiter Rank Free →
              </a>
              <div className="text-center mt-3">
                <Link
                  href="/fashion-ai/jupiter-rank"
                  className="text-[#8892A4] text-sm hover:text-white transition-colors"
                >
                  See full product details →
                </Link>
              </div>
            </div>
          </div>

          {/* Card Bottom Strip */}
          <div className="px-8 py-4 border-t border-[#1E2235] bg-[#0D0F1C] flex flex-col md:flex-row items-center justify-between gap-2 md:gap-3 text-center md:text-left">
            <span className="text-[#8892A4] text-xs">
              Free 14-day trial · No credit card required
            </span>
            <div className="flex items-center gap-4">
              {[
                "GSC Connected",
                "Real Data",
                "₹ Impact",
              ].map((trust, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <span className="text-[#7C3AED] text-xs">✓</span>
                  <span className="text-[#8892A4] text-xs">{trust}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
