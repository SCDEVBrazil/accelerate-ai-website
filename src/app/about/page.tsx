'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, TrendingUp, Users, Target, Brain, Rocket } from 'lucide-react'
import { useState } from 'react'

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="relative z-50 flex justify-between items-center py-4 px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.svg"
              alt="Accelerate AI"
              width={0}
              height={0}
              sizes="100vw"
              className="h-20 w-auto max-w-none"
              priority
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex space-x-8 bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2"
        >
          <Link 
            href="/" 
            className="relative text-lg lg:text-xl font-semibold tracking-wide text-gray-200 transition-all duration-300 group hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500"
          >
            <span className="relative z-10">Home</span>
            <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          <Link 
            href="/services" 
            className="relative text-lg lg:text-xl font-semibold tracking-wide text-gray-200 transition-all duration-300 group hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-pink-500"
          >
            <span className="relative z-10">Services</span>
            <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          <Link 
            href="/contact" 
            className="relative text-lg lg:text-xl font-semibold tracking-wide text-gray-200 transition-all duration-300 group hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-emerald-400 hover:to-purple-600"
          >
            <span className="relative z-10">Contact</span>
            <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-emerald-400 to-purple-600 origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
        </motion.div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-200 hover:text-white transition-colors duration-200"
          >
            <div className="w-6 h-6 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${mobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`h-0.5 w-full bg-current transition duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${mobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-black/95 z-50 md:hidden">
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <Link 
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-semibold text-white hover:text-blue-400 transition-all duration-300"
              >
                About
              </Link>
              <Link 
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-semibold text-white hover:text-blue-400 transition-all duration-300"
              >
                Services
              </Link>
              <Link 
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-semibold text-white hover:text-blue-400 transition-all duration-300"
              >
                Contact
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 text-gray-400 hover:text-white transition-colors"
              >
                Close Menu
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black py-20 px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Technology Solutions
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Built on Partnership
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            We help businesses leverage AI automation and modern web technology to optimize operations, focusing on measurable results and long-term partnerships rather than quick fixes.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Founded on Real Business Challenges
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                We started Accelerate AI after recognizing fundamental gaps in the market: businesses want the benefits of AI automation and modern web presence, but traditional consulting requires massive upfront investments with uncertain returns.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Our approach emerged from a simple belief: technology should either pay for itself through the value it creates, or be accessible through transparent, fair pricing. Whether it's performance-based AI implementation or professional web development, we believe in aligning our success with yours.
              </p>
              <p className="text-gray-400 leading-relaxed">
                This philosophy allows us to work with businesses of all sizes, creating genuine partnerships built on shared success and measurable outcomes.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg p-8 backdrop-blur-sm">
                <Target className="w-16 h-16 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                <p className="text-gray-300 text-sm">
                  Make modern technology accessible to businesses through strategic consulting, performance-based AI automation, and professional web development—ensuring every solution drives real business value.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Services Overview */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-center mb-16"
          >
            Three Ways We Help Your Business
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-8 rounded-lg border border-blue-500/20"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Brain className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">AI Consulting & Strategy</h3>
              <p className="text-gray-400 leading-relaxed">
                Strategic guidance for businesses exploring AI opportunities. We help you discover automation potential, assess feasibility, and create implementation roadmaps.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-br from-green-900/30 to-emerald-900/30 p-8 rounded-lg border border-green-500/20"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <Rocket className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-green-400">Performance-Based AI Implementation</h3>
              <p className="text-gray-400 leading-relaxed">
                Zero upfront cost automation deployment. We build custom AI solutions and only get paid from the measurable savings and efficiency gains we create.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-br from-orange-900/30 to-red-900/30 p-8 rounded-lg border border-orange-500/20"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-orange-400">Web Development & Design</h3>
              <p className="text-gray-400 leading-relaxed">
                Modern, fast, and mobile-optimized websites designed to grow your business. Professional web presence with transparent project-based pricing.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-center mb-16"
          >
            How We Work
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Discovery First</h3>
              <p className="text-gray-400 leading-relaxed">
                Whether it's AI opportunities, automation potential, or web requirements, we begin every engagement with a thorough understanding of your specific needs and goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Results-Focused Implementation</h3>
              <p className="text-gray-400 leading-relaxed">
                Every solution we deliver includes clear success metrics. From AI automation ROI to website performance indicators, we ensure transparency in the value we create.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Long-term Partnership</h3>
              <p className="text-gray-400 leading-relaxed">
                We don't just deliver and leave. Our team provides ongoing support, optimization, and strategic guidance to ensure sustained success across all our services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Pricing Philosophy */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-center mb-8"
          >
            Fair, Transparent Pricing
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg p-8 backdrop-blur-sm"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-400">AI Consulting</h3>
                <p className="text-gray-300 text-sm mb-4">Professional consulting fee for strategic guidance and roadmap development</p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Expert analysis & recommendations</li>
                  <li>• Custom strategic roadmap</li>
                  <li>• Clear ROI projections</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-400">AI Implementation</h3>
                <p className="text-gray-300 text-sm mb-4">Performance-based model - pay only from documented savings</p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Zero upfront investment</li>
                  <li>• Compensation from results</li>
                  <li>• Risk-free for your business</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-orange-400">Web Development</h3>
                <p className="text-gray-300 text-sm mb-4">Transparent project-based pricing with flexible payment options</p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Clear project scope & costs</li>
                  <li>• Flexible payment terms</li>
                  <li>• No hidden fees</li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-gray-400 text-center mt-8"
          >
            Different services, different models—but always aligned with delivering real value to your business.
          </motion.p>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-8"
          >
            Our Commitment to Excellence
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-8 leading-relaxed"
          >
            Every engagement begins with transparency, honesty, and a clear understanding of your goals. We believe in building long-term relationships based on trust and demonstrable results across all our service areas.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mb-10"
          >
            <div className="bg-black/30 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-400 mb-2">Transparency</h4>
              <p className="text-gray-400 text-sm">Complete visibility into our methods, metrics, and results across all services</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg">
              <h4 className="font-semibold text-purple-400 mb-2">Accountability</h4>
              <p className="text-gray-400 text-sm">Clear documentation of outcomes, whether savings, performance, or project deliverables</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg">
              <h4 className="font-semibold text-green-400 mb-2">Partnership</h4>
              <p className="text-gray-400 text-sm">Ongoing support and optimization to ensure sustained success in your technology investments</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}