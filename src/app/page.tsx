'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Shield, Handshake, Search, MapPin, Rocket } from 'lucide-react'
import CursorTrail from '../components/CursorTrail'
import { useState } from 'react'

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Cursor Trail Effect */}
      <CursorTrail 
        colors={['#3B82F6', '#8B5CF6', '#10B981', '#06B6D4', '#EF4444', '#F59E0B']}
        maxParticles={25}
        particleSize={6}
        fadeSpeed={0.03}
      />

      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
        </div>
      </div>

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
            href="/about" 
            className="relative text-lg lg:text-xl font-semibold tracking-wide text-gray-200 transition-all duration-300 group hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500"
          >
            <span className="relative z-10">About</span>
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
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-20 md:py-32">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
        >
          Discover, Design & Deploy{" "}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            AI That Pays For Itself
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-5xl mb-12"
        >
          <span className="block mb-6 text-center">
            We offer two distinct paths to AI success:
          </span>
          <div className="grid md:grid-cols-2 gap-8 text-lg md:text-xl">
            <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-500/30">
              <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-3">Expert AI Consulting</h3>
              <p className="text-gray-300">
                Professional strategic guidance to discover opportunities and create your automation roadmap.
              </p>
            </div>
            <div className="bg-green-900/20 p-6 rounded-lg border border-green-500/30">
              <h3 className="text-xl md:text-2xl font-bold text-green-400 mb-3">Performance-Based Implementation</h3>
              <p className="text-gray-300">
                Zero upfront cost automation deployment—you only pay from the measurable savings we create.
              </p>
            </div>
          </div>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/services"
            className="group px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <span>Explore Consulting</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 border border-gray-600 rounded-full font-semibold hover:border-gray-400 hover:bg-gray-900 transition-all duration-200"
          >
            Ready for Results?
          </Link>
        </motion.div>
      </section>

      {/* Three-Phase Process Section */}
      <section className="relative z-10 px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Two Paths to AI Success
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Whether you need strategic guidance to explore AI possibilities or you're ready for performance-based implementation, we have the right approach for your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-8 rounded-lg border border-blue-500/20"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">AI Consulting & Strategy</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Not sure where AI fits? Our expert consulting helps you discover opportunities, assess feasibility, and create a strategic roadmap for your business.
              </p>
              <div className="text-sm text-gray-400 mb-4">
                • Comprehensive operational assessment<br/>
                • AI opportunity identification<br/>
                • Custom strategic roadmap<br/>
                • ROI projections and timeline
              </div>
              <Link
                href="/services"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
              >
                <span>Learn About Consulting</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
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
              <h3 className="text-2xl font-bold mb-4">Performance-Based Implementation</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Ready to automate and optimize? We implement AI solutions with zero upfront cost—you only pay from the measurable savings we create.
              </p>
              <div className="text-sm text-gray-400 mb-4">
                • Zero upfront investment<br/>
                • Custom automation solutions<br/>
                • Pay only from proven savings<br/>
                • Continuous optimization
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200"
              >
                <span>Explore Partnership</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="relative z-10 px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Businesses Choose Our Approach
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From initial consultation to ongoing optimization, we're invested in your long-term success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Expert Consulting</h3>
              <p className="text-gray-400 leading-relaxed">
                Professional AI strategy consulting for businesses exploring automation opportunities. Get clarity on where AI fits in your operations with expert guidance.
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
              <h3 className="text-2xl font-bold mb-4">Guaranteed Results</h3>
              <p className="text-gray-400 leading-relaxed">
                Our performance-based model means we only succeed when you do. Implementation costs are recovered directly from the savings we create for your business.
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
                <Handshake className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">True Partnership</h3>
              <p className="text-gray-400 leading-relaxed">
                Custom solutions built specifically for your operations, with ongoing optimization and support. We grow with your business and adapt as your needs evolve.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="relative z-10 px-4 py-20 bg-gray-900/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our Success Model
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              Unlike traditional consultants who charge upfront with uncertain returns, we align our success completely with yours.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-black/30 p-8 rounded-lg"
            >
              <h3 className="text-4xl font-bold text-blue-400 mb-4">Strategic</h3>
              <p className="text-gray-300">
                Professional AI consulting and strategic assessment. Understand your automation potential and get a clear roadmap with expert guidance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-black/30 p-8 rounded-lg"
            >
              <h3 className="text-4xl font-bold text-purple-400 mb-4">Results-Only</h3>
              <p className="text-gray-300">
                Aligned incentives. Our compensation comes directly from the documented savings and efficiency gains we deliver to your business.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-black/30 p-8 rounded-lg"
            >
              <h3 className="text-4xl font-bold text-green-400 mb-4">Custom</h3>
              <p className="text-gray-300">
                Solutions built specifically for your operations, not one-size-fits-all software that requires you to adapt your processes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to explore{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              your AI opportunities?
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Whether you need strategic consulting or are ready for performance-based implementation, let's discuss how AI can transform your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
          >
            <span>Schedule a Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
