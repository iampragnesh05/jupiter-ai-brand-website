"use client";

import { useState, useEffect, useRef } from "react";

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="cta" ref={sectionRef} className="py-20 md:py-28 max-w-[1100px] mx-auto px-6">
      {/* Main CTA Block */}
      <div className="relative overflow-hidden w-full">
        {/* Glow Effects */}
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#7C3AED]/10 blur-3xl pointer-events-none" />
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#7C3AED]/10 blur-3xl pointer-events-none" />

        {/* Main Card */}
        <div
          style={{
            transitionDelay: isVisible ? "0ms" : "0ms",
            boxShadow: "0 0 120px rgba(124,58,237,0.15)",
          }}
          className={`relative z-10 bg-[#0F1117] border border-[#7C3AED]/30 rounded-2xl p-10 md:p-16 text-center transition-all duration-700 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Top Badge */}
          <div
            style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
            className={`inline-flex items-center gap-2 bg-[#7C3AED]/10 border border-[#7C3AED]/20 rounded-full px-4 py-2 mb-8 transition-all duration-700 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
            <span className="text-[#A78BFA] text-xs font-semibold tracking-[0.12em] uppercase">
              Discovery Calls Now Open
            </span>
          </div>

          {/* Headline */}
          <h2
            style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
            className={`text-white font-extrabold text-3xl md:text-5xl leading-tight mb-6 max-w-3xl mx-auto transition-all duration-700 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Ready to Stop Losing{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] bg-clip-text text-transparent block sm:inline">
              Revenue Every Day?
            </span>
          </h2>

          {/* Subheading */}
          <p
            style={{ transitionDelay: isVisible ? "350ms" : "0ms" }}
            className={`text-[#8892A4] text-base md:text-lg leading-relaxed mb-4 max-w-2xl mx-auto transition-all duration-700 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Book a free 30-minute discovery call. We'll show you exactly where your store is losing revenue and what Jupiter Intelligence would look like for your specific brand.
          </p>

          {/* Second Line */}
          <p
            style={{ transitionDelay: isVisible ? "450ms" : "0ms" }}
            className={`text-[#8892A4] text-sm leading-relaxed mb-10 max-w-xl mx-auto transition-all duration-700 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            No commitment. No pressure. No sales pitch - just an honest conversation about your brand.
          </p>

          {/* CTA Buttons */}
          <div
            style={{ transitionDelay: isVisible ? "550ms" : "0ms" }}
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 transition-all duration-700 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <a
              href="https://wa.me/919116955257"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 text-base hover:scale-105 hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] w-full sm:w-auto justify-center"
            >
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-white text-sm">✆</span>
              </div>
              <span>WhatsApp Us Now</span>
            </a>

            <span className="text-[#8892A4] text-sm hidden sm:block">or</span>

            <a
              href="mailto:info@jupiter-ai.co"
              className="inline-flex items-center gap-2 border border-[#1E2235] hover:border-[#7C3AED] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 text-base w-full sm:w-auto justify-center"
            >
              <span>Email us instead →</span>
            </a>
          </div>

          {/* Reassurance Row */}
          <div
            style={{ transitionDelay: isVisible ? "650ms" : "0ms" }}
            className={`flex flex-wrap items-center justify-center gap-x-6 gap-y-3 transition-all duration-700 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#7C3AED]/10 flex items-center justify-center">
                <span className="text-[#7C3AED] text-xs">✓</span>
              </div>
              <span className="text-[#8892A4] text-sm">Free discovery call</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#7C3AED]/10 flex items-center justify-center">
                <span className="text-[#7C3AED] text-xs">✓</span>
              </div>
              <span className="text-[#8892A4] text-sm">No commitment required</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#7C3AED]/10 flex items-center justify-center">
                <span className="text-[#7C3AED] text-xs">✓</span>
              </div>
              <span className="text-[#8892A4] text-sm">Scope confirmed before build</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#7C3AED]/10 flex items-center justify-center">
                <span className="text-[#7C3AED] text-xs">✓</span>
              </div>
              <span className="text-[#8892A4] text-sm">Indian brands only</span>
            </div>
          </div>
        </div>
      </div>

      {/* Final Trust Bar */}
      <div
        style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
        className={`mt-12 pt-12 border-t border-[#1E2235] transition-all duration-700 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Side — Stat Pills */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <div className="flex items-center gap-2 bg-[#0F1117] border border-[#1E2235] rounded-full px-4 py-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
              <span className="text-[#8892A4] text-sm">100+ stores built</span>
            </div>

            <div className="flex items-center gap-2 bg-[#0F1117] border border-[#1E2235] rounded-full px-4 py-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
              <span className="text-[#8892A4] text-sm">Indian brands only</span>
            </div>

            <div className="flex items-center gap-2 bg-[#0F1117] border border-[#1E2235] rounded-full px-4 py-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
              <span className="text-[#8892A4] text-sm">info@jupiter-ai.co</span>
            </div>
          </div>

          {/* Center — Jupiter AI Logo Text */}
          <div className="text-center">
            <div className="text-white font-bold text-lg">Jupiter AI</div>
            <div className="text-[#8892A4] text-xs mt-1">Built for India 🇮🇳</div>
          </div>

          {/* Right Side — Contact Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4">
            <a
              href="https://wa.me/919116955257"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#8892A4] text-sm hover:text-white transition-colors"
            >
              <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center">
                <span className="text-green-400 text-xs">✆</span>
              </div>
              <span>+91 91169 55257</span>
            </a>

            <a
              href="mailto:info@jupiter-ai.co"
              className="flex items-center gap-2 text-[#8892A4] text-sm hover:text-white transition-colors"
            >
              <div className="w-6 h-6 rounded-full bg-[#7C3AED]/10 flex items-center justify-center">
                <span className="text-[#7C3AED] text-xs">✉</span>
              </div>
              <span>info@jupiter-ai.co</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
