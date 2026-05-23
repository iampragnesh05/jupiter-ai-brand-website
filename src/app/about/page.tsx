"use client";

import { useEffect, useRef, useState } from "react";

// Animated Grid Background Component
function AnimatedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(124, 58, 237, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124, 58, 237, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.02] animate-grid"
        style={{
          backgroundImage: `
            linear-gradient(rgba(124, 58, 237, 0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124, 58, 237, 0.8) 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
          animation: "gridMove 20s linear infinite",
        }}
      />
    </div>
  );
}

// Floating Particles Component
function FloatingParticles() {
  const particles = [
    { size: 3, x: 15, y: 20, duration: 18, delay: 0 },
    { size: 2, x: 85, y: 15, duration: 22, delay: 1 },
    { size: 4, x: 45, y: 80, duration: 25, delay: 2 },
    { size: 2, x: 70, y: 45, duration: 20, delay: 3 },
    { size: 3, x: 25, y: 60, duration: 28, delay: 4 },
    { size: 2, x: 90, y: 70, duration: 19, delay: 0.5 },
    { size: 4, x: 55, y: 30, duration: 24, delay: 1.5 },
    { size: 3, x: 10, y: 85, duration: 21, delay: 2.5 },
    { size: 2, x: 75, y: 25, duration: 26, delay: 3.5 },
    { size: 3, x: 35, y: 55, duration: 17, delay: 4.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-purple/30"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            filter: "blur(1px)",
            animation: `float ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

// Glow Orb Component
function GlowOrb({ className }: { className?: string }) {
  return (
    <div
      className={`absolute rounded-full blur-[100px] pointer-events-none animate-glow ${className}`}
      style={{
        background: "radial-gradient(circle, rgba(124, 58, 237, 0.4) 0%, transparent 70%)",
      }}
    />
  );
}

// Workflow Nodes Component
function WorkflowNodes() {
  const nodes = [
    { x: 20, y: 30, delay: 0 },
    { x: 50, y: 20, delay: 0.5 },
    { x: 80, y: 35, delay: 1 },
    { x: 35, y: 60, delay: 1.5 },
    { x: 65, y: 70, delay: 2 },
    { x: 85, y: 55, delay: 2.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      {nodes.map((node, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-purple animate-pulse"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            boxShadow: "0 0 20px rgba(124, 58, 237, 0.8)",
            animationDelay: `${node.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

// Believe Card Component
interface BelieveCardProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isVisible: boolean;
  delay: number;
}

function BelieveCard({ number, title, description, icon, isVisible, delay }: BelieveCardProps) {
  return (
    <div
      className={`group relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-purple/30 hover:shadow-[0_0_40px_rgba(124,58,237,0.15)]">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-purple/5 via-transparent to-transparent" />
        </div>
        <div className="absolute top-4 right-4 text-xs font-mono text-purple/50">{number}</div>
        <div className="relative mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-purple/10 border border-purple/20 text-purple transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]">
          {icon}
        </div>
        <h3 className="relative text-xl font-semibold text-white mb-3 transition-colors duration-300 group-hover:text-lavender">
          {title}
        </h3>
        <p className="relative text-muted leading-relaxed text-sm">{description}</p>
      </div>
    </div>
  );
}

// Vision Animation Component
function VisionAnimation() {
  return (
    <div className="relative w-full h-[300px] flex items-center justify-center">
      {/* Central Node */}
      <div
        className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-purple to-purple/50 flex items-center justify-center animate-pulse-slow"
        style={{
          boxShadow: "0 0 60px rgba(124, 58, 237, 0.5), inset 0 0 20px rgba(255,255,255,0.1)",
        }}
      >
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>

      {/* Orbiting Nodes */}
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-purple/60 animate-orbit"
          style={{
            boxShadow: "0 0 15px rgba(124, 58, 237, 0.8)",
            animationDelay: `${i * 0.5}s`,
            transformOrigin: "center center",
            left: "calc(50% - 6px)",
            top: "calc(50% - 6px)",
            [`--angle` as string]: `${angle}deg`,
          }}
        />
      ))}

      {/* Connection Rings */}
      <div
        className="absolute w-[200px] h-[200px] rounded-full border border-purple/20 animate-spin-slow"
        style={{ animationDuration: "30s" }}
      />
      <div
        className="absolute w-[280px] h-[280px] rounded-full border border-purple/10 animate-spin-reverse"
        style={{ animationDuration: "40s" }}
      />

      {/* Pulse rings */}
      <div
        className="absolute w-20 h-20 rounded-full border border-purple/30 animate-ping"
        style={{ animationDuration: "3s" }}
      />
    </div>
  );
}

// Main About Page Component
export default function About() {
  const [visibleSections, setVisibleSections] = useState({
    hero: true,
    believe: false,
    vision: false,
    manifesto: false,
  });

  const believeRef = useRef<HTMLElement>(null);
  const visionRef = useRef<HTMLElement>(null);
  const manifestoRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-section");
            if (id) {
              setVisibleSections((prev) => ({ ...prev, [id]: true }));
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: "-100px" }
    );

    [believeRef, visionRef, manifestoRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const believeCards = [
    {
      number: "01",
      title: "Vertical beats generic",
      description: "Deep understanding of one industry creates better systems than shallow intelligence across everything.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "AI should understand operations",
      description: "Businesses do not need another chatbot. They need systems that understand workflows, teams, customers, and execution.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Real impact matters",
      description: "Not vanity metrics. Not dashboards. Real business outcomes that help companies grow more efficiently.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Industries deserve their own AI systems",
      description: "Every industry operates differently and AI should reflect that.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative bg-[#08090A]">
      {/* Add keyframe styles */}
      <style jsx global>{`
        @keyframes gridMove {
          0% { background-position: 0px 0px; }
          100% { background-position: 60px 60px; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.2; }
          25% { transform: translateY(-15px) translateX(7px); opacity: 0.6; }
          50% { transform: translateY(-30px) translateX(-7px); opacity: 0.4; }
          75% { transform: translateY(-15px) translateX(7px); opacity: 0.6; }
        }
        @keyframes glow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.2); opacity: 0.5; }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(100px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
        .animate-grid { animation: gridMove 20s linear infinite; }
        .animate-glow { animation: glow 8s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-orbit { animation: orbit 15s linear infinite; }
        .animate-spin-slow { animation: spin-slow 30s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 40s linear infinite; }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <AnimatedGrid />
        <FloatingParticles />
        <GlowOrb className="w-[600px] h-[600px] -top-[200px] -right-[200px]" />
        <GlowOrb className="w-[400px] h-[400px] bottom-[10%] -left-[100px]" />
        <WorkflowNodes />

        <div className="relative z-10 max-w-[1200px] mx-auto text-center">
          {/* Label */}
          <div
            className={`mb-8 transition-all duration-700 delay-100 ${
              visibleSections.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-[0.2em] uppercase text-purple/80 border border-purple/20 rounded-full bg-purple/5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple animate-pulse" />
              About Jupiter AI
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className={`text-[clamp(2.5rem,8vw,5.5rem)] font-bold leading-[1.1] tracking-tight mb-8 transition-all duration-700 delay-200 ${
              visibleSections.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block text-white">Building AI systems</span>
            <span className="block">
              <span className="text-white">for </span>
              <span className="text-purple">real</span>
              <span className="text-white"> industries.</span>
            </span>
          </h1>

          {/* Subtext */}
          <div
            className={`max-w-[800px] mx-auto space-y-6 transition-all duration-700 delay-300 ${
              visibleSections.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-lg md:text-xl text-muted leading-relaxed">
              Most AI tools today are built for everyone. That usually means they understand no one deeply. They generate answers, automate small tasks, and look impressive in demos but fail to understand how real businesses actually operate.
            </p>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Jupiter AI exists to build systems designed around workflows, operational context, business decisions, and industry specific realities not generic prompts.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
            <div className="w-1 h-2 rounded-full bg-purple/60" />
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE SECTION */}
      <section ref={believeRef} data-section="believe" className="relative py-32 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple/[0.02] to-transparent" />
        <div className="relative z-10 max-w-[1200px] mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              visibleSections.believe ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-purple/70 mb-4 block">
              What We Believe
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Principles that guide everything
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {believeCards.map((card, index) => (
              <BelieveCard
                key={index}
                number={card.number}
                title={card.title}
                description={card.description}
                icon={card.icon}
                isVisible={visibleSections.believe}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* VISION SECTION */}
      <section ref={visionRef} data-section="vision" className="relative py-32 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(124, 58, 237, 0.08) 0%, transparent 60%)",
            }}
          />
        </div>
        <div className="relative z-10 max-w-[1000px] mx-auto text-center">
          {/* Label */}
          <div
            className={`mb-6 transition-all duration-700 ${
              visibleSections.vision ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-[0.2em] uppercase text-purple/80 border border-purple/20 rounded-full bg-purple/5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple animate-pulse" />
              Our Vision
            </span>
          </div>

          {/* Vision Animation */}
          <div
            className={`mb-12 transition-all duration-700 delay-200 ${
              visibleSections.vision ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <VisionAnimation />
          </div>

          {/* Headline */}
          <h2
            className={`text-[clamp(2rem,6vw,4rem)] font-bold leading-[1.15] tracking-tight mb-8 transition-all duration-700 delay-300 ${
              visibleSections.vision ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block text-white">AI operating systems</span>
            <span className="block">
              <span className="text-purple">for</span>
              <span className="text-white"> industries</span>
            </span>
          </h2>

          {/* Subtext */}
          <div
            className={`space-y-4 max-w-[700px] mx-auto transition-all duration-700 delay-500 ${
              visibleSections.vision ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-lg md:text-xl text-muted leading-relaxed">
              We are building a future where every industry has AI systems designed specifically for how that industry works from operations and workflows to customer interactions and decision making.
            </p>
            <p className="text-lg md:text-xl text-white/90 font-medium">
              Not adapted later. Built intentionally from the start.
            </p>
          </div>
        </div>
      </section>

      {/* MANIFESTO / ENDING STATEMENT */}
      <section ref={manifestoRef} data-section="manifesto" className="relative py-32 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Dramatic Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(124, 58, 237, 0.12) 0%, transparent 60%)",
            }}
          />
          <div
            className="absolute inset-0 animate-pulse-slow"
            style={{
              background: "radial-gradient(ellipse 40% 40% at 50% 50%, rgba(124, 58, 237, 0.2) 0%, transparent 70%)",
              animation: "glow 6s ease-in-out infinite",
            }}
          />
        </div>

        {/* Decorative Lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className={`absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple/20 to-transparent transition-transform duration-1000 origin-center ${
              visibleSections.manifesto ? "scale-x-100" : "scale-x-0"
            }`}
          />
        </div>

        <div className="relative z-10 max-w-[1000px] mx-auto text-center">
          <div
            className={`transition-all duration-700 delay-200 ${
              visibleSections.manifesto ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-[clamp(1.5rem,4vw,2.5rem)] md:text-3xl text-muted leading-relaxed mb-4">
              Generic AI created tools for everyone.
            </p>
            <p className="text-[clamp(1.75rem,5vw,3.5rem)] md:text-4xl font-bold leading-tight mb-8">
              <span className="text-white">We are building systems that </span>
              <span className="text-purple">finally understand</span>
              <span className="text-white"> industries.</span>
            </p>
          </div>

          {/* Final Line with glow */}
          <div
            className={`relative inline-block transition-all duration-700 delay-600 ${
              visibleSections.manifesto ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div
              className="absolute inset-0 blur-2xl bg-purple/20 rounded-full"
              style={{ transform: "scale(1.5)" }}
            />
            <p className="relative text-xl md:text-2xl font-medium text-white/80 tracking-wide">
              One industry at a time.
            </p>
          </div>

          {/* Decorative Element */}
          <div
            className={`mt-16 flex items-center justify-center gap-4 transition-all duration-700 delay-1000 ${
              visibleSections.manifesto ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple/40" />
            <div className="w-3 h-3 rounded-full bg-purple/60" style={{ boxShadow: "0 0 20px rgba(124, 58, 237, 0.5)" }} />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-purple/40" />
          </div>
        </div>
      </section>
    </div>
  );
}

