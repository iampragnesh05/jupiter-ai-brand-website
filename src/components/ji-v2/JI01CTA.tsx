"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function JI01CTA() {
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
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden w-full"
      style={{ paddingTop: "200px", paddingBottom: "200px" }}
    >
      {/* ── Background: deep dark with a single centered purple breath ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Top divider */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2"
          style={{
            width: "480px",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(124,58,237,0.25) 50%, transparent 100%)",
          }}
        />

        {/* Central ambient glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "800px",
            height: "600px",
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(124,58,237,0.09) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Subtle dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(124,58,237,0.12) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            opacity: 0.15,
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">

        {/* Logo */}
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
            marginBottom: "48px",
          }}
        >
          <Image
            src="/logo/jupiter-ai-coloured-wordmark.svg"
            alt="Jupiter AI"
            width={140}
            height={38}
            priority
            className="opacity-80 hover:opacity-100 transition-opacity duration-300 mx-auto"
          />
        </div>

        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-8"
          style={{
            background: "rgba(124,58,237,0.10)",
            border: "1px solid rgba(124,58,237,0.25)",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.9s ease 100ms, transform 0.9s ease 100ms",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: "#22C55E",
              boxShadow: "0 0 8px rgba(34,197,94,0.9)",
              animation: "pulse 2s infinite",
            }}
          />
          <span
            style={{
              color: "#A78BFA",
              fontSize: "0.6875rem",
              fontWeight: 700,
              letterSpacing: "0.13em",
              textTransform: "uppercase",
            }}
          >
            Strategy Sessions Now Open
          </span>
        </div>

        {/* H2 */}
        <h2
          className="font-extrabold text-white leading-[1.05] tracking-tight mb-8"
          style={{
            fontSize: "clamp(2.4rem, 5vw, 4rem)",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.9s ease 200ms, transform 0.9s ease 200ms",
          }}
        >
          Ready to deploy your{" "}
          <span
            style={{
              background:
                "linear-gradient(135deg, #C4B5FD 0%, #A78BFA 40%, #7C3AED 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            revenue infrastructure?
          </span>
        </h2>

        {/* Subtext */}
        <p
          className="mb-12"
          style={{
            color: "#8892A4",
            fontSize: "1.0625rem",
            lineHeight: 1.82,
            maxWidth: "560px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.9s ease 300ms, transform 0.9s ease 300ms",
          }}
        >
          We&apos;ll map where your revenue leaks, where automation can recover
          growth, and what an AI-native commerce system would look like for your
          brand.
        </p>

        {/* CTA Button */}
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.9s ease 400ms, transform 0.9s ease 400ms",
          }}
        >
          <a
            id="ji01-final-cta"
            href="YOUR_CALENDLY_LINK"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #6D28D9)",
              boxShadow:
                "0 0 40px rgba(124,58,237,0.40), 0 6px 20px rgba(0,0,0,0.5)",
              borderRadius: "14px",
              padding: "18px 40px",
              fontSize: "1rem",
              fontWeight: 700,
              color: "white",
              letterSpacing: "0.01em",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.boxShadow =
                "0 0 60px rgba(124,58,237,0.65), 0 8px 28px rgba(0,0,0,0.65)";
              el.style.transform = "translateY(-3px) scale(1.02)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.boxShadow =
                "0 0 40px rgba(124,58,237,0.40), 0 6px 20px rgba(0,0,0,0.5)";
              el.style.transform = "";
            }}
          >
            Book AI Growth Strategy Session
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Trust footer */}
        <div
          className="mt-10 flex flex-wrap justify-center items-center gap-x-5 gap-y-2"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.9s ease 550ms, transform 0.9s ease 550ms",
          }}
        >
          {[
            "30 stores built",
            "5 years experience",
            "Indian brands only",
            "info@jupiter-ai.co",
          ].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-2"
              style={{
                color: "#8892A4",
                fontSize: "0.8125rem",
              }}
            >
              {i > 0 && (
                <span
                  style={{
                    color: "rgba(124,58,237,0.4)",
                    fontSize: "0.5rem",
                  }}
                >
                  ●
                </span>
              )}
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
