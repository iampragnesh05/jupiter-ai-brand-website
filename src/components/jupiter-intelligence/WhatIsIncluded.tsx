"use client"

export default function WhatIsIncluded() {
  const cards = [
    {
      icon: "🏗️",
      title: "Custom Shopify Build",
      desc: "Zero templates. Full custom design optimized for Indian e-commerce buyers. Mobile-first. PageSpeed 85+ guaranteed."
    },
    {
      icon: "🤖",
      title: "Jupiter Chat",
      desc: "AI assistant trained on your catalog. Handles recommendations, size queries, COD confirmation and WhatsApp handoff 24/7."
    },
    {
      icon: "⚡",
      title: "Automation Suite",
      desc: "WhatsApp order notifications, abandoned cart recovery, festive campaign triggers and re-engagement flows. All automated."
    },
    {
      icon: "🔍",
      title: "AIO + Tech SEO",
      desc: "Schema markup, LLMs.txt, Core Web Vitals, Technical SEO. Built to appear in Google AI Overview and ChatGPT results."
    },
    {
      icon: "📊",
      title: "Marketing Automation",
      desc: "GSC + GA4 from Day 1. Email sequences, WhatsApp broadcasts and festive calendar automation built in."
    },
    {
      icon: "🎯",
      title: "Jupiter Rank",
      desc: "Your own Jupiter Rank — weekly AI revenue intelligence. 3 prioritized tasks every Monday with real ₹ impact shown."
    }
  ];

  return (
    <section id="whats-included" className="bg-[#0F1117] py-20 md:py-28 border-t border-[#1E2235]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#7C3AED] text-xs font-semibold tracking-[0.12em] uppercase mb-4">WHAT'S INCLUDED</p>
          <h2 className="text-white font-extrabold text-3xl md:text-5xl leading-tight mb-6">Every Engagement Includes</h2>
          <p className="text-[#8892A4] text-base md:text-lg leading-relaxed">
            Six layers of intelligence. Built in — not bolted on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <div key={i} className="bg-[#08090A] border border-[#1E2235] rounded-xl p-6 hover:border-[rgba(124,58,237,0.4)] transition-all duration-200">
              <div className="bg-[rgba(124,58,237,0.1)] rounded-lg p-2 w-10 h-10 flex items-center justify-center text-lg mb-4">
                {card.icon}
              </div>
              <h3 className="text-white font-semibold text-base mb-2">{card.title}</h3>
              <p className="text-[#8892A4] text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[rgba(124,58,237,0.05)] border border-[rgba(124,58,237,0.2)] rounded-xl p-5 mt-8 text-center">
          <p className="text-[#A78BFA] font-semibold">Jupiter Rank included free for 1 month with every engagement.</p>
        </div>
      </div>
    </section>
  );
}
