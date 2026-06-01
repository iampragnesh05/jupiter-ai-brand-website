"use client";

import { useState, useEffect, useRef } from "react";

const PROBLEMS = [
  {
    stat: "67%",
    badge: "CART LOSS",
    title: "Cart Abandonment",
    description:
      "Most Indian D2C stores recover zero abandoned carts. Every session that exits without purchase is permanent revenue loss - no system exists to reclaim it.",
    fix: "WhatsApp abandoned cart recovery flow",
    delay: "100ms",
  },
  {
    stat: "25–30%",
    badge: "COD FRAUD",
    title: "COD Fraud & RTO",
    description:
      "Cash-on-delivery orders with no confirmation system generate pure inventory and logistics loss before the shipment even leaves the warehouse.",
    fix: "COD to prepaid WhatsApp conversion flow",
    delay: "200ms",
  },
  {
    stat: "70%",
    badge: "RETENTION",
    title: "Customers Never Return",
    description:
      "Brands spending lakhs on acquisition lose most buyers after the first order. Without a retention system, every new customer starts from zero.",
    fix: "Automated WhatsApp win-back campaigns",
    delay: "300ms",
  },
  {
    stat: "0%",
    badge: "AI SEARCH",
    title: "AI Search Visibility",
    description:
      "Google AI Overview and ChatGPT now recommend products directly. Stores without AIO optimization are invisible to the next generation of discovery.",
    fix: "Jupiter Rank AI SEO built into your store",
    delay: "400ms",
  },
];

export default function ProblemSection() {
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
      id="whats-included"
      ref={sectionRef}
      className="border-t border-[#1E2235]/50"
    >
      <div className="py-20 md:py-28 max-w-[1100px] mx-auto px-6">

        {/* ── SECTION HEADER ── */}
        <div className="mb-16 text-center">

          {/* Label */}
          <p
            className={[
              "text-[#7C3AED] text-xs font-semibold tracking-[0.12em] uppercase mb-4",
              "transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            ].join(" ")}
            style={{ transitionDelay: "0ms" }}
          >
            THE REAL COST
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
            What a Basic Shopify Store{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] bg-clip-text text-transparent">
              Costs You Every Month
            </span>
          </h2>

          {/* Subheading */}
          <p
            className={[
              "text-[#8892A4] text-base md:text-lg leading-relaxed max-w-2xl mx-auto",
              "transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            ].join(" ")}
            style={{ transitionDelay: "300ms" }}
          >
            This is the default state for every Indian D2C brand operating
            without the right system.
          </p>
        </div>

        {/* ── CARDS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {PROBLEMS.map((problem) => (
            <div
              key={problem.badge}
              className={[
                "bg-[#0F1117] border border-[#1E2235] rounded-xl p-6",
                "hover:border-[#7C3AED]/30 transition-colors duration-300",
                "transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              ].join(" ")}
              style={{
                boxShadow: "0 0 80px rgba(124,58,237,0.08)",
                transitionDelay: problem.delay,
              }}
            >
              {/* Top row: stat + badge */}
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] bg-clip-text text-transparent">
                  {problem.stat}
                </span>
                <span className="text-[#7C3AED] text-xs font-semibold tracking-[0.1em] uppercase bg-[#7C3AED]/10 px-3 py-1 rounded-full">
                  {problem.badge}
                </span>
              </div>

              {/* Card title */}
              <h3 className="text-white font-bold text-lg mb-3">
                {problem.title}
              </h3>

              {/* Card description */}
              <p className="text-[#8892A4] text-sm leading-relaxed mb-5">
                {problem.description}
              </p>

              {/* Divider + fix row */}
              <div className="border-t border-[#1E2235] pt-4">
                <div className="flex items-start gap-2">
                  <span className="text-[#7C3AED] text-sm mt-0.5 flex-shrink-0">
                    →
                  </span>
                  <p className="text-sm">
                    <span className="text-[#8892A4]">Fixed by: </span>
                    <span className="text-[#A78BFA]">{problem.fix}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
