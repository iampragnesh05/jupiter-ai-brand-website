"use client"
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Do you only work with fashion brands?",
      a: "No. Jupiter Intelligence is built for any Indian e-commerce brand — fashion, beauty, jewellery, home decor, food, electronics and more. If you sell online, we can build your intelligent store."
    },
    {
      q: "How is your delivery so fast?",
      a: "Five years of e-commerce development and 30 stores built means we have a refined process. We do not start from scratch — we start from experience. No unnecessary meetings, no back and forth delays. Scope is locked before build begins."
    },
    {
      q: "What is Jupiter Rank?",
      a: "Jupiter Rank is our weekly AI-powered SEO, CRO and AIO intelligence tool. It connects to your GSC and GA4, analyzes your store every week, and delivers 3 prioritized tasks every Monday — each with real ₹ revenue impact shown transparently."
    },
    {
      q: "What happens after launch?",
      a: "You get 7 days of post-launch support included. After that, Jupiter Rank continues delivering weekly intelligence for your team. For Jupiter Intelligence clients we can discuss an ongoing retainer — reach us at info@jupiter-ai.co."
    },
    {
      q: "What do you need from us to start?",
      a: "A 30-minute discovery call, access to your GSC and GA4, your brand assets, and 50% advance payment. That is everything we need to begin building immediately."
    }
  ];

  return (
    <section className="bg-[#0F1117] py-20 md:py-28 border-t border-[#1E2235]">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#7C3AED] text-xs font-semibold tracking-[0.12em] uppercase mb-4">FAQ</p>
          <h2 className="text-white font-extrabold text-3xl md:text-5xl leading-tight">Common Questions</h2>
        </div>

        <div className="border-t border-[#1E2235]">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-[#1E2235] py-5">
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <h3 className="text-white font-medium text-base pr-4">{faq.q}</h3>
                <span className="text-[#7C3AED] text-xl font-light">
                  {openIndex === i ? "−" : "+"}
                </span>
              </div>
              <div 
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: openIndex === i ? '500px' : '0', opacity: openIndex === i ? 1 : 0 }}
              >
                <p className="text-[#8892A4] text-sm leading-relaxed mt-3 pb-1">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
