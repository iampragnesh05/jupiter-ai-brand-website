"use client";

import { useState, useEffect, useRef } from "react";

/* ─── Types ──────────────────────────────────────────────────────────────── */

interface RoleBox {
  label: string;
  content: string;
}

interface Step {
  number: string;
  emoji: string;
  badge: string;
  title: string;
  description: string;
  you: RoleBox;
  jupiter: RoleBox;
  delay: string;
}

/* ─── Static data ────────────────────────────────────────────────────────── */

const STEPS: Step[] = [
  {
    number: "01",
    emoji: "🎯",
    badge: "First",
    title: "Discovery Call",
    description:
      "We learn your brand, products, and what you need. Scope confirmed. Price locked. No surprises after this.",
    you: {
      label: "You",
      content:
        "Join a free 30-minute WhatsApp call. Tell us about your brand, products, and current store situation. No preparation needed.",
    },
    jupiter: {
      label: "Jupiter",
      content:
        "We ask the right questions, map your revenue gaps, scope the full project, and lock the price before anything starts.",
    },
    delay: "100ms",
  },
  {
    number: "02",
    emoji: "🏗️",
    badge: "Next",
    title: "Custom Store Build",
    description:
      "Zero templates. Custom Shopify store built around your brand and Indian buyer behaviour. PageSpeed 85+ from first line of code.",
    you: {
      label: "You",
      content:
        "Share your brand assets, product catalog, and any design preferences. Review the store before it goes live.",
    },
    jupiter: {
      label: "Jupiter",
      content:
        "We design and build your entire custom Shopify store. Indian payment stack, mobile-first architecture, PageSpeed 85+ guaranteed.",
    },
    delay: "250ms",
  },
  {
    number: "03",
    emoji: "⚡",
    badge: "Then",
    title: "Automation Layer",
    description:
      "All 3 WhatsApp flows configured and tested. Jupiter Rank installed. Shopify Flow set up. Everything live before handover.",
    you: {
      label: "You",
      content:
        "Approve your WhatsApp message templates. Review the automation flows before they go live. Nothing launches without your sign-off.",
    },
    jupiter: {
      label: "Jupiter",
      content:
        "We configure all 3 WhatsApp revenue flows, install Jupiter Rank AI SEO, set up Shopify Flow automation, and test every trigger end to end.",
    },
    delay: "400ms",
  },
  {
    number: "04",
    emoji: "🚀",
    badge: "Finally",
    title: "Launch + Handover",
    description:
      "Your store goes live. Full documentation provided. Post-launch support included. Revenue system active from day one.",
    you: {
      label: "You",
      content:
        "Review the final store, approve the launch. Receive full documentation and walkthrough of everything that was built.",
    },
    jupiter: {
      label: "Jupiter",
      content:
        "We launch your store, hand over full documentation, and provide post-launch support. Your revenue system is live and running.",
    },
    delay: "550ms",
  },
];

const REASSURANCE = [
  {
    title: "No commitment",
    description: "Discovery call is completely free. Walk away anytime.",
    delay: "100ms",
  },
  {
    title: "Price locked upfront",
    description:
      "Full scope and price confirmed before build starts. Zero surprises.",
    delay: "200ms",
  },
  {
    title: "You approve everything",
    description: "Nothing goes live without your review and sign-off.",
    delay: "300ms",
  },
  {
    title: "Support included",
    description:
      "Post-launch support included in every package. We don't disappear.",
    delay: "400ms",
  },
];

/* ─── Role box sub-component ─────────────────────────────────────────────── */

function RoleBox({
  type,
  content,
}: {
  type: "you" | "jupiter";
  content: string;
}) {
  const isJupiter = type === "jupiter";
  return (
    <div
      className={
        isJupiter
          ? "bg-[#7C3AED]/5 border border-[#7C3AED]/20 rounded-lg p-3"
          : "bg-[#131620] border border-[#1E2235] rounded-lg p-3"
      }
    >
      <div className="flex items-center gap-2 mb-2">
        <span
          className={`w-4 h-4 rounded-full flex items-center justify-center ${
            isJupiter ? "bg-[#7C3AED]/20" : "bg-[#1E2235]"
          }`}
        >
          <span
            className={`text-[10px] font-bold ${
              isJupiter ? "text-[#7C3AED]" : "text-[#8892A4]"
            }`}
          >
            {isJupiter ? "J" : "Y"}
          </span>
        </span>
        <span
          className={`text-xs font-semibold uppercase tracking-wider ${
            isJupiter ? "text-[#A78BFA]" : "text-[#8892A4]"
          }`}
        >
          {isJupiter ? "Jupiter" : "You"}
        </span>
      </div>
      <p
        className={`text-xs leading-relaxed ${
          isJupiter ? "text-[#A78BFA]" : "text-[#8892A4]"
        }`}
      >
        {content}
      </p>
    </div>
  );
}

/* ─── Step circle ────────────────────────────────────────────────────────── */

function StepCircle({
  number,
  emoji,
  mobile,
}: {
  number: string;
  emoji: string;
  mobile?: boolean;
}) {
  return (
    <div
      className={`w-14 h-14 rounded-full bg-[#0F1117] border-2 border-[#7C3AED] flex flex-col items-center justify-center relative z-10 flex-shrink-0 ${
        mobile ? "" : "mb-6"
      }`}
    >
      <span className="text-[#7C3AED] text-[10px] font-bold tracking-wider leading-none">
        {number}
      </span>
      <span className="text-base leading-none mt-0.5">{emoji}</span>
    </div>
  );
}

/* ─── Sequence badge ─────────────────────────────────────────────────────── */

function SequenceBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 bg-[#7C3AED]/10 rounded-full px-3 py-1 mb-3">
      <span className="text-[#7C3AED] text-xs font-semibold">{label}</span>
    </span>
  );
}

/* ─── Main component ─────────────────────────────────────────────────────── */

export default function HowItWorks() {
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
      id="how-it-works"
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
            THE PROCESS
          </p>

          <h2
            className={[
              "text-white font-extrabold text-3xl md:text-5xl leading-tight mb-6",
              "transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            ].join(" ")}
            style={{ transitionDelay: "150ms" }}
          >
            From First Call to{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] bg-clip-text text-transparent">
              Live Revenue System
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
            Simple four step process. No preparation needed. First call is free
            with zero commitment. We do everything - you just review and approve.
          </p>
        </div>

        {/* ═══════════════════════════════════
            DESKTOP STEPS (hidden on mobile)
        ═══════════════════════════════════ */}
        <div className="hidden md:block relative">
          {/* Horizontal connecting line */}
          <div className="absolute top-[52px] left-[12.5%] right-[12.5%] h-[2px] bg-[#1E2235] z-0" />

          {/* Arrow heads at 33%, 66%, 100% of the line */}
          {["33%", "66%", "100%"].map((pos) => (
            <div
              key={pos}
              className="absolute top-[52px] z-0"
              style={{ left: `calc(12.5% + (75% * ${parseFloat(pos) / 100}))` }}
            >
              <div
                className="absolute top-1/2 -translate-y-1/2"
                style={{
                  width: 0,
                  height: 0,
                  borderTop: "5px solid transparent",
                  borderBottom: "5px solid transparent",
                  borderLeft: "8px solid #7C3AED",
                }}
              />
            </div>
          ))}

          {/* 4-column step grid */}
          <div className="relative grid grid-cols-4 gap-6 z-10">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className={[
                  "flex flex-col items-center text-center",
                  "transition-all duration-700",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8",
                ].join(" ")}
                style={{ transitionDelay: step.delay }}
              >
                <StepCircle number={step.number} emoji={step.emoji} />

                <SequenceBadge label={step.badge} />

                <h3 className="text-white font-bold text-base mb-3">
                  {step.title}
                </h3>
                <p className="text-[#8892A4] text-sm leading-relaxed mb-4">
                  {step.description}
                </p>

                <div className="flex flex-col gap-2 w-full text-left">
                  <RoleBox type="you" content={step.you.content} />
                  <RoleBox type="jupiter" content={step.jupiter.content} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════
            MOBILE STEPS (hidden on desktop)
        ═══════════════════════════════════ */}
        <div className="md:hidden relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-[#1E2235]" />

          <div className="flex flex-col gap-8">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className={[
                  "flex items-start gap-6 relative",
                  "transition-all duration-700",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8",
                ].join(" ")}
                style={{ transitionDelay: step.delay }}
              >
                <StepCircle number={step.number} emoji={step.emoji} mobile />

                <div className="flex-1 pb-2">
                  <SequenceBadge label={step.badge} />
                  <h3 className="text-white font-bold text-base mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#8892A4] text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <div className="flex flex-col gap-2">
                    <RoleBox type="you" content={step.you.content} />
                    <RoleBox type="jupiter" content={step.jupiter.content} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── REASSURANCE STRIP ── */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {REASSURANCE.map((card) => (
            <div
              key={card.title}
              className={[
                "flex items-start gap-3 bg-[#0F1117] border border-[#1E2235] rounded-xl p-4",
                "transition-all duration-700",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6",
              ].join(" ")}
              style={{ transitionDelay: card.delay }}
            >
              <span className="w-8 h-8 rounded-full bg-[#7C3AED]/10 flex items-center justify-center flex-shrink-0">
                <span className="text-[#7C3AED] text-sm">✓</span>
              </span>
              <div>
                <p className="text-white text-sm font-semibold">
                  {card.title}
                </p>
                <p className="text-[#8892A4] text-xs leading-relaxed mt-1">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── BOTTOM CTA ── */}
        <div
          className={[
            "mt-16 text-center",
            "transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          ].join(" ")}
          style={{ transitionDelay: "500ms" }}
        >
          <p className="text-[#8892A4] text-sm mb-6">
            Start with a free discovery call. No commitment. No pressure.
          </p>
          <a
            href="https://wa.me/919116955257"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            WhatsApp Us →
          </a>
          <a
            href="https://calendly.com/iampragnesh/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-[#8892A4] text-sm hover:text-white transition-colors"
          >
            Or book a call on Calendly →
          </a>
        </div>
      </div>
    </section>
  );
}
