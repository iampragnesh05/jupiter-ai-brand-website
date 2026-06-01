"use client";

import { useState, useEffect, useRef } from "react";

interface FaqItem {
  number: string;
  question: string;
  answer: React.ReactNode;
}

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs: FaqItem[] = [
    {
      number: "01",
      question: "Do I need a WhatsApp Business API account?",
      answer: (
        <div className="space-y-3 text-[#8892A4] text-sm leading-relaxed">
          <p>
            Yes - but we handle the entire setup for you. Meta approval typically takes 2-3 days which we account for in the project timeline.
          </p>
          <p className="text-white font-medium">You just need:</p>
          <ul className="space-y-2">
            <li className="flex gap-2 items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-2 flex-shrink-0" />
              <span>A dedicated phone number for your business WhatsApp</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-2 flex-shrink-0" />
              <span>A verified Facebook Business Manager account</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-2 flex-shrink-0" />
              <span>Your brand name and website URL</span>
            </li>
          </ul>
          <div className="text-[#7C3AED] text-xs font-semibold mt-3 flex items-center gap-1.5">
            <span>→</span> We walk you through every step. Nothing is left to you to figure out alone.
          </div>
        </div>
      ),
    },
    {
      number: "02",
      question: "I already have a Shopify store. Can you migrate it?",
      answer: (
        <div className="space-y-3 text-[#8892A4] text-sm leading-relaxed">
          <p>
            Yes. Migration is one of the most common requests we handle.
          </p>
          <p>
            We assess your current store on the discovery call and scope the migration properly. Depending on complexity it may affect the project scope - but we confirm everything before build starts.
          </p>
          <p>
            Your products, collections, customer data and order history are preserved through the migration.
          </p>
          <div className="text-[#7C3AED] text-xs font-semibold mt-3 flex items-center gap-1.5">
            <span>→</span> No surprises. Full scope confirmed before we touch anything.
          </div>
        </div>
      ),
    },
    {
      number: "03",
      question: "What happens if something breaks after launch?",
      answer: (
        <div className="space-y-3 text-[#8892A4] text-sm leading-relaxed">
          <p>
            Every package includes post-launch support - <span className="text-white font-medium">7 days</span> for Core, <span className="text-white font-medium">14 days</span> for Growth, and <span className="text-white font-medium">30 days</span> for Intelligence.
          </p>
          <p className="text-white font-medium">During that window:</p>
          <ul className="space-y-2">
            <li className="flex gap-2 items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-2 flex-shrink-0" />
              <span>Bug fixes are handled immediately</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-2 flex-shrink-0" />
              <span>Flow issues are diagnosed and fixed</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-2 flex-shrink-0" />
              <span>You have direct WhatsApp access to us</span>
            </li>
          </ul>
          <p>
            After the support window, we offer ongoing support packages - discussed on the discovery call if needed.
          </p>
          <div className="text-[#7C3AED] text-xs font-semibold mt-3 flex items-center gap-1.5">
            <span>→</span> We don't disappear after launch. That's a promise.
          </div>
        </div>
      ),
    },
    {
      number: "04",
      question: "Do I need to know anything technical to work with you?",
      answer: (
        <div className="space-y-3 text-[#8892A4] text-sm leading-relaxed">
          <p>
            Not at all. That's the entire point of done-for-you.
          </p>
          <p className="text-white font-medium">You need to:</p>
          <ul className="space-y-2">
            <li className="flex gap-2 items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-2 flex-shrink-0" />
              <span>Tell us about your brand and products</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-2 flex-shrink-0" />
              <span>Share your logo and brand assets</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-2 flex-shrink-0" />
              <span>Approve designs before they go live</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-2 flex-shrink-0" />
              <span>Review the store before launch</span>
            </li>
          </ul>
          <p>
            Everything else - Shopify setup, WhatsApp API, automation flows, Jupiter Rank, Shopify Flow - we handle completely.
          </p>
          <div className="text-[#7C3AED] text-xs font-semibold mt-3 flex items-center gap-1.5">
            <span>→</span> If you can use WhatsApp, you can work with us.
          </div>
        </div>
      ),
    },
    {
      number: "05",
      question: "What do I need to provide to get started?",
      answer: (
        <div className="space-y-3 text-[#8892A4] text-sm leading-relaxed">
          <p>
            Very little upfront. On the discovery call we'll ask for some basic business details.
          </p>
          <p className="text-white font-medium">After the call you'll provide:</p>
          <ul className="space-y-2">
            <li className="flex gap-2 items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-2 flex-shrink-0" />
              <span>Brand logo and color palette</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-2 flex-shrink-0" />
              <span>Product catalog or Shopify access</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-2 flex-shrink-0" />
              <span>Any design preferences or inspiration</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-2 flex-shrink-0" />
              <span>Business WhatsApp number</span>
            </li>
          </ul>
          <p>
            That's genuinely it. We take it from there and keep you updated at every stage.
          </p>
          <div className="text-[#7C3AED] text-xs font-semibold mt-3 flex items-center gap-1.5">
            <span>→</span> First step is just a 30-minute WhatsApp call. No preparation needed.
          </div>
        </div>
      ),
    },
    {
      number: "06",
      question: "How is this different from hiring someone on Fiverr?",
      answer: (
        <div className="space-y-3 text-[#8892A4] text-sm leading-relaxed">
          <p>
            A few key differences:
          </p>
          <ul className="space-y-2">
            <li className="flex gap-2 items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-2 flex-shrink-0" />
              <span>
                <strong className="text-white font-semibold">Fiverr delivers a store.</strong> We deliver a revenue system - store plus automation plus AI SEO.
              </span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-2 flex-shrink-0" />
              <span>
                <strong className="text-white font-semibold">Fiverr uses templates.</strong> Every Jupiter store is 100% custom.
              </span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-2 flex-shrink-0" />
              <span>
                <strong className="text-white font-semibold">Fiverr has no post-launch accountability.</strong> We include support in every package.
              </span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-2 flex-shrink-0" />
              <span>
                <strong className="text-white font-semibold">Fiverr doesn't understand Indian D2C.</strong> We build exclusively for Indian brands.
              </span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-2 flex-shrink-0" />
              <span>
                <strong className="text-white font-semibold">Fiverr can't include Jupiter Rank.</strong> It's our own product.
              </span>
            </li>
          </ul>
          <p>
            The honest answer: if you want a cheap store built fast, Fiverr works. If you want a system that actually recovers revenue, that's what we build.
          </p>
        </div>
      ),
    },
    {
      number: "07",
      question: "Can I see examples of your previous work?",
      answer: (
        <div className="space-y-3 text-[#8892A4] text-sm leading-relaxed">
          <p>
            Yes. We share relevant work samples on the discovery call based on your industry and requirements.
          </p>
          <p>
            We have 100+ ecommerce projects across fashion, beauty, FMCG, electronics and more.
          </p>
          <p>
            We don't publicly list all client work out of respect for their business privacy - but on a call we're happy to walk you through relevant examples.
          </p>
          <div className="text-[#7C3AED] text-xs font-semibold mt-3 flex items-center gap-1.5">
            <span>→</span> Book a discovery call and ask us to show work in your category.
          </div>
        </div>
      ),
    },
    {
      number: "08",
      question: "What results can I realistically expect?",
      answer: (
        <div className="space-y-3 text-[#8892A4] text-sm leading-relaxed">
          <p>
            Honest answer: results depend on your brand, category, traffic and product.
          </p>
          <p className="text-white font-medium">What we can say:</p>
          <ul className="space-y-2">
            <li className="flex gap-2 items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-2 flex-shrink-0" />
              <span>The automation flows we build are based on proven Indian D2C benchmarks</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-2 flex-shrink-0" />
              <span>Industry data shows 1 in 4 abandoned carts recovered with WhatsApp</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-2 flex-shrink-0" />
              <span>25–30% COD fraud prevention is standard with confirmation flows</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-2 flex-shrink-0" />
              <span>40% higher retention with win-back campaigns</span>
            </li>
          </ul>
          <p>
            We build the system correctly. The results follow from having the right system in place.
          </p>
          <div className="text-[#7C3AED] text-xs font-semibold mt-3 flex items-center gap-1.5">
            <span>→</span> Use our ROI calculator above to estimate your specific opportunity.
          </div>
        </div>
      ),
    },
  ];

  const leftFaqs = faqs.slice(0, 4);
  const rightFaqs = faqs.slice(4, 8);

  const leftDelayMap = [100, 200, 300, 400];
  const rightDelayMap = [150, 250, 350, 450];

  return (
    <section id="faq" ref={sectionRef} className="py-20 md:py-28 max-w-[1100px] mx-auto px-6">
      {/* Header */}
      <div className="mb-16 text-center">
        <div
          style={{ transitionDelay: isVisible ? "0ms" : "0ms" }}
          className={`text-[#7C3AED] text-xs font-semibold tracking-[0.12em] uppercase mb-4 transition-all duration-700 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          FAQ
        </div>
        <h2
          style={{ transitionDelay: isVisible ? "150ms" : "0ms" }}
          className={`text-white font-extrabold text-3xl md:text-5xl leading-tight mb-6 transition-all duration-700 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Common Questions{" "}
          <span className="bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] bg-clip-text text-transparent block sm:inline">
            Answered Honestly
          </span>
        </h2>
        <p
          style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
          className={`text-[#8892A4] text-base md:text-lg leading-relaxed max-w-2xl mx-auto transition-all duration-700 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Everything you need to know before reaching out. Still have questions? WhatsApp us directly.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        {/* Left Column */}
        <div className="flex flex-col gap-4">
          {leftFaqs.map((faq, i) => {
            const index = i;
            const isOpen = openFaq === index;
            const delay = leftDelayMap[i];
            return (
              <div
                key={index}
                style={{
                  transitionDelay: isVisible ? `${delay}ms` : "0ms",
                  boxShadow: isOpen ? "0 0 40px rgba(124,58,237,0.08)" : "none",
                }}
                className={`bg-[#0F1117] border rounded-xl overflow-hidden transition-all duration-300 transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                } ${isOpen ? "border-[#7C3AED]/40" : "border-[#1E2235]"}`}
              >
                <div
                  className="flex items-start justify-between gap-4 p-6 cursor-pointer group"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5 transition-colors duration-300 ${
                        isOpen ? "bg-[#7C3AED]/20 text-[#7C3AED]" : "bg-[#1E2235] text-[#8892A4]"
                      }`}
                    >
                      {faq.number}
                    </div>
                    <span className="text-white font-semibold text-sm md:text-base leading-snug group-hover:text-[#A78BFA] transition-colors duration-200">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 mt-0.5 ${
                      isOpen ? "border-[#7C3AED]/40 text-[#7C3AED]" : "border-[#1E2235] text-[#8892A4]"
                    }`}
                  >
                    <span className="text-sm font-semibold leading-none">{isOpen ? "−" : "+"}</span>
                  </div>
                </div>

                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: isOpen ? "650px" : "0",
                    opacity: isOpen ? 1 : 0,
                    transition: "max-height 0.3s ease, opacity 0.2s ease",
                  }}
                >
                  <div className="px-6 pb-6 pl-9 md:pl-11">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4">
          {rightFaqs.map((faq, i) => {
            const index = i + 4;
            const isOpen = openFaq === index;
            const delay = rightDelayMap[i];
            return (
              <div
                key={index}
                style={{
                  transitionDelay: isVisible ? `${delay}ms` : "0ms",
                  boxShadow: isOpen ? "0 0 40px rgba(124,58,237,0.08)" : "none",
                }}
                className={`bg-[#0F1117] border rounded-xl overflow-hidden transition-all duration-300 transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                } ${isOpen ? "border-[#7C3AED]/40" : "border-[#1E2235]"}`}
              >
                <div
                  className="flex items-start justify-between gap-4 p-6 cursor-pointer group"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5 transition-colors duration-300 ${
                        isOpen ? "bg-[#7C3AED]/20 text-[#7C3AED]" : "bg-[#1E2235] text-[#8892A4]"
                      }`}
                    >
                      {faq.number}
                    </div>
                    <span className="text-white font-semibold text-sm md:text-base leading-snug group-hover:text-[#A78BFA] transition-colors duration-200">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 mt-0.5 ${
                      isOpen ? "border-[#7C3AED]/40 text-[#7C3AED]" : "border-[#1E2235] text-[#8892A4]"
                    }`}
                  >
                    <span className="text-sm font-semibold leading-none">{isOpen ? "−" : "+"}</span>
                  </div>
                </div>

                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: isOpen ? "650px" : "0",
                    opacity: isOpen ? 1 : 0,
                    transition: "max-height 0.3s ease, opacity 0.2s ease",
                  }}
                >
                  <div className="px-6 pb-6 pl-9 md:pl-11">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA */}
      <div
        style={{
          transitionDelay: isVisible ? "500ms" : "0ms",
          boxShadow: "0 0 60px rgba(124,58,237,0.08)",
        }}
        className={`mt-16 bg-[#0F1117] border border-[#1E2235] rounded-xl p-8 text-center transition-all duration-700 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="text-[#8892A4] text-sm mb-2">Still have a question?</p>
        <h3 className="text-white font-bold text-xl mb-2">WhatsApp us directly.</h3>
        <p className="text-[#8892A4] text-sm mb-6">Most questions answered in under 5 minutes.</p>
        <a
          href="https://wa.me/919116955257"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-8 py-3 rounded-lg font-medium transition-colors w-full sm:w-auto justify-center"
        >
          WhatsApp Us →
        </a>
      </div>
    </section>
  );
}
