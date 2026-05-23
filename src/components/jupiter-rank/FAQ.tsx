"use client";

import { useEffect, useRef, useState } from "react";

const FAQS = [
  {
    q: "Do I need SEO or technical knowledge?",
    a: "No. Jupiter Rank is built for business owners, marketers, and growing brands. Every recommendation is simple, clear, and actionable.",
  },
  {
    q: "What data sources does Jupiter Rank use?",
    a: "Jupiter Rank analyzes Google Search Console data, website crawl insights, keyword rankings, and page level performance.",
  },
  {
    q: "Is my business data secure?",
    a: "Yes. We use secure authentication and official integrations. Your credentials are never stored and access can be removed anytime.",
  },
  {
    q: "Which platforms does Jupiter Rank support?",
    a: "Jupiter Rank supports Shopify, WordPress, WooCommerce, Webflow, and most modern website platforms.",
  },
  {
    q: "How quickly can I see insights?",
    a: "Most businesses start receiving actionable insights within minutes after connecting their data.",
  },
  {
    q: "Is Jupiter Rank only for fashion brands?",
    a: "Fashion is our first vertical. Jupiter AI is expanding into more industry focused systems over time.",
  },
  {
    q: "Can Jupiter Rank replace multiple SEO tools?",
    a: "Jupiter Rank combines insights, recommendations, and growth planning into one focused workflow.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. You can cancel anytime with no long term commitment.",
  },
];

function FAQItem({
  q,
  a,
  index,
  open,
  onToggle,
  visible,
}: {
  q: string;
  a: string;
  index: number;
  open: boolean;
  onToggle: () => void;
  visible: boolean;
}) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (bodyRef.current) {
      setHeight(open ? bodyRef.current.scrollHeight : 0);
    }
  }, [open]);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${index * 60}ms, transform 0.5s ease ${index * 60}ms`,
        background: open
          ? "linear-gradient(135deg, rgba(124,58,237,0.06) 0%, rgba(15,17,23,0.95) 100%)"
          : "rgba(13,15,28,0.7)",
        border: open ? "1px solid rgba(124,58,237,0.35)" : "1px solid rgba(30,34,53,0.8)",
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
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "22px 28px",
          background: "none",
          border: "none",
          cursor: "pointer",
          gap: "16px",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontSize: "1rem",
            fontWeight: 600,
            color: open ? "white" : "#C7D4F0",
            lineHeight: 1.4,
            transition: "color 0.2s",
            flex: 1,
          }}
        >
          {q}
        </span>

        {/* Chevron */}
        <span
          style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            border: open ? "1px solid rgba(124,58,237,0.5)" : "1px solid rgba(30,34,53,1)",
            background: open ? "rgba(124,58,237,0.15)" : "rgba(13,15,28,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "all 0.25s ease",
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            style={{
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <path
              d="M2 4L6 8L10 4"
              stroke={open ? "#A78BFA" : "#8892A4"}
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {/* Animated answer body */}
      <div
        style={{
          height: `${height}px`,
          overflow: "hidden",
          transition: "height 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div ref={bodyRef}>
          <div
            style={{
              padding: "0 28px 22px 28px",
              borderTop: "1px solid rgba(30,34,53,0.6)",
              paddingTop: "18px",
            }}
          >
            <p
              style={{
                fontSize: "0.9rem",
                color: "#8892A4",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              {a}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        backgroundColor: "#08090A",
        padding: "100px 24px",
        overflow: "hidden",
        borderTop: "1px solid #1E2235",
      }}
    >
      {/* Animated background glow */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "300px",
          background:
            "radial-gradient(ellipse at center, rgba(124,58,237,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(40px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          right: "10%",
          width: "300px",
          height: "200px",
          background:
            "radial-gradient(ellipse at center, rgba(167,139,250,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(60px)",
        }}
      />

      <div style={{ maxWidth: "760px", margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "64px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <p
            style={{
              fontSize: "0.72rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "#7C3AED",
              marginBottom: "16px",
            }}
          >
            FAQ
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.2,
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Frequently Asked{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #A78BFA, #7C3AED)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
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
        <div
          style={{
            textAlign: "center",
            marginTop: "56px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s",
          }}
        >
          <p style={{ fontSize: "0.9rem", color: "#8892A4", marginBottom: "20px" }}>
            Still have questions?
          </p>
          <a
            href="mailto:info@jupiter-ai.co"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 28px",
              background: "rgba(124,58,237,0.12)",
              border: "1px solid rgba(124,58,237,0.35)",
              borderRadius: "10px",
              color: "#A78BFA",
              fontSize: "0.875rem",
              fontWeight: 500,
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "rgba(124,58,237,0.2)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "rgba(124,58,237,0.6)";
              (e.currentTarget as HTMLAnchorElement).style.color = "white";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "rgba(124,58,237,0.12)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "rgba(124,58,237,0.35)";
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
