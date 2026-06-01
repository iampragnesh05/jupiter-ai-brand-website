"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function JupiterIntelligenceTeaser() {
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

  return (
    <section ref={sectionRef} className="relative overflow-hidden pt-[130px] pb-[90px]" style={{ backgroundColor: "#08090A" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 55% at 65% 45%, rgba(124,58,237,0.10) 0%, transparent 70%)",
        }}
      />
      
      <div 
        className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center transition-all duration-700"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(24px)",
        }}
      >
        <span
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-7 font-semibold rounded-full uppercase"
          style={{
            background: "rgba(124,58,237,0.12)",
            border: "1px solid rgba(124,58,237,0.28)",
            color: "#A78BFA",
            fontSize: "0.7rem",
            letterSpacing: "0.08em",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#7C3AED", boxShadow: "0 0 6px #7C3AED" }} />
          JUPITER INTELLIGENCE
        </span>

        <h2 className="font-extrabold text-white text-3xl md:text-5xl leading-tight mb-6">
          <span className="block">AI-Intelligent</span>
          <span className="block mt-1" style={{
            background: "linear-gradient(135deg, #7C3AED, #A78BFA)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            E-commerce Websites
          </span>
        </h2>

        <p className="text-base md:text-lg mb-10 max-w-[560px]" style={{ color: "#8892A4", lineHeight: 1.75 }}>
          Custom Shopify + WhatsApp Revenue System + AI + Weekly Revenue Intelligence. Built for Indian e-commerce brands.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["30 Stores Built", "54X Cart ROI", "100% Custom", "Done For You"].map(stat => (
            <span
              key={stat}
              className="px-4 py-2 rounded-full text-[0.75rem] font-semibold"
              style={{
                background: "rgba(19,22,32,0.70)",
                border: "1px solid rgba(124,58,237,0.28)",
                color: "#C7D4F0"
              }}
            >
              {stat}
            </span>
          ))}
        </div>

        <Link 
          href="/jupiter-intelligence"
          className="inline-block transition-all duration-300"
          style={{
            background: "linear-gradient(135deg, #7C3AED, #6D28D9)",
            boxShadow: "0 0 24px rgba(124,58,237,0.40), 0 2px 8px rgba(0,0,0,0.4)",
            borderRadius: "12px",
            padding: "14px 28px",
            fontSize: "0.9rem",
            fontWeight: 600,
            color: "white",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(124,58,237,0.65), 0 4px 16px rgba(0,0,0,0.5)";
            (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(124,58,237,0.40), 0 2px 8px rgba(0,0,0,0.4)";
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          }}
        >
          See Jupiter Intelligence →
        </Link>
      </div>
    </section>
  );
}
