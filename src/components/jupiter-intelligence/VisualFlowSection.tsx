"use client";

import { useEffect, useRef, useState } from "react";

export default function VisualFlowSection() {
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

  const leftNodes = [
    { label: "Welcome", icon: "👋", delay: 0 },
    { label: "Browse Abandonment", icon: "📱", delay: 150 },
    { label: "Abandoned Carts", icon: "🛒", delay: 300 },
  ];

  const rightNodes = [
    { label: "COD to Prepaid", icon: "💳", delay: 400 },
    { label: "Upsell", icon: "📈", delay: 500 },
    { label: "Win Back", icon: "❤️", delay: 600 },
    { label: "Product Review", icon: "⭐", delay: 700 },
    { label: "Order Alerts", icon: "📦", delay: 800 },
  ];

  const enginePills = [
    "Easy Flow Builder",
    "Event + Behaviour Triggers",
    "Multi-channel Messaging",
    "Conditional Branching"
  ];

  return (
    <section ref={sectionRef} className="relative overflow-hidden pt-[160px] pb-[160px]" style={{ backgroundColor: "#05010A" }}>
      {/* Background Mesh & Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(124, 58, 237, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(124, 58, 237, 0.2) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(124,58,237,0.15) 0%, transparent 70%)",
          filter: "blur(60px)"
        }}
      />
      <div 
        className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0,255,132,0.04) 0%, transparent 60%)",
          filter: "blur(80px)"
        }}
      />

      {/* Header */}
      <div className="relative z-10 text-center mb-24 max-w-[800px] mx-auto px-4">
        <p 
          className="text-[0.7rem] font-bold uppercase tracking-[0.15em] mb-4" 
          style={{ color: "#A78BFA", textShadow: "0 0 20px rgba(124,58,237,0.5)" }}
        >
          CUSTOMER JOURNEY
        </p>
        <h2 
          className="font-extrabold text-white mb-6 leading-[1.1]"
          style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}
        >
          Automate Every Touchpoint <br className="hidden md:block" /> Across the Full Journey
        </h2>
        <p className="text-lg mx-auto" style={{ color: "#94A3B8" }}>
          From first visit to loyal repeat buyer — fully automated.
        </p>
      </div>

      {/* Main Visual Layout */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-8">
        
        {/* Orbital Rings Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none hidden md:block z-0">
          <div 
            className="absolute inset-[50px] rounded-full border border-[rgba(124,58,237,0.08)]"
            style={{ animation: "spin 40s linear infinite" }}
          />
          <div 
            className="absolute inset-[150px] rounded-full border border-[rgba(124,58,237,0.12)]"
            style={{ animation: "spin 30s linear infinite reverse" }}
          />
          <div 
            className="absolute inset-[250px] rounded-full border border-[rgba(124,58,237,0.18)]"
            style={{ animation: "spin 20s linear infinite" }}
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-4 relative z-10">
          
          {/* Left Nodes */}
          <div className="flex flex-col justify-center gap-10 md:gap-14 w-full md:w-[280px] z-20">
            {leftNodes.map((node, idx) => (
              <div 
                key={idx}
                className="relative flex items-center gap-5 group cursor-pointer transition-all duration-700"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateX(0)" : "translateX(-40px)",
                  transitionDelay: `${node.delay}ms`
                }}
              >
                {/* SVG Connecting Line to Center */}
                <svg className="absolute left-[64px] top-1/2 w-0 h-0 pointer-events-none hidden md:block" style={{ overflow: 'visible', zIndex: -1 }}>
                  <path 
                    d={`M0,0 C60,0 100,${(1 - idx) * 80} 200,${(1 - idx) * 80}`}
                    fill="none" 
                    stroke="rgba(124,58,237,0.4)" 
                    strokeWidth="1.5"
                    strokeDasharray="6 4"
                    className="path-animate"
                  />
                </svg>

                <div 
                  className="w-[64px] h-[64px] rounded-full flex items-center justify-center shrink-0 relative transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1"
                  style={{
                    background: "rgba(19,22,32,0.9)",
                    border: "1px solid rgba(124,58,237,0.3)",
                    boxShadow: "0 0 25px rgba(124,58,237,0.15), inset 0 0 20px rgba(124,58,237,0.1)",
                    backdropFilter: "blur(12px)",
                    fontSize: "1.6rem"
                  }}
                >
                  <div className="absolute inset-[-4px] rounded-full border border-[rgba(124,58,237,0.4)] opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{ animationDuration: '2s' }} />
                  {node.icon}
                </div>
                <div 
                  className="text-[0.95rem] font-semibold transition-colors duration-300 group-hover:text-white" 
                  style={{ color: "#F8FAFC" }}
                >
                  {node.label}
                </div>
              </div>
            ))}
          </div>

          {/* Center Engine Card */}
          <div 
            className="relative w-full md:w-[460px] z-30 transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "scale(1) translateY(0)" : "scale(0.9) translateY(40px)",
              transitionDelay: "400ms"
            }}
          >
            {/* Center Outer Glow */}
            <div className="absolute inset-[-30px] rounded-[40px] bg-[#7C3AED] opacity-20 blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
            
            <div 
              className="relative p-10 rounded-[32px] overflow-hidden group transition-all duration-500 hover:-translate-y-2"
              style={{
                background: "linear-gradient(180deg, rgba(26,31,48,0.85) 0%, rgba(13,15,28,0.95) 100%)",
                border: "1px solid rgba(124,58,237,0.4)",
                boxShadow: "0 30px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(124,58,237,0.15) inset, 0 0 60px rgba(124,58,237,0.2)",
                backdropFilter: "blur(20px)"
              }}
            >
              {/* Internal glowing orb */}
              <div className="absolute -top-[50px] -right-[50px] w-[250px] h-[250px] bg-[#00FF84] rounded-full opacity-[0.07] blur-[60px]" />
              <div className="absolute -bottom-[50px] -left-[50px] w-[200px] h-[200px] bg-[#7C3AED] rounded-full opacity-10 blur-[60px]" />
              
              <div className="text-center mb-10 relative z-10">
                <h3 className="text-2xl font-bold text-white tracking-wide mb-2">Automation Engine</h3>
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em]" style={{ color: "#A78BFA" }}>Core Intelligence</p>
              </div>

              <div className="flex flex-col gap-4 relative z-10">
                {/* Vertical connecting line behind pills */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#00FF84] to-transparent opacity-20" />

                {enginePills.map((pill, i) => (
                  <div 
                    key={i}
                    className="relative w-full text-center py-4 px-6 rounded-full text-[0.85rem] font-bold tracking-wider transition-all duration-300 hover:scale-[1.02] cursor-default overflow-hidden"
                    style={{
                      background: "linear-gradient(90deg, rgba(0,255,132,0.03) 0%, rgba(0,255,132,0.15) 50%, rgba(0,255,132,0.03) 100%)",
                      border: "1px solid rgba(0,255,132,0.3)",
                      color: "#00FF84",
                      boxShadow: "0 0 20px rgba(0,255,132,0.1), inset 0 0 10px rgba(0,255,132,0.05)"
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00FF84] to-transparent opacity-10 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000" />
                    {pill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Nodes */}
          <div className="flex flex-col gap-8 md:gap-10 w-full md:w-[280px] z-20 md:items-end">
            {rightNodes.map((node, idx) => (
              <div 
                key={idx}
                className="relative flex items-center md:flex-row-reverse gap-5 group cursor-pointer transition-all duration-700"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateX(0)" : "translateX(40px)",
                  transitionDelay: `${node.delay}ms`
                }}
              >
                {/* SVG Connecting Line to Center */}
                <svg className="absolute right-[56px] top-1/2 w-0 h-0 pointer-events-none hidden md:block" style={{ overflow: 'visible', zIndex: -1 }}>
                  <path 
                    d={`M0,0 C-60,0 -100,${(2 - idx) * 60} -200,${(2 - idx) * 60}`}
                    fill="none" 
                    stroke="rgba(124,58,237,0.4)" 
                    strokeWidth="1.5"
                    strokeDasharray="6 4"
                    className="path-animate-reverse"
                  />
                </svg>

                <div 
                  className="w-[56px] h-[56px] rounded-full flex items-center justify-center shrink-0 relative transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1"
                  style={{
                    background: "rgba(19,22,32,0.9)",
                    border: "1px solid rgba(124,58,237,0.3)",
                    boxShadow: "0 0 20px rgba(124,58,237,0.15), inset 0 0 20px rgba(124,58,237,0.1)",
                    backdropFilter: "blur(12px)",
                    fontSize: "1.4rem"
                  }}
                >
                  <div className="absolute inset-[-4px] rounded-full border border-[rgba(124,58,237,0.4)] opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{ animationDuration: '2s' }} />
                  {node.icon}
                </div>
                <div 
                  className="text-[0.9rem] font-semibold transition-colors duration-300 md:text-right group-hover:text-white" 
                  style={{ color: "#F8FAFC" }}
                >
                  {node.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      
      {/* CSS specific to this component for path animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pathFlow {
          from { stroke-dashoffset: 20; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes pathFlowReverse {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: 20; }
        }
        .path-animate {
          animation: pathFlow 1s linear infinite;
        }
        .path-animate-reverse {
          animation: pathFlowReverse 1s linear infinite;
        }
      `}} />
    </section>
  );
}
