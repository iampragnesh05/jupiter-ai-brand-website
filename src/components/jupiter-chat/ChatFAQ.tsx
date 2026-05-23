"use client";

import { useEffect, useRef, useState } from "react";

const FAQS = [
  {
    q: "Is Jupiter Chat live right now?",
    a: "Jupiter Chat is currently in development. You can join the early access waitlist to be notified when it launches and to get first access.",
  },
  {
    q: "Which platforms will Jupiter Chat support?",
    a: "Jupiter Chat will support Shopify, WooCommerce, and custom ecommerce platforms. We are building direct integrations for a seamless setup experience.",
  },
  {
    q: "Does Jupiter Chat understand fashion products?",
    a: "Yes. Jupiter Chat is specifically trained to understand fashion catalogues — sizing, collections, variants, styling queries, and brand-specific product knowledge.",
  },
  {
    q: "Which channels will Jupiter Chat support?",
    a: "At launch, Jupiter Chat will support website chat, WhatsApp, and Instagram DMs. Additional channels will be added over time.",
  },
  {
    q: "Will Jupiter Chat support Indian languages?",
    a: "Yes. Jupiter Chat is built for modern Indian ecommerce brands and will support Hindi, English, Tamil, Telugu, and other regional languages.",
  },
  {
    q: "Can I join early access?",
    a: "Absolutely. Fill out the waitlist form above to secure early access. Early access members get first access, priority onboarding, and launch pricing.",
  },
];

function FAQItem({
  q, a, index, open, onToggle, visible,
}: {
  q: string; a: string; index: number; open: boolean; onToggle: () => void; visible: boolean;
}) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (bodyRef.current) setHeight(open ? bodyRef.current.scrollHeight : 0);
  }, [open]);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${index * 60}ms, transform 0.5s ease ${index * 60}ms`,
        background: open
          ? "linear-gradient(135deg, rgba(124,58,237,0.07) 0%, rgba(13,15,28,0.95) 100%)"
          : "rgba(13,15,28,0.7)",
        border: open ? "1px solid rgba(124,58,237,0.4)" : "1px solid rgba(30,34,53,0.8)",
        borderRadius: "14px",
        overflow: "hidden",
        backdropFilter: "blur(12px)",
        boxShadow: open
          ? "0 0 0 1px rgba(124,58,237,0.15), 0 8px 40px rgba(124,58,237,0.1)"
          : "0 2px 16px rgba(0,0,0,0.3)",
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: "100%", display: "flex", alignItems: "center",
          justifyContent: "space-between", padding: "22px 28px",
          background: "none", border: "none", cursor: "pointer",
          gap: "16px", textAlign: "left",
        }}
      >
        <span style={{
          fontSize: "1rem", fontWeight: 600,
          color: open ? "white" : "#C7D4F0",
          lineHeight: 1.4, transition: "color 0.2s", flex: 1,
        }}>
          {q}
        </span>
        <span style={{
          width: 28, height: 28, borderRadius: "50%",
          border: open ? "1px solid rgba(124,58,237,0.5)" : "1px solid rgba(30,34,53,1)",
          background: open ? "rgba(124,58,237,0.15)" : "rgba(13,15,28,0.8)",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0, transition: "all 0.25s ease",
        }}>
          <svg
            width="12" height="12" viewBox="0 0 12 12" fill="none"
            style={{
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <path d="M2 4L6 8L10 4" stroke={open ? "#A78BFA" : "#8892A4"}
              strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>

      <div style={{
        height: `${height}px`, overflow: "hidden",
        transition: "height 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
      }}>
        <div ref={bodyRef}>
          <div style={{
            padding: "0 28px 22px 28px",
            borderTop: "1px solid rgba(30,34,53,0.6)",
            paddingTop: "18px",
          }}>
            <p style={{ fontSize: "0.9rem", color: "#8892A4", lineHeight: 1.75, margin: 0 }}>
              {a}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ChatFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        backgroundColor: "#08090A",
        padding: "100px 24px",
        overflow: "hidden",
        borderTop: "1px solid rgba(30,34,53,0.6)",
      }}
    >
      {/* Background glows */}
      <div style={{
        position: "absolute", top: "10%", left: "50%",
        transform: "translateX(-50%)",
        width: "600px", height: "300px",
        background: "radial-gradient(ellipse at center, rgba(124,58,237,0.07) 0%, transparent 70%)",
        filter: "blur(40px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "5%", right: "10%",
        width: "300px", height: "200px",
        background: "radial-gradient(ellipse at center, rgba(167,139,250,0.05) 0%, transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "760px", margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div style={{
          textAlign: "center", marginBottom: "64px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}>
          <p style={{
            fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em",
            textTransform: "uppercase", color: "#7C3AED", marginBottom: "16px",
          }}>
            FAQ
          </p>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 800,
            color: "white", lineHeight: 1.2, letterSpacing: "-0.02em", margin: 0,
          }}>
            Frequently Asked{" "}
            <span style={{
              background: "linear-gradient(135deg, #A78BFA, #7C3AED)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Questions
            </span>
          </h2>
        </div>

        {/* Accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {FAQS.map((faq, i) => (
            <FAQItem
              key={i}
              index={i}
              q={faq.q}
              a={faq.a}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              visible={visible}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          textAlign: "center", marginTop: "56px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s",
        }}>
          <p style={{ fontSize: "0.9rem", color: "#8892A4", marginBottom: "20px" }}>
            Have more questions?
          </p>
          <a
            href="mailto:info@jupiter-ai.co"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "12px 28px",
              background: "rgba(124,58,237,0.12)",
              border: "1px solid rgba(124,58,237,0.35)",
              borderRadius: "10px",
              color: "#A78BFA",
              fontSize: "0.875rem", fontWeight: 500,
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(124,58,237,0.2)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(124,58,237,0.6)";
              (e.currentTarget as HTMLAnchorElement).style.color = "white";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(124,58,237,0.12)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(124,58,237,0.35)";
              (e.currentTarget as HTMLAnchorElement).style.color = "#A78BFA";
            }}
          >
            Contact us →
          </a>
        </div>
      </div>
    </section>
  );
}
