
"use client";

import { useEffect, useRef, useState } from "react";

function useCardVisible(delay: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return { ref, visible };
}

interface CardProps {
  children: React.ReactNode;
  colSpan: string;
  delay: number;
}

function Card({ children, colSpan, delay }: CardProps) {
  const { ref, visible } = useCardVisible(delay);
  return (
    <div
      ref={ref}
      className={`${colSpan} group`}
      style={{
        background: "#0F1117",
        border: "1px solid #1E2235",
        borderRadius: "16px",
        padding: "28px",
        overflow: "hidden",
        position: "relative",
        transition: "border-color 0.2s ease, box-shadow 0.2s ease, opacity 0.5s ease, transform 0.5s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(124,58,237,0.4)";
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 0 0 1px rgba(124,58,237,0.3), 0 8px 32px rgba(124,58,237,0.08)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "#1E2235";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      {children}
    </div>
  );
}

function FeatureMeta({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <>
      <p
        style={{
          fontSize: "0.7rem",
          color: "#7C3AED",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          fontWeight: 600,
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontSize: "1.15rem",
          fontWeight: 700,
          color: "white",
          margin: "8px 0",
          lineHeight: 1.3,
          whiteSpace: "pre-line",
        }}
      >
        {title}
      </p>
      <p
        style={{
          fontSize: "0.875rem",
          color: "#8892A4",
          lineHeight: 1.6,
        }}
      >
        {description}
      </p>
    </>
  );
}

function FeatureMetaSmall({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <>
      <p
        style={{
          fontSize: "0.7rem",
          color: "#7C3AED",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          fontWeight: 600,
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontSize: "1rem",
          fontWeight: 700,
          color: "white",
          margin: "8px 0",
          lineHeight: 1.3,
          whiteSpace: "pre-line",
        }}
      >
        {title}
      </p>
      <p style={{ fontSize: "0.82rem", color: "#8892A4", lineHeight: 1.5 }}>
        {description}
      </p>
    </>
  );
}

export default function WhatItDoes() {
  return (
    <section
      style={{
        backgroundColor: "#08090A",
        padding: "80px 24px",
      }}
    >
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding: 60px 20px !important;
          }
          .bento-grid {
            display: flex !important;
            flex-direction: column !important;
          }
          .bento-grid > div {
            width: 100% !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section header */}
        <p
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "#7C3AED",
            marginBottom: "16px",
          }}
        >
          WHAT YOU GET
        </p>
        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            color: "white",
            lineHeight: 1.2,
            marginBottom: "48px",
          }}
        >
          Everything your brand needs
          <br />
          to rank and grow.
        </h2>

        {/* Bento grid */}
        <div
          className="bento-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "16px",
          }}
        >
          {/* CARD 1 — AI Mentor Chat (large, span 7, row 2) */}
          <Card colSpan="col-span-12 lg:col-span-7 lg:row-span-2" delay={0}>
            <div style={{ height: "180px", marginBottom: "24px", overflow: "hidden" }}>
              <svg width="100%" height="180" viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="180" fill="#131620" rx="8" />
                <rect width="400" height="36" fill="#0D0F1C" rx="8" />
                <rect width="400" height="28" y="8" fill="#0D0F1C" />
                <circle cx="20" cy="18" r="6" fill="#7C3AED" />
                <rect x="32" y="13" width="60" height="10" rx="2" fill="#1E2235" />
                <rect x="220" y="50" width="160" height="32" rx="12" fill="#7C3AED" />
                <path d="M 375 70 L 385 78 L 370 78" fill="#7C3AED" />
                <rect x="232" y="59" width="100" height="6" rx="3" fill="rgba(255,255,255,0.4)" />
                <rect x="232" y="69" width="70" height="6" rx="3" fill="rgba(255,255,255,0.3)" />
                <rect x="16" y="96" width="200" height="60" rx="12" fill="#131620" stroke="#1E2235" strokeWidth="1" />
                <path d="M 21 138 L 8 145 L 21 145" fill="#131620" />
                <rect x="16" y="86" width="50" height="8" rx="2" fill="#1E2235" />
                <circle cx="10" cy="90" r="3" fill="#A78BFA" />
                <rect x="28" y="106" width="140" height="6" rx="3" fill="#8892A4" />
                <rect x="28" y="116" width="160" height="6" rx="3" fill="#8892A4" />
                <rect x="28" y="130" width="80" height="14" rx="4" fill="rgba(167,139,250,0.15)" />
                <rect x="32" y="134" width="60" height="6" rx="3" fill="#A78BFA" />
                <rect x="16" y="164" width="60" height="10" rx="5" fill="#131620" stroke="#1E2235" strokeWidth="1" />
                <circle cx="28" cy="169" r="2.5" fill="#8892A4" />
                <circle cx="36" cy="169" r="2.5" fill="#8892A4" opacity="0.6" />
                <circle cx="44" cy="169" r="2.5" fill="#8892A4" opacity="0.3" />
                <ellipse cx="200" cy="90" rx="150" ry="60" fill="rgba(124,58,237,0.04)" />
              </svg>
            </div>
            <FeatureMeta
              label="AI MENTOR CHAT"
              title={"Ask anything. Get answers\nfrom your real data."}
              description="Jupiter reads your GSC data, website crawl, and brand context before answering. Every response references your specific pages, keywords, and rupee impact."
            />
          </Card>

          {/* CARD 2 — Real GSC Data (span 5) */}
          <Card colSpan="col-span-12 lg:col-span-5" delay={50}>
            <div style={{ height: "100px", marginBottom: "20px", overflow: "hidden" }}>
              <svg width="100%" height="100" viewBox="0 0 300 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="30" width="80" height="22" rx="11" fill="rgba(124,58,237,0.15)" stroke="rgba(124,58,237,0.3)" strokeWidth="1" />
                <rect x="15" y="38" width="60" height="6" rx="3" fill="#7C3AED" opacity="0.6" />
                <rect x="100" y="10" width="100" height="22" rx="11" fill="rgba(167,139,250,0.1)" stroke="rgba(167,139,250,0.2)" strokeWidth="1" />
                <rect x="108" y="18" width="75" height="6" rx="3" fill="#A78BFA" opacity="0.5" />
                <rect x="210" y="25" width="80" height="22" rx="11" fill="rgba(124,58,237,0.08)" stroke="rgba(124,58,237,0.2)" strokeWidth="1" />
                <rect x="218" y="33" width="55" height="6" rx="3" fill="#7C3AED" opacity="0.4" />
                <rect x="30" y="65" width="90" height="22" rx="11" fill="rgba(167,139,250,0.12)" stroke="rgba(167,139,250,0.25)" strokeWidth="1" />
                <rect x="38" y="73" width="65" height="6" rx="3" fill="#A78BFA" opacity="0.5" />
                <rect x="140" y="60" width="110" height="22" rx="11" fill="rgba(124,58,237,0.1)" stroke="rgba(124,58,237,0.2)" strokeWidth="1" />
                <rect x="148" y="68" width="80" height="6" rx="3" fill="#7C3AED" opacity="0.4" />
                <text x="260" y="20" fill="#10B981" fontSize="10" fontFamily="monospace">#3</text>
                <text x="260" y="50" fill="#F59E0B" fontSize="10" fontFamily="monospace">#14</text>
                <text x="260" y="80" fill="#8892A4" fontSize="10" fontFamily="monospace">#21</text>
              </svg>
            </div>
            <FeatureMetaSmall
              label="REAL GSC DATA"
              title={"Your actual keywords.\nYour real positions."}
              description="90 days of real Search Console data. Every keyword you rank for. Every page."
            />
          </Card>

          {/* CARD 3 — Rupee Impact (span 5) */}
          <Card colSpan="col-span-12 lg:col-span-5" delay={100}>
            <div style={{ height: "100px", marginBottom: "20px", overflow: "hidden" }}>
              <svg width="100%" height="100" viewBox="0 0 300 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="50" r="35" fill="rgba(167,139,250,0.08)" stroke="rgba(167,139,250,0.2)" strokeWidth="1" />
                <text x="150" y="57" textAnchor="middle" fill="#A78BFA" fontSize="28" fontFamily="Inter" fontWeight="700">₹</text>
                <circle cx="150" cy="50" r="45" fill="none" stroke="rgba(167,139,250,0.08)" strokeWidth="1" />
                <circle cx="150" cy="50" r="55" fill="none" stroke="rgba(167,139,250,0.04)" strokeWidth="1" />
                <text x="20" y="30" fill="#10B981" fontSize="11" fontFamily="monospace" fontWeight="600">+₹45K</text>
                <text x="230" y="25" fill="#A78BFA" fontSize="11" fontFamily="monospace" fontWeight="600">+₹28K</text>
                <text x="40" y="80" fill="#7C3AED" fontSize="11" fontFamily="monospace" fontWeight="600">+₹18K</text>
                <text x="210" y="82" fill="#10B981" fontSize="11" fontFamily="monospace" fontWeight="600">+₹12K</text>
                <line x1="115" y1="35" x2="55" y2="22" stroke="rgba(167,139,250,0.2)" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="185" y1="35" x2="248" y2="18" stroke="rgba(167,139,250,0.2)" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="120" y1="65" x2="65" y2="75" stroke="rgba(167,139,250,0.2)" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="180" y1="65" x2="228" y2="75" stroke="rgba(167,139,250,0.2)" strokeWidth="1" strokeDasharray="3 3" />
              </svg>
            </div>
            <FeatureMetaSmall
              label="RUPEE IMPACT"
              title={"Every fix has a\nrupee value attached."}
              description="Not position numbers. Real money your business can earn from each improvement."
            />
          </Card>

          {/* CARD 4 — 90-day Roadmap (span 7) */}
          <Card colSpan="col-span-12 lg:col-span-7" delay={150}>
            <div style={{ height: "80px", marginBottom: "20px", overflow: "hidden" }}>
              <svg width="100%" height="80" viewBox="0 0 500 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="40" y1="35" x2="460" y2="35" stroke="#1E2235" strokeWidth="2" />
                <line x1="40" y1="35" x2="180" y2="35" stroke="#10B981" strokeWidth="2" />
                <circle cx="40" cy="35" r="8" fill="#10B981" />
                <circle cx="40" cy="35" r="4" fill="white" />
                <text x="40" y="58" textAnchor="middle" fill="#10B981" fontSize="10" fontFamily="Inter">Month 1</text>
                <text x="40" y="70" textAnchor="middle" fill="#8892A4" fontSize="9" fontFamily="Inter">Foundation</text>
                <circle cx="250" cy="35" r="8" fill="#0F1117" stroke="#F59E0B" strokeWidth="2" />
                <circle cx="250" cy="35" r="4" fill="#F59E0B" />
                <text x="250" y="58" textAnchor="middle" fill="#F59E0B" fontSize="10" fontFamily="Inter">Month 2</text>
                <text x="250" y="70" textAnchor="middle" fill="#8892A4" fontSize="9" fontFamily="Inter">Convert</text>
                <circle cx="460" cy="35" r="8" fill="#0F1117" stroke="#7C3AED" strokeWidth="2" />
                <circle cx="460" cy="35" r="4" fill="#7C3AED" opacity="0.5" />
                <text x="460" y="58" textAnchor="middle" fill="#7C3AED" fontSize="10" fontFamily="Inter">Month 3</text>
                <text x="460" y="70" textAnchor="middle" fill="#8892A4" fontSize="9" fontFamily="Inter">Authority</text>
                <path d="M 455 31 L 463 35 L 455 39" fill="#7C3AED" opacity="0.5" />
              </svg>
            </div>
            <FeatureMetaSmall
              label="90-DAY ROADMAP"
              title={"A complete plan.\nNot just a report."}
              description="One click generates a full 90-day growth plan for any page. SEO, CRO, and content strategy combined with rupee projections."
            />
          </Card>

          {/* CARD 5 — Platform Specific (span 5) */}
          <Card colSpan="col-span-12 lg:col-span-5" delay={200}>
            <div style={{ height: "100px", marginBottom: "20px", overflow: "hidden" }}>
              <svg width="100%" height="100" viewBox="0 0 300 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="70" height="24" rx="6" fill="rgba(149,191,71,0.1)" stroke="rgba(149,191,71,0.3)" strokeWidth="1" />
                <circle cx="24" cy="22" r="6" fill="#95BF47" opacity="0.8" />
                <rect x="34" y="19" width="35" height="6" rx="3" fill="#95BF47" opacity="0.5" />
                <rect x="10" y="42" width="80" height="24" rx="6" fill="rgba(33,117,155,0.1)" stroke="rgba(33,117,155,0.3)" strokeWidth="1" />
                <circle cx="24" cy="54" r="6" fill="#21759B" opacity="0.8" />
                <rect x="34" y="51" width="45" height="6" rx="3" fill="#21759B" opacity="0.5" />
                <rect x="10" y="74" width="75" height="24" rx="6" fill="rgba(124,58,237,0.1)" stroke="rgba(124,58,237,0.3)" strokeWidth="1" />
                <circle cx="24" cy="86" r="6" fill="#7C3AED" opacity="0.8" />
                <rect x="34" y="83" width="40" height="6" rx="3" fill="#7C3AED" opacity="0.5" />
                <path d="M 105 50 L 130 50" stroke="#1E2235" strokeWidth="1.5" />
                <path d="M 125 45 L 132 50 L 125 55" fill="none" stroke="#1E2235" strokeWidth="1.5" />
                <rect x="145" y="15" width="140" height="8" rx="4" fill="#1E2235" />
                <rect x="145" y="15" width="100" height="8" rx="4" fill="#10B981" opacity="0.6" />
                <rect x="145" y="32" width="140" height="8" rx="4" fill="#1E2235" />
                <rect x="145" y="32" width="70" height="8" rx="4" fill="#7C3AED" opacity="0.4" />
                <rect x="145" y="49" width="140" height="8" rx="4" fill="#1E2235" />
                <rect x="145" y="49" width="40" height="8" rx="4" fill="#F59E0B" opacity="0.4" />
                <text x="272" y="23" fill="#10B981" fontSize="10">✓</text>
                <text x="272" y="40" fill="#8892A4" fontSize="10">...</text>
                <text x="272" y="57" fill="#8892A4" fontSize="10">...</text>
              </svg>
            </div>
            <FeatureMetaSmall
              label="PLATFORM SPECIFIC"
              title={"Steps for your\nexact platform."}
              description="Shopify, WordPress, WooCommerce, Webflow. Jupiter detects your platform and gives the exact steps for your setup."
            />
          </Card>

          {/* CARD 6 — Brand Guidelines (span 5) */}
          <Card colSpan="col-span-12 lg:col-span-5" delay={250}>
            <div style={{ height: "100px", marginBottom: "20px", overflow: "hidden" }}>
              <svg width="100%" height="100" viewBox="0 0 300 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="10" y="22" fill="#8892A4" fontSize="9" fontFamily="Inter">Brand Voice</text>
                <rect x="10" y="28" width="180" height="4" rx="2" fill="#1E2235" />
                <rect x="10" y="28" width="120" height="4" rx="2" fill="#7C3AED" />
                <circle cx="130" cy="30" r="6" fill="#7C3AED" stroke="#0F1117" strokeWidth="2" />
                <text x="10" y="52" fill="#8892A4" fontSize="9" fontFamily="Inter">Price Position</text>
                <rect x="10" y="58" width="180" height="4" rx="2" fill="#1E2235" />
                <rect x="10" y="58" width="80" height="4" rx="2" fill="#A78BFA" />
                <circle cx="90" cy="60" r="6" fill="#A78BFA" stroke="#0F1117" strokeWidth="2" />
                <text x="10" y="82" fill="#8892A4" fontSize="9" fontFamily="Inter">Current Focus</text>
                <rect x="10" y="88" width="180" height="4" rx="2" fill="#1E2235" />
                <rect x="10" y="88" width="150" height="4" rx="2" fill="#10B981" />
                <circle cx="160" cy="90" r="6" fill="#10B981" stroke="#0F1117" strokeWidth="2" />
                <path d="M 230 20 L 230 15 L 265 15 L 265 20 Q 265 50 247 60 Q 230 50 230 20 Z" fill="rgba(124,58,237,0.1)" stroke="rgba(124,58,237,0.3)" strokeWidth="1" />
                <circle cx="247" cy="35" r="6" fill="rgba(124,58,237,0.3)" />
                <rect x="244" y="35" width="6" height="10" rx="1" fill="rgba(124,58,237,0.5)" />
              </svg>
            </div>
            <FeatureMetaSmall
              label="BRAND GUIDELINES"
              title={"Jupiter respects\nyour brand identity."}
              description="Set your voice, pricing position, and constraints. Every recommendation stays true to who your brand is."
            />
          </Card>
        </div>
      </div>
    </section>
  );
}
