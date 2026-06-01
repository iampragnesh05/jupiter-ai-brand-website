"use client"

export default function HowWeWork() {
  const steps = [
    {
      title: "Discovery",
      desc: "We learn your brand, products, target customer and goals. You share GSC and GA4. We align on scope before any work begins."
    },
    {
      title: "Build",
      desc: "Custom Shopify development. Your design, your brand, zero templates. Mobile-first and speed-optimized from first line of code."
    },
    {
      title: "Intelligence Layer",
      desc: "Jupiter Chat trained on your catalog. Automation flows connected. AIO and Tech SEO implemented. Jupiter Rank activated."
    },
    {
      title: "Launch",
      desc: "Full handover with documentation. Jupiter Rank delivers weekly revenue-backed recommendations from your first Monday."
    }
  ];

  return (
    <section className="bg-[#08090A] py-20 md:py-28 border-t border-[#1E2235]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#7C3AED] text-xs font-semibold tracking-[0.12em] uppercase mb-4">THE PROCESS</p>
          <h2 className="text-white font-extrabold text-3xl md:text-5xl leading-tight">How Jupiter Intelligence Works</h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-[20px] left-0 right-0 border-t border-dashed border-[#1E2235] z-0 px-8"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-start md:items-center text-left md:text-center">
                <div className="w-[40px] h-[40px] rounded-full bg-[rgba(124,58,237,0.1)] border border-[rgba(124,58,237,0.3)] text-[#7C3AED] font-bold flex items-center justify-center mb-6 shrink-0 mx-0 md:mx-auto">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base">{step.title}</h3>
                  <p className="text-[#8892A4] text-sm leading-relaxed mt-2">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
