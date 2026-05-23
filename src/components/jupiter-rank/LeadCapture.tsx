"use client";

import { useEffect, useRef, useState } from "react";

const inputBase: React.CSSProperties = {
  width: "100%",
  background: "rgba(13,15,28,0.8)",
  border: "1px solid rgba(30,34,53,0.9)",
  borderRadius: "10px",
  padding: "12px 16px",
  fontSize: "0.875rem",
  color: "white",
  outline: "none",
  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
  boxSizing: "border-box",
  appearance: "none",
};

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <label
        style={{
          fontSize: "0.75rem",
          fontWeight: 500,
          color: "#8892A4",
          letterSpacing: "0.04em",
        }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function Input({
  placeholder,
  type = "text",
  value,
  onChange,
}: {
  placeholder: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        ...inputBase,
        borderColor: focused ? "rgba(124,58,237,0.6)" : "rgba(30,34,53,0.9)",
        boxShadow: focused ? "0 0 0 3px rgba(124,58,237,0.1)" : "none",
      }}
    />
  );
}

function Select({
  placeholder,
  options,
  value,
  onChange,
}: {
  placeholder: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        ...inputBase,
        borderColor: focused ? "rgba(124,58,237,0.6)" : "rgba(30,34,53,0.9)",
        boxShadow: focused ? "0 0 0 3px rgba(124,58,237,0.1)" : "none",
        color: value ? "white" : "#8892A4",
        cursor: "pointer",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M2 4L6 8L10 4' stroke='%238892A4' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 14px center",
        paddingRight: "36px",
      }}
    >
      <option value="" disabled hidden>
        {placeholder}
      </option>
      {options.map((o) => (
        <option key={o} value={o} style={{ background: "#0D0F1C", color: "white" }}>
          {o}
        </option>
      ))}
    </select>
  );
}

function Textarea({
  placeholder,
  value,
  onChange,
}: {
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      rows={3}
      style={{
        ...inputBase,
        borderColor: focused ? "rgba(124,58,237,0.6)" : "rgba(30,34,53,0.9)",
        boxShadow: focused ? "0 0 0 3px rgba(124,58,237,0.1)" : "none",
        resize: "vertical",
        fontFamily: "inherit",
        lineHeight: 1.6,
      }}
    />
  );
}

const TRUST = [
  "No credit card required",
  "Setup in under 5 minutes",
  "Real data. Real insights.",
];

export default function LeadCapture() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [hovering, setHovering] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    brand: "",
    website: "",
    traffic: "",
    platform: "",
    goal: "",
    helpWith: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const set = (key: keyof typeof form) => (v: string) =>
    setForm((prev) => ({ ...prev, [key]: v }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.06 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'jupiter-rank-demo',
          sourcePage: '/fashion-ai/jupiter-rank',
          name: form.name,
          email: form.email,
          businessName: form.brand,
          website: form.website,
          industry: null,
          message: form.helpWith,
          metadata: {
            traffic: form.traffic,
            platform: form.platform,
            goal: form.goal,
          },
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        // Reset form
        setForm({
          name: "",
          email: "",
          brand: "",
          website: "",
          traffic: "",
          platform: "",
          goal: "",
          helpWith: "",
        });
      } else {
        setSubmitError(data.error || 'Something went wrong. Please try again.');
        console.error('Lead submission error:', data);
      }
    } catch (err) {
      setSubmitError('Failed to submit. Please check your connection and try again.');
      console.error('Lead submission failed:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

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
      {/* Background glows */}
      <div
        style={{
          position: "absolute",
          top: "0%",
          left: "25%",
          width: "500px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(124,58,237,0.09) 0%, transparent 65%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "350px",
          height: "300px",
          background:
            "radial-gradient(ellipse, rgba(167,139,250,0.06) 0%, transparent 65%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "center",
          }}
          className="lead-grid"
        >
          {/* LEFT — messaging */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "#7C3AED",
                marginBottom: "20px",
              }}
            >
              GET STARTED
            </p>

            <h2
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                fontWeight: 800,
                color: "white",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                marginBottom: "20px",
              }}
            >
              Ready to grow your fashion brand with{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #A78BFA, #7C3AED)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                better search data?
              </span>
            </h2>

            <p
              style={{
                fontSize: "0.95rem",
                color: "#8892A4",
                lineHeight: 1.75,
                marginBottom: "40px",
                maxWidth: "420px",
              }}
            >
              Connect with the Jupiter Rank team and discover ranking
              opportunities, traffic insights, and growth actions using your
              real business data.
            </p>

            {/* Trust signals */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {TRUST.map((t) => (
                <div
                  key={t}
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      background: "rgba(16,185,129,0.12)",
                      border: "1px solid rgba(16,185,129,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M2 5L4.2 7.2L8 3"
                        stroke="#10B981"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span style={{ fontSize: "0.875rem", color: "#C7D4F0" }}>{t}</span>
                </div>
              ))}
            </div>

            {/* Decorative separator */}
            <div
              style={{
                marginTop: "48px",
                padding: "20px 24px",
                background: "rgba(124,58,237,0.05)",
                border: "1px solid rgba(124,58,237,0.15)",
                borderRadius: "12px",
              }}
            >
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#A78BFA",
                  fontWeight: 500,
                  marginBottom: "6px",
                }}
              >
                ✦ Trusted by Indian fashion brands
              </p>
              <p style={{ fontSize: "0.8rem", color: "#8892A4", lineHeight: 1.6 }}>
                From kurta labels to multi-category D2C stores — Jupiter Rank
                surfaces the exact opportunities your brand is missing.
              </p>
            </div>
          </div>

          {/* RIGHT — form card */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
            }}
          >
            <div
              style={{
                background:
                  "linear-gradient(145deg, rgba(13,15,28,0.95) 0%, rgba(8,9,10,0.98) 100%)",
                border: "1px solid rgba(30,34,53,0.9)",
                borderRadius: "20px",
                padding: "36px",
                backdropFilter: "blur(20px)",
                boxShadow:
                  "0 0 0 1px rgba(124,58,237,0.08), 0 24px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.03)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Card inner glow */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "200px",
                  height: "1px",
                  background:
                    "linear-gradient(90deg, transparent, rgba(124,58,237,0.5), transparent)",
                }}
              />

              {submitted ? (
                <div
                  style={{
                    textAlign: "center",
                    padding: "40px 20px",
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      background: "rgba(16,185,129,0.12)",
                      border: "1px solid rgba(16,185,129,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px",
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12L10 17L19 7"
                        stroke="#10B981"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "white",
                      marginBottom: "10px",
                    }}
                  >
                    You're on the list ✦
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "#8892A4", lineHeight: 1.7 }}>
                    The Jupiter Rank team will reach out within 1 business day
                    to schedule your free demo.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{ display: "flex", flexDirection: "column", gap: "18px" }}
                >
                  <div>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 700,
                        color: "white",
                        marginBottom: "4px",
                      }}
                    >
                      Book a Free Demo
                    </p>
                    <p style={{ fontSize: "0.8rem", color: "#8892A4" }}>
                      Takes 2 minutes. No commitment.
                    </p>
                  </div>

                  {/* Row 1 */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                    <Field label="Full Name">
                      <Input
                        placeholder="Your name"
                        value={form.name}
                        onChange={set("name")}
                      />
                    </Field>
                    <Field label="Work Email">
                      <Input
                        placeholder="you@brand.com"
                        type="email"
                        value={form.email}
                        onChange={set("email")}
                      />
                    </Field>
                  </div>

                  {/* Row 2 */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                    <Field label="Brand Name">
                      <Input
                        placeholder="Your brand"
                        value={form.brand}
                        onChange={set("brand")}
                      />
                    </Field>
                    <Field label="Website URL">
                      <Input
                        placeholder="yourbrand.com"
                        value={form.website}
                        onChange={set("website")}
                      />
                    </Field>
                  </div>

                  {/* Row 3 */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                    <Field label="Monthly Website Traffic">
                      <Select
                        placeholder="Select range"
                        value={form.traffic}
                        onChange={set("traffic")}
                        options={[
                          "Under 1,000",
                          "1,000 – 5,000",
                          "5,000 – 20,000",
                          "20,000 – 1,00,000",
                          "1,00,000+",
                        ]}
                      />
                    </Field>
                    <Field label="Current Platform">
                      <Select
                        placeholder="Select platform"
                        value={form.platform}
                        onChange={set("platform")}
                        options={[
                          "Shopify",
                          "WordPress",
                          "WooCommerce",
                          "Webflow",
                          "Custom",
                          "Other",
                        ]}
                      />
                    </Field>
                  </div>

                  {/* Row 4 */}
                  <Field label="Main Growth Goal">
                    <Select
                      placeholder="What's your primary goal?"
                      value={form.goal}
                      onChange={set("goal")}
                      options={[
                        "Increase organic traffic",
                        "Improve keyword rankings",
                        "Boost revenue from SEO",
                        "Fix technical issues",
                        "Beat competitors",
                        "Build content strategy",
                      ]}
                    />
                  </Field>

                  {/* Row 5 */}
                  <Field label="What do you want help with?">
                    <Textarea
                      placeholder="Tell us about your brand and what you're looking to improve..."
                      value={form.helpWith}
                      onChange={set("helpWith")}
                    />
                  </Field>

                  {/* Error Message */}
                  {submitError && (
                    <p style={{ fontSize: "0.85rem", color: "#F87171", textAlign: "center", margin: 0 }}>
                      {submitError}
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    onMouseEnter={() => !isSubmitting && setHovering(true)}
                    onMouseLeave={() => setHovering(false)}
                    style={{
                      width: "100%",
                      padding: "14px 24px",
                      background: isSubmitting
                        ? "linear-gradient(135deg, rgba(124,58,237,0.5), rgba(91,33,182,0.5))"
                        : hovering
                          ? "linear-gradient(135deg, #8B5CF6, #6D28D9)"
                          : "linear-gradient(135deg, #7C3AED, #5B21B6)",
                      border: "none",
                      borderRadius: "10px",
                      color: "white",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                      transition: "all 0.2s ease",
                      boxShadow: hovering && !isSubmitting
                        ? "0 0 24px rgba(124,58,237,0.5), 0 4px 16px rgba(0,0,0,0.3)"
                        : "0 0 0 1px rgba(124,58,237,0.3), 0 4px 16px rgba(0,0,0,0.2)",
                      transform: hovering && !isSubmitting ? "translateY(-1px)" : "translateY(0)",
                      letterSpacing: "0.01em",
                      opacity: isSubmitting ? 0.7 : 1,
                    }}
                  >
                    {isSubmitting ? (
                      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                        <span style={{
                          width: "16px",
                          height: "16px",
                          borderRadius: "50%",
                          border: "2px solid rgba(255,255,255,0.3)",
                          borderTopColor: "white",
                          animation: "spin 0.7s linear infinite"
                        }} />
                        Submitting...
                      </span>
                    ) : (
                      "Book a Free Demo →"
                    )}
                  </button>

                  <p
                    style={{
                      fontSize: "0.72rem",
                      color: "#8892A4",
                      textAlign: "center",
                      lineHeight: 1.6,
                    }}
                  >
                    By submitting, you agree to be contacted by the Jupiter AI
                    team.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @media (max-width: 768px) {
          section {
            padding: 60px 20px !important;
          }
          .lead-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
