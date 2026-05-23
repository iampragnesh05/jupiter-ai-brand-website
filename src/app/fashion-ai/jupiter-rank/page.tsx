"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import HowItWorksRank from "@/components/jupiter-rank/HowItWorks";
import WhatItDoes from "@/components/jupiter-rank/WhatItDoes";
import RealOutput from "@/components/jupiter-rank/RealOutput";
import FAQ from "@/components/jupiter-rank/FAQ";
import LeadCapture from "@/components/jupiter-rank/LeadCapture";

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

export default function JupiterRank() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "chat">("dashboard");
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const impressions = useCountUp(4200);
  const clicks = useCountUp(186);
  const revenue = useCountUp(123000);

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
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#08090A", padding: "120px 24px 80px" }}
      >
        {/* Background radial gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 60% 50%, rgba(124, 58, 237, 0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-8 lg:pt-16 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="flex flex-col items-start">
              {/* CHANGE 1 — Badge */}
              <span
                className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium rounded-full"
                style={{
                  background: "rgba(16,185,129,0.1)",
                  border: "1px solid rgba(16,185,129,0.2)",
                  color: "#10B981",
                }}
              >
                ✦ Phase 1 Live — SEO Engine
              </span>

              {/* CHANGE 2 — Headline */}
              <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.15] tracking-tight mb-6">
                <span className="block text-white">Rank your fashion</span>
                <span className="block text-white">brand on page one.</span>
                <span
                  className="block"
                  style={{
                    background: "linear-gradient(135deg, #7C3AED, #A78BFA)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  With data that matters.
                </span>
              </h1>

              {/* CHANGE 3 — Subheadline */}
              <p className="text-lg text-muted max-w-[480px] mb-8 leading-[1.7]">
                Jupiter Rank connects with your real Google data, analyzes your website, and shows exactly what to improve with real business impact behind every recommendation.
              </p>

              {/* CHANGE 4 — Dual CTAs */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6" style={{ gap: "12px" }}>
                <a
                  href="#demo"
                  className="inline-flex items-center px-6 py-3 text-base font-medium text-white rounded-lg transition-colors"
                  style={{ background: "#7C3AED" }}
                >
                  Book a Free Demo →
                </a>
                <a
                  href="https://jupiterrank.jupiter-ai.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 text-base font-medium text-white rounded-lg transition-colors"
                  style={{
                    border: "1px solid #1E2235",
                    background: "transparent",
                  }}
                >
                  Try it free →
                </a>
              </div>

              {/* CHANGE 5 — Trust signals */}
              <div className="flex flex-wrap items-center gap-2 text-sm text-muted">
                <span>Real GSC data ✓</span>
                <span className="text-border">|</span>
                <span>Indian rupee impact ✓</span>
                <span className="text-border">|</span>
                <span>Free for 1 month ✓</span>
              </div>
            </div>

            {/* Right Column — Browser Mockup */}
            <div className="hidden lg:block">
              <div
                className="rounded-xl overflow-hidden border border-border"
                style={{ boxShadow: "0 0 80px rgba(124, 58, 237, 0.15)" }}
              >
                {/* Browser Chrome */}
                <div className="h-10 bg-[#0A0C15] flex items-center px-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                  </div>
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
                      {/* CHANGE 6 — Sidebar without Sign out */}
                      <div className="w-[200px] bg-[#0A0C15] border-r border-border">
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
                      </div>

                      {/* Main Dashboard Content */}
                      <div className="flex-1 p-5 overflow-hidden">
                        <div className="mb-4">
                          <h2 className="text-base font-semibold text-white">
                            Welcome back, Rangmanch by Priya 👋
                          </h2>
                          <p className="text-xs text-muted">Here is your SEO summary for today</p>
                        </div>

                        {/* CHANGE 6 — Stat Cards (₹1,23,000 fixed) */}
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

                  {/* CHANGE 7 — Chat Tab (reused from Hero.tsx) */}
                  {activeTab === "chat" && (
                    <>
                      {/* Left Panel */}
                      <div className="w-[200px] bg-[#0A0C15] border-r border-border p-4">
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

      <HowItWorksRank />

      <WhatItDoes />

      <RealOutput />


      <LeadCapture />

      <FAQ />
    </>
  );
}
