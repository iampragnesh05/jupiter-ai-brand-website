"use client";

import { useState, useEffect, useRef } from "react";

/* ─── Types ─────────────────────────────────────────────────────────────── */

interface JourneyStep {
  timing: string;
  text: string;
  subtext?: string;
  isResult?: boolean;
}

interface WhatsAppPreview {
  storeName: string;
  message: string;
  ctaLabel: string;
}

interface Flow {
  emoji: string;
  flowNumber: string;
  title: string;
  badgeText: string;
  badgeCls: string;
  steps: JourneyStep[];
  preview: WhatsAppPreview;
}

/* ─── Flow data ──────────────────────────────────────────────────────────── */

const FLOWS: Flow[] = [
  {
    emoji: "🛒",
    flowNumber: "FLOW 01",
    title: "Abandoned Cart Recovery",
    badgeText: "1 in 4 Carts Recovered",
    badgeCls: "bg-green-500/10 text-green-400",
    steps: [
      {
        timing: "TRIGGER",
        text: "Customer adds to cart",
        subtext: "Session starts being tracked",
      },
      {
        timing: "EXITS STORE",
        text: "Leaves without buying",
        subtext: "Flow activates automatically",
      },
      {
        timing: "30 MINS LATER",
        text: "First WhatsApp sent",
        subtext: "Personalized reminder with product name",
      },
      {
        timing: "10 HRS LATER",
        text: "Follow-up if no response",
        subtext: "Second nudge with urgency message",
      },
      {
        timing: "RESULT",
        text: "Cart recovered ✓",
        subtext: "Industry benchmark: 54X cart recovery ROI",
        isResult: true,
      },
    ],
    preview: {
      storeName: "Your Store",
      message:
        "Hey Priya 👋\n\nYou left something in your cart!\n\nYour items are waiting. Complete your order before they sell out.",
      ctaLabel: "Complete Order →",
    },
  },
  {
    emoji: "💳",
    flowNumber: "FLOW 02",
    title: "COD to Prepaid Conversion",
    badgeText: "25–30% Fraud Prevented",
    badgeCls: "bg-blue-500/10 text-blue-400",
    steps: [
      {
        timing: "TRIGGER",
        text: "Customer places COD order",
        subtext: "High-risk order detected",
      },
      {
        timing: "1 HR LATER",
        text: "WhatsApp sent with incentive",
        subtext: "Discount offered to convert to prepaid",
      },
      {
        timing: "IF NO RESPONSE",
        text: "Follow-up after 10 hrs",
        subtext: "Urgency added - link expires soon",
      },
      {
        timing: "CUSTOMER CONVERTS",
        text: "Prepaid payment completed",
        subtext: "Order secured, fraud eliminated",
      },
      {
        timing: "RESULT",
        text: "Revenue protected ✓",
        subtext: "25–30% of COD fraud prevented before dispatch",
        isResult: true,
      },
    ],
    preview: {
      storeName: "Your Store",
      message:
        "Hey Rahul 👋\n\nYour COD order is confirmed!\n\nSwitch to prepaid and get ₹50 off instantly.\n\nPay now - link expires in 30 minutes.",
      ctaLabel: "Pay Now & Save ₹50 →",
    },
  },
  {
    emoji: "❤️",
    flowNumber: "FLOW 03",
    title: "Win-back Campaign",
    badgeText: "40% Higher Retention",
    badgeCls: "bg-purple-500/10 text-[#A78BFA]",
    steps: [
      {
        timing: "TRIGGER",
        text: "No order in 30–60 days",
        subtext: "Customer inactivity detected",
      },
      {
        timing: "DAY 30",
        text: "Personalized WhatsApp sent",
        subtext: "We miss you message with special offer",
      },
      {
        timing: "DAY 37",
        text: "Follow-up if no purchase",
        subtext: "New arrivals or festive campaign triggered",
      },
      {
        timing: "CUSTOMER RETURNS",
        text: "Order placed again",
        subtext: "Customer re-engaged successfully",
      },
      {
        timing: "RESULT",
        text: "Retention restored ✓",
        subtext: "Industry benchmark: 40% higher retention",
        isResult: true,
      },
    ],
    preview: {
      storeName: "Your Store",
      message:
        "Hey Anjali ❤️\n\nWe miss you!\n\nIt's been a while since your last order. Here's 15% off just for you.\n\nValid for 48 hours only.",
      ctaLabel: "Shop Now - 15% Off →",
    },
  },
];

/* ─── WhatsApp Preview ───────────────────────────────────────────────────── */

function WhatsAppPreview({ preview }: { preview: WhatsAppPreview }) {
  return (
    <div className="bg-[#131620] rounded-xl border border-[#1E2235] overflow-hidden max-w-[280px] mx-auto">
      {/* Header bar */}
      <div className="bg-[#1A1F30] px-4 py-3 flex items-center gap-3 border-b border-[#1E2235]">
        <span className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
          <span className="text-green-400 text-xs">✓</span>
        </span>
        <div>
          <p className="text-white text-sm font-medium leading-none mb-0.5">
            {preview.storeName}
          </p>
          <p className="text-[#8892A4] text-xs">Business Account</p>
        </div>
      </div>

      {/* Chat area */}
      <div className="p-4 space-y-3 bg-[#0D0F1C] min-h-[200px]">
        <div className="bg-[#1A1F30] rounded-xl rounded-tl-none p-3 max-w-[230px]">
          <p className="text-white text-xs leading-relaxed whitespace-pre-line">
            {preview.message}
          </p>

          {/* CTA button */}
          <div className="mt-2 w-full bg-[#7C3AED]/20 border border-[#7C3AED]/30 rounded-lg py-2 text-center">
            <span className="text-[#A78BFA] text-xs font-medium">
              {preview.ctaLabel}
            </span>
          </div>

          {/* Timestamp */}
          <div className="flex items-center justify-end gap-1 mt-2">
            <span className="text-[#8892A4] text-[10px]">10:42 AM ✓✓</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Flow Card ──────────────────────────────────────────────────────────── */

function FlowCard({
  flow,
  isVisible,
  delay,
}: {
  flow: Flow;
  isVisible: boolean;
  delay: string;
}) {
  return (
    <div
      className={[
        "bg-[#0F1117] border border-[#1E2235] rounded-xl overflow-hidden",
        "hover:border-[#7C3AED]/30 transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
      ].join(" ")}
      style={{
        boxShadow: "0 0 80px rgba(124,58,237,0.08)",
        transitionDelay: delay,
      }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#1E2235]">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{flow.emoji}</span>
          <span className="text-[#7C3AED] text-xs font-semibold tracking-widest uppercase bg-[#7C3AED]/10 px-3 py-1 rounded-full">
            {flow.flowNumber}
          </span>
          <span className="text-white font-bold text-lg">{flow.title}</span>
        </div>
        <span
          className={`${flow.badgeCls} text-xs font-semibold px-3 py-1.5 rounded-full hidden sm:inline-flex`}
        >
          {flow.badgeText}
        </span>
      </div>

      {/* Mobile badge (shown below title bar on xs) */}
      <div className="px-6 py-2 sm:hidden border-b border-[#1E2235]">
        <span
          className={`${flow.badgeCls} text-xs font-semibold px-3 py-1.5 rounded-full`}
        >
          {flow.badgeText}
        </span>
      </div>

      {/* Card body */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* LEFT — Journey Steps */}
        <div className="p-6 border-r-0 lg:border-r border-[#1E2235]">
          <p className="text-[#8892A4] text-xs font-semibold tracking-widest uppercase mb-6">
            How it works
          </p>

          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute left-[9px] top-4 bottom-4 w-[1px] bg-[#1E2235]" />

            {flow.steps.map((step, i) => (
              <div
                key={i}
                className="relative flex items-start gap-4 mb-6 last:mb-0"
              >
                {/* Step dot */}
                {step.isResult ? (
                  <span className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center z-10 bg-green-500/20 border border-green-500/40">
                    <span className="text-green-400 text-xs">✓</span>
                  </span>
                ) : (
                  <span className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center z-10 bg-[#7C3AED]">
                    <span className="text-white text-xs font-bold">{i + 1}</span>
                  </span>
                )}

                {/* Step content */}
                <div>
                  <p className="text-[#7C3AED] text-xs font-semibold uppercase tracking-wider mb-1">
                    {step.timing}
                  </p>
                  <p className="text-white text-sm font-medium mb-0.5">
                    {step.text}
                  </p>
                  {step.subtext && (
                    <p className="text-[#8892A4] text-xs">{step.subtext}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — WhatsApp Preview */}
        <div className="p-6 bg-[#0D0F1C]">
          <p className="text-[#8892A4] text-xs font-semibold tracking-widest uppercase mb-4">
            Message preview
          </p>
          <WhatsAppPreview preview={flow.preview} />
        </div>
      </div>
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────────────────── */

export default function AutomationFlows() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const cardDelays = ["100ms", "250ms", "400ms"];

  return (
    <section
      id="automation"
      ref={sectionRef}
      className="border-t border-[#1E2235]/50"
    >
      <div className="py-20 md:py-28 max-w-[1100px] mx-auto px-6">

        {/* ── SECTION HEADER ── */}
        <div className="mb-16 text-center">
          <p
            className={[
              "text-[#7C3AED] text-xs font-semibold tracking-[0.12em] uppercase mb-4",
              "transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            ].join(" ")}
            style={{ transitionDelay: "0ms" }}
          >
            THE AUTOMATION
          </p>

          <h2
            className={[
              "text-white font-extrabold text-3xl md:text-5xl leading-tight mb-6",
              "transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            ].join(" ")}
            style={{ transitionDelay: "150ms" }}
          >
            Three Flows That Recover{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] bg-clip-text text-transparent">
              Revenue You&apos;re Losing Today
            </span>
          </h2>

          <p
            className={[
              "text-[#8892A4] text-base md:text-lg leading-relaxed max-w-2xl mx-auto",
              "transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            ].join(" ")}
            style={{ transitionDelay: "300ms" }}
          >
            Every Indian D2C brand loses money at these exact three points. We
            automate all three - runs 24/7, zero manual work after setup.
          </p>
        </div>

        {/* ── FLOW CARDS ── */}
        <div className="flex flex-col gap-8">
          {FLOWS.map((flow, i) => (
            <FlowCard
              key={flow.flowNumber}
              flow={flow}
              isVisible={isVisible}
              delay={cardDelays[i]}
            />
          ))}
        </div>

        {/* ── BOTTOM CTA STRIP ── */}
        <div
          className={[
            "mt-16 bg-[#0F1117] border border-[#1E2235] rounded-xl p-8 text-center",
            "transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          ].join(" ")}
          style={{
            boxShadow: "0 0 80px rgba(124,58,237,0.08)",
            transitionDelay: "550ms",
          }}
        >
          <p className="text-[#8892A4] text-sm mb-2">
            All three flows configured, tested and live before handover.
          </p>
          <h3 className="text-white font-bold text-xl mb-6">
            Ready to stop losing revenue every day?
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/919116955257"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-6 py-3 rounded-lg font-medium transition-colors text-sm"
            >
              WhatsApp Us →
            </a>
            <a
              href="https://calendly.com/iampragnesh/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#1E2235] hover:border-[#7C3AED] text-white px-6 py-3 rounded-lg font-medium transition-colors text-sm"
            >
              Book Discovery Call
            </a>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 text-sm text-[#8892A4]">
            {[
              "WhatsApp Cloud API",
              "Live in 7–10 days",
              "Zero manual work after setup",
              "100+ Stores built",
            ].map((item, i, arr) => (
              <span key={item} className="flex items-center gap-x-6">
                <span className="flex items-center gap-1.5">
                  <span className="text-[#7C3AED]">✓</span>
                  {item}
                </span>
                {i < arr.length - 1 && (
                  <span className="text-[#1E2235] hidden sm:inline">|</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
