"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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

export default function FashionAI() {
  const headerAnim = useIntersectionObserver(0);
  const cardsAnim = [
    useIntersectionObserver(100),
    useIntersectionObserver(200),
    useIntersectionObserver(300),
  ];
  const buildAnim = useIntersectionObserver(400);

  const fadeInClass = (isVisible: boolean) =>
    `transition-all duration-600 ease-out ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
    }`;

  return (
    <section id="products" className="relative px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#08090A', padding: '80px 24px' }}>
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding: 60px 20px !important;
          }
        }
      `}</style>
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div ref={headerAnim.ref} className={`text-center mb-12 ${fadeInClass(headerAnim.isVisible)}`}>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-purple mb-4">
            FIRST VERTICAL
          </p>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold text-white mb-4">
            Fashion AI
          </h2>
          <p className="text-lg text-muted max-w-[480px] mx-auto leading-relaxed">
            A connected AI ecosystem built specifically for fashion brands.
          </p>
        </div>

        {/* Three Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1 — Jupiter Rank (LIVE) */}
          <div
            ref={cardsAnim[0].ref}
            className={`${fadeInClass(cardsAnim[0].isVisible)} bg-[#0F1117] border border-border border-l-[3px] border-l-purple rounded-2xl p-8 flex flex-col transition-all duration-200 hover:border-purple hover:shadow-[0_0_30px_rgba(124,58,237,0.1)]`}
          >
            {/* Badge */}
            <span className="inline-block px-3 py-1 text-[0.7rem] font-semibold tracking-wide rounded-full mb-5" 
                  style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)', color: '#A78BFA' }}>
              ✦ LIVE NOW
            </span>

            {/* Icon */}
            <div className="mb-4">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="18" cy="18" r="10" stroke="#7C3AED" strokeWidth="1.5" />
                <line x1="25" y1="25" x2="34" y2="34" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
                <line x1="14" y1="18" x2="22" y2="18" stroke="#7C3AED" strokeWidth="1.5" />
                <line x1="18" y1="14" x2="18" y2="22" stroke="#7C3AED" strokeWidth="1.5" />
              </svg>
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-white mb-1">Jupiter Rank</h3>
            <p className="text-sm text-purple mb-4">AI SEO Mentor</p>
            <p className="text-sm text-muted leading-relaxed flex-1 mb-5">
              Connects with your Google data, scans your website, and shows exactly what to improve with real business impact behind every recommendation.
            </p>

            {/* Highlight box */}
            <div className="bg-[#08090A] rounded-lg p-3 mb-6 border-l-2 border-purple">
              <p className="text-sm text-[#C7D4F0]">
                Found ₹45,000/month opportunity
                <br />
                in 10 seconds
              </p>
            </div>

            {/* CTA */}
            <a
              href="/fashion-ai/jupiter-rank"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-purple text-white rounded-lg py-3 text-sm font-medium text-center hover:bg-purple/90 transition-colors"
            >
              Explore Jupiter Rank →
            </a>
          </div>

          {/* Card 2 — Jupiter Chat (COMING) */}
          <div
            ref={cardsAnim[1].ref}
            className={`${fadeInClass(cardsAnim[1].isVisible)} bg-[#0F1117] border border-border rounded-2xl p-8 flex flex-col transition-all duration-200 hover:border-muted`}
          >
            {/* Badge */}
            <span className="inline-block px-3 py-1 text-[0.7rem] font-semibold tracking-wide rounded-full mb-5" 
                  style={{ background: 'rgba(136,146,164,0.1)', border: '1px solid rgba(136,146,164,0.2)', color: '#8892A4' }}>
              COMING SOON
            </span>

            {/* Icon */}
            <div className="mb-4">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect x="4" y="8" width="24" height="16" rx="4" stroke="#8892A4" strokeWidth="1.5" />
                <path d="M 8 24 L 4 30 L 14 24" stroke="#8892A4" strokeWidth="1.5" fill="none" />
                <rect x="14" y="18" width="22" height="14" rx="4" stroke="#8892A4" strokeWidth="1.5" fill="#131620" />
                <path d="M 32 32 L 36 36 L 26 32" stroke="#8892A4" strokeWidth="1.5" fill="none" />
              </svg>
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-white mb-1">Jupiter Chat</h3>
            <p className="text-sm text-muted mb-4">AI Customer Support</p>
            <p className="text-sm text-muted leading-relaxed flex-1 mb-5">
             Trained on your catalogue to answer product, size, and order questions across website, WhatsApp, and Instagram automatically.
            </p>

            {/* CTA */}
            <a
              href="/fashion-ai/jupiter-chat"
              className="block w-full bg-transparent border border-border text-muted rounded-lg py-3 text-sm font-medium text-center hover:border-muted hover:text-white transition-colors"
            >
              Learn More →
            </a>
          </div>

          {/* Card 3 — Jupiter Lens (COMING) */}
          <div
            ref={cardsAnim[2].ref}
            className={`${fadeInClass(cardsAnim[2].isVisible)} bg-[#0F1117] border border-border rounded-2xl p-8 flex flex-col transition-all duration-200 hover:border-muted`}
          >
            {/* Badge */}
            <span className="inline-block px-3 py-1 text-[0.7rem] font-semibold tracking-wide rounded-full mb-5" 
                  style={{ background: 'rgba(136,146,164,0.1)', border: '1px solid rgba(136,146,164,0.2)', color: '#8892A4' }}>
              COMING SOON
            </span>

            {/* Icon */}
            <div className="mb-4">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="12" r="6" stroke="#8892A4" strokeWidth="1.5" />
                <path d="M 8 36 C 8 28 12 24 20 24 C 28 24 32 28 32 36" stroke="#8892A4" strokeWidth="1.5" fill="none" />
                <path d="M 14 20 L 10 30" stroke="#8892A4" strokeWidth="1" strokeDasharray="2 2" />
                <path d="M 26 20 L 30 30" stroke="#8892A4" strokeWidth="1" strokeDasharray="2 2" />
              </svg>
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-white mb-1">Jupiter Lens</h3>
            <p className="text-sm text-muted mb-4">AI Fashion Visualization</p>
            <p className="text-sm text-muted leading-relaxed flex-1 mb-5">
              Transform product photos into AI generated fashion visuals, virtual try-ons, AI models, and motion content built for modern ecommerce brands.
            </p>

            {/* CTA */}
            <a
              href="/fashion-ai/jupiter-lens"
              className="block w-full bg-transparent border border-border text-muted rounded-lg py-3 text-sm font-medium text-center hover:border-muted hover:text-white transition-colors"
            >
              Learn More →
            </a>
          </div>
        </div>

              </div>
    </section>
  );
}
