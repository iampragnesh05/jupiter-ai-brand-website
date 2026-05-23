"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface Message {
  id: string;
  role: "user" | "jupiter";
  content: string;
  isTeaser?: boolean;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: "init-user",
    role: "user",
    content: "Which page should I fix first?",
  },
  {
    id: "init-jupiter",
    role: "jupiter",
    content: "initial",
  },
];

const SUGGESTED = [
  "Which page should I fix first?",
  "Why is my bounce rate so high?",
  "What keywords am I missing?",
  "How do I beat my competitors?",
  "What is my biggest opportunity?",
];

function parseContent(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} style={{ fontWeight: 700, color: "white" }}>
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

function InitialResponse() {
  return (
    <div style={{ fontSize: "0.875rem", color: "#C7D4F0", lineHeight: 1.7 }}>
      Based on your data, here are your top 3 pages to fix first:
      <br />
      <br />
      <strong style={{ fontWeight: 700, color: "white" }}>
        1. Collections page — ₹45,000/month
      </strong>
      <br />
      Ranking position 3 but getting zero clicks.
      <br />
      Missing meta title. Fix takes 5 minutes.
      <br />
      <br />
      <strong style={{ fontWeight: 700, color: "white" }}>
        2. Homepage — ₹28,000/month
      </strong>
      <br />
      CTR is 2.1% when it should be 8%+.
      <br />
      Meta description needs rewriting.
      <br />
      <br />
      <strong style={{ fontWeight: 700, color: "white" }}>
        3. Blazer Set page — ₹18,000/month
      </strong>
      <br />
      Position 14 with 28 impressions.
      <br />
      Content too thin — needs 200 more words.
      <div
        style={{
          borderTop: "1px solid #1E2235",
          margin: "12px 0",
        }}
      />
      <span
        style={{ fontSize: "0.875rem", fontWeight: 700, color: "#A78BFA" }}
      >
        Total opportunity found: ₹91,000/month
      </span>
    </div>
  );
}

function TeaserResponse() {
  return (
    <div style={{ fontSize: "0.875rem", color: "#C7D4F0", lineHeight: 1.7 }}>
      {parseContent(
        "Great question! To get a personalised answer based on your real website data, connect your Google Search Console to Jupiter Rank.\n\nYour data will show:\n- Which specific pages need fixing\n- Exact rupee impact per recommendation\n- Platform-specific steps for your site\n\n**Ready to see your real opportunities?**"
      )}
      <a
        href="https://jupiterrank.jupiter-ai.co"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "block",
          background: "#7C3AED",
          color: "white",
          borderRadius: "6px",
          padding: "8px 16px",
          fontSize: "0.8rem",
          fontWeight: 500,
          textAlign: "center",
          marginTop: "12px",
          textDecoration: "none",
        }}
      >
        Start free — No card needed →
      </a>
      <a
        href="mailto:info@jupiter-ai.co"
        style={{
          display: "block",
          background: "transparent",
          border: "1px solid #1E2235",
          color: "#8892A4",
          borderRadius: "6px",
          padding: "8px 16px",
          fontSize: "0.8rem",
          textAlign: "center",
          marginTop: "8px",
          textDecoration: "none",
        }}
      >
        Contact us for a demo →
      </a>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <span style={{ fontSize: "0.7rem", color: "#A78BFA", marginBottom: "4px" }}>
        Jupiter ✦
      </span>
      <div
        style={{
          background: "#131620",
          border: "1px solid #1E2235",
          borderRadius: "4px 16px 16px 16px",
          padding: "12px 16px",
          display: "inline-flex",
          gap: "6px",
          alignSelf: "flex-start",
        }}
      >
        {[0, 150, 300].map((delay) => (
          <span
            key={delay}
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#8892A4",
              display: "inline-block",
              animation: `jupiterBounce 1s ease-in-out infinite`,
              animationDelay: `${delay}ms`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function RealOutput() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  const handleSend = useCallback(
    (text?: string) => {
      const value = (text ?? inputValue).trim();
      if (!value || isTyping) return;

      const userMsg: Message = {
        id: Date.now().toString(),
        role: "user",
        content: value,
      };

      setMessages((prev) => [...prev, userMsg]);
      setInputValue("");
      setIsTyping(true);

      setTimeout(() => {
        setIsTyping(false);
        const teaserMsg: Message = {
          id: (Date.now() + 1).toString(),
          role: "jupiter",
          content: "teaser",
          isTeaser: true,
        };
        setMessages((prev) => [...prev, teaserMsg]);
      }, 1200);
    },
    [inputValue, isTyping]
  );

  const handleSuggest = (q: string) => {
    if (isTyping) return;
    handleSend(q);
  };

  return (
    <section
      style={{
        backgroundColor: "#0F1117",
        padding: "80px 24px",
        borderTop: "1px solid #1E2235",
      }}
    >
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding: 60px 20px !important;
          }
          .real-output-grid {
            flex-direction: column-reverse !important;
          }
        }
        @keyframes jupiterBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
      `}</style>

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
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
          REAL OUTPUT
        </p>
        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            color: "white",
            lineHeight: 1.2,
            marginBottom: "8px",
          }}
        >
          See Jupiter Rank
          <br />
          in action.
        </h2>
        <p
          style={{
            fontSize: "0.95rem",
            color: "#8892A4",
            marginBottom: "48px",
            lineHeight: 1.6,
          }}
        >
          This is a real conversation with Jupiter. Try asking anything about
          SEO.
        </p>

        {/* Two-column layout */}
        <div
          className="real-output-grid"
          style={{
            display: "flex",
            gap: "32px",
            alignItems: "flex-start",
          }}
        >
          {/* LEFT PANEL */}
          <div className="hidden md:block" style={{ width: "40%", flexShrink: 0 }}>
            <div
              style={{
                background: "#08090A",
                border: "1px solid #1E2235",
                borderRadius: "12px",
                padding: "24px",
              }}
            >
              <p
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "white",
                  marginBottom: "16px",
                }}
              >
                About this demo
              </p>

              {/* Info rows */}
              <div style={{ marginBottom: "12px" }}>
                <p
                  style={{
                    fontSize: "0.65rem",
                    color: "#8892A4",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: "4px",
                  }}
                >
                  BRAND
                </p>
                <p style={{ fontSize: "0.82rem", color: "#C7D4F0" }}>
                  Indian fashion brand
                </p>
              </div>

              <div style={{ marginBottom: "12px" }}>
                <p
                  style={{
                    fontSize: "0.65rem",
                    color: "#8892A4",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: "4px",
                  }}
                >
                  DATA CONNECTED
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "#10B981",
                      display: "inline-block",
                      flexShrink: 0,
                    }}
                  />
                  <p style={{ fontSize: "0.82rem", color: "#10B981" }}>
                    Google Search Console — Connected
                  </p>
                </div>
              </div>

              <div>
                <p
                  style={{
                    fontSize: "0.65rem",
                    color: "#8892A4",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: "4px",
                  }}
                >
                  PAGES ANALYSED
                </p>
                <p style={{ fontSize: "0.82rem", color: "#C7D4F0" }}>
                  10 pages crawled
                </p>
              </div>

              <div
                style={{ borderTop: "1px solid #1E2235", margin: "20px 0" }}
              />

              <p
                style={{
                  fontSize: "0.75rem",
                  color: "#8892A4",
                  marginBottom: "12px",
                }}
              >
                Try asking:
              </p>

              {/* Suggested question pills */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {SUGGESTED.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSuggest(q)}
                    disabled={isTyping}
                    style={{
                      background: "#131620",
                      border: "1px solid #1E2235",
                      borderRadius: "8px",
                      padding: "10px 14px",
                      fontSize: "0.8rem",
                      color: "#C7D4F0",
                      cursor: isTyping ? "not-allowed" : "pointer",
                      textAlign: "left",
                      transition: "border-color 0.2s",
                      opacity: isTyping ? 0.5 : 1,
                    }}
                    onMouseEnter={(e) => {
                      if (!isTyping)
                        (e.currentTarget as HTMLButtonElement).style.borderColor =
                          "#7C3AED";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.borderColor =
                        "#1E2235";
                    }}
                  >
                    {q}
                  </button>
                ))}
              </div>

              <div
                style={{ borderTop: "1px solid #1E2235", margin: "20px 0" }}
              />

              {/* Note box */}
              <div
                style={{
                  background: "rgba(124,58,237,0.05)",
                  border: "1px solid rgba(124,58,237,0.15)",
                  borderRadius: "8px",
                  padding: "14px",
                }}
              >
                <p
                  style={{
                    fontSize: "0.78rem",
                    color: "#8892A4",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  ✦ This demo uses sample data. Connect your real Google
                  account to get insights specific to your brand.
                </p>
                <a
                  href="https://jupiterrank.jupiter-ai.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#7C3AED",
                    fontSize: "0.78rem",
                    fontWeight: 500,
                    display: "block",
                    marginTop: "8px",
                    textDecoration: "none",
                  }}
                >
                  Try with your real data →
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL — Chat */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                background: "#08090A",
                border: "1px solid #1E2235",
                borderRadius: "16px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                height: "520px",
              }}
            >
              {/* Chat header */}
              <div
                style={{
                  background: "#0D0F1C",
                  borderBottom: "1px solid #1E2235",
                  padding: "14px 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexShrink: 0,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ color: "#7C3AED", fontSize: "1rem" }}>✦</span>
                  <span
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: "white",
                    }}
                  >
                    Jupiter ✦
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "#10B981",
                      display: "inline-block",
                    }}
                  />
                  <span style={{ fontSize: "0.75rem", color: "#10B981" }}>
                    Live demo
                  </span>
                </div>
              </div>

              {/* Messages area */}
              <div
                style={{
                  flex: 1,
                  overflowY: "auto",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {messages.map((msg) =>
                  msg.role === "user" ? (
                    <div
                      key={msg.id}
                      style={{
                        background: "#7C3AED",
                        color: "white",
                        borderRadius: "16px 16px 4px 16px",
                        padding: "10px 14px",
                        maxWidth: "70%",
                        alignSelf: "flex-end",
                        fontSize: "0.875rem",
                        lineHeight: 1.5,
                      }}
                    >
                      {msg.content}
                    </div>
                  ) : (
                    <div
                      key={msg.id}
                      style={{ display: "flex", flexDirection: "column", gap: "4px" }}
                    >
                      <span
                        style={{
                          fontSize: "0.7rem",
                          color: "#A78BFA",
                          marginBottom: "4px",
                        }}
                      >
                        Jupiter ✦
                      </span>
                      <div
                        style={{
                          background: "#131620",
                          border: "1px solid #1E2235",
                          borderRadius: "4px 16px 16px 16px",
                          padding: "16px",
                          maxWidth: "85%",
                          alignSelf: "flex-start",
                        }}
                      >
                        {msg.content === "initial" ? (
                          <InitialResponse />
                        ) : (
                          <TeaserResponse />
                        )}
                      </div>
                    </div>
                  )
                )}

                {isTyping && <TypingIndicator />}

                <div ref={messagesEndRef} />
              </div>

              {/* Input area */}
              <div
                style={{
                  borderTop: "1px solid #1E2235",
                  padding: "14px 16px",
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  flexShrink: 0,
                }}
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSend();
                  }}
                  disabled={isTyping}
                  placeholder="Ask about SEO, rankings, or opportunities..."
                  style={{
                    flex: 1,
                    background: "#131620",
                    border: "1px solid #1E2235",
                    borderRadius: "8px",
                    padding: "10px 14px",
                    fontSize: "0.875rem",
                    color: "white",
                    outline: "none",
                    opacity: isTyping ? 0.5 : 1,
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#7C3AED";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "#1E2235";
                  }}
                />
                <button
                  onClick={() => handleSend()}
                  disabled={isTyping || !inputValue.trim()}
                  style={{
                    background: "#7C3AED",
                    border: "none",
                    borderRadius: "8px",
                    padding: "10px 14px",
                    cursor:
                      isTyping || !inputValue.trim()
                        ? "not-allowed"
                        : "pointer",
                    opacity: isTyping || !inputValue.trim() ? 0.5 : 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background 0.2s",
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    if (!isTyping && inputValue.trim())
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "#6D28D9";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "#7C3AED";
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 1 8 L 15 8 M 10 3 L 15 8 L 10 13"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
