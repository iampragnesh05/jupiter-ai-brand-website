"use client";

import { useEffect, useRef, useState } from "react";

const painPoints = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="15" stroke="#7C3AED" strokeWidth="1.5" />
        <path d="M16 8v8l6 3" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="16" r="2" fill="#7C3AED" />
      </svg>
    ),
    heading: "Generic AI stops at prompts",
    body: "Most tools can generate content or answer questions. Very few understand how an industry actually operates from data to workflow to execution.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="8" width="20" height="16" rx="2" stroke="#7C3AED" strokeWidth="1.5" />
        <path d="M10 12h12M10 16h8M10 20h6" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="24" cy="10" r="3" fill="#7C3AED" />
      </svg>
    ),
    heading: "Vertical AI understands the business",
    body: "Jupiter AI is built around industries, not generic use cases. Every product is designed to understand the language, workflow, and decisions of a specific business category.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="15" stroke="#7C3AED" strokeWidth="1.5" />
        <path d="M16 10l4 4-4 4M12 14h8" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    heading: "Building AI systems designed for real industries",
    body: "Our vision is simple. Create industry focused AI systems that businesses can actually rely on every day. Not generic tools. Not isolated features. Complete systems built for one industry at a time.",
  },
];

const tickerItems = [
  "One tool",
  "One industry",
  "Built with real business context",
  "Designed for execution",
  "Understands workflows",
  "Built for specific requirements",
  "Industry first intelligence",
  "AI that adapts to business operations",
];

function useIntersectionObserver(delay: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return { ref, isVisible };
}

export default function Problem() {
  const labelAnim = useIntersectionObserver(0);
  const headingAnim = useIntersectionObserver(100);
  const supportingAnim = useIntersectionObserver(200);
  const tickerAnim = useIntersectionObserver(300);
  const columnsAnim = [
    useIntersectionObserver(400),
    useIntersectionObserver(500),
    useIntersectionObserver(600),
  ];
  const resolutionAnim = useIntersectionObserver(700);

  const fadeInClass = (isVisible: boolean) =>
    `transition-all duration-600 ease-out ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
    }`;

  return (
    <section className="relative overflow-hidden border-y border-border px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#08090A', padding: '80px 24px' }}>
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding: 60px 20px !important;
          }
        }
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .ticker-content {
          animation: scroll-left 25s linear infinite;
        }
        .ticker-content:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="max-w-[1100px] mx-auto">
        {/* Part 1 — Section Label */}
        <div ref={labelAnim.ref} className={`text-center mb-5 ${fadeInClass(labelAnim.isVisible)}`}>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-purple">
            WHY WE EXIST
          </p>
        </div>

        {/* Part 2 — Main Statement */}
        <div ref={headingAnim.ref} className={`text-center mb-4 ${fadeInClass(headingAnim.isVisible)}`}>
          <h2 className="text-[clamp(2.2rem,4.5vw,3.2rem)] font-extrabold text-white leading-[1.15]">
            <span className="block">Generic AI</span>
            <span
              className="block"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A78BFA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              was built for everyone
            </span>
          </h2>
        </div>

        {/* Part 3 — Supporting Statement */}
        <div ref={supportingAnim.ref} className={`text-center mb-12 ${fadeInClass(supportingAnim.isVisible)}`}>
          <p className="text-lg text-muted max-w-[560px] mx-auto leading-[1.7]">
            Jupiter AI builds Vertical AI systems designed around real workflows, business operations, and industry specific needs.   </p>
        </div>

        {/* Part 4 — Scrolling Ticker */}
        <div
          ref={tickerAnim.ref}
          className={`relative bg-[#08090A] border-y border-border py-3.5 mb-12 overflow-hidden ${fadeInClass(
            tickerAnim.isVisible
          )}`}
        >
          <div className="ticker-content flex whitespace-nowrap">
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <span key={index} className="inline-flex items-center">
                <span className="text-sm text-muted tracking-wide">{item}</span>
                <span className="mx-4 text-purple">•</span>
              </span>
            ))}
          </div>
        </div>

        {/* Part 5 — Three Pain Point Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 mb-12">
          {painPoints.map((point, index) => (
            <div
              key={index}
              ref={columnsAnim[index].ref}
              className={`${fadeInClass(columnsAnim[index].isVisible)}`}
            >
              <div className="mb-4">{point.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{point.heading}</h3>
              <p className="text-[0.95rem] text-muted leading-[1.7]">{point.body}</p>
            </div>
          ))}
        </div>

              </div>
    </section>
  );
}

