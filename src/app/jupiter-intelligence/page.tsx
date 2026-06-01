import HeroSection from "@/components/jupiter-intelligence/HeroSection";
import ProblemSection from "@/components/jupiter-intelligence/ProblemSection";
import WhatYouGet from "@/components/jupiter-intelligence/WhatYouGet";
import AutomationFlows from "@/components/jupiter-intelligence/AutomationFlows";
import JupiterRankEdge from "@/components/jupiter-intelligence/JupiterRankEdge";
import HowItWorks from "@/components/jupiter-intelligence/HowItWorks";
import PackagesSection from "@/components/jupiter-intelligence/PackagesSection";
import ComparisonTable from "@/components/jupiter-intelligence/ComparisonTable";
import FAQSection from "@/components/jupiter-intelligence/FAQSection";
import CTASection from "@/components/jupiter-intelligence/CTASection";
import { SchemaOrg } from '@/components/SchemaOrg';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Shopify Store + WhatsApp Automation India | Jupiter AI',
  description:
    'Done-for-you Shopify development for Indian D2C brands. Custom store + WhatsApp automation + AI SEO. 100+ stores built. Book a free discovery call.',
  keywords: [
    'Shopify development agency India',
    'custom Shopify store India',
    'WhatsApp automation D2C India',
    'done for you Shopify India',
    'D2C ecommerce automation India',
    'abandoned cart WhatsApp India',
    'COD to prepaid Shopify',
    'Shopify store Indian brands',
    'ecommerce revenue system India',
    'Jupiter Intelligence',
  ],
  alternates: {
    canonical: 'https://jupiter-ai.co/jupiter-intelligence',
  },
  openGraph: {
    title: 'Custom Shopify Store + WhatsApp Automation for Indian D2C Brands',
    description:
      'Complete done-for-you revenue system. Custom Shopify store, WhatsApp automation, and AI SEO — built and handed over in 1–2 weeks.',
    url: 'https://jupiter-ai.co/jupiter-intelligence',
    siteName: 'Jupiter AI',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og/jupiter-intelligence.png',
        width: 1200,
        height: 630,
        alt: 'Jupiter Intelligence — Custom Shopify + WhatsApp Automation for Indian D2C Brands',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@JupiterAI_co',
    title: 'Custom Shopify + WhatsApp Automation for Indian D2C Brands',
    description:
      'Done-for-you revenue system. Custom Shopify store, WhatsApp flows, AI SEO. 1–2 week delivery.',
    images: ['/og/jupiter-intelligence.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://jupiter-ai.co/jupiter-intelligence/#service',
  name: 'Jupiter Intelligence',
  description: 'Done-for-you Shopify development for Indian D2C brands. Custom Shopify store, WhatsApp automation, and Jupiter Rank AI SEO. Complete revenue system built and handed over in 1-2 weeks.',
  url: 'https://jupiter-ai.co/jupiter-intelligence',
  serviceType: ['Shopify Development','WhatsApp Automation','AI SEO Optimization','D2C Revenue Systems','Ecommerce Automation'],
  areaServed: { '@type': 'Country', name: 'India' },
  provider: {
    '@type': 'Organization',
    '@id': 'https://jupiter-ai.co/#organization',
    name: 'Jupiter AI',
    url: 'https://jupiter-ai.co',
    email: 'info@jupiter-ai.co',
    telephone: '+91-9116955257',
    address: { '@type': 'PostalAddress', addressRegion: 'Rajasthan', addressCountry: 'IN' },
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Jupiter Intelligence Packages',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Jupiter Core', description: 'Custom Shopify store with Jupiter Rank AI SEO included.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Jupiter Growth', description: 'Custom Shopify store plus WhatsApp automation flows.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Jupiter Intelligence', description: 'Complete D2C revenue system — store, WhatsApp automation, AI SEO, and weekly revenue intelligence.' } },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Do I need a WhatsApp Business API account?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — but we handle the entire setup for you. Meta approval takes 2-3 days. We manage the full process.' } },
    { '@type': 'Question', name: 'I already have a Shopify store. Can you migrate it?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Migration is scoped on the discovery call. Products, collections, customer data, and order history are all preserved.' } },
    { '@type': 'Question', name: 'What happens if something breaks after launch?', acceptedAnswer: { '@type': 'Answer', text: 'Post-launch support is included in every package. Jupiter Core 7 days, Jupiter Growth 14 days, Jupiter Intelligence 30 days of direct WhatsApp support.' } },
    { '@type': 'Question', name: 'Do I need technical knowledge to work with Jupiter AI?', acceptedAnswer: { '@type': 'Answer', text: 'Not at all. Done-for-you means we handle everything. You only need to share brand assets and approve designs.' } },
    { '@type': 'Question', name: 'How is Jupiter Intelligence different from hiring on Fiverr?', acceptedAnswer: { '@type': 'Answer', text: 'Jupiter Intelligence delivers a complete revenue system — not just a store. 100% custom, no templates. Post-launch support included. Built exclusively for Indian D2C brands with Jupiter Rank AI SEO included.' } },
    { '@type': 'Question', name: 'What results can I realistically expect?', acceptedAnswer: { '@type': 'Answer', text: '1 in 4 abandoned carts recovered. 25-30% COD fraud prevention. 40% higher customer retention. Results vary by brand and traffic.' } },
    { '@type': 'Question', name: 'Can I see examples of previous work?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — shared on the discovery call. 100+ ecommerce projects across fashion, beauty, FMCG, and electronics.' } },
    { '@type': 'Question', name: 'What do I need to provide to get started?', acceptedAnswer: { '@type': 'Answer', text: 'Brand logo and color palette, product catalog or Shopify access, design preferences, and your business WhatsApp number.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://jupiter-ai.co' },
    { '@type': 'ListItem', position: 2, name: 'Jupiter Intelligence', item: 'https://jupiter-ai.co/jupiter-intelligence' },
  ],
}

export default function JupiterIntelligencePage() {
  return (
    <main className="bg-[#08090A] min-h-screen">
      <SchemaOrg id="service-schema" schema={serviceSchema} />
      <SchemaOrg id="faq-schema" schema={faqSchema} />
      <SchemaOrg id="breadcrumb-schema" schema={breadcrumbSchema} />
      <HeroSection />
      <ProblemSection />
      <WhatYouGet />
      <AutomationFlows />
      <JupiterRankEdge />
      <HowItWorks />
      <PackagesSection />
      <ComparisonTable />
      <FAQSection />
      <CTASection />
    </main>
  );
}
