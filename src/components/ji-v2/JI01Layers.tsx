"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Layer definitions ────────────────────────────────────────────────────────
interface Layer {
  id: string;
  label: string;
  tag: string;
  headline: string;
  description: string;
  capabilities: string[];
  accent: string;
}

const LAYERS: Layer[] = [
  {
    id: "commerce-infra",
    label: "Commerce Infrastructure",
    tag: "FOUNDATION",
    headline: "A custom-built revenue environment — not a template.",
    description:
      "Every store we build starts from zero. No Shopify templates. Custom architecture tuned for Indian buyer behaviour, mobile-first journeys, and platform-native performance.",
    capabilities: [
      "Zero-template Shopify architecture engineered for conversion",
      "PageSpeed 85+ baseline with Core Web Vitals optimization",
      "Indian payment gateway stack — Razorpay, COD, UPI, EMI",
      "Mobile-first design system built for D2C discovery journeys",
    ],
    accent: "#7C3AED",
  },
  {
    id: "revenue-automation",
    label: "Revenue Automation Layer",
    tag: "AUTOMATION",
    headline: "Every revenue signal captured and acted on automatically.",
    description:
      "A complete WhatsApp automation stack deployed and configured — cart recovery, COD conversion, win-back, retention, upsell. All flows are live from day one.",
    capabilities: [
      "Abandoned cart + browse abandonment recovery sequences",
      "COD confirmation + prepaid conversion automation",
      "Win-back campaigns and festive broadcast orchestration",
      "Smart upsell and cross-sell trigger flows",
    ],
    accent: "#22C55E",
  },
  {
    id: "conversational-commerce",
    label: "Conversational Commerce",
    tag: "ENGAGEMENT",
    headline: "Every customer conversation automated and intelligent.",
    description:
      "A WhatsApp-native conversational layer trained on your catalog. Handles support, qualification, COD confirmation, and product guidance — autonomously.",
    capabilities: [
      "AI chatbot trained on product catalog and brand voice",
      "Automated size guidance, order tracking, and FAQs",
      "WhatsApp-native cart and checkout journey flows",
      "Human handoff triggers for high-intent conversations",
    ],
    accent: "#A78BFA",
  },
  {
    id: "revenue-intelligence",
    label: "Autonomous Intelligence",
    tag: "INTELLIGENCE",
    headline: "Your store, analyzed and optimized every single week.",
    description:
      "Jupiter's AI analyzes your store data weekly and surfaces prioritized revenue recommendations with rupee-level impact estimates — delivered every Monday.",
    capabilities: [
      "Weekly AI revenue report with priority recommendations",
      "AIO, schema markup, and LLMs.txt for AI search visibility",
      "Anomaly detection — traffic drops, conversion dips, RTO spikes",
      "Predictive inventory and campaign timing signals",
    ],
    accent: "#7C3AED",
  },
];

// ─── Layers Section ───────────────────────────────────────────────────────────
export default function JI01Layers() {
  const [activeIdx, setActiveIdx] = useState(0);
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

  const activeLayer = LAYERS[activeIdx];

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
          className="mb-16 max-w-[680px]"
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
            Operating Layers
          </p>
          <h2
            className="font-extrabold text-white leading-[1.08] tracking-tight mb-5"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            Modular infrastructure.
            <br />
            One integrated system.
          </h2>
          <p
            style={{
              color: "#8892A4",
              fontSize: "1.0625rem",
              lineHeight: 1.78,
              maxWidth: "520px",
            }}
          >
            Jupiter Intelligence is built in four distinct layers — each a
            complete operating system on its own, far more powerful when
            connected.
          </p>
        </div>

        {/* Tab navigation */}
        <div
          className="flex flex-col sm:flex-row gap-2 sm:gap-0 mb-12 rounded-xl overflow-hidden sm:rounded-none sm:border-b sm:bg-transparent"
          style={{
            background: "rgba(13,15,28,0.6)",
            border: "1px solid rgba(30,34,53,1)",
            borderRadius: "14px",
            padding: "4px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease 150ms, transform 0.8s ease 150ms",
          }}
        >
          {LAYERS.map((layer, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={layer.id}
                id={`ji01-layer-tab-${idx}`}
                onClick={() => setActiveIdx(idx)}
                className="flex-1 text-left sm:text-center transition-all duration-300 relative"
                style={{
                  padding: "12px 20px",
                  borderRadius: "10px",
                  fontSize: "0.8125rem",
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? "white" : "#8892A4",
                  background: isActive
                    ? "rgba(124,58,237,0.15)"
                    : "transparent",
                  border: isActive
                    ? "1px solid rgba(124,58,237,0.35)"
                    : "1px solid transparent",
                  cursor: "pointer",
                }}
              >
                <span
                  className="block text-[0.625rem] font-bold tracking-widest uppercase mb-0.5"
                  style={{ color: isActive ? layer.accent : "rgba(124,58,237,0.4)" }}
                >
                  {layer.tag}
                </span>
                {layer.label}
              </button>
            );
          })}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
          >
            {/* Left: copy */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 text-[0.6875rem] font-bold tracking-widest uppercase"
                style={{
                  background: `${activeLayer.accent}18`,
                  border: `1px solid ${activeLayer.accent}40`,
                  color: activeLayer.accent,
                }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background: activeLayer.accent,
                    boxShadow: `0 0 6px ${activeLayer.accent}`,
                  }}
                />
                {activeLayer.tag}
              </div>

              <h3
                className="font-extrabold text-white leading-[1.15] mb-5 tracking-tight"
                style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)" }}
              >
                {activeLayer.headline}
              </h3>

              <p
                style={{
                  color: "#8892A4",
                  fontSize: "1rem",
                  lineHeight: 1.82,
                }}
              >
                {activeLayer.description}
              </p>
            </div>

            {/* Right: capabilities */}
            <div>
              <p
                style={{
                  color: "#A78BFA",
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                What&apos;s deployed
              </p>

              <div className="flex flex-col gap-0">
                {activeLayer.capabilities.map((cap, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 py-5"
                    style={{
                      borderBottom:
                        i < activeLayer.capabilities.length - 1
                          ? "1px solid rgba(30,34,53,1)"
                          : "none",
                    }}
                  >
                    <div
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                      style={{
                        background: `${activeLayer.accent}18`,
                        border: `1px solid ${activeLayer.accent}40`,
                      }}
                    >
                      <svg
                        width="10"
                        height="8"
                        viewBox="0 0 10 8"
                        fill="none"
                      >
                        <path
                          d="M1 4l3 3 5-6"
                          stroke={activeLayer.accent}
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span
                      style={{
                        color: "#C7D4F0",
                        fontSize: "0.9375rem",
                        lineHeight: 1.65,
                        fontWeight: 500,
                      }}
                    >
                      {cap}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
