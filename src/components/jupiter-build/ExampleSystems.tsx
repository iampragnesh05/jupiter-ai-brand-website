"use client";

import { useEffect, useRef, useState } from "react";

/* ── shared in-view hook ── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ════════════════════════════════════════════
   MINI VISUALS — one per card
═══════════════════════════════════════════ */

function VisualProductDesc({ hovered }: { hovered: boolean }) {
  const lines = ["Embroidered silk kurta set", "Premium cotton salwar", "Block print co-ord set"];
  const [visible, setVisible] = useState<number[]>([]);
  useEffect(() => {
    lines.forEach((_, i) =>
      setTimeout(() => setVisible((p) => (p.includes(i) ? p : [...p, i])), 300 + i * 380)
    );
  }, []);
  return (
    <div className="flex flex-col gap-2">
      {lines.map((line, i) => (
        <div
          key={line}
          className="flex items-center gap-2 rounded-lg px-3 py-2"
          style={{
            background: "rgba(10,12,21,0.65)",
            border: `1px solid ${hovered ? "rgba(124,58,237,0.3)" : "rgba(124,58,237,0.14)"}`,
            opacity: visible.includes(i) ? 1 : 0,
            transform: visible.includes(i) ? "translateX(0)" : "translateX(-8px)",
            transition: `opacity 0.4s ease ${i * 0.08}s, transform 0.4s ease ${i * 0.08}s, border-color 0.3s`,
          }}
        >
          <span style={{ color: "#7C3AED", fontSize: "0.55rem" }}>✦</span>
          <span className="text-[0.6rem] font-medium" style={{ color: "#C7D4F0" }}>{line}</span>
          <span
            className="ml-auto text-[0.5rem] px-1.5 py-0.5 rounded"
            style={{ background: "rgba(124,58,237,0.15)", color: "#A78BFA" }}
          >
            AI ✓
          </span>
        </div>
      ))}
    </div>
  );
}

function VisualWhatsApp({ hovered }: { hovered: boolean }) {
  const msgs = [
    { from: "customer", text: "Do you have this in size M?" },
    { from: "ai", text: "Yes! Available in S, M, L. Want to order?" },
    { from: "customer", text: "Yes, M please." },
  ];
  const [visible, setVisible] = useState<number[]>([]);
  useEffect(() => {
    msgs.forEach((_, i) =>
      setTimeout(() => setVisible((p) => (p.includes(i) ? p : [...p, i])), 300 + i * 500)
    );
  }, []);
  return (
    <div className="flex flex-col gap-1.5">
      {msgs.map((m, i) => (
        <div
          key={i}
          className={`flex ${m.from === "customer" ? "justify-start" : "justify-end"}`}
          style={{
            opacity: visible.includes(i) ? 1 : 0,
            transform: visible.includes(i) ? "translateY(0)" : "translateY(6px)",
            transition: `opacity 0.35s ease ${i * 0.1}s, transform 0.35s ease ${i * 0.1}s`,
          }}
        >
          <div
            className="px-2.5 py-1.5 rounded-xl text-[0.6rem] max-w-[75%]"
            style={{
              background:
                m.from === "ai"
                  ? `rgba(124,58,237,${hovered ? 0.28 : 0.18})`
                  : "rgba(19,22,32,0.80)",
              border: `1px solid ${m.from === "ai" ? "rgba(124,58,237,0.35)" : "rgba(255,255,255,0.07)"}`,
              color: m.from === "ai" ? "#E0D7FF" : "#C7D4F0",
              transition: "background 0.3s",
            }}
          >
            {m.from === "ai" && (
              <span className="text-[0.48rem] text-purple-400 block mb-0.5" style={{ color: "#A78BFA" }}>
                Jupiter AI
              </span>
            )}
            {m.text}
          </div>
        </div>
      ))}
    </div>
  );
}

function VisualReview({ hovered }: { hovered: boolean }) {
  const items = [
    { stars: 5, tag: "Quality", sentiment: "Positive" },
    { stars: 2, tag: "Sizing", sentiment: "Issue" },
    { stars: 4, tag: "Delivery", sentiment: "Positive" },
  ];
  const [visible, setVisible] = useState<number[]>([]);
  useEffect(() => {
    items.forEach((_, i) =>
      setTimeout(() => setVisible((p) => (p.includes(i) ? p : [...p, i])), 300 + i * 320)
    );
  }, []);
  return (
    <div className="flex flex-col gap-2">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex items-center gap-2 rounded-lg px-3 py-2"
          style={{
            background: "rgba(10,12,21,0.65)",
            border: `1px solid ${hovered ? "rgba(124,58,237,0.28)" : "rgba(124,58,237,0.12)"}`,
            opacity: visible.includes(i) ? 1 : 0,
            transform: visible.includes(i) ? "translateX(0)" : "translateX(8px)",
            transition: `opacity 0.4s ease ${i * 0.08}s, transform 0.4s ease ${i * 0.08}s, border-color 0.3s`,
          }}
        >
          <span className="text-[0.55rem]" style={{ color: "#FBBF24" }}>{"★".repeat(item.stars)}</span>
          <span className="text-[0.58rem]" style={{ color: "#8892A4" }}>{item.tag}</span>
          <span
            className="ml-auto text-[0.5rem] px-1.5 py-0.5 rounded-full"
            style={{
              background: item.sentiment === "Positive" ? "rgba(16,185,129,0.15)" : "rgba(239,68,68,0.15)",
              color: item.sentiment === "Positive" ? "#6EE7B7" : "#FCA5A5",
            }}
          >
            {item.sentiment}
          </span>
        </div>
      ))}
    </div>
  );
}

function VisualInventory({ hovered }: { hovered: boolean }) {
  const bars = [
    { label: "Kurtas", pct: 82, alert: false },
    { label: "Tops", pct: 28, alert: true },
    { label: "Co-ords", pct: 55, alert: false },
  ];
  const [animated, setAnimated] = useState(false);
  useEffect(() => { setTimeout(() => setAnimated(true), 400); }, []);
  return (
    <div className="flex flex-col gap-2.5">
      {bars.map((b, i) => (
        <div key={b.label}>
          <div className="flex items-center justify-between mb-1">
            <span className="text-[0.58rem]" style={{ color: "#8892A4" }}>{b.label}</span>
            <span
              className="text-[0.5rem] px-1.5 py-0.5 rounded"
              style={{
                background: b.alert ? "rgba(239,68,68,0.15)" : "rgba(124,58,237,0.12)",
                color: b.alert ? "#FCA5A5" : "#A78BFA",
              }}
            >
              {b.alert ? "⚠ Restock" : `${b.pct}%`}
            </span>
          </div>
          <div
            className="h-1.5 rounded-full overflow-hidden"
            style={{ background: "rgba(255,255,255,0.06)" }}
          >
            <div
              className="h-full rounded-full"
              style={{
                width: animated ? `${b.pct}%` : "0%",
                background: b.alert
                  ? "linear-gradient(90deg,#EF4444,#FCA5A5)"
                  : `linear-gradient(90deg,#7C3AED,${hovered ? "#A78BFA" : "#6D28D9"})`,
                transition: `width 0.9s cubic-bezier(0.4,0,0.2,1) ${i * 0.15}s, background 0.3s`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function VisualCatalogue({ hovered }: { hovered: boolean }) {
  const [cursor, setCursor] = useState(true);
  const [reply, setReply] = useState(false);
  useEffect(() => {
    const b = setInterval(() => setCursor((p) => !p), 520);
    setTimeout(() => setReply(true), 1200);
    return () => clearInterval(b);
  }, []);
  return (
    <div className="flex flex-col gap-2">
      <div
        className="rounded-lg px-3 py-2 flex items-center gap-1.5 text-[0.6rem]"
        style={{
          background: "rgba(10,12,21,0.65)",
          border: "1px solid rgba(255,255,255,0.07)",
          color: "#C7D4F0",
        }}
      >
        <span style={{ color: "#8892A4" }}>Search:</span>
        <span>Show me floral prints under ₹2000</span>
        <span
          className="inline-block w-0.5 h-3.5 align-middle ml-0.5"
          style={{ background: "#7C3AED", opacity: cursor ? 1 : 0, transition: "opacity 0.1s" }}
        />
      </div>
      <div
        className="rounded-lg px-3 py-2"
        style={{
          background: `rgba(124,58,237,${hovered ? 0.16 : 0.10})`,
          border: "1px solid rgba(124,58,237,0.28)",
          opacity: reply ? 1 : 0,
          transform: reply ? "translateY(0)" : "translateY(6px)",
          transition: "opacity 0.4s, transform 0.4s, background 0.3s",
        }}
      >
        <span className="text-[0.48rem] block mb-1" style={{ color: "#A78BFA" }}>Jupiter Catalogue AI</span>
        <p className="text-[0.58rem]" style={{ color: "#C7D4F0" }}>
          Found 12 floral prints — 3 are bestsellers. Shall I sort by popularity?
        </p>
      </div>
    </div>
  );
}

function VisualPricing({ hovered }: { hovered: boolean }) {
  const items = [
    { label: "Silk Kurta", current: "₹2,499", suggested: "₹2,799", up: true },
    { label: "Cotton Set", current: "₹1,299", suggested: "₹1,199", up: false },
    { label: "Co-ord Set", current: "₹3,499", suggested: "₹3,799", up: true },
  ];
  const [visible, setVisible] = useState<number[]>([]);
  useEffect(() => {
    items.forEach((_, i) =>
      setTimeout(() => setVisible((p) => (p.includes(i) ? p : [...p, i])), 300 + i * 300)
    );
  }, []);
  return (
    <div className="flex flex-col gap-2">
      {items.map((item, i) => (
        <div
          key={item.label}
          className="flex items-center justify-between rounded-lg px-3 py-2"
          style={{
            background: "rgba(10,12,21,0.65)",
            border: `1px solid ${hovered ? "rgba(124,58,237,0.28)" : "rgba(124,58,237,0.12)"}`,
            opacity: visible.includes(i) ? 1 : 0,
            transform: visible.includes(i) ? "translateY(0)" : "translateY(8px)",
            transition: `opacity 0.4s ease ${i * 0.08}s, transform 0.4s ease ${i * 0.08}s, border-color 0.3s`,
          }}
        >
          <span className="text-[0.58rem]" style={{ color: "#8892A4" }}>{item.label}</span>
          <div className="flex items-center gap-2">
            <span className="text-[0.55rem] line-through" style={{ color: "#4B5563" }}>{item.current}</span>
            <span
              className="text-[0.58rem] font-semibold"
              style={{ color: item.up ? "#6EE7B7" : "#FCA5A5" }}
            >
              {item.up ? "↑" : "↓"} {item.suggested}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ════════════════════════════════════════════
   CARD DATA
═══════════════════════════════════════════ */
const SYSTEMS = [
  {
    id: "product-desc",
    icon: "✦",
    label: "Content AI",
    title: "AI Product Descriptions",
    description:
      "Automatically generate rich, SEO-optimised product descriptions from photos or basic product details.",
    tags: ["E-commerce", "Content", "SEO"],
    Visual: VisualProductDesc,
  },
  {
    id: "whatsapp",
    icon: "◈",
    label: "Messaging AI",
    title: "WhatsApp Automation",
    description:
      "AI that understands customer questions, checks your inventory, and replies on WhatsApp automatically.",
    tags: ["WhatsApp", "Support", "Orders"],
    Visual: VisualWhatsApp,
  },
  {
    id: "review",
    icon: "⬡",
    label: "Insights AI",
    title: "Review Intelligence",
    description:
      "Analyse customer reviews, classify sentiment, identify recurring issues, and auto-generate responses.",
    tags: ["Reviews", "NLP", "CX"],
    Visual: VisualReview,
  },
  {
    id: "inventory",
    icon: "◉",
    label: "Ops AI",
    title: "Inventory Forecasting",
    description:
      "Predict stockouts and reorder needs by analysing sales patterns, seasonality, and supplier lead times.",
    tags: ["Inventory", "Forecasting", "Ops"],
    Visual: VisualInventory,
  },
  {
    id: "catalogue",
    icon: "⊕",
    label: "Search AI",
    title: "Catalogue AI Assistant",
    description:
      "Conversational AI that helps customers search, filter, and discover products naturally through chat.",
    tags: ["Catalogue", "Search", "UX"],
    Visual: VisualCatalogue,
  },
  {
    id: "pricing",
    icon: "◇",
    label: "Strategy AI",
    title: "Pricing Intelligence",
    description:
      "Dynamic pricing recommendations based on competitor data, demand signals, and margin goals.",
    tags: ["Pricing", "Strategy", "Revenue"],
    Visual: VisualPricing,
  },
];

/* ════════════════════════════════════════════
   CARD COMPONENT
═══════════════════════════════════════════ */
function SystemCard({
  system,
  index,
  inView,
}: {
  system: (typeof SYSTEMS)[0];
  index: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl flex flex-col cursor-default overflow-hidden"
      style={{
        background: hovered ? "rgba(22,26,42,0.88)" : "rgba(16,18,30,0.72)",
        border: `1px solid ${hovered ? "rgba(124,58,237,0.38)" : "rgba(255,255,255,0.06)"}`,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: hovered
          ? "0 0 0 1px rgba(124,58,237,0.15) inset, 0 0 48px rgba(124,58,237,0.13), 0 16px 48px rgba(0,0,0,0.45)"
          : "0 4px 20px rgba(0,0,0,0.25)",
        opacity: inView ? 1 : 0,
        transform: inView
          ? hovered ? "translateY(-4px)" : "translateY(0)"
          : "translateY(24px)",
        transition: `opacity 0.55s ease ${index * 0.08}s, transform 0.55s ease ${index * 0.08}s, background 0.3s, border-color 0.3s, box-shadow 0.3s`,
      }}
    >
      {/* Top glow line on hover */}
      <div
        className="absolute top-0 left-6 right-6 h-px transition-opacity duration-300"
        style={{
          background: "linear-gradient(90deg,transparent,rgba(124,58,237,0.7),transparent)",
          opacity: hovered ? 1 : 0,
        }}
      />

      <div className="p-5 flex flex-col gap-4 flex-1">
        {/* Header row */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2.5">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-base flex-shrink-0"
              style={{
                background: hovered ? "rgba(124,58,237,0.22)" : "rgba(124,58,237,0.10)",
                border: `1px solid ${hovered ? "rgba(124,58,237,0.45)" : "rgba(124,58,237,0.20)"}`,
                color: "#A78BFA",
                transition: "all 0.3s",
                boxShadow: hovered ? "0 0 16px rgba(124,58,237,0.25)" : "none",
              }}
            >
              {system.icon}
            </div>
            <div>
              <span
                className="block text-[0.55rem] font-semibold uppercase tracking-widest mb-0.5"
                style={{ color: "#7C3AED" }}
              >
                {system.label}
              </span>
              <h3 className="text-sm font-bold leading-snug" style={{ color: "#FFFFFF" }}>
                {system.title}
              </h3>
            </div>
          </div>
          {/* Animated arrow on hover */}
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center text-xs flex-shrink-0"
            style={{
              background: hovered ? "rgba(124,58,237,0.18)" : "rgba(255,255,255,0.04)",
              border: `1px solid ${hovered ? "rgba(124,58,237,0.3)" : "rgba(255,255,255,0.06)"}`,
              color: hovered ? "#A78BFA" : "#4B5563",
              transform: hovered ? "translate(2px,-2px)" : "translate(0,0)",
              transition: "all 0.25s",
            }}
          >
            ↗
          </div>
        </div>

        {/* Description */}
        <p className="text-xs leading-relaxed" style={{ color: "#8892A4" }}>
          {system.description}
        </p>

        {/* Mini visual */}
        <div
          className="rounded-xl p-3 flex-1"
          style={{
            background: "rgba(8,9,10,0.50)",
            border: "1px solid rgba(255,255,255,0.05)",
            minHeight: "100px",
          }}
        >
          <system.Visual hovered={hovered} />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {system.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full text-[0.5rem] font-semibold uppercase tracking-wide"
              style={{
                background: hovered ? "rgba(124,58,237,0.14)" : "rgba(255,255,255,0.04)",
                border: `1px solid ${hovered ? "rgba(124,58,237,0.25)" : "rgba(255,255,255,0.07)"}`,
                color: hovered ? "#A78BFA" : "#8892A4",
                transition: "all 0.3s",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   MAIN EXPORT
═══════════════════════════════════════════ */
export default function ExampleSystems() {
  const { ref: sectionRef, inView } = useInView(0.1);

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      style={{ backgroundColor: "#08090A", padding: "100px 0 110px", position: "relative", overflow: "hidden" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 45% at 50% 55%, rgba(124,58,237,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 text-xs font-semibold rounded-full tracking-widest uppercase"
            style={{
              background: "rgba(124,58,237,0.10)",
              border: "1px solid rgba(124,58,237,0.22)",
              color: "#A78BFA",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#7C3AED", boxShadow: "0 0 6px #7C3AED" }}
            />
            Example AI Systems
          </span>

          <h2
            className="font-extrabold leading-[1.12] tracking-tight mb-5 text-white"
            style={{
              fontSize: "clamp(1.85rem,3.8vw,3rem)",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.65s ease 0.1s, transform 0.65s ease 0.1s",
            }}
          >
            AI systems businesses are{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#7C3AED,#A78BFA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              already exploring
            </span>
          </h2>

          <p
            className="text-base leading-relaxed max-w-[520px] mx-auto"
            style={{
              color: "#8892A4",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.65s ease 0.2s, transform 0.65s ease 0.2s",
            }}
          >
            From automation to operational intelligence, Jupiter Build creates AI systems
            designed around real business workflows.
          </p>
        </div>

        {/* ── Desktop / tablet grid ── */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-5">
          {SYSTEMS.map((system, i) => (
            <SystemCard key={system.id} system={system} index={i} inView={inView} />
          ))}
        </div>

        {/* ── Mobile carousel ── */}
        <div className="sm:hidden">
          <MobileCarousel inView={inView} />
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center mt-14"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s",
          }}
        >
          <p className="text-sm mb-5" style={{ color: "#8892A4" }}>
            Don&apos;t see your use case?{" "}
            <span style={{ color: "#A78BFA" }}>We build custom AI systems for any business workflow.</span>
          </p>
          <a
            href="mailto:info@jupiter-ai.co"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white rounded-xl transition-all duration-300"
            style={{
              background: "linear-gradient(135deg,#7C3AED,#6D28D9)",
              boxShadow: "0 0 24px rgba(124,58,237,0.35), 0 4px 16px rgba(0,0,0,0.4)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 44px rgba(124,58,237,0.6), 0 6px 20px rgba(0,0,0,0.5)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 24px rgba(124,58,237,0.35), 0 4px 16px rgba(0,0,0,0.4)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Submit Your Workflow Idea →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── Mobile drag carousel ── */
function MobileCarousel({ inView }: { inView: boolean }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const startX = useRef(0);
  const dragging = useRef(false);

  const goTo = (idx: number) => setActive(Math.max(0, Math.min(SYSTEMS.length - 1, idx)));

  return (
    <div
      style={{
        opacity: inView ? 1 : 0,
        transition: "opacity 0.7s ease 0.15s",
      }}
    >
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex"
          style={{
            transform: `translateX(calc(-${active * 100}% - ${active * 16}px))`,
            transition: dragging.current ? "none" : "transform 0.4s cubic-bezier(0.4,0,0.2,1)",
            gap: "16px",
          }}
          onTouchStart={(e) => { startX.current = e.touches[0].clientX; dragging.current = true; }}
          onTouchEnd={(e) => {
            dragging.current = false;
            const diff = startX.current - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 40) goTo(active + (diff > 0 ? 1 : -1));
          }}
        >
          {SYSTEMS.map((system, i) => (
            <div key={system.id} style={{ minWidth: "100%", flexShrink: 0 }}>
              <SystemCard system={system} index={i} inView={inView} />
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-5">
        {SYSTEMS.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: active === i ? "20px" : "6px",
              height: "6px",
              background: active === i ? "#7C3AED" : "rgba(255,255,255,0.12)",
              boxShadow: active === i ? "0 0 8px rgba(124,58,237,0.5)" : "none",
            }}
          />
        ))}
      </div>
    </div>
  );
}
