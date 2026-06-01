"use client";

import { useEffect, useRef, useState } from "react";

export default function SystemSection() {
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

  const layers = [
    {
      title: "Layer 1 — 🏗️ Custom Shopify Build",
      tag: "FOUNDATION",
      accent: "#7C3AED",
      desc: "Zero templates. Custom design built for Indian e-commerce buyers. Mobile-first. PageSpeed 85+ guaranteed.",
      stats: ["100% Custom", "PageSpeed 85+"]
    },
    {
      title: "Layer 2 — 🔍 Traffic Intelligence",
      tag: "VISIBILITY",
      accent: "#3B82F6",
      desc: "AIO optimization. LLMs.txt. Schema markup. Complete Tech SEO. Your store appears in Google AI Overview and ChatGPT recommendations.",
      stats: ["AIO Ready", "LLMs.txt"]
    },
    {
      title: "Layer 3 — ⚡ WhatsApp Revenue System",
      tag: "AUTOMATION",
      accent: "#22C55E",
      desc: "Abandoned cart. Browse abandonment. COD to prepaid. Win-back. Festive campaigns. All configured and live.",
      stats: ["54X ROI", "1 in 4 recovered"]
    },
    {
      title: "Layer 4 — 🎯 Conversion Layer",
      tag: "CONVERSION",
      accent: "#F59E0B",
      desc: "Spin-to-win. Exit intent. Scratch cards. Countdown timers. WhatsApp opt-in widgets.",
      stats: ["43% scratch card CTR"]
    },
    {
      title: "Layer 5 — 🤖 AI Chatbot",
      tag: "SUPPORT",
      accent: "#A78BFA",
      desc: "AI assistant trained on your catalog. Size guidance. COD confirmation. WhatsApp handoff 24/7.",
      stats: ["3,900+ queries/month"]
    },
    {
      title: "Layer 6 — 📊 Weekly AI Intelligence",
      tag: "INTELLIGENCE",
      accent: "#7C3AED",
      desc: "Every week, Jupiter AI analyzes your store and delivers prioritized revenue recommendations specific to your business.",
      stats: ["Every Monday", "₹ impact shown"]
    }
  ];

  return (
    <section id="system-section" ref={sectionRef} className="relative overflow-hidden pt-[120px] pb-[120px] max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 55% at 65% 45%, rgba(124,58,237,0.10) 0%, transparent 70%)",
        }}
      />
      
      <div className="relative z-10 text-center mb-16">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] mb-[12px]" style={{ color: "#A78BFA" }}>
          THE SYSTEM
        </p>
        <h2 className="text-white font-extrabold text-3xl md:text-4xl leading-tight mb-4">
          One Complete Revenue System.<br className="hidden md:block"/> Six Layers. Everything Connected.
        </h2>
        <p className="text-base max-w-[600px] mx-auto" style={{ color: "#8892A4", lineHeight: 1.75 }}>
          Not a website with add-ons. A complete D2C operating system built and handed to you.
        </p>
      </div>

      <div className="relative z-10 mx-auto max-w-[800px] pl-4 md:pl-0">
        
        {/* Dashed Connecting Line */}
        <div 
          className="absolute left-8 md:left-[32px] top-8 bottom-8 w-[2px] pointer-events-none"
          style={{ 
            borderLeft: "2px dashed rgba(124,58,237,0.3)",
          }}
        />

        <div className="flex flex-col gap-6">
          {layers.map((layer, idx) => (
            <div
              key={idx}
              className="relative flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-700"
              style={{
                background: "rgba(19,22,32,0.70)",
                borderLeft: `3px solid ${layer.accent}`,
                padding: "20px 24px",
                borderRadius: "12px",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-24px)",
                transitionDelay: `${idx * 150}ms`,
                marginLeft: "24px" // Offset for the dashed line to align
              }}
            >
              {/* Connector Dot */}
              <div 
                className="absolute left-[-29px] top-1/2 -translate-y-1/2 w-[9px] h-[9px] rounded-full"
                style={{ background: layer.accent, boxShadow: `0 0 10px ${layer.accent}` }}
              />

              <div className="flex-1 flex flex-col items-start gap-2">
                <span 
                  className="px-2 py-0.5 text-[0.65rem] font-bold rounded uppercase tracking-widest"
                  style={{ background: `${layer.accent}20`, color: layer.accent }}
                >
                  {layer.tag}
                </span>
                <h3 className="text-white font-bold text-lg">{layer.title}</h3>
                <p className="text-[0.85rem]" style={{ color: "#8892A4", lineHeight: 1.6 }}>
                  {layer.desc}
                </p>
              </div>

              <div className="flex md:flex-col gap-2 md:gap-1 mt-2 md:mt-0 pt-3 md:pt-0 border-t border-[rgba(124,58,237,0.1)] md:border-0 md:min-w-[140px] md:items-end">
                {layer.stats.map((stat, i) => (
                  <span key={i} className="text-[0.75rem] font-medium" style={{ color: "#C7D4F0" }}>
                    • {stat}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
