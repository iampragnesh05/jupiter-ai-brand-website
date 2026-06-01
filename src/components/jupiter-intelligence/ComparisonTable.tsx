"use client";

import { useState, useEffect, useRef } from "react";

/* ─── Types ──────────────────────────────────────────────────────────────── */

type RowType = "red" | "yellow" | "green";

interface ComparisonRow {
  type: RowType;
  title: string;
  detail: string;
}

interface ComparisonCard {
  icon: string;
  title: string;
  subtitle: string;
  rows: ComparisonRow[];
  footer: string;
  featured: boolean;
  delay: string;
}

/* ─── Card data ──────────────────────────────────────────────────────────── */

const CARDS: ComparisonCard[] = [
  {
    icon: "🏢",
    title: "Agency",
    subtitle: "Traditional Shopify agency",
    featured: false,
    delay: "100ms",
    footer: "High cost. Slow delivery. No automation.",
    rows: [
      { type: "red", title: "Template-based builds", detail: "Your store looks like thousands of others" },
      { type: "red", title: "6-10 week delivery", detail: "Slow start means slow revenue" },
      { type: "red", title: "No automation included", detail: "You pay extra or set it up yourself" },
      { type: "red", title: "No AI SEO layer", detail: "Invisible in Google AI Overview from day one" },
      { type: "red", title: "Post-launch = paid retainer", detail: "The costs never stop after handover" },
      { type: "red", title: "Rarely understands India", detail: "Generic solutions built for Western markets" },
      { type: "red", title: "Multiple team handoffs", detail: "No single point of contact for your project" },
      { type: "red", title: "Not done for you", detail: "You manage vendors, timelines and coordination" },
    ],
  },
  {
    icon: "👤",
    title: "Freelancer",
    subtitle: "Fiverr or Upwork developer",
    featured: false,
    delay: "250ms",
    footer: "Unpredictable. No system. No support.",
    rows: [
      { type: "yellow", title: "Sometimes custom", detail: "Quality varies wildly project to project" },
      { type: "yellow", title: "3-6 weeks typical", detail: "Depends on workload and communication" },
      { type: "red", title: "No automation", detail: "Store only - revenue system not included" },
      { type: "red", title: "No AI SEO", detail: "SEO knowledge rarely up to date" },
      { type: "red", title: "Disappears after launch", detail: "No post-launch support or accountability" },
      { type: "yellow", title: "Indian market: hit or miss", detail: "Depends entirely on individual freelancer" },
      { type: "red", title: "No system thinking", detail: "Builds pages, not revenue infrastructure" },
      { type: "red", title: "Not done for you", detail: "You manage the entire project yourself" },
    ],
  },
  {
    icon: "✦",
    title: "Jupiter Intelligence",
    subtitle: "Complete done-for-you system",
    featured: true,
    delay: "400ms",
    footer: "",
    rows: [
      { type: "green", title: "100% custom always", detail: "Zero templates - built around your brand" },
      { type: "green", title: "Scope confirmed upfront", detail: "Timeline locked on discovery call" },
      { type: "green", title: "Complete automation stack", detail: "3 WhatsApp flows live before handover" },
      { type: "green", title: "Jupiter Rank included", detail: "AI SEO built in - no extra cost" },
      { type: "green", title: "Post-launch support included", detail: "We don't disappear after launch" },
      { type: "green", title: "Built for Indian D2C", detail: "Indian payments, Indian buyers, Indian market" },
      { type: "green", title: "Single point of contact", detail: "Direct WhatsApp access throughout" },
      { type: "green", title: "Completely done for you", detail: "You review and approve - we handle everything else" },
    ],
  },
];

const TRUST_ITEMS = [
  "100+ Stores Built",
  "Indian Brands Only",
  "Done For You",
  "Custom Every Time",
];

/* ─── Row icon ───────────────────────────────────────────────────────────── */

function RowIcon({ type }: { type: RowType }) {
  if (type === "green") {
    return (
      <span className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
        <span className="text-green-400 text-xs">✓</span>
      </span>
    );
  }
  if (type === "yellow") {
    return (
      <span className="w-5 h-5 rounded-full bg-yellow-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
        <span className="text-yellow-400 text-xs">⚠</span>
      </span>
    );
  }
  return (
    <span className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
      <span className="text-red-400 text-xs">✕</span>
    </span>
  );
}

/* ─── Comparison card ────────────────────────────────────────────────────── */

function Card({
  card,
  isVisible,
}: {
  card: ComparisonCard;
  isVisible: boolean;
}) {
  const isJupiter = card.featured;

  return (
    <div
      className={[
        "relative transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
      ].join(" ")}
      style={{ transitionDelay: card.delay }}
    >
      {/* Featured badge */}
      {isJupiter && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <span className="bg-[#7C3AED] text-white text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap">
            RECOMMENDED
          </span>
        </div>
      )}

      {/* Card */}
      <div
        className={[
          "rounded-xl overflow-hidden",
          isJupiter
            ? "bg-[#0F1117] border-2 border-[#7C3AED]"
            : "bg-[#0F1117] border border-[#1E2235] opacity-90",
        ].join(" ")}
        style={
          isJupiter
            ? { boxShadow: "0 0 80px rgba(124,58,237,0.20)" }
            : undefined
        }
      >
        {/* Header */}
        <div
          className={[
            "px-6 py-5",
            isJupiter
              ? "border-b border-[#7C3AED]/20 bg-[#7C3AED]/5"
              : "border-b border-[#1E2235]",
          ].join(" ")}
        >
          <span
            className={[
              "w-10 h-10 rounded-lg flex items-center justify-center mb-3",
              isJupiter ? "bg-[#7C3AED]/20" : "bg-[#1E2235]",
            ].join(" ")}
          >
            <span
              className={`text-lg ${isJupiter ? "text-[#7C3AED]" : "text-[#8892A4]"}`}
            >
              {card.icon}
            </span>
          </span>
          <p className="text-white font-bold text-lg mb-1">{card.title}</p>
          <p
            className={`text-sm ${isJupiter ? "text-[#A78BFA]" : "text-[#8892A4]"}`}
          >
            {card.subtitle}
          </p>
        </div>

        {/* Body */}
        <div className="p-6 flex flex-col gap-5">
          {card.rows.map((row, i) => (
            <div key={i} className="flex items-start gap-3">
              <RowIcon type={row.type} />
              <div>
                <p className="text-white text-sm font-medium">{row.title}</p>
                <p
                  className={`text-xs leading-relaxed mt-0.5 ${
                    isJupiter ? "text-[#A78BFA]" : "text-[#8892A4]"
                  }`}
                >
                  {row.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          className={[
            "px-6 py-4",
            isJupiter
              ? "border-t border-[#7C3AED]/20 bg-[#7C3AED]/5"
              : "border-t border-[#1E2235] bg-[#0D0F1C]",
          ].join(" ")}
        >
          {isJupiter ? (
            <a
              href="https://wa.me/919116955257"
              target="_blank"
              rel="noreferrer"
              className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white py-2.5 rounded-lg font-medium transition-colors text-sm text-center block"
            >
              WhatsApp Us →
            </a>
          ) : (
            <p className="text-[#8892A4] text-xs text-center">{card.footer}</p>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────────────────── */

export default function ComparisonTable() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="comparison"
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
            THE DIFFERENCE
          </p>

          <h2
            className={[
              "text-white font-extrabold text-3xl md:text-5xl leading-tight mb-6",
              "transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            ].join(" ")}
            style={{ transitionDelay: "150ms" }}
          >
            Done For You.{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] bg-clip-text text-transparent">
              Not Another Vendor.
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
            Other options give you a store and wish you luck. Jupiter
            Intelligence builds your complete revenue system and stays with you
            after launch.
          </p>
        </div>

        {/* ── 3 COMPARISON CARDS ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {CARDS.map((card) => (
            <Card key={card.title} card={card} isVisible={isVisible} />
          ))}
        </div>

        {/* ── TRUST BAR ── */}
        <div
          className={[
            "mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3",
            "transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          ].join(" ")}
          style={{ transitionDelay: "500ms" }}
        >
          {TRUST_ITEMS.map((item, i) => (
            <span key={item} className="flex items-center gap-x-6">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                <span className="text-[#8892A4] text-sm">{item}</span>
              </span>
              {i < TRUST_ITEMS.length - 1 && (
                <span className="text-[#1E2235] hidden sm:block">·</span>
              )}
            </span>
          ))}
        </div>

        {/* ── QUOTE BLOCK ── */}
        <div
          className={[
            "mt-16 relative",
            "transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          ].join(" ")}
          style={{ transitionDelay: "300ms" }}
        >
          <div
            className="bg-[#0F1117] border border-[#1E2235] rounded-xl p-8 md:p-12"
            style={{ boxShadow: "0 0 80px rgba(124,58,237,0.08)" }}
          >
            {/* Decorative quote mark */}
            <span className="absolute top-6 left-8 text-[#7C3AED]/20 text-8xl font-serif leading-none pointer-events-none select-none">
              &ldquo;
            </span>

            {/* Quote text */}
            <p className="relative z-10 text-white text-base md:text-xl font-medium leading-relaxed mb-6 max-w-3xl mx-auto text-center">
              Most Indian D2C brands spend ₹30-50k on a Shopify store and get a
              template with no automation. Six months later they&apos;re paying
              an agency retainer to fix what should have been built right the
              first time.
            </p>

            {/* Attribution */}
            <div className="flex items-center justify-center gap-3">
              <span className="w-8 h-[1px] bg-[#7C3AED]" />
              <span className="text-[#A78BFA] text-sm font-medium">
                Jupiter AI
              </span>
              <span className="w-8 h-[1px] bg-[#7C3AED]" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
