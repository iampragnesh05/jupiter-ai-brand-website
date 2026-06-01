"use client";

import { useEffect, useRef, useState } from "react";

export default function HowWeWorkSection() {
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

  const steps = [
    { num: "01", title: "Discovery", icon: "🎯", desc: "We learn your brand, products, and business goals. Scope locked before build begins." },
    { num: "02", title: "Custom Build", icon: "🏗️", desc: "Zero templates. Custom Shopify. Mobile-first. Speed-optimized from first line of code." },
    { num: "03", title: "Intelligence Layer", icon: "⚡", desc: "AI Chatbot trained on your catalog. Every WhatsApp flow configured. AIO + Tech SEO implemented. Weekly AI intelligence activated." },
    { num: "04", title: "Launch + Handover", icon: "🚀", desc: "Full documentation. 7 days support included. Weekly revenue recommendations start from day one." }
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
          THE PROCESS
        </p>
        <h2 className="text-white font-extrabold text-3xl md:text-4xl leading-tight mb-4">
          How Jupiter Intelligence Works
        </h2>
        <p className="text-base max-w-[600px] mx-auto" style={{ color: "#8892A4", lineHeight: 1.75 }}>
          From first call to live revenue system.
        </p>
      </div>

      <div className="relative z-10 max-w-[1000px] mx-auto">
        <div className="flex flex-col md:flex-row relative">
          
          <div 
            className="absolute left-[23px] top-[48px] bottom-0 w-[2px] md:w-full md:h-[2px] md:left-0 md:top-[23px] md:bottom-auto pointer-events-none"
            style={{ background: "rgba(124,58,237,0.2)" }}
          >
            <div 
              className="w-full h-full md:hidden"
              style={{
                background: "linear-gradient(180deg, #7C3AED, rgba(124,58,237,0.2))",
                height: isVisible ? "100%" : "0%",
                transition: "height 1.5s ease-out"
              }}
            />
            <div 
              className="hidden md:block w-full h-full absolute top-0 left-0"
              style={{
                background: "linear-gradient(90deg, #7C3AED, rgba(124,58,237,0.2))",
                width: isVisible ? "100%" : "0%",
                transition: "width 1.5s ease-out"
              }}
            />
          </div>

          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="flex md:flex-col relative z-10 flex-1 gap-6 md:gap-4 pb-10 md:pb-0 transition-all duration-500"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-24px)",
                transitionDelay: `${idx * 250}ms`
              }}
            >
              <div 
                className="w-[48px] h-[48px] flex items-center justify-center rounded-full shrink-0 relative bg-[#131620]"
                style={{
                  background: "rgba(124,58,237,0.15)",
                  border: "1.5px solid #7C3AED",
                  color: "#A78BFA",
                  fontSize: "0.85rem",
                  fontWeight: 700
                }}
              >
                {step.num}
              </div>
              <div className="flex flex-col md:items-start pt-3 md:pt-4 md:px-2">
                <div className="text-2xl mb-3">{step.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-[0.85rem]" style={{ color: "#8892A4", lineHeight: 1.6 }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
