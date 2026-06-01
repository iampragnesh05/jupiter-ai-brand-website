"use client";

import { useState, useEffect, useRef } from "react";

/* ─── Types ─────────────────────────────────────────────────────────────── */

interface BulletItem {
  text: string;
}

interface StatRow {
  label: string;
  value: string;
}

interface FlowCard {
  emoji: string;
  title: string;
  badgeText: string;
  badgeCls: string;
  desc: string;
}

interface AutomationRow {
  label: string;
}

/* ─── Static data ────────────────────────────────────────────────────────── */

const TABS = [
  { label: "🏗️ Custom Store" },
  { label: "⚡ WhatsApp Flows" },
  { label: "🔍 Jupiter Rank" },
  { label: "📊 Shopify Flow" },
];

// Tab 0
const TAB0_BULLETS: BulletItem[] = [
  { text: "100% custom design - no Shopify themes" },
  { text: "PageSpeed 85+ with Core Web Vitals" },
  { text: "Indian payment stack - Razorpay, COD, UPI" },
  { text: "Mobile-first architecture for D2C discovery" },
];

const TAB0_STATS: StatRow[] = [
  { label: "Design approach", value: "100% Custom" },
  { label: "PageSpeed score", value: "85+ guaranteed" },
  { label: "Payment methods", value: "Razorpay, COD, UPI" },
  { label: "Template used", value: "None" },
  { label: "Mobile optimized", value: "Always" },
];

// Tab 1
const TAB1_BULLETS: BulletItem[] = [
  { text: "Abandoned cart recovery - 1 in 4 carts recovered" },
  { text: "COD to prepaid conversion - 25-30% fraud prevented" },
  { text: "Win-back campaigns - 40% higher retention" },
  { text: "Runs 24/7 - zero manual work after setup" },
];

const TAB1_FLOWS: FlowCard[] = [
  {
    emoji: "🛒",
    title: "Abandoned Cart Recovery",
    badgeText: "54X ROI",
    badgeCls: "bg-green-500/10 text-green-400",
    desc: "Customer exits without buying → WhatsApp sent at right time → 1 in 4 carts recovered",
  },
  {
    emoji: "💳",
    title: "COD to Prepaid",
    badgeText: "25-30% Fraud Stopped",
    badgeCls: "bg-blue-500/10 text-blue-400",
    desc: "COD order placed → WhatsApp nudge with incentive → Convert to secure prepaid payment",
  },
  {
    emoji: "❤️",
    title: "Win-back Campaign",
    badgeText: "40% Retention",
    badgeCls: "bg-purple-500/10 text-[#A78BFA]",
    desc: "No order in 30-60 days → Personalized WhatsApp message → Customer re-engaged automatically",
  },
];

// Tab 2
const TAB2_BULLETS: BulletItem[] = [
  { text: "AIO optimization for Google AI Overview" },
  { text: "LLMs.txt so ChatGPT finds your store" },
  { text: "Schema markup for rich search results" },
  { text: "Complete Tech SEO from day one" },
];

const TAB2_STATS: StatRow[] = [
  { label: "Google AI Overview", value: "Optimized ✓" },
  { label: "ChatGPT visibility", value: "LLMs.txt ✓" },
  { label: "Schema markup", value: "Complete ✓" },
  { label: "Tech SEO", value: "Full stack ✓" },
];

// Tab 3
const TAB3_BULLETS: BulletItem[] = [
  { text: "Inventory alerts - never run out of stock" },
  { text: "Order tagging - auto-organize every order" },
  { text: "Customer segmentation - built automatically" },
  { text: "Back-office automation - zero manual tasks" },
];

const TAB3_AUTOMATIONS: AutomationRow[] = [
  { label: "Inventory level alerts" },
  { label: "Low stock notifications" },
  { label: "Order auto-tagging" },
  { label: "Customer tier segmentation" },
  { label: "Fraud order flagging" },
  { label: "Reorder point triggers" },
];

/* ─── Sub-components ─────────────────────────────────────────────────────── */

function BulletList({ items }: { items: BulletItem[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.text} className="flex items-start gap-3 mb-3">
          <span className="w-5 h-5 rounded-full bg-[#7C3AED]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-[#7C3AED] text-xs">✓</span>
          </span>
          <span className="text-white text-sm">{item.text}</span>
        </li>
      ))}
    </ul>
  );
}

function LayerBadge({ content }: { content: string }) {
  return (
    <span className="inline-flex items-center gap-2 bg-[#7C3AED]/10 border border-[#7C3AED]/20 rounded-full px-3 py-1 mb-6">
      <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
      <span className="text-[#A78BFA] text-xs font-semibold uppercase tracking-widest">
        {content}
      </span>
    </span>
  );
}

function DiscoveryCTA() {
  return (
    <a
      href="https://calendly.com/iampragnesh/new-meeting"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-6 py-3 rounded-lg font-medium transition-colors text-sm"
    >
      Book Discovery Call →
    </a>
  );
}

function WithoutLine({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 mt-6 pt-6 border-t border-[#1E2235]">
      <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-1.5" />
      <p className="text-[#8892A4] text-sm">{text}</p>
    </div>
  );
}

function StatCard({ rows, footerText }: { rows: StatRow[]; footerText: string }) {
  return (
    <div
      className="bg-[#0F1117] border border-[#1E2235] rounded-xl p-6"
      style={{ boxShadow: "0 0 60px rgba(124,58,237,0.08)" }}
    >
      <p className="text-[#8892A4] text-xs font-semibold tracking-widest uppercase mb-6">
        What gets built
      </p>
      {rows.map((row, i) => (
        <div
          key={i}
          className="flex items-center justify-between py-3 border-b border-[#1E2235] last:border-0"
        >
          <span className="text-[#8892A4] text-sm">{row.label}</span>
          <span className="text-white text-sm font-medium">{row.value}</span>
        </div>
      ))}
      <div className="mt-6 bg-[#7C3AED]/10 border border-[#7C3AED]/20 rounded-lg p-4 text-center">
        <p className="text-[#A78BFA] text-sm font-medium">{footerText}</p>
      </div>
    </div>
  );
}

/* ─── Tab panels ─────────────────────────────────────────────────────────── */

function Tab0Content() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start animate-fadeInUp">
      {/* LEFT */}
      <div className="lg:col-span-3">
        <LayerBadge content="LAYER 1 - FOUNDATION" />
        <h3 className="text-white font-extrabold text-2xl md:text-3xl leading-tight mb-4">
          Custom Shopify Store Built for Indian Buyers
        </h3>
        <p className="text-[#8892A4] text-base leading-relaxed mb-6">
          Zero templates. Every store starts from scratch - custom designed around
          your brand, your products, and how Indian buyers actually shop.
          Mobile-first. Fast. Built to convert.
        </p>
        <BulletList items={TAB0_BULLETS} />
        <WithoutLine text="Without this: Customers don't trust your store. Low conversion rate. High bounce rate." />
        <div className="mt-8">
          <DiscoveryCTA />
        </div>
      </div>
      {/* RIGHT */}
      <div className="lg:col-span-2">
        <StatCard
          rows={TAB0_STATS}
          footerText="Every store is unique. No two Jupiter stores look the same."
        />
      </div>
    </div>
  );
}

function Tab1Content() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start animate-fadeInUp">
      {/* LEFT */}
      <div className="lg:col-span-3">
        <LayerBadge content="LAYER 2 - AUTOMATION" />
        <h3 className="text-white font-extrabold text-2xl md:text-3xl leading-tight mb-4">
          Three WhatsApp Flows That Recover Lost Revenue
        </h3>
        <p className="text-[#8892A4] text-base leading-relaxed mb-6">
          Built on Meta WhatsApp Cloud API. Three automated flows that run 24/7
          - recovering abandoned carts, converting COD orders to prepaid, and
          bringing customers back automatically.
        </p>
        <BulletList items={TAB1_BULLETS} />
        <WithoutLine text="Without this: Revenue bleeds daily. 67% of carts abandoned. COD fraud goes unchecked. Customers never return." />
        <div className="mt-8">
          <DiscoveryCTA />
        </div>
      </div>
      {/* RIGHT — flow cards */}
      <div className="lg:col-span-2 flex flex-col gap-0">
        {TAB1_FLOWS.map((flow) => (
          <div
            key={flow.title}
            className="mb-3 last:mb-0 bg-[#0F1117] border border-[#1E2235] rounded-xl p-4"
            style={{ boxShadow: "0 0 60px rgba(124,58,237,0.08)" }}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xl mb-1">{flow.emoji}</p>
                <p className="text-white text-sm font-semibold">{flow.title}</p>
              </div>
              <span
                className={`${flow.badgeCls} text-xs px-2 py-0.5 rounded-full`}
              >
                {flow.badgeText}
              </span>
            </div>
            <p className="text-[#8892A4] text-xs leading-relaxed mt-2">
              {flow.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Tab2Content() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start animate-fadeInUp">
      {/* LEFT */}
      <div className="lg:col-span-3">
        <LayerBadge content="LAYER 3 - VISIBILITY" />
        <h3 className="text-white font-extrabold text-2xl md:text-3xl leading-tight mb-4">
          Jupiter Rank AI SEO - Built Into Every Store
        </h3>
        <p className="text-[#8892A4] text-base leading-relaxed mb-6">
          Our own AI SEO tool included in every Jupiter Intelligence build.
          Google AI Overview and ChatGPT now recommend products directly. Stores
          without AIO optimization are invisible to the next generation of
          search.
        </p>
        <BulletList items={TAB2_BULLETS} />
        <WithoutLine text="Without this: Your store is invisible in AI search. Competitors who optimize now will own this channel." />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <DiscoveryCTA />
          <a
            href="https://jupiterrank.jupiter-ai.co"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-[#1E2235] hover:border-[#7C3AED] text-white px-6 py-3 rounded-lg font-medium transition-colors text-sm"
          >
            See Jupiter Rank Live →
          </a>
        </div>
      </div>
      {/* RIGHT */}
      <div className="lg:col-span-2">
        <div
          className="bg-[#0F1117] border border-[#1E2235] rounded-xl p-6"
          style={{ boxShadow: "0 0 60px rgba(124,58,237,0.08)" }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-10 rounded-lg bg-[#7C3AED]/10 flex items-center justify-center">
              <span className="text-[#7C3AED] text-lg">✦</span>
            </span>
            <span className="text-white font-bold text-base">Jupiter Rank</span>
            <span className="bg-green-500/10 text-green-400 text-xs px-2 py-0.5 rounded-full ml-auto">
              LIVE
            </span>
          </div>
          {/* Stat rows */}
          {TAB2_STATS.map((row, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-3 border-b border-[#1E2235] last:border-0"
            >
              <span className="text-[#8892A4] text-sm">{row.label}</span>
              <span className="text-white text-sm font-medium">{row.value}</span>
            </div>
          ))}
          {/* Footer note */}
          <div className="mt-6 bg-[#7C3AED]/10 border border-[#7C3AED]/20 rounded-lg p-4">
            <p className="text-[#A78BFA] text-xs leading-relaxed">
              Jupiter Rank is our own product - included in every build. No other
              Shopify developer offers this.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tab3Content() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start animate-fadeInUp">
      {/* LEFT */}
      <div className="lg:col-span-3">
        <LayerBadge content="LAYER 4 - INTELLIGENCE" />
        <h3 className="text-white font-extrabold text-2xl md:text-3xl leading-tight mb-4">
          Shopify Flow - Your Store Runs Itself
        </h3>
        <p className="text-[#8892A4] text-base leading-relaxed mb-6">
          Shopify Flow is free and built into every Shopify store - but most
          brands never configure it. We set it up completely so your store
          handles operations automatically without any manual work.
        </p>
        <BulletList items={TAB3_BULLETS} />
        <WithoutLine text="Without this: Your team handles everything manually. Time wasted on tasks a machine should do." />
        <div className="mt-8">
          <DiscoveryCTA />
        </div>
      </div>
      {/* RIGHT */}
      <div className="lg:col-span-2">
        <div
          className="bg-[#0F1117] border border-[#1E2235] rounded-xl p-6"
          style={{ boxShadow: "0 0 60px rgba(124,58,237,0.08)" }}
        >
          <p className="text-[#8892A4] text-xs font-semibold tracking-widest uppercase mb-6">
            What gets automated
          </p>
          {TAB3_AUTOMATIONS.map((row) => (
            <div
              key={row.label}
              className="flex items-center gap-3 py-2.5 border-b border-[#1E2235] last:border-0"
            >
              <div className="flex items-center gap-2 flex-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] flex-shrink-0" />
                <span className="text-white text-sm">{row.label}</span>
              </div>
              <span className="bg-[#7C3AED]/10 text-[#A78BFA] text-xs px-2 py-0.5 rounded-full">
                Automated
              </span>
            </div>
          ))}
          <div className="mt-6 bg-[#131620] border border-[#1E2235] rounded-lg p-4 text-center">
            <p className="text-[#8892A4] text-xs">
              Free with every Shopify store. We configure it. You benefit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const TAB_PANELS = [Tab0Content, Tab1Content, Tab2Content, Tab3Content];

/* ─── Main component ─────────────────────────────────────────────────────── */

export default function WhatYouGet() {
  const [activeTab, setActiveTab] = useState(0);
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

  const ActivePanel = TAB_PANELS[activeTab];

  return (
    <section id="system" ref={sectionRef} className="border-t border-[#1E2235]/50">
      <div className="py-20 md:py-28 max-w-[1100px] mx-auto px-6">

        {/* ── SECTION HEADER ── */}
        <div className="mb-12 text-center">
          <p
            className={[
              "text-[#7C3AED] text-xs font-semibold tracking-[0.12em] uppercase mb-4",
              "transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            ].join(" ")}
            style={{ transitionDelay: "0ms" }}
          >
            THE SYSTEM
          </p>

          <h2
            className={[
              "text-white font-extrabold text-3xl md:text-5xl leading-tight mb-6",
              "transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            ].join(" ")}
            style={{ transitionDelay: "150ms" }}
          >
            One Complete System.{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] bg-clip-text text-transparent">
              Four Layers. Everything Connected.
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
            Not a website with add-ons. A complete D2C revenue system built and
            handed to you.
          </p>
        </div>

        {/* ── TAB NAVIGATION ── */}
        <div
          className={[
            "transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          ].join(" ")}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 border-b border-[#1E2235] scrollbar-hide">
            {TABS.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(i)}
                className={
                  i === activeTab
                    ? "flex items-center gap-2 px-4 py-3 text-sm font-medium text-white border-b-2 border-[#7C3AED] whitespace-nowrap transition-all duration-300 -mb-[2px]"
                    : "flex items-center gap-2 px-4 py-3 text-sm font-medium text-[#8892A4] border-b-2 border-transparent whitespace-nowrap transition-all duration-300 hover:text-white -mb-[2px]"
                }
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Mobile dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-4 md:hidden mb-8">
            {TABS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={
                  i === activeTab
                    ? "w-2 h-2 rounded-full bg-[#7C3AED]"
                    : "w-1.5 h-1.5 rounded-full bg-[#1E2235]"
                }
                aria-label={`Go to tab ${i + 1}`}
              />
            ))}
          </div>

          {/* ── TAB CONTENT PANEL ── */}
          {/* key={activeTab} forces re-mount → triggers .animate-fadeInUp */}
          <div key={activeTab}>
            <ActivePanel />
          </div>
        </div>
      </div>
    </section>
  );
}
