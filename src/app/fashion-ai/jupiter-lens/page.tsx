'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion'

export default function JupiterLens() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    fullName: '',
    brandName: '',
    websiteUrl: '',
    monthlyOrders: '',
    workEmail: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  const faqs = [
    {
      question: "Is Jupiter Lens live right now?",
      answer: "Jupiter Lens is currently in development with early access available to select fashion brands. Join our waitlist to be notified when we launch."
    },
    {
      question: "What type of fashion brands is Jupiter Lens built for?",
      answer: "Jupiter Lens is designed for modern ecommerce fashion brands of all sizes, from emerging designers to established labels looking to scale their visual content production."
    },
    {
      question: "Can Jupiter Lens generate AI fashion models?",
      answer: "Yes, Jupiter Lens can generate AI fashion models tailored to your brand identity, with consistent visual appearance across all your content."
    },
    {
      question: "Does Jupiter Lens support virtual try-on?",
      answer: "Absolutely. Jupiter Lens includes advanced AI try-on technology that allows customers to visualize products on themselves instantly."
    },
    {
      question: "Can Jupiter Lens create motion videos?",
      answer: "Yes, Jupiter Lens can transform static product images into motion visuals and short animated fashion content for social media and ecommerce."
    },
    {
      question: "Can I join early access?",
      answer: "Yes! Join our early access list using the form below to receive launch updates, exclusive previews, and first access to Jupiter Lens."
    }
  ]

  const aiTools = [
    {
      title: "AI Try-On",
      description: "Customers can visualize products on themselves instantly using AI generated try-on technology.",
      icon: "👗"
    },
    {
      title: "Product To Model",
      description: "Transform flat product photos into premium on-model fashion visuals automatically.",
      icon: "📸"
    },
    {
      title: "Model Swap",
      description: "Replace models while preserving product styling, consistency, and composition.",
      icon: "🔄"
    },
    {
      title: "AI Model Creation",
      description: "Generate AI fashion models designed around your brand identity and campaigns.",
      icon: "🤖"
    },
    {
      title: "Consistent AI Models",
      description: "Create recognizable AI fashion models with visual consistency across content.",
      icon: "✨"
    },
    {
      title: "Motion & Short Videos",
      description: "Generate motion visuals and animated fashion content from static product images.",
      icon: "🎬"
    }
  ]

  const workflowNodes = [
    "Product Photos",
    "AI Models", 
    "Try-On",
    "Motion Videos",
    "Ecommerce Content",
    "Campaign Visuals",
    "Social Media"
  ]

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-[#08090A] text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#08090A] via-purple-950/20 to-[#08090A]" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-7xl mx-auto text-center"
        >
          {/* Small Label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block px-4 py-2 mb-8 border border-purple-500/30 rounded-full backdrop-blur-sm bg-purple-500/10"
          >
            <span className="text-sm font-medium text-purple-300">COMING SOON</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            AI fashion visuals<br />
            without <span className="text-[#7C3AED]">expensive production</span>.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Jupiter Lens transforms product photos into AI generated fashion content from virtual try-ons to AI models and motion visuals.
          </motion.p>

          {/* Supporting Lines */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-8 mb-16 text-gray-400"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#7C3AED] rounded-full" />
              <span>Built for modern fashion brands</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#7C3AED] rounded-full" />
              <span>AI generated visual commerce</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#7C3AED] rounded-full" />
              <span>Designed around ecommerce workflows</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(124,58,237,0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#7C3AED] text-white rounded-lg font-semibold hover:bg-purple-600 transition-all duration-300"
            >
              Join Early Access →
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, borderColor: "#7C3AED" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-gray-600 text-white rounded-lg font-semibold hover:border-[#7C3AED] transition-all duration-300"
            >
              Get Launch Updates →
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-6 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>AI generated fashion visuals</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Built for ecommerce brands</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Motion ready content</span>
            </div>
          </motion.div>

          {/* Hero Visuals - Floating Fashion Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="relative mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ 
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 animate-pulse" />
                    <p className="text-sm text-gray-400">AI Fashion Visual {i}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Product Overview Section */}
      <section className="relative py-32 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-6xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-8"
          >
            Fashion content production powered by AI
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed"
          >
            Jupiter Lens helps fashion brands generate AI visuals, virtual try-ons, fashion models, and motion content without traditional production workflows.
          </motion.p>

          {/* Floating Product Visuals */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Product Photos", "AI Models", "Try-On", "Motion"].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-gray-900/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 h-48 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mb-4" />
                  <p className="text-white font-medium">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* AI Tools Section */}
      <section className="relative py-32 px-4">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 to-transparent" />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-7xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-center mb-20"
          >
            AI Tools for Modern Fashion
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(124,58,237,0.3)"
                }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative bg-gray-900/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 h-64 flex flex-col justify-between hover:border-purple-500/40 transition-all duration-300">
                  <div>
                    <div className="text-4xl mb-4">{tool.icon}</div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{tool.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{tool.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Why Jupiter Lens Section */}
      <section className="relative py-32 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-950/20" />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-6xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
          >
            Fashion brands should not need<br />
            <span className="text-[#7C3AED]">expensive production pipelines</span><br />
            to create premium visuals.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed"
          >
            Jupiter Lens is designed to help ecommerce brands generate scalable fashion content using AI systems built around modern visual commerce.
          </motion.p>

          {/* Editorial Visual Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/20 rounded-2xl blur-2xl" />
                <div className="relative bg-gray-900/60 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 animate-pulse" />
                    <p className="text-sm text-gray-300">Editorial {i}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Visual Workflow Section */}
      <section className="relative py-32 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-950/10 to-transparent" />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-7xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-center mb-20"
          >
            One AI system across the fashion content workflow
          </motion.h2>

          {/* Workflow Visualization */}
          <div className="relative flex flex-col items-center">
            {/* Central Node */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              animate={{ 
                scale: [1, 1.1, 1],
                boxShadow: ["0 0 30px rgba(124,58,237,0.5)", "0 0 50px rgba(124,58,237,0.8)", "0 0 30px rgba(124,58,237,0.5)"]
              }}
              className="relative z-20 w-48 h-48 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-12"
            >
              <div className="text-center px-4">
                <p className="text-white font-bold text-lg">Jupiter Lens</p>
                <p className="text-white/90 text-sm">AI System</p>
              </div>
            </motion.div>

            {/* Workflow Nodes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
              {workflowNodes.map((node, index) => (
                <motion.div
                  key={node}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 0 20px rgba(124,58,237,0.6)"
                  }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
                  <div className="relative bg-gray-900/60 backdrop-blur-sm border border-purple-500/30 rounded-xl p-4 text-center">
                    <p className="text-white text-sm font-medium">{node}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Supporting Line */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 text-gray-400 text-center"
            >
              Built around ecommerce fashion production workflows.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Early Access Section */}
      <section className="relative py-32 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 to-transparent" />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-900/40 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Be first when Jupiter Lens launches
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Join the early access list to receive launch updates, previews, and first access to Jupiter Lens.
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleFormSubmit} className="space-y-6 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    required
                    className="w-full px-6 py-4 bg-gray-800/60 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  />
                  <input
                    type="text"
                    name="brandName"
                    value={formData.brandName}
                    onChange={handleInputChange}
                    placeholder="Brand Name"
                    required
                    className="w-full px-6 py-4 bg-gray-800/60 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="url"
                    name="websiteUrl"
                    value={formData.websiteUrl}
                    onChange={handleInputChange}
                    placeholder="Website URL"
                    required
                    className="w-full px-6 py-4 bg-gray-800/60 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  />
                  <input
                    type="text"
                    name="monthlyOrders"
                    value={formData.monthlyOrders}
                    onChange={handleInputChange}
                    placeholder="Monthly Orders"
                    required
                    className="w-full px-6 py-4 bg-gray-800/60 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  />
                </div>

                <input
                  type="email"
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleInputChange}
                  placeholder="Work Email"
                  required
                  className="w-full px-6 py-4 bg-gray-800/60 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                />

                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(124,58,237,0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-8 py-4 bg-[#7C3AED] text-white rounded-xl font-semibold hover:bg-purple-600 transition-all duration-300"
                >
                  Join Early Access →
                </motion.button>

                <p className="text-sm text-gray-500">
                  Early access only · Built for fashion brands · No spam
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12"
              >
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
                <p className="text-gray-400">We'll keep you updated with exclusive previews and launch news.</p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-32 px-4">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 to-transparent" />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-center mb-20"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-900/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden"
              >
                <motion.button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-800/40 transition-all duration-300"
                  whileHover={{ backgroundColor: "rgba(31,41,55,0.4)" }}
                >
                  <span className="text-lg font-medium text-white">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: activeFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-6 flex items-center justify-center"
                  >
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}
