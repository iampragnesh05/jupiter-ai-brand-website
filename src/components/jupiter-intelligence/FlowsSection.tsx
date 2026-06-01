"use client";

import { useEffect, useRef, useState } from "react";

export default function FlowsSection() {
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

  const flows = [
    {
      title: "FLOW 1 — Abandoned Cart Recovery",
      icon: "🛒",
      stat: "1 in 4 carts recovered",
      desc: "Personalized WhatsApp reminders with smart timing. Recover shoppers who were one nudge away from buying."
    },
    {
      title: "FLOW 2 — Browse Abandonment",
      icon: "📱",
      stat: "Recover lost shoppers",
      desc: "Customer views product but doesn't add to cart. Automated personalized reminders re-engage at the right moment."
    },
    {
      title: "FLOW 3 — COD to Prepaid",
      icon: "💳",
      stat: "25-30% fraud prevented",
      desc: "Convert risky COD orders into secure prepaid payments. WhatsApp nudge with discount sent automatically after order."
    },
    {
      title: "FLOW 4 — RTO Reduction",
      icon: "📦",
      stat: "30% RTO risk reduced",
      desc: "Automated delivery confirmation before dispatch. Prevent fraudulent orders and improve delivery success."
    },
    {
      title: "FLOW 5 — Review Collection",
      icon: "⭐",
      stat: "3X more reviews",
      desc: "Automated feedback flows after delivery. Happy customers get a reward. Brands drive 50% higher conversions."
    },
    {
      title: "FLOW 6 — Chat to Checkout",
      icon: "💬",
      stat: "3,900+ queries/month",
      desc: "From product browsing to WhatsApp catalog to payment. Customers complete purchases entirely inside the conversation."
    },
    {
      title: "FLOW 7 — Instagram DM Automation",
      icon: "📸",
      stat: "30 DMs answered/day",
      desc: "Reply to DMs, stories and comments 24/7. Never miss a lead. 4:43 mins average response time."
    },
    {
      title: "FLOW 8 — AI Voice Bots",
      icon: "🎙️",
      stat: "COMING SOON",
      isBadge: true,
      desc: "Recover missed checkouts with AI voice calls. Sound natural while automating follow-ups at scale."
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
      
      <div className="relative z-10 text-center mb-16">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] mb-[12px]" style={{ color: "#A78BFA" }}>
          REVENUE FLOWS
        </p>
        <h2 className="text-white font-extrabold text-3xl md:text-4xl leading-tight mb-4">
          Every Customer Journey.<br className="hidden md:block"/> Automated and Optimized.
        </h2>
        <p className="text-base max-w-[600px] mx-auto" style={{ color: "#8892A4", lineHeight: 1.75 }}>
          8 flows that recover lost revenue at every stage.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {flows.map((flow, idx) => (
          <div 
            key={idx}
            className="flex flex-col p-6 transition-all duration-300"
            style={{
              background: "rgba(19,22,32,0.70)",
              border: "1px solid rgba(124,58,237,0.18)",
              borderRadius: "16px",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
              transitionDelay: `${idx * 100}ms`
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.40)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.18)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[2rem]">{flow.icon}</span>
            </div>
            <div className="text-[0.75rem] font-bold tracking-wider text-[#A78BFA] uppercase mb-1">{flow.title.split('—')[0].trim()}</div>
            <h3 className="text-white font-bold text-lg mb-3 leading-tight">{flow.title.split('—')[1].trim()}</h3>
            
            {flow.isBadge ? (
              <div 
                className="inline-block self-start px-3 py-1 text-[0.7rem] font-bold rounded-full mb-3 tracking-widest"
                style={{ background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.28)", color: "#A78BFA" }}
              >
                {flow.stat}
              </div>
            ) : (
              <div className="text-[1rem] font-bold mb-3" style={{ color: "#A78BFA" }}>
                {flow.stat}
              </div>
            )}
            
            <p className="text-[0.85rem] mt-auto" style={{ color: "#8892A4", lineHeight: 1.6 }}>
              {flow.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
