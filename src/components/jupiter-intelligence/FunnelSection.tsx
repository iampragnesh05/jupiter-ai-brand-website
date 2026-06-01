"use client";

import { useEffect, useRef, useState } from "react";

export default function FunnelSection() {
  const [activeTab, setActiveTab] = useState(0);
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const columns = [
    {
      id: "ACQUISITION",
      icon: "👥",
      pill: "30% more subscribers/month",
      headerBg: "rgba(34,197,94,0.1)",
      itemBg: "rgba(34,197,94,0.06)",
      itemBorder: "rgba(34,197,94,0.2)",
      tools: ["Opt-in forms", "Spin-the-wheel gamification", "Countdown timers", "QR code widgets", "Welcome flow"]
    },
    {
      id: "ENGAGEMENT",
      icon: "📢",
      pill: "12.5X WhatsApp ROI",
      headerBg: "rgba(59,130,246,0.1)",
      itemBg: "rgba(59,130,246,0.06)",
      itemBorder: "rgba(59,130,246,0.2)",
      tools: ["Broadcast campaigns", "AI copywriter for campaigns", "WhatsApp catalog", "Smart segmentation", "Template library", "Chatbot"]
    },
    {
      id: "CONVERSION",
      icon: "🛒",
      pill: "54X cart recovery ROI",
      headerBg: "rgba(124,58,237,0.1)",
      itemBg: "rgba(124,58,237,0.06)",
      itemBorder: "rgba(124,58,237,0.2)",
      tools: ["Abandoned cart recovery", "Browse abandonment flows", "Scratch cards", "WhatsApp widgets", "COD to prepaid", "RTO reduction"]
    },
    {
      id: "RETENTION",
      icon: "❤️",
      pill: "40% higher retention",
      headerBg: "rgba(245,158,11,0.1)",
      itemBg: "rgba(245,158,11,0.06)",
      itemBorder: "rgba(245,158,11,0.2)",
      tools: ["Customer winback series", "Feedback + upsell flows", "Order delivery alerts", "Cross-sell recommendations", "Review collection", "Festive campaigns"]
    },
    {
      id: "SUPPORT",
      icon: "🎧",
      pill: "3,900+ queries automated",
      headerBg: "rgba(239,68,68,0.1)",
      itemBg: "rgba(239,68,68,0.06)",
      itemBorder: "rgba(239,68,68,0.2)",
      tools: ["Conversation panel", "AI chatbot", "Assignment rules + tags", "Quick replies", "Agent history", "Instagram DMs"]
    }
  ];

  return (
    <section ref={sectionRef} className="relative overflow-hidden pt-[120px] pb-[120px] max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 55% at 65% 45%, rgba(124,58,237,0.10) 0%, transparent 70%)",
        }}
      />
      
      <div className="relative z-10 text-center mb-12">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] mb-[12px]" style={{ color: "#A78BFA" }}>
          AUTOMATION FUNNEL
        </p>
        <h2 className="text-white font-extrabold text-3xl md:text-4xl leading-tight mb-4">
          Every Message and Flow <br className="hidden md:block"/> Built to Drive Revenue
        </h2>
        <p className="text-base max-w-[600px] mx-auto" style={{ color: "#8892A4", lineHeight: 1.75 }}>
          Across every stage of your customer&apos;s journey.
        </p>
      </div>

      <div 
        className="relative z-10 transition-all duration-700"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(24px)"
        }}
      >
        {/* Mobile Tabs */}
        <div className="flex overflow-x-auto gap-2 pb-4 mb-4 lg:hidden snap-x hide-scrollbar">
          {columns.map((col, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className="px-4 py-2 rounded-full whitespace-nowrap text-[0.8rem] font-bold tracking-wider snap-start shrink-0"
              style={{
                background: activeTab === idx ? col.headerBg : "rgba(19,22,32,0.8)",
                border: `1px solid ${activeTab === idx ? col.itemBorder : "rgba(124,58,237,0.2)"}`,
                color: activeTab === idx ? "white" : "#8892A4"
              }}
            >
              {col.icon} {col.id}
            </button>
          ))}
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {columns.map((col, idx) => (
            <div 
              key={idx} 
              className={`flex-col h-full ${activeTab === idx ? 'flex' : 'hidden lg:flex'}`}
            >
              {/* Header section */}
              <div 
                className="flex flex-col items-center p-4 rounded-t-xl border-b-0"
                style={{ background: col.headerBg, border: `1px solid ${col.itemBorder}`, borderBottom: "none" }}
              >
                <div className="text-2xl mb-2">{col.icon}</div>
                <div className="text-[0.75rem] font-bold text-white tracking-widest uppercase mb-3">{col.id}</div>
                <div 
                  className="text-center px-3 py-1 rounded-full text-[0.65rem] font-bold w-full"
                  style={{ background: "rgba(0,0,0,0.3)", color: "white" }}
                >
                  {col.pill}
                </div>
              </div>
              
              {/* Items section */}
              <div 
                className="flex-grow p-3 rounded-b-xl flex flex-col gap-2"
                style={{ background: col.itemBg, border: `1px solid ${col.itemBorder}`, borderTop: "none" }}
              >
                {col.tools.map((tool, i) => (
                  <div 
                    key={i}
                    className="px-3 py-2 text-[0.8rem] rounded-lg text-center"
                    style={{ background: "rgba(0,0,0,0.2)", color: "#C7D4F0" }}
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
