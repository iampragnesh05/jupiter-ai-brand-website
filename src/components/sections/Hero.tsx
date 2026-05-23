"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

function formatIndianNumber(num: number): string {
  if (num >= 100000) {
    const lakhs = Math.floor(num / 100000);
    const remainder = num % 100000;
    return `${lakhs},${remainder.toString().padStart(5, "0")}`;
  }
  return num.toLocaleString("en-IN");
}

function useCountUp(target: number, duration: number = 1500): number {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [target, duration]);

  return count;
}

const slides = [
  {
    label: "😕 Before Jupiter Rank",
    labelBg: "rgba(239, 68, 68, 0.1)",
    labelBorder: "rgba(239, 68, 68, 0.2)",
    labelColor: "#FCA5A5",
    content: (
      <>
        <h3 className="text-[0.95rem] font-semibold text-white mb-4">Your Google data this week</h3>
        <div className="space-y-0">
          {[
            ["Impressions", "4,200"],
            ["Clicks", "186"],
            ["Avg Position", "14.2"],
            ["Revenue from Google", "₹0"],
          ].map(([label, value], i) => (
            <div key={label} className="flex justify-between py-2 border-b border-border text-[0.85rem]">
              <span className="text-muted">{label}</span>
              <span className={i === 3 ? "text-red-400" : "text-white font-medium"}>{value}</span>
            </div>
          ))}
        </div>
        <div className="bg-[#08090A] rounded-lg p-3 mt-4 text-center">
          <p className="text-[0.8rem] text-muted">What does this mean?<br />What do I fix first? 🤔</p>
        </div>
      </>
    ),
  },
  {
    label: "✦ Jupiter AI is reading your data",
    labelBg: "rgba(124, 58, 237, 0.1)",
    labelBorder: "rgba(124, 58, 237, 0.2)",
    labelColor: "#A78BFA",
    content: (
      <>
        <div className="space-y-0">
          {[
            ["Google Search Console", "Synced ✓"],
            ["Google Analytics 4", "Synced ✓"],
            ["Website crawl", "5 pages ✓"],
            ["Brand context", "Loaded ✓"],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between items-center py-2.5 border-b border-border text-[0.85rem]">
              <span className="text-muted">{label}</span>
              <span className="text-green-400 text-[0.75rem]">{value}</span>
            </div>
          ))}
        </div>
        <div
          className="rounded-lg p-3 mt-4 text-center border"
          style={{ background: "rgba(124, 58, 237, 0.08)", borderColor: "rgba(124, 58, 237, 0.2)" }}
        >
          <p className="text-[0.85rem] font-semibold text-lavender">Analysis complete ✦</p>
          <p className="text-[0.75rem] text-muted mt-1">Found 4 opportunities</p>
          <p className="text-base font-bold text-white mt-1">worth ₹1,23,000/month</p>
        </div>
      </>
    ),
  },
  {
    label: "✓ Jupiter tells you exactly what to do",
    labelBg: "rgba(16, 185, 129, 0.1)",
    labelBorder: "rgba(16, 185, 129, 0.2)",
    labelColor: "#6EE7B7",
    content: (
      <>
        <p className="text-[0.7rem] text-lavender mb-1">Jupiter ✦</p>
        <div className="bg-[#08090A] border border-border rounded-xl rounded-tl-sm p-3 mb-3">
          <p className="text-[0.82rem] text-white leading-relaxed">
            Your kurta collection page gets 1,100 searches per week but only 23 people click through.
            <br /><br />
            Fix the meta title. This takes 5 minutes and is worth:
          </p>
        </div>
        <p className="text-[1.25rem] font-extrabold text-lavender">₹45,000/month</p>
      </>
    ),
  },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "chat">("dashboard");
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const impressions = useCountUp(4200);
  const clicks = useCountUp(186);
  const revenue = useCountUp(123000);

  // Auto-advance slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      setActiveSlide((prev) => (prev + 1) % 3);
    } else if (diff < -50) {
      setActiveSlide((prev) => (prev - 1 + 3) % 3);
    }
    touchStartX.current = null;
  };

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  const handleSendMessage = useCallback(
    (text: string = inputValue) => {
      if (!text.trim()) return;

      const userMessage: Message = {
        id: Date.now().toString(),
        role: "user",
        content: text,
      };

      setMessages((prev) => [...prev, userMessage]);
      setInputValue("");
      setIsTyping(true);

      setTimeout(() => {
        setIsTyping(false);
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content:
            "Connect your real data at jupiterrank.jupiter-ai.co to get personalised insights for your business. ✦",
        };
        setMessages((prev) => [...prev, assistantMessage]);
      }, 800);
    },
    [inputValue]
  );

  const handleSuggestedQuestion = (question: string) => {
    handleSendMessage(question);
  };

  return (
    <section className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#08090A', padding: '120px 24px 80px' }}>
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding: 80px 20px 60px !important;
          }
        }
      `}</style>
      {/* Background radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 60% 50%, rgba(124, 58, 237, 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-24 lg:pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 lg:gap-12 items-center min-h-[calc(100vh-200px)]">
          {/* Left Column — Text Content */}
          <div className="flex flex-col items-start">
            {/* Badge */}
            <a
              href="https://jupiterrank.jupiter-ai.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-white border border-purple/50 bg-purple/10 rounded-full hover:bg-purple/20 transition-colors"
            >
              <span className="text-purple">✦</span>
              Jupiter Rank is live. Try free for 1 month
            </a>

            {/* Headline */}
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.15] tracking-tight mb-6">
              <span className="block text-white">AI that understands</span>
              <span className="block text-white">your data and</span>
              <span
                className="block"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A78BFA)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                your business.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-muted max-w-[480px] mb-8 leading-[1.7]">
              Connect your Google account. Jupiter Rank reads your keywords, traffic, and website then shows exactly what to improve with real business impact behind every recommendation.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
              <a
                href="/fashion-ai/jupiter-rank"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-purple hover:bg-purple/90 rounded-lg transition-colors"
              >
                Try Jupiter Rank Free
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white border border-border hover:border-purple rounded-lg transition-colors"
              >
                See how it works ↓
              </a>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted">
              <span>Real GSC + GA4 data ✓</span>
              <span className="text-border">|</span>
              <span>Indian rupee impact ✓</span>
              <span className="text-border">|</span>
              <span>Free for 1 month ✓</span>
            </div>

            {/* Mobile Story Carousel */}
            <div
              className="block lg:hidden w-full max-w-[340px] mx-auto mt-10 relative"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Slides */}
              <div className="relative min-h-[280px]">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className="absolute inset-0 transition-opacity duration-400 ease-in-out"
                    style={{
                      opacity: activeSlide === index ? 1 : 0,
                      pointerEvents: activeSlide === index ? "auto" : "none",
                    }}
                  >
                    <div className="bg-[#0F1117] border border-border rounded-2xl p-6 min-h-[280px] flex flex-col">
                      {/* Label pill */}
                      <span
                        className="inline-block self-start px-2.5 py-1 rounded-full text-[0.7rem] font-medium mb-4"
                        style={{
                          background: slide.labelBg,
                          border: `1px solid ${slide.labelBorder}`,
                          color: slide.labelColor,
                        }}
                      >
                        {slide.label}
                      </span>

                      {/* Content */}
                      <div className="flex-1">{slide.content}</div>

                      {/* CTA on last slide */}
                      {index === 2 && (
                        <a
                          href="https://jupiterrank.jupiter-ai.co"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block mt-auto pt-4 border-t border-border text-center text-[0.85rem] font-medium text-purple hover:text-lavender transition-colors"
                        >
                          Try it with your data →
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Dot indicators */}
              <div className="flex items-center justify-center gap-2 mt-4">
                {[0, 1, 2].map((dot) => (
                  <button
                    key={dot}
                    onClick={() => setActiveSlide(dot)}
                    className="transition-all duration-300 ease-out rounded-full"
                    style={{
                      width: activeSlide === dot ? 20 : 6,
                      height: 6,
                      background: activeSlide === dot ? "#7C3AED" : "#1E2235",
                    }}
                    aria-label={`Go to slide ${dot + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column — Browser Mockup (hidden on mobile, visible on desktop+) */}
          <div className="hidden lg:block">
            <div
              className="rounded-xl overflow-hidden border border-border"
              style={{ boxShadow: "0 0 80px rgba(124, 58, 237, 0.15)" }}
            >
              {/* Browser Chrome */}
              <div className="h-10 bg-[#0A0C15] flex items-center px-4">
                {/* Traffic Lights */}
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>

                {/* URL Bar */}
                <div className="mx-4 flex-1 max-w-[240px]">
                  <div className="bg-[#131620] rounded-md px-3 py-1">
                    <span className="text-xs text-muted">jupiterrank.jupiter-ai.co</span>
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 ml-auto">
                  <button
                    onClick={() => setActiveTab("dashboard")}
                    className={`px-3 py-1 text-xs rounded-md transition-colors ${
                      activeTab === "dashboard"
                        ? "text-white bg-purple/20"
                        : "text-muted hover:text-white"
                    }`}
                  >
                    Dashboard
                  </button>
                  <button
                    onClick={() => setActiveTab("chat")}
                    className={`px-3 py-1 text-xs rounded-md transition-colors ${
                      activeTab === "chat"
                        ? "text-white bg-purple/20"
                        : "text-muted hover:text-white"
                    }`}
                  >
                    Chat with Mentor
                  </button>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex h-[480px] bg-[#0D0F1C]">
                {/* Dashboard View */}
                {activeTab === "dashboard" && (
                  <>
                    {/* Sidebar */}
                    <div className="hidden lg:block w-[200px] bg-[#0A0C15] border-r border-border">
                      <div className="p-4">
                        <Image
                          src="/logo/Jupiter AI - Coloured.svg"
                          alt="Jupiter AI"
                          width={120}
                          height={32}
                          className="mb-6"
                        />
                        <nav className="space-y-1">
                          {[
                            { icon: "◉", label: "Dashboard", active: true },
                            { icon: "◎", label: "Opportunities" },
                            { icon: "✦", label: "Chat with Mentor" },
                            { icon: "📄", label: "Pages" },
                            { icon: "🎨", label: "Brand Guidelines" },
                            { icon: "⚙", label: "Settings" },
                          ].map((item) => (
                            <div
                              key={item.label}
                              className={`flex items-center gap-2 px-3 py-2 text-xs rounded-md cursor-pointer transition-colors ${
                                item.active
                                  ? "bg-purple/20 text-purple"
                                  : "text-muted hover:text-white hover:bg-surface-2"
                              }`}
                            >
                              <span>{item.icon}</span>
                              <span>{item.label}</span>
                            </div>
                          ))}
                        </nav>
                      </div>
                      <div className="absolute bottom-0 w-[200px] p-4 border-t border-border">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 rounded-full bg-purple flex items-center justify-center text-white text-xs font-semibold">
                            R
                          </div>
                          <span className="text-xs text-muted">test@rangmanch.com</span>
                        </div>
                        <span className="text-xs text-red-400 cursor-pointer hover:text-red-300">
                          Sign out
                        </span>
                      </div>
                    </div>

                    {/* Main Dashboard Content */}
                    <div className="flex-1 p-5 overflow-hidden">
                      <div className="mb-4">
                        <h2 className="text-base font-semibold text-white">
                          Welcome back, Rangmanch by Priya 👋
                        </h2>
                        <p className="text-xs text-muted">Here is your SEO summary for today</p>
                      </div>

                      {/* Stat Cards */}
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div className="bg-[#0F1117] border border-border rounded-lg p-3">
                          <p className="text-[0.65rem] text-muted mb-1">Weekly Impressions</p>
                          <p className="text-xl font-bold text-white">{formatIndianNumber(impressions)}</p>
                          <p className="text-[0.6rem] text-subtle">Last 30 days</p>
                        </div>
                        <div className="bg-[#0F1117] border border-border rounded-lg p-3">
                          <p className="text-[0.65rem] text-muted mb-1">Weekly Clicks</p>
                          <p className="text-xl font-bold text-white">{clicks}</p>
                          <p className="text-[0.6rem] text-subtle">From Google Search</p>
                        </div>
                        <div className="bg-[#0F1117] border border-border rounded-lg p-3">
                          <p className="text-[0.65rem] text-muted mb-1">Avg Position</p>
                          <p className="text-xl font-bold text-white">14.2</p>
                          <p className="text-[0.6rem] text-subtle">Across all pages</p>
                        </div>
                        <div className="bg-[#0F1117] border border-border rounded-lg p-3">
                          <p className="text-[0.65rem] text-muted mb-1">Revenue Opportunity</p>
                          <p className="text-xl font-bold text-lavender">₹{formatIndianNumber(revenue)}</p>
                          <p className="text-[0.6rem] text-subtle">Per month potential</p>
                        </div>
                      </div>

                      {/* Opportunities */}
                      <div>
                        <p className="text-[0.7rem] text-muted mb-2">Top Opportunities</p>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between bg-[#0F1117] border border-border border-l-[3px] border-l-green-500 rounded-md px-3 py-2">
                            <div>
                              <span className="text-[0.65rem] bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded">
                                ⚡ Quick Win
                              </span>
                              <p className="text-xs text-white mt-1">Kurta collection — 3 clicks from page one</p>
                            </div>
                            <span className="text-sm font-semibold text-green-400">₹45,000/mo</span>
                          </div>
                          <div className="flex items-center justify-between bg-[#0F1117] border border-border border-l-[3px] border-l-yellow-500 rounded-md px-3 py-2">
                            <div>
                              <span className="text-[0.65rem] bg-yellow-500/20 text-yellow-400 px-1.5 py-0.5 rounded">
                                🔥 Traffic Leak
                              </span>
                              <p className="text-xs text-white mt-1">Homepage CTR is half of expected</p>
                            </div>
                            <span className="text-sm font-semibold text-yellow-400">₹28,000/mo</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Chat View */}
                {activeTab === "chat" && (
                  <>
                    {/* Left Panel */}
                    <div className="hidden lg:block w-[200px] bg-[#0A0C15] border-r border-border p-4">
                      <div className="mb-4">
                        <h3 className="text-sm font-semibold text-white">✦ SEO Mentor</h3>
                        <p className="text-xs text-muted">Powered by Jupiter AI</p>
                      </div>
                      <div className="border-t border-border pt-3 mb-3">
                        <p className="text-[0.65rem] text-muted uppercase tracking-wide mb-2">
                          Your Data Sources
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-muted">Google Search Console</span>
                            <span className="text-green-400 text-[0.65rem]">Connected ✓</span>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-muted">Google Analytics</span>
                            <span className="text-green-400 text-[0.65rem]">Connected ✓</span>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-muted">Website</span>
                            <span className="text-lavender text-[0.65rem]">5 pages</span>
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-border pt-3">
                        <p className="text-[0.65rem] text-muted uppercase tracking-wide mb-2">
                          Suggested Questions
                        </p>
                        <div className="space-y-2">
                          {["Why am I not ranking?", "Which page to fix first?", "Why is bounce rate high?"].map(
                            (q) => (
                              <button
                                key={q}
                                onClick={() => handleSuggestedQuestion(q)}
                                className="w-full text-left text-xs text-muted bg-[#0F1117] border border-border rounded-full px-3 py-1.5 hover:border-purple/50 transition-colors"
                              >
                                {q}
                              </button>
                            )
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Right Panel — Chat */}
                    <div className="flex-1 flex flex-col">
                      <div className="border-b border-border px-4 py-3">
                        <h3 className="text-sm font-semibold text-white">Chat with Jupiter</h3>
                      </div>

                      {/* Messages */}
                      <div className="flex-1 overflow-y-auto p-4 space-y-3">
                        {messages.length === 0 ? (
                          <div className="h-full flex flex-col items-center justify-center">
                            <span className="text-4xl text-purple mb-2">✦</span>
                            <p className="text-sm text-white mb-1">Ask me anything about your SEO</p>
                            <p className="text-xs text-muted">Personalised insights for Rangmanch by Priya</p>
                          </div>
                        ) : (
                          <>
                            {messages.map((msg) => (
                              <div
                                key={msg.id}
                                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                              >
                                {msg.role === "assistant" && (
                                  <span className="text-[0.65rem] text-lavender mb-1 mr-2 self-end">Jupiter ✦</span>
                                )}
                                <div
                                  className={`max-w-[80%] px-3 py-2 text-sm rounded-xl ${
                                    msg.role === "user"
                                      ? "bg-purple text-white rounded-tr-sm"
                                      : "bg-[#0F1117] border border-border text-white rounded-tl-sm"
                                  }`}
                                >
                                  {msg.role === "assistant" ? (
                                    <>
                                      Connect your real data at{" "}
                                      <a
                                        href="https://jupiterrank.jupiter-ai.co"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-lavender hover:underline"
                                      >
                                        jupiterrank.jupiter-ai.co
                                      </a>{" "}
                                      to get personalised insights for your business. ✦
                                    </>
                                  ) : (
                                    msg.content
                                  )}
                                </div>
                              </div>
                            ))}
                            {isTyping && (
                              <div className="flex justify-start">
                                <div className="bg-[#0F1117] border border-border rounded-xl rounded-tl-sm px-3 py-2">
                                  <div className="flex gap-1">
                                    <span
                                      className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce"
                                      style={{ animationDelay: "0ms" }}
                                    />
                                    <span
                                      className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce"
                                      style={{ animationDelay: "150ms" }}
                                    />
                                    <span
                                      className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce"
                                      style={{ animationDelay: "300ms" }}
                                    />
                                  </div>
                                </div>
                              </div>
                            )}
                            <div ref={messagesEndRef} />
                          </>
                        )}
                      </div>

                      {/* Input */}
                      <div className="border-t border-border p-3">
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                            placeholder="Ask Jupiter anything..."
                            className="flex-1 bg-[#0F1117] border border-border rounded-lg px-3 py-2 text-sm text-white placeholder:text-muted outline-none focus:border-purple transition-colors"
                          />
                          <button
                            onClick={() => handleSendMessage()}
                            className="px-3 py-2 bg-purple text-white rounded-lg hover:bg-purple/90 transition-colors"
                          >
                            →
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
