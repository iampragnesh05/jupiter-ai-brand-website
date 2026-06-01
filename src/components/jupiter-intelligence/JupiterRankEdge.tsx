"use client";

import { useState, useEffect, useRef } from "react";

/* ─── Static data ────────────────────────────────────────────────────────── */

const FEATURES = [
  {
    icon: "✦",
    title: "Google AI Overview Optimization",
    description:
      "Your store appears in Google's AI-generated answers when buyers search for products you sell.",
  },
  {
    icon: "⌘",
    title: "ChatGPT & LLMs.txt",
    description:
      "A special file that tells ChatGPT, Perplexity, and other AI tools exactly what your store sells and where to find it.",
  },
  {
    icon: "◈",
    title: "Schema + Tech SEO Complete",
    description:
      "Structured data markup so search engines understand every product, category, and page on your store.",
  },
];

const WITHOUT_ITEMS = [
  "Not in Google AI Overview",
  "Invisible to ChatGPT",
  "No schema markup",
  "Missing Tech SEO",
  "Losing AI search traffic",
];

const WITH_ITEMS = [
  "Appears in AI Overview",
  "ChatGPT recommends your store",
  "Full schema markup",
  "Complete Tech SEO",
  "Capturing AI search traffic",
];

/* ─── Main Component ─────────────────────────────────────────────────────── */

export default function JupiterRankEdge() {
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

  return (
    <section
      id="jupiter-rank-edge"
      ref={sectionRef}
      className="relative overflow-hidden border-t border-[#1E2235]/50"
    >
      {/* Subtle left glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="py-20 md:py-28 max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT — TEXT BLOCK ── */}
          <div className="order-2 lg:order-1">

            {/* Label */}
            <p
              className={[
                "text-[#7C3AED] text-xs font-semibold tracking-[0.12em] uppercase mb-4",
                "transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
              ].join(" ")}
              style={{ transitionDelay: "0ms" }}
            >
              YOUR UNFAIR ADVANTAGE
            </p>

            {/* Headline */}
            <h2
              className={[
                "text-white font-extrabold text-3xl md:text-5xl leading-tight mb-6",
                "transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
              ].join(" ")}
              style={{ transitionDelay: "150ms" }}
            >
              <span className="block">Every Store Gets</span>
              <span className="block bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] bg-clip-text text-transparent">
                Jupiter Rank Built In.
              </span>
              <span className="block">No Other Developer Offers This.</span>
            </h2>

            {/* Paragraphs */}
            <div
              className={[
                "transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
              ].join(" ")}
              style={{ transitionDelay: "300ms" }}
            >
              <p className="text-[#8892A4] text-base leading-relaxed mb-4">
                Right now, Google AI Overview and ChatGPT are recommending
                products directly to buyers. Most Shopify stores are completely
                invisible to this new channel - because they were never optimized
                for it.
              </p>
              <p className="text-[#8892A4] text-base leading-relaxed mb-8">
                The brands that optimize now will own this channel for years.
                Jupiter Rank is our own AI SEO tool - included in every Jupiter
                Intelligence build from day one. No extra cost. No setup
                required.
              </p>
            </div>

            {/* Feature rows */}
            <div
              className={[
                "flex flex-col gap-4 mb-10",
                "transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
              ].join(" ")}
              style={{ transitionDelay: "400ms" }}
            >
              {FEATURES.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-lg bg-[#7C3AED]/10 border border-[#7C3AED]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#7C3AED] text-base">{feature.icon}</span>
                  </span>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">
                      {feature.title}
                    </p>
                    <p className="text-[#8892A4] text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Exclusive badge */}
            <div
              className={[
                "transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
              ].join(" ")}
              style={{ transitionDelay: "500ms" }}
            >
              <span className="inline-flex items-center gap-2 bg-[#7C3AED]/10 border border-[#7C3AED]/20 rounded-full px-4 py-2 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                <span className="text-[#A78BFA] text-xs font-semibold">
                  Included in every Jupiter Intelligence build - no extra cost
                </span>
              </span>
            </div>

            {/* CTA buttons */}
            <div
              className={[
                "flex flex-col sm:flex-row gap-4",
                "transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
              ].join(" ")}
              style={{ transitionDelay: "600ms" }}
            >
              <a
                href="https://calendly.com/iampragnesh/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-6 py-3 rounded-lg font-medium transition-colors text-sm"
              >
                Book Discovery Call →
              </a>
              <a
                href="https://jupiterrank.jupiter-ai.co"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-[#1E2235] hover:border-[#7C3AED] text-white px-6 py-3 rounded-lg font-medium transition-colors text-sm"
              >
                See Jupiter Rank Live →
              </a>
            </div>
          </div>

          {/* ── RIGHT — COMPARISON CARD ── */}
          <div
            className={[
              "order-1 lg:order-2 relative",
              "transition-all duration-700",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
            ].join(" ")}
            style={{ transitionDelay: "200ms" }}
          >
            {/* Background glow */}
            <div className="absolute -inset-4 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.07)_0%,transparent_70%)] pointer-events-none" />

            {/* Main card */}
            <div
              className="relative bg-[#0F1117] border border-[#1E2235] rounded-xl overflow-hidden"
              style={{ boxShadow: "0 0 80px rgba(124,58,237,0.12)" }}
            >
              {/* Card header */}
              <div className="px-6 py-4 border-b border-[#1E2235] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#7C3AED]/10 flex items-center justify-center">
                    <span className="text-[#7C3AED] text-sm">✦</span>
                  </span>
                  <span className="text-white font-bold text-sm">
                    Jupiter Rank
                  </span>
                </div>
                <div className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-xs font-semibold">
                    LIVE
                  </span>
                </div>
              </div>

              {/* Two-column comparison */}
              <div className="grid grid-cols-2">

                {/* LEFT — Other stores */}
                <div className="p-6 border-r border-[#1E2235]">
                  <p className="text-[#8892A4] text-xs font-semibold tracking-widest uppercase mb-5">
                    Other stores
                  </p>
                  {WITHOUT_ITEMS.map((item, i) => (
                    <div
                      key={item}
                      className={[
                        "flex items-start gap-3 mb-4 last:mb-0",
                        "transition-all duration-500",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
                      ].join(" ")}
                      style={{ transitionDelay: `${400 + i * 80}ms` }}
                    >
                      <span className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-400 text-xs">✕</span>
                      </span>
                      <span className="text-[#8892A4] text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                {/* RIGHT — With Jupiter Rank */}
                <div className="p-6 bg-[#0D0F1C]">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
                    <span className="text-[#A78BFA] text-xs font-semibold tracking-widest uppercase">
                      With Jupiter Rank
                    </span>
                  </div>
                  {WITH_ITEMS.map((item, i) => (
                    <div
                      key={item}
                      className={[
                        "flex items-start gap-3 mb-4 last:mb-0",
                        "transition-all duration-500",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
                      ].join(" ")}
                      style={{ transitionDelay: `${440 + i * 80}ms` }}
                    >
                      <span className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-400 text-xs">✓</span>
                      </span>
                      <span className="text-white text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card footer */}
              <div className="px-6 py-4 border-t border-[#1E2235] bg-[#0D0F1C]">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <span className="text-[#8892A4] text-xs">
                    Built and maintained by Jupiter AI
                  </span>
                  <a
                    href="https://jupiterrank.jupiter-ai.co"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-[#7C3AED] text-xs font-semibold hover:text-[#A78BFA] transition-colors"
                  >
                    See it live →
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
