"use client";

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

export default function WhoWeAre() {
  const statementAnim = useIntersectionObserver(0);
  const columnsAnim = [
    useIntersectionObserver(100),
    useIntersectionObserver(200),
    useIntersectionObserver(300),
  ];

  const fadeInClass = (isVisible: boolean) =>
    `transition-all duration-600 ease-out ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
    }`;

  return (
    <section className="relative px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#08090A', padding: '80px 24px' }}>
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding: 60px 20px !important;
          }
        }
      `}</style>
      <div className="max-w-[1200px] mx-auto">
        {/* Top Statement */}
        <div ref={statementAnim.ref} className={fadeInClass(statementAnim.isVisible)}>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold leading-[1.15] mb-12">
            <span className="block text-white">A new generation of AI systems</span>
            <span className="block text-muted">
              Purpose built for industries
              <br className="hidden sm:block" />
              with real business context at the core.
            </span>
          </h2>
        </div>

        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-12">
          {/* Column 1 — Indian First */}
          <div
            ref={columnsAnim[0].ref}
            className={`${fadeInClass(columnsAnim[0].isVisible)}`}
          >
            <div className="mb-6">
              <p className="text-xs text-muted tracking-[0.1em] mb-6">FIG 0.1</p>
              <div className="h-[200px] flex items-center justify-center">
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                  {/* Outer circle */}
                  <circle cx="100" cy="100" r="80" stroke="#1E2235" strokeWidth="1" />
                  {/* Inner circle */}
                  <circle cx="100" cy="100" r="50" stroke="#1E2235" strokeWidth="1" />
                  {/* Location dot */}
                  <circle cx="100" cy="100" r="6" fill="#7C3AED" />
                  {/* Cross lines */}
                  <line x1="20" y1="100" x2="180" y2="100" stroke="#1E2235" strokeWidth="0.5" />
                  <line x1="100" y1="20" x2="100" y2="180" stroke="#1E2235" strokeWidth="0.5" />
                  {/* Accent arc */}
                  <path
                    d="M 60 60 Q 100 30 140 60"
                    stroke="#7C3AED"
                    strokeWidth="1"
                    fill="none"
                    opacity="0.6"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-base font-semibold text-white mb-2">Industry Focused</h3>
            <p className="text-sm text-muted leading-relaxed">
              Jupiter AI is built around specific industries, workflows, and business operations instead of generic use cases and broad automation.
            </p>
          </div>

          {/* Column 2 — Revenue Focused */}
          <div
            ref={columnsAnim[1].ref}
            className={`${fadeInClass(columnsAnim[1].isVisible)}`}
          >
            <div className="mb-6">
              <p className="text-xs text-muted tracking-[0.1em] mb-6">FIG 0.2</p>
              <div className="h-[200px] flex items-center justify-center">
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                  {/* Grid lines */}
                  <line x1="40" y1="40" x2="40" y2="160" stroke="#1E2235" strokeWidth="1" />
                  <line x1="40" y1="160" x2="160" y2="160" stroke="#1E2235" strokeWidth="1" />
                  {/* Horizontal grid */}
                  <line
                    x1="40"
                    y1="120"
                    x2="160"
                    y2="120"
                    stroke="#1E2235"
                    strokeWidth="0.5"
                    strokeDasharray="4 4"
                  />
                  <line
                    x1="40"
                    y1="80"
                    x2="160"
                    y2="80"
                    stroke="#1E2235"
                    strokeWidth="0.5"
                    strokeDasharray="4 4"
                  />
                  {/* Growth line */}
                  <path
                    d="M 40 150 L 80 130 L 110 100 L 140 70 L 160 50"
                    stroke="#7C3AED"
                    strokeWidth="2"
                    fill="none"
                  />
                  {/* Dots on line */}
                  <circle cx="40" cy="150" r="3" fill="#7C3AED" />
                  <circle cx="80" cy="130" r="3" fill="#7C3AED" />
                  <circle cx="110" cy="100" r="3" fill="#7C3AED" />
                  <circle cx="140" cy="70" r="3" fill="#7C3AED" />
                  <circle cx="160" cy="50" r="3" fill="#7C3AED" />
                  {/* Rupee symbol */}
                  <text x="155" y="45" fill="#7C3AED" fontSize="12" fontFamily="Inter, sans-serif">
                    ₹
                  </text>
                </svg>
              </div>
            </div>
            <h3 className="text-base font-semibold text-white mb-2">Business Context</h3>
            <p className="text-sm text-muted leading-relaxed">
              Every system is designed to understand how businesses actually work from workflow decisions to operational requirements and execution.
            </p>
          </div>

          {/* Column 3 — Vertical AI */}
          <div
            ref={columnsAnim[2].ref}
            className={`${fadeInClass(columnsAnim[2].isVisible)}`}
          >
            <div className="mb-6">
              <p className="text-xs text-muted tracking-[0.1em] mb-6">FIG 0.3</p>
              <div className="h-[200px] flex items-center justify-center">
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                  {/* Layer 1 bottom */}
                  <rect
                    x="60"
                    y="150"
                    width="80"
                    height="12"
                    rx="2"
                    stroke="#1E2235"
                    strokeWidth="1"
                    fill="none"
                  />
                  {/* Layer 2 */}
                  <rect
                    x="50"
                    y="132"
                    width="100"
                    height="12"
                    rx="2"
                    stroke="#1E2235"
                    strokeWidth="1"
                    fill="none"
                  />
                  {/* Layer 3 */}
                  <rect
                    x="40"
                    y="114"
                    width="120"
                    height="12"
                    rx="2"
                    stroke="#1E2235"
                    strokeWidth="1"
                    fill="none"
                  />
                  {/* Layer 4 accent */}
                  <rect
                    x="30"
                    y="96"
                    width="140"
                    height="12"
                    rx="2"
                    stroke="#7C3AED"
                    strokeWidth="1.5"
                    fill="rgba(124,58,237,0.05)"
                  />
                  {/* Layer 5 */}
                  <rect
                    x="40"
                    y="78"
                    width="120"
                    height="12"
                    rx="2"
                    stroke="#1E2235"
                    strokeWidth="1"
                    fill="none"
                  />
                  {/* Layer 6 top */}
                  <rect
                    x="50"
                    y="60"
                    width="100"
                    height="12"
                    rx="2"
                    stroke="#1E2235"
                    strokeWidth="1"
                    fill="none"
                  />
                  {/* Vertical line connecting */}
                  <line
                    x1="100"
                    y1="55"
                    x2="100"
                    y2="40"
                    stroke="#7C3AED"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                  />
                  {/* Top dot */}
                  <circle cx="100" cy="38" r="4" fill="#7C3AED" />
                </svg>
              </div>
            </div>
            <h3 className="text-base font-semibold text-white mb-2">Vertical AI</h3>
            <p className="text-sm text-muted leading-relaxed">
              We go deep into one industry at a time. Focused intelligence creates stronger systems than generic AI built for everyone.
            </p>
          </div>
        </div>

        {/* Subtle Divider */}
        <div className="mt-20 border-t border-border" />
      </div>
    </section>
  );
}
