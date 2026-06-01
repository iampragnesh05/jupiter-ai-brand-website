"use client";

import { useEffect, useRef, useState } from "react";

function Counter({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

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
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number;
    let animationFrame: number;
    
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(easeOutCubic(progress) * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };
    
    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function NumbersSection() {
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

  const stats = [
    { number: 54, suffix: "X", label: "Cart recovery ROI generated", subtext: "Automated WhatsApp cart flows", accent: "#7C3AED" },
    { number: 13, suffix: "X", label: "Campaign ROI on WhatsApp", subtext: "Broadcast + segmentation", accent: "#3B82F6" },
    { number: 6, suffix: ".4M+", label: "Assisted revenue generated", subtext: "For a single D2C brand", accent: "#22C55E" },
    { number: 40, suffix: "%", label: "Higher customer retention", subtext: "WhatsApp-first marketing", accent: "#F59E0B" },
    { number: 1, suffix: " in 4", label: "Abandoned carts recovered", subtext: "Timely personalized flows", accent: "#A78BFA" },
    { number: 3900, suffix: "+", label: "Support queries automated", subtext: "Per month via AI chatbot", accent: "#EF4444" }
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
          THE NUMBERS
        </p>
        <h2 className="text-white font-extrabold text-3xl md:text-4xl leading-tight mb-4">
          What This System <br className="hidden md:block"/> Does For Indian D2C Brands
        </h2>
        <p className="text-base max-w-[600px] mx-auto" style={{ color: "#8892A4", lineHeight: 1.75 }}>
          Real results from Indian brands using complete automation and AI intelligence systems.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="group flex flex-col h-full rounded-2xl p-5 md:p-6 transition-all duration-300 relative overflow-hidden"
            style={{
              background: "rgba(19,22,32,0.70)",
              border: "1px solid rgba(124,58,237,0.18)",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
              transition: `opacity 0.6s ease, transform 0.6s ease`,
              transitionDelay: `${idx * 150}ms`
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
            <div 
              className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
              style={{ background: stat.accent }}
            />
            <div 
              className="font-extrabold text-[2rem] md:text-[2.8rem] mb-2 leading-tight" 
              style={{ color: stat.accent }}
            >
              <Counter end={stat.number} suffix={stat.suffix} />
            </div>
            <div className="text-white font-semibold text-sm md:text-base mb-1">
              {stat.label}
            </div>
            <div className="text-[0.75rem]" style={{ color: "#8892A4" }}>
              {stat.subtext}
            </div>
          </div>
        ))}
      </div>
      
      <div className="relative z-10 mt-12 text-center text-[0.7rem] max-w-[600px] mx-auto" style={{ color: "#8892A4", lineHeight: 1.6 }}>
        Industry benchmarks from Indian D2C brands using WhatsApp automation systems.
      </div>
    </section>
  );
}
