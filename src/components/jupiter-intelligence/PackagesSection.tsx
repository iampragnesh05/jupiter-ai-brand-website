"use client";

import { useState, useEffect, useRef } from "react";

/* ─── Helper ─────────────────────────────────────────────────────────────── */

const formatINR = (num: number): string => {
  if (num >= 100000) return "₹" + (num / 100000).toFixed(1) + "L";
  if (num >= 1000) return "₹" + (num / 1000).toFixed(1) + "k";
  return "₹" + num.toString();
};

/* ─── Package data ───────────────────────────────────────────────────────── */

const PACKAGES = [
  {
    tier: "FOUNDATION",
    name: "Jupiter Core",
    bestFor: "Brands starting fresh or rebuilding their store with a solid foundation",
    featured: false,
    features: [
      "Custom Shopify store build",
      "Zero templates - 100% custom",
      "Mobile-first design",
      "Indian payment stack - Razorpay, COD, UPI",
      "PageSpeed 85+ guaranteed",
      "Jupiter Rank AI SEO included",
      "7 days post-launch support",
    ],
    delay: "100ms",
  },
  {
    tier: "GROWTH",
    name: "Jupiter Growth",
    bestFor: "Growing brands ready for WhatsApp automation and revenue recovery",
    featured: true,
    features: [
      "Everything in Jupiter Core",
      "Abandoned cart WhatsApp flow",
      "COD to prepaid conversion flow",
      "Win-back campaign flow",
      "Shopify Flow configuration",
      "Meta WhatsApp Cloud API setup",
      "All flows tested before handover",
      "Complete automation documentation",
      "Flow performance review",
      "14 days post-launch support",
    ],
    delay: "250ms",
  },
  {
    tier: "PREMIUM",
    name: "Jupiter Intelligence",
    bestFor: "Established brands wanting the complete custom AI revenue system",
    featured: false,
    features: [
      "Everything in Jupiter Growth",
      "Advanced store customization",
      "Complete Shopify Flow setup",
      "Jupiter Rank - 1 month included",
      "Custom AI chatbot training",
      "Full CRO optimization layer",
      "Industry-specific configuration",
      "Weekly revenue intelligence",
      "30 days post-launch support",
      "Direct WhatsApp access",
    ],
    delay: "400ms",
  },
];

/* ─── Preset button ──────────────────────────────────────────────────────── */

function PresetBtn({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={[
        "border rounded-lg py-2 text-xs font-medium transition-all duration-200 cursor-pointer",
        active
          ? "bg-[#7C3AED] text-white border-[#7C3AED]"
          : "bg-[#131620] text-[#8892A4] border-[#1E2235] hover:border-[#7C3AED]/50 hover:text-white",
      ].join(" ")}
    >
      {label}
    </button>
  );
}

/* ─── Main Component ─────────────────────────────────────────────────────── */

export default function PackagesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  /* Calculator state */
  const [monthlyRevenue, setMonthlyRevenue] = useState(100000);
  const [customRevenue, setCustomRevenue] = useState("");
  const [aov, setAov] = useState(1000);
  const [codPercent, setCodPercent] = useState(50);

  /* Calculated values */
  const cartLoss = Math.round(monthlyRevenue * 0.67 * 0.15);
  const codLoss = Math.round(monthlyRevenue * (codPercent / 100) * 0.275);
  const winbackOpportunity = Math.round(monthlyRevenue * 0.7 * 0.2);
  const totalMonthlyLeak = cartLoss + codLoss + winbackOpportunity;
  const annualLeak = totalMonthlyLeak * 12;

  /* Intersection observer */
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

  const revenuePresets = [
    { label: "₹50k", value: 50000 },
    { label: "₹1L", value: 100000 },
    { label: "₹2L", value: 200000 },
    { label: "₹5L", value: 500000 },
    { label: "₹10L+", value: 1000000 },
  ];

  const aovPresets = [
    { label: "₹500", value: 500 },
    { label: "₹1,000", value: 1000 },
    { label: "₹2,000", value: 2000 },
    { label: "₹5,000+", value: 5000 },
  ];

  const codPresets = [
    { label: "Less than 30%", value: 20 },
    { label: "30–60%", value: 50 },
    { label: "60%+", value: 70 },
  ];

  return (
    <section
      id="packages"
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
            YOUR INVESTMENT
          </p>

          <h2
            className={[
              "text-white font-extrabold text-3xl md:text-5xl leading-tight mb-6",
              "transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            ].join(" ")}
            style={{ transitionDelay: "150ms" }}
          >
            See How Much Revenue{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] bg-clip-text text-transparent">
              You&apos;re Losing Every Month
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
            Enter your store details below. See exactly where your revenue is
            leaking - and what Jupiter Intelligence recovers.
          </p>
        </div>

        {/* ── ROI CALCULATOR ── */}
        <div
          className={[
            "bg-[#0F1117] border border-[#1E2235] rounded-xl overflow-hidden mb-16",
            "transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          ].join(" ")}
          style={{
            boxShadow: "0 0 80px rgba(124,58,237,0.10)",
            transitionDelay: "200ms",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* ── LEFT — INPUTS ── */}
            <div className="p-8 border-b lg:border-b-0 lg:border-r border-[#1E2235]">
              <h3 className="text-white font-bold text-lg mb-8">
                Tell us about your store
              </h3>

              {/* Input 1 — Monthly Revenue */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[#8892A4] text-sm font-medium">
                    Monthly Revenue
                  </span>
                  <span className="text-[#7C3AED] text-sm font-bold">
                    {formatINR(monthlyRevenue)}
                  </span>
                </div>

                {/* Desktop: 5 cols | Mobile: 3 cols */}
                <div className="grid grid-cols-3 md:grid-cols-5 gap-2 mb-3">
                  {revenuePresets.map((p) => (
                    <PresetBtn
                      key={p.value}
                      label={p.label}
                      active={monthlyRevenue === p.value && customRevenue === ""}
                      onClick={() => {
                        setCustomRevenue("");
                        setMonthlyRevenue(p.value);
                      }}
                    />
                  ))}
                </div>

                <input
                  type="number"
                  value={customRevenue}
                  onChange={(e) => {
                    const val = e.target.value;
                    setCustomRevenue(val);
                    const parsed = parseInt(val);
                    if (!isNaN(parsed) && parsed > 0) {
                      setMonthlyRevenue(parsed);
                    }
                  }}
                  placeholder="Or enter exact amount..."
                  className="w-full bg-[#131620] border border-[#1E2235] rounded-lg px-4 py-2.5 text-white text-sm placeholder-[#8892A4] focus:border-[#7C3AED] focus:outline-none transition-colors"
                />
              </div>

              {/* Input 2 — Average Order Value */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[#8892A4] text-sm font-medium">
                    Average Order Value
                  </span>
                  <span className="text-[#7C3AED] text-sm font-bold">
                    {formatINR(aov)}
                  </span>
                </div>

                {/* Desktop: 4 cols | Mobile: 2 cols */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {aovPresets.map((p) => (
                    <PresetBtn
                      key={p.value}
                      label={p.label}
                      active={aov === p.value}
                      onClick={() => setAov(p.value)}
                    />
                  ))}
                </div>
                <p className="text-[#8892A4] text-xs mt-2">
                  Used to estimate order count
                </p>
              </div>

              {/* Input 3 — COD Orders */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[#8892A4] text-sm font-medium">
                    COD Orders
                  </span>
                  <span className="text-[#7C3AED] text-sm font-bold">
                    {codPercent}% of orders
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {codPresets.map((p) => (
                    <PresetBtn
                      key={p.value}
                      label={p.label}
                      active={codPercent === p.value}
                      onClick={() => setCodPercent(p.value)}
                    />
                  ))}
                </div>
                <p className="text-[#8892A4] text-xs mt-2">
                  Higher COD = higher fraud risk
                </p>
              </div>
            </div>

            {/* ── RIGHT — OUTPUT ── */}
            <div className="p-8 bg-[#0D0F1C]">
              <div className="flex items-center gap-2 mb-8">
                <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                <h3 className="text-white font-bold text-lg">
                  Your Monthly Revenue Leak
                </h3>
              </div>

              {/* Loss rows */}
              {[
                {
                  emoji: "🛒",
                  title: "Abandoned Carts",
                  subtitle: "67% abandon · 15% recoverable",
                  amount: cartLoss,
                },
                {
                  emoji: "💳",
                  title: "COD Fraud & RTO",
                  subtitle: "27.5% avg fraud rate",
                  amount: codLoss,
                },
                {
                  emoji: "❤️",
                  title: "Lost Customers",
                  subtitle: "70% never return · 20% recoverable",
                  amount: winbackOpportunity,
                },
              ].map((row) => (
                <div
                  key={row.title}
                  className="flex items-center justify-between py-4 border-b border-[#1E2235] last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{row.emoji}</span>
                    <div>
                      <p className="text-white text-sm font-medium">
                        {row.title}
                      </p>
                      <p className="text-[#8892A4] text-xs mt-0.5">
                        {row.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-red-400 text-lg font-bold">
                      {formatINR(row.amount)}
                    </p>
                    <p className="text-[#8892A4] text-xs mt-0.5">/month</p>
                  </div>
                </div>
              ))}

              {/* Total box */}
              <div className="mt-6 bg-[#131620] border border-[#1E2235] rounded-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[#8892A4] text-sm">
                    Total monthly leak
                  </span>
                  <span className="text-red-400 text-2xl font-extrabold">
                    {formatINR(totalMonthlyLeak)}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-[#1E2235]">
                  <span className="text-[#8892A4] text-sm">
                    That&apos;s every year
                  </span>
                  <span className="text-red-400/70 text-lg font-bold">
                    {formatINR(annualLeak)} annual leak
                  </span>
                </div>
              </div>

              {/* Solution text */}
              <div className="mt-6 bg-[#7C3AED]/10 border border-[#7C3AED]/20 rounded-xl p-4">
                <p className="text-[#A78BFA] text-sm leading-relaxed text-center">
                  Jupiter Intelligence fixes all three of these revenue leaks -
                  custom built for your store.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-4 w-full">
                <a
                  href="https://wa.me/919116955257"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white py-3 rounded-lg font-medium transition-colors text-sm text-center block"
                >
                  WhatsApp Us to Discuss →
                </a>
              </div>

              {/* Disclaimer */}
              <p className="mt-4 text-center text-[#8892A4] text-xs leading-relaxed">
                Estimates based on Indian D2C industry benchmarks. Actual
                results vary by brand, category and current setup.
              </p>
            </div>
          </div>
        </div>

        {/* ── PACKAGES HEADER ── */}
        <div className="text-center mb-12 mt-4">
          <p
            className={[
              "text-[#7C3AED] text-xs font-semibold tracking-[0.12em] uppercase mb-4",
              "transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            ].join(" ")}
            style={{ transitionDelay: "100ms" }}
          >
            SCOPE
          </p>

          <h3
            className={[
              "text-white font-extrabold text-2xl md:text-4xl leading-tight mb-4",
              "transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            ].join(" ")}
            style={{ transitionDelay: "200ms" }}
          >
            Built Around{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] bg-clip-text text-transparent">
              Your Requirements
            </span>
          </h3>

          <p
            className={[
              "text-[#8892A4] text-base leading-relaxed",
              "transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            ].join(" ")}
            style={{ transitionDelay: "300ms" }}
          >
            Every scope confirmed on a free 30-minute discovery call - no
            commitment, no pressure.
          </p>
        </div>

        {/* ── PACKAGE CARDS ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.tier}
              className={[
                "relative rounded-xl p-6 transition-all duration-700",
                pkg.featured
                  ? "bg-[#0F1117] border-2 border-[#7C3AED]"
                  : "bg-[#0F1117] border border-[#1E2235] hover:border-[#7C3AED]/30 transition-colors duration-300",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              ].join(" ")}
              style={{
                boxShadow: pkg.featured
                  ? "0 0 80px rgba(124,58,237,0.15)"
                  : undefined,
                transitionDelay: pkg.delay,
              }}
            >
              {/* Featured badge */}
              {pkg.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#7C3AED] text-white text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Tier label */}
              <p className="text-[#7C3AED] text-xs font-semibold tracking-widest uppercase mb-2">
                {pkg.tier}
              </p>

              {/* Package name */}
              <h4 className="text-white font-extrabold text-xl mb-1">
                {pkg.name}
              </h4>

              {/* Best for */}
              <p className="text-[#8892A4] text-xs leading-relaxed mb-6">
                {pkg.bestFor}
              </p>

              {/* Divider */}
              <div className="border-t border-[#1E2235] mb-6" />

              {/* Features list */}
              <ul className="flex flex-col gap-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#7C3AED]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#7C3AED] text-xs">✓</span>
                    </span>
                    <span className="text-[#8892A4] text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="https://wa.me/919116955257"
                target="_blank"
                rel="noreferrer"
                className={[
                  "w-full py-3 rounded-lg font-medium transition-colors text-sm text-center block",
                  pkg.featured
                    ? "bg-[#7C3AED] hover:bg-[#6D28D9] text-white"
                    : "border border-[#1E2235] hover:border-[#7C3AED] text-white",
                ].join(" ")}
              >
                Discuss This Scope →
              </a>
            </div>
          ))}
        </div>

        {/* Note below packages */}
        <p className="text-center mt-8 text-[#8892A4] text-sm">
          Every scope is discussed on a free 30-minute discovery call - no
          commitment, no pressure.
        </p>
      </div>
    </section>
  );
}
