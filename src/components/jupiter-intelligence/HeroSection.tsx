"use client";

import { useState, useEffect, useRef } from "react";

const WITHOUT_ITEMS = [
  "Generic Shopify template",
  "No WhatsApp automation",
  "Abandoned carts lost",
  "COD fraud hits margin",
  "Customers never return",
  "Invisible in AI search",
];

const WITH_ITEMS = [
  "Custom store, zero templates",
  "WhatsApp flows from day one",
  "1 in 4 carts recovered",
  "COD converted to prepaid",
  "Win-back campaigns live",
  "Jupiter Rank AI SEO built in",
];

const TRUST_ITEMS = [
  "100+ Stores Built",
  "Indian Brands Only",
  "Done For You",
  "Custom Every Time",
];

export default function HeroSection() {
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
      className="relative overflow-hidden pt-24 md:pt-32 pb-20 md:pb-28"
      style={{ backgroundColor: "#08090A" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 65% 45%, rgba(124,58,237,0.10) 0%, transparent 70%)",
        }}
      />

      <div
        ref={sectionRef}
        className="relative z-10 max-w-[1100px] mx-auto px-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── TEXT BLOCK — order-2 mobile, order-1 lg ── */}
          <div className="order-1 flex flex-col">

            {/* Section label */}
            <p
              className={[
                "text-[#7C3AED] text-xs font-semibold tracking-[0.12em] uppercase mb-4",
                "transition-all duration-700",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4",
              ].join(" ")}
              style={{ transitionDelay: "0ms" }}
            >
              JUPITER INTELLIGENCE
            </p>

            {/* Headline */}
            <h1
              className={[
                "text-white font-extrabold text-3xl md:text-5xl leading-tight mb-6",
                "transition-all duration-700",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4",
              ].join(" ")}
              style={{ transitionDelay: "150ms" }}
            >
              <span className="block">Custom Shopify Store for Indian D2C Brands —</span>
              <span
                className="block bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] bg-clip-text text-transparent"
              >
                With WhatsApp Automation and AI SEO Built In.
              </span>
            </h1>

            {/* Subheading */}
            <p
              className={[
                "text-[#8892A4] text-base md:text-lg leading-relaxed mb-8",
                "transition-all duration-700",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4",
              ].join(" ")}
              style={{ transitionDelay: "300ms" }}
            >
              Most Shopify stores lose revenue every day - abandoned carts
              ignored, COD fraud unchecked, customers never returning. Jupiter
              Intelligence fixes all three. Custom built, done for you.
            </p>

            {/* CTA Buttons */}
            <div
              className={[
                "flex flex-col sm:flex-row gap-4 mb-8",
                "transition-all duration-700",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4",
              ].join(" ")}
              style={{ transitionDelay: "400ms" }}
            >
              <a
                href="https://wa.me/919116955257"
                target="_blank"
                rel="noreferrer"
                className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-6 py-3 rounded-lg font-medium transition-colors text-center"
              >
                WhatsApp Us →
              </a>
              <a
                href="#whats-included"
                className="border border-[#1E2235] hover:border-[#7C3AED] text-white px-6 py-3 rounded-lg font-medium transition-colors text-center"
              >
                See What&apos;s Included ↓
              </a>
            </div>

            {/* Trust signals */}
            <div
              className={[
                "flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-[#8892A4]",
                "transition-all duration-700",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4",
              ].join(" ")}
              style={{ transitionDelay: "500ms" }}
            >
              {TRUST_ITEMS.map((item, i) => (
                <span key={item} className="flex items-center gap-x-3 gap-y-2">
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#7C3AED]">✓</span>
                    {item}
                  </span>
                  {i < TRUST_ITEMS.length - 1 && (
                    <span className="text-[#1E2235] hidden sm:inline">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* ── BEFORE/AFTER CARD — order-1 mobile, order-2 lg ── */}
          <div
            className={[
              "order-2 relative",
              "transition-all duration-700",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8",
            ].join(" ")}
            style={{ transitionDelay: "200ms" }}
          >
            {/* Background glow */}
            <div
              className="absolute -inset-4 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(124,58,237,0.07) 0%, transparent 70%)",
              }}
            />

            {/* Card */}
            <div
              className="relative bg-[#0F1117] border border-[#1E2235] rounded-xl overflow-hidden"
              style={{ boxShadow: "0 0 80px rgba(124,58,237,0.12)" }}
            >
              {/* Two-column comparison */}
              <div className="grid grid-cols-2">

                {/* LEFT — Without Jupiter */}
                <div className="p-6 border-r border-[#1E2235]">
                  <p className="text-[#8892A4] text-xs font-semibold tracking-[0.12em] uppercase mb-5">
                    Without Jupiter
                  </p>

                  {WITHOUT_ITEMS.map((item, i) => (
                    <div
                      key={item}
                      className={[
                        "flex items-start gap-3 mb-3",
                        "transition-all duration-700",
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-2",
                      ].join(" ")}
                      style={{ transitionDelay: `${300 + i * 100}ms` }}
                    >
                      <span className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-400 text-xs">✕</span>
                      </span>
                      <span className="text-[#8892A4] text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                {/* RIGHT — With Jupiter Intelligence */}
                <div className="p-6 bg-[#0D0F1C]">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
                    <span className="text-[#A78BFA] text-xs font-semibold tracking-[0.12em] uppercase">
                      With Jupiter
                    </span>
                  </div>

                  {WITH_ITEMS.map((item, i) => (
                    <div
                      key={item}
                      className={[
                        "flex items-start gap-3 mb-3",
                        "transition-all duration-700",
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-2",
                      ].join(" ")}
                      style={{ transitionDelay: `${300 + i * 100}ms` }}
                    >
                      <span className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-400 text-xs">✓</span>
                      </span>
                      <span className="text-white text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom strip */}
              <div className="bg-[#7C3AED] px-6 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <span className="text-white text-sm font-medium">
                  Ready to fix this for your brand?
                </span>
                <a
                  href="https://wa.me/919116955257"
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-200 text-sm hover:text-white transition-colors"
                >
                  WhatsApp Us →
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
