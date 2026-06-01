"use client";

import { useEffect, useRef, useState } from "react";

interface Problem {
  stat: string;
  title: string;
  description: string;
  fix: string;
  accentColor: string;
}

const PROBLEMS: Problem[] = [
  {
    stat: "67%",
    title: "Cart Abandonment",
    description:
      "Most Indian D2C stores recover zero abandoned carts. Every session that exits without purchase is permanent revenue loss — no system exists to reclaim it.",
    fix: "Recovered via automated cart + browse abandonment sequences",
    accentColor: "rgba(124,58,237,0.6)",
  },
  {
    stat: "25–30%",
    title: "COD Fraud & RTO",
    description:
      "Cash-on-delivery orders with no confirmation system generate pure inventory and logistics loss before the shipment even leaves the warehouse.",
    fix: "Eliminated via COD confirmation + prepaid conversion flows",
    accentColor: "rgba(167,139,250,0.6)",
  },
  {
    stat: "70%",
    title: "No Repeat Purchases",
    description:
      "Brands spending lakhs on acquisition lose most buyers after the first order. Without a retention system, every new customer starts from zero trust.",
    fix: "Rebuilt via win-back, upsell, and festive campaign automations",
    accentColor: "rgba(34,197,94,0.6)",
  },
  {
    stat: "0%",
    title: "AI Search Visibility",
    description:
      "Google AI Overview and ChatGPT now recommend products directly. Stores without AIO optimization and schema markup are invisible to the next generation of discovery.",
    fix: "Resolved via AIO structure, schema markup, and LLMs.txt implementation",
    accentColor: "rgba(124,58,237,0.6)",
  },
  {
    stat: "~40%",
    title: "Support Overhead",
    description:
      "Repetitive queries — order status, sizing, COD confirmation — consume founder and team bandwidth that should be focused on growth.",
    fix: "Automated via AI chatbot trained on your product catalog",
    accentColor: "rgba(167,139,250,0.6)",
  },
];

export default function JI01Problem() {
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

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden w-full"
      style={{ paddingTop: "160px", paddingBottom: "160px" }}
    >
      {/* Subtle top divider line */}
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

        {/* Section header */}
        <div
          className="mb-20 max-w-[640px]"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
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
            The Cost of Inaction
          </p>
          <h2
            className="font-extrabold text-white leading-[1.08] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            Revenue escaping your store{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              every single day.
            </span>
          </h2>
          <p
            style={{
              color: "#8892A4",
              fontSize: "1.0625rem",
              lineHeight: 1.78,
              maxWidth: "500px",
            }}
          >
            Five structural failure points that quietly drain revenue from every
            Indian D2C brand operating without an AI-native commerce system.
          </p>
        </div>

        {/* Problem items */}
        <div className="flex flex-col gap-0">
          {PROBLEMS.map((problem, idx) => (
            <div
              key={idx}
              className="group relative"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 0.7s ease ${idx * 100}ms, transform 0.7s ease ${idx * 100}ms`,
              }}
            >
              {/* Separator */}
              <div
                style={{
                  height: "1px",
                  background: "rgba(30,34,53,1)",
                }}
              />

              <div
                className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12 py-10 transition-colors duration-300"
                style={{ cursor: "default" }}
              >
                {/* Stat column */}
                <div
                  className="flex-shrink-0 md:w-[160px]"
                  style={{
                    borderLeft: `2px solid ${problem.accentColor}`,
                    paddingLeft: "20px",
                  }}
                >
                  <div
                    className="font-extrabold leading-none mb-1"
                    style={{
                      fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                      color: "white",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {problem.stat}
                  </div>
                  <div
                    style={{
                      color: "#8892A4",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    {problem.title}
                  </div>
                </div>

                {/* Description column */}
                <div className="flex-1">
                  <p
                    style={{
                      color: "#C7D4F0",
                      fontSize: "1rem",
                      lineHeight: 1.8,
                      marginBottom: "16px",
                    }}
                  >
                    {problem.description}
                  </p>
                  <div
                    className="inline-flex items-center gap-2"
                    style={{
                      color: "#8892A4",
                      fontSize: "0.8125rem",
                      fontWeight: 500,
                    }}
                  >
                    <span
                      style={{
                        color: "#22C55E",
                        fontSize: "0.75rem",
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </span>
                    {problem.fix}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Final separator */}
          <div
            style={{ height: "1px", background: "rgba(30,34,53,1)" }}
          />
        </div>

        {/* Closing statement */}
        <div
          className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease 600ms, transform 0.8s ease 600ms",
          }}
        >
          <div
            style={{
              background: "rgba(124,58,237,0.08)",
              border: "1px solid rgba(124,58,237,0.2)",
              borderRadius: "16px",
              padding: "24px 28px",
              maxWidth: "520px",
            }}
          >
            <p
              style={{
                color: "#C7D4F0",
                fontSize: "0.9375rem",
                lineHeight: 1.75,
                fontStyle: "italic",
              }}
            >
              "These are not edge cases. These are the default state for every
              Indian D2C brand operating without an AI revenue infrastructure."
            </p>
            <p
              className="mt-3"
              style={{
                color: "#A78BFA",
                fontSize: "0.8125rem",
                fontWeight: 600,
              }}
            >
              — Jupiter Intelligence Analysis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
