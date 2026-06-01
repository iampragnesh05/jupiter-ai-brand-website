"use client";

import { useEffect, useRef, useState } from "react";

// ─── Animated counter hook ────────────────────────────────────────────────────
function useCounter(end: number, duration = 1800, isActive: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    let start: number;
    let raf: number;

    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setValue(Math.floor(easeOut(progress) * end));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, isActive]);

  return value;
}

// ─── Individual metric card ───────────────────────────────────────────────────
interface MetricProps {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  isActive: boolean;
  delay: number;
  isVisible: boolean;
}

function MetricCard({
  value,
  suffix,
  label,
  sublabel,
  isActive,
  delay,
  isVisible,
}: MetricProps) {
  const count = useCounter(value, 1800, isActive);

  return (
    <div
      className="group relative flex flex-col"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {/* Top accent line — appears on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(124,58,237,0.6), transparent)",
          opacity: 0,
        }}
        ref={(el) => {
          if (el) {
            const parent = el.parentElement;
            if (parent) {
              parent.addEventListener("mouseenter", () => (el.style.opacity = "1"));
              parent.addEventListener("mouseleave", () => (el.style.opacity = "0"));
            }
          }
        }}
      />

      <div
        className="relative p-8 h-full transition-all duration-300"
        style={{
          border: "1px solid rgba(30,34,53,1)",
          borderRadius: "2px",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background =
            "rgba(124,58,237,0.03)";
          (e.currentTarget as HTMLElement).style.borderColor =
            "rgba(124,58,237,0.2)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = "";
          (e.currentTarget as HTMLElement).style.borderColor =
            "rgba(30,34,53,1)";
        }}
      >
        {/* Large metric number */}
        <div
          className="font-extrabold text-white leading-none mb-3 tracking-tight"
          style={{ fontSize: "clamp(2.2rem, 3.5vw, 3.25rem)" }}
        >
          {count}
          <span
            style={{
              fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
              color: "#A78BFA",
            }}
          >
            {suffix}
          </span>
        </div>

        {/* Label */}
        <div
          className="font-semibold text-white mb-2"
          style={{ fontSize: "0.9375rem" }}
        >
          {label}
        </div>

        {/* Sub-label */}
        <div style={{ color: "#8892A4", fontSize: "0.8125rem", lineHeight: 1.5 }}>
          {sublabel}
        </div>
      </div>
    </div>
  );
}

// ─── Results Section ──────────────────────────────────────────────────────────
const METRICS = [
  {
    value: 54,
    suffix: "X",
    label: "Cart Recovery ROI",
    sublabel: "Automated WhatsApp cart abandonment flows",
  },
  {
    value: 13,
    suffix: "X",
    label: "Campaign ROI",
    sublabel: "Broadcast + segmented WhatsApp campaigns",
  },
  {
    value: 6,
    suffix: ".4M+",
    label: "Assisted Revenue",
    sublabel: "Generated for a single D2C brand",
  },
  {
    value: 40,
    suffix: "%",
    label: "Higher Retention",
    sublabel: "WhatsApp-first post-purchase marketing",
  },
  {
    value: 25,
    suffix: "%",
    label: "Carts Recovered",
    sublabel: "Timely, personalized recovery sequences",
  },
  {
    value: 3900,
    suffix: "+",
    label: "Queries Automated",
    sublabel: "Per month via AI catalog chatbot",
  },
];

export default function JI01Results() {
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setIsActive(true), 400);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
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

        {/* Header */}
        <div
          className="mb-16"
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
            Outcomes
          </p>
          <h2
            className="font-extrabold text-white leading-[1.08] tracking-tight mb-5"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", maxWidth: "640px" }}
          >
            What this system delivers
            <br />
            for Indian D2C brands.
          </h2>
          <p
            style={{
              color: "#8892A4",
              fontSize: "1rem",
              lineHeight: 1.78,
              maxWidth: "480px",
            }}
          >
            Real results from brands running complete AI-native automation and
            intelligence infrastructure.
          </p>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-0">
          {METRICS.map((metric, idx) => (
            <MetricCard
              key={idx}
              value={metric.value}
              suffix={metric.suffix}
              label={metric.label}
              sublabel={metric.sublabel}
              isActive={isActive}
              delay={idx * 80}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Disclaimer */}
        <p
          className="mt-10"
          style={{
            color: "#8892A4",
            fontSize: "0.75rem",
            lineHeight: 1.6,
            maxWidth: "560px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.8s ease 700ms, transform 0.8s ease 700ms",
          }}
        >
          Industry benchmarks from Indian D2C brands operating WhatsApp
          automation and AI intelligence systems. Individual results vary by
          brand size and category.
        </p>
      </div>
    </section>
  );
}
