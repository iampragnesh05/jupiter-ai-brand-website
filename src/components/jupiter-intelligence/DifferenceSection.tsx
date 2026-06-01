"use client";

import { useEffect, useRef, useState } from "react";

export default function DifferenceSection() {
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
    <section ref={sectionRef} className="relative overflow-hidden pt-[120px] pb-[120px] max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 55% at 65% 45%, rgba(124,58,237,0.10) 0%, transparent 70%)",
        }}
      />
      
      <div className="relative z-10 text-center mb-16">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] mb-[12px]" style={{ color: "#A78BFA" }}>
          THE DIFFERENCE
        </p>
        <h2 className="text-white font-extrabold text-3xl md:text-4xl leading-tight mb-4">
          Done For You.<br className="hidden md:block"/> Not Another Tool.
        </h2>
        <p className="text-base max-w-[600px] mx-auto" style={{ color: "#8892A4", lineHeight: 1.75 }}>
          Other tools give you software and wish you luck. Jupiter Intelligence builds and configures everything.
        </p>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row gap-4 md:gap-6 max-w-[1000px] mx-auto mb-16">
        
        {/* Column 1 */}
        <div 
          className="flex-1 rounded-2xl p-6 transition-all duration-500 bg-[#131620]"
          style={{
            border: "1px solid rgba(239,68,68,0.15)",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transitionDelay: "0ms"
          }}
        >
          <div 
            className="text-center py-2 mb-6 rounded-lg font-bold text-sm tracking-widest uppercase"
            style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.15)", color: "#FCA5A5" }}
          >
            AGENCY
          </div>
          <ul className="space-y-4 text-[0.85rem]" style={{ color: "#8892A4" }}>
            <li className="flex items-start gap-2"><span className="text-[#EF4444]">❌</span> Templates used</li>
            <li className="flex items-start gap-2"><span className="text-[#EF4444]">❌</span> 6-8 week delivery</li>
            <li className="flex items-start gap-2"><span className="text-[#EF4444]">❌</span> No AI layer</li>
            <li className="flex items-start gap-2"><span className="text-[#EF4444]">❌</span> Automation: extra cost</li>
            <li className="flex items-start gap-2"><span className="text-[#EF4444]">❌</span> SEO: basic</li>
            <li className="flex items-start gap-2"><span className="text-[#EF4444]">❌</span> Post-launch: retainer</li>
            <li className="flex items-start gap-2"><span className="text-[#EF4444]">❌</span> Indian optimization: no</li>
            <li className="flex items-start gap-2"><span className="text-[#EF4444]">❌</span> Done for you: no</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div 
          className="flex-1 rounded-2xl p-6 transition-all duration-500 bg-[#131620]"
          style={{
            border: "1px solid rgba(245,158,11,0.15)",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transitionDelay: "200ms"
          }}
        >
          <div 
            className="text-center py-2 mb-6 rounded-lg font-bold text-sm tracking-widest uppercase"
            style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.15)", color: "#FCD34D" }}
          >
            FREELANCER
          </div>
          <ul className="space-y-4 text-[0.85rem]" style={{ color: "#8892A4" }}>
            <li className="flex items-start gap-2"><span className="text-[#F59E0B]">⚠️</span> Templates: sometimes</li>
            <li className="flex items-start gap-2"><span className="text-[#F59E0B]">⚠️</span> 3-4 week delivery</li>
            <li className="flex items-start gap-2"><span className="text-[#F59E0B]">⚠️</span> AI layer: rarely</li>
            <li className="flex items-start gap-2"><span className="text-[#EF4444]">❌</span> Automation: no</li>
            <li className="flex items-start gap-2"><span className="text-[#F59E0B]">⚠️</span> SEO: basic</li>
            <li className="flex items-start gap-2"><span className="text-[#EF4444]">❌</span> Post-launch: unavailable</li>
            <li className="flex items-start gap-2"><span className="text-[#F59E0B]">⚠️</span> Indian optimization: sometimes</li>
            <li className="flex items-start gap-2"><span className="text-[#EF4444]">❌</span> Done for you: no</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div 
          className="flex-1 rounded-2xl p-6 transition-all duration-500 relative bg-[#131620]"
          style={{
            border: "1.5px solid rgba(124,58,237,0.4)",
            boxShadow: "0 0 40px rgba(124,58,237,0.2)",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transitionDelay: "400ms"
          }}
        >
          <div 
            className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#7C3AED] text-white text-[0.65rem] font-bold tracking-widest rounded-full uppercase shadow-lg"
          >
            RECOMMENDED
          </div>
          <div 
            className="text-center py-2 mb-6 rounded-lg font-bold text-sm tracking-widest uppercase mt-2"
            style={{ background: "rgba(124,58,237,0.12)", color: "#A78BFA" }}
          >
            JUPITER INTELLIGENCE
          </div>
          <ul className="space-y-4 text-[0.85rem] font-medium" style={{ color: "#C7D4F0" }}>
            <li className="flex items-start gap-2"><span className="text-[#22c55e]">✓</span> Zero templates</li>
            <li className="flex items-start gap-2"><span className="text-[#22c55e]">✓</span> 1-2 week delivery</li>
            <li className="flex items-start gap-2"><span className="text-[#22c55e]">✓</span> AI layer: always</li>
            <li className="flex items-start gap-2"><span className="text-[#22c55e]">✓</span> Automation: complete</li>
            <li className="flex items-start gap-2"><span className="text-[#22c55e]">✓</span> SEO: full stack</li>
            <li className="flex items-start gap-2"><span className="text-[#22c55e]">✓</span> Post-launch: weekly intelligence</li>
            <li className="flex items-start gap-2"><span className="text-[#22c55e]">✓</span> Indian optimization: built in</li>
            <li className="flex items-start gap-2"><span className="text-[#22c55e]">✓</span> Done for you: completely</li>
          </ul>
        </div>
      </div>

      <div className="relative z-10 flex flex-wrap justify-center gap-3">
        {["30 Stores Built", "5 Years Experience", "100% Custom", "Indian Brands Only"].map(stat => (
          <span
            key={stat}
            className="inline-flex items-center px-4 py-1.5 font-semibold rounded-full uppercase"
            style={{
              background: "rgba(124,58,237,0.12)",
              border: "1px solid rgba(124,58,237,0.28)",
              color: "#A78BFA",
              fontSize: "0.7rem",
              letterSpacing: "0.08em"
            }}
          >
            {stat}
          </span>
        ))}
      </div>
    </section>
  );
}
