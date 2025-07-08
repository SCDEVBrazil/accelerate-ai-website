'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Shield, TrendingUp, Brain, Rocket } from 'lucide-react'
import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')
  const [state, handleSubmit] = useForm("xanjnzdl")

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
            href="/about" 
            className="relative text-lg lg:text-xl font-semibold tracking-wide text-gray-200 transition-all duration-300 group hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500"
          >
            <span className="relative z-10">About</span>
            <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          <Link 
            href="/services" 
            className="relative text-lg lg:text-xl font-semibold tracking-wide text-gray-200 transition-all duration-300 group hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-pink-500"
          >
            <span className="relative z-10">Services</span>
            <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
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
            Let's Explore
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Your Business Potential
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Whether you need AI strategy, automation implementation, or a modern website, let's discuss how we can help transform your business.
          </motion.p>
        </div>
      </section>

      {/* Service Selection */}
      <section className="py-16 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center mb-12"
          >
            Which Service Are You Interested In?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className={`p-6 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                selectedService === 'consulting' 
                  ? 'bg-blue-900/30 border-blue-500' 
                  : 'bg-black/30 border-gray-600 hover:border-blue-400'
              }`}
              onClick={() => setSelectedService('consulting')}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <Brain className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-400">AI Consulting & Strategy</h3>
                  <p className="text-gray-400 text-sm">Strategic guidance for businesses exploring AI</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Not sure where AI fits? Our consulting service helps you discover opportunities, assess feasibility, and create a strategic roadmap.
              </p>
              <div className="text-sm text-gray-400">
                <span className="font-medium">What you get:</span> Operational assessment, opportunity identification, strategic roadmap, ROI projections
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className={`p-6 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                selectedService === 'implementation' 
                  ? 'bg-green-900/30 border-green-500' 
                  : 'bg-black/30 border-gray-600 hover:border-green-400'
              }`}
              onClick={() => setSelectedService('implementation')}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-4">
                  <Rocket className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-400">Performance-Based Implementation</h3>
                  <p className="text-gray-400 text-sm">Ready to automate and optimize operations</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Ready to implement? We build custom automation solutions with zero upfront cost—you only pay from measurable savings.
              </p>
              <div className="text-sm text-gray-400">
                <span className="font-medium">What you get:</span> Custom development, full implementation, continuous optimization, results tracking
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className={`p-6 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                selectedService === 'web-development' 
                  ? 'bg-orange-900/30 border-orange-500' 
                  : 'bg-black/30 border-gray-600 hover:border-orange-400'
              }`}
              onClick={() => setSelectedService('web-development')}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-orange-400">Web Development & Design</h3>
                  <p className="text-gray-400 text-sm">Modern websites that drive business growth</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Need a professional website? We create modern, fast, and mobile-optimized websites designed to grow your business.
              </p>
              <div className="text-sm text-gray-400">
                <span className="font-medium">What you get:</span> Custom design, mobile-first development, SEO optimization, ongoing support
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center mb-12"
          >
            What to Expect from Our Initial Conversation
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-black/30 p-6 rounded-lg"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-500 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Discovery Conversation</h3>
              <p className="text-gray-400 text-sm">
                We'll discuss your current operations, challenges, and goals to understand where technology could have the biggest impact on your business.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-black/30 p-6 rounded-lg"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Honest Assessment</h3>
              <p className="text-gray-400 text-sm">
                Frank discussion about whether our services (AI, automation, or web development) align with your needs and if there's a good mutual fit.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-black/30 p-6 rounded-lg"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-purple-500 rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Clear Next Steps</h3>
              <p className="text-gray-400 text-sm">
                If there's alignment, we'll outline specific next steps for your chosen service engagement (consulting, implementation, or web development).
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 bg-gray-900/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Schedule Your Consultation
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Help us understand your business and goals so we can make the most of our conversation. All information is kept strictly confidential.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700"
          >
            {state.succeeded ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-400 mb-2">Thank You!</h3>
                <p className="text-gray-300">We'll contact you within 24 hours to schedule your consultation.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Service Selection */}
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium mb-2">Service Interest *</label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    required
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select the service you're interested in</option>
                    <option value="consulting">AI Consulting & Strategy - Exploring opportunities</option>
                    <option value="implementation">Performance-Based Implementation - Ready to automate</option>
                    <option value="web-development">Web Development & Design - Need a professional website</option>
                    <option value="unsure">Not sure - Help me understand my options</option>
                  </select>
                  <ValidationError prefix="Service Type" field="serviceType" errors={state.errors} />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Business Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="your@company.com"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="(555) 123-4567"
                    />
                    <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                  </div>
                  
                  <div>
                    <label htmlFor="businessName" className="block text-sm font-medium mb-2">Company Name *</label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="Your company name"
                    />
                    <ValidationError prefix="Business Name" field="businessName" errors={state.errors} />
                  </div>

                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium mb-2">Industry *</label>
                    <select
                      id="industry"
                      name="industry"
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select your industry</option>
                      <option value="retail">Retail & E-commerce</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="logistics">Logistics & Distribution</option>
                      <option value="hospitality">Hospitality & Food Service</option>
                      <option value="professional-services">Professional Services</option>
                      <option value="financial-services">Financial Services</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="technology">Technology</option>
                      <option value="other">Other</option>
                    </select>
                    <ValidationError prefix="Industry" field="industry" errors={state.errors} />
                  </div>

                  <div>
                    <label htmlFor="businessSize" className="block text-sm font-medium mb-2">Company Size *</label>
                    <select
                      id="businessSize"
                      name="businessSize"
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select company size</option>
                      <option value="startup">Startup (1-10 employees)</option>
                      <option value="small">Small Business (11-50 employees)</option>
                      <option value="medium">Mid-Market (51-200 employees)</option>
                      <option value="large">Large Business (201-1000 employees)</option>
                      <option value="enterprise">Enterprise (1000+ employees)</option>
                    </select>
                    <ValidationError prefix="Business Size" field="businessSize" errors={state.errors} />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="currentChallenges" className="block text-sm font-medium mb-2">
                    {selectedService === 'web-development' 
                      ? 'Current Website Situation *' 
                      : 'Current Business Challenges *'
                    }
                  </label>
                  <textarea
                    id="currentChallenges"
                    name="currentChallenges"
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none resize-none transition-colors"
                    placeholder={
                      selectedService === 'web-development'
                        ? "Do you currently have a website? If yes, what challenges are you experiencing with it? (e.g., outdated design, slow loading, not mobile-friendly, poor search visibility, difficulty updating content, not generating leads, etc.) If no, what's driving the need for a website now?"
                        : "What challenges is your business facing? (e.g., manual processes, operational inefficiencies, scheduling difficulties, inventory management issues, compliance tracking, repetitive tasks, etc.)"
                    }
                  />
                  <ValidationError prefix="Current Challenges" field="currentChallenges" errors={state.errors} />
                </div>

                {selectedService === 'consulting' && (
                  <div>
                    <label htmlFor="consultingGoals" className="block text-sm font-medium mb-2">
                      Consulting Goals
                    </label>
                    <textarea
                      id="consultingGoals"
                      name="consultingGoals"
                      rows={3}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none resize-none transition-colors"
                      placeholder="What would you like to understand about AI opportunities in your business? What specific areas are you considering for automation?"
                    />
                    <ValidationError prefix="Consulting Goals" field="consultingGoals" errors={state.errors} />
                  </div>
                )}

                {selectedService === 'implementation' && (
                  <div>
                    <label htmlFor="implementationReadiness" className="block text-sm font-medium mb-2">
                      Implementation Readiness
                    </label>
                    <textarea
                      id="implementationReadiness"
                      name="implementationReadiness"
                      rows={3}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none resize-none transition-colors"
                      placeholder="Which processes have you identified for automation? What results are you hoping to achieve?"
                    />
                    <ValidationError prefix="Implementation Readiness" field="implementationReadiness" errors={state.errors} />
                  </div>
                )}

                {selectedService === 'web-development' && (
                  <div>
                    <label htmlFor="webProjectDetails" className="block text-sm font-medium mb-2">
                      Website Project Details
                    </label>
                    <textarea
                      id="webProjectDetails"
                      name="webProjectDetails"
                      rows={3}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none resize-none transition-colors"
                      placeholder="What type of website do you need? (e.g., business website, e-commerce, portfolio, redesign of existing site) What are your main goals for the website?"
                    />
                    <ValidationError prefix="Web Project Details" field="webProjectDetails" errors={state.errors} />
                  </div>
                )}

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                    Preferred Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  >
                    <option value="">When would you like to get started?</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="3-months">Within 3 months</option>
                    <option value="6-months">Within 6 months</option>
                    <option value="exploring">Just exploring options</option>
                  </select>
                  <ValidationError prefix="Timeline" field="timeline" errors={state.errors} />
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 disabled:opacity-50"
                  >
                    <span>{state.submitting ? 'Sending...' : 'Request Consultation'}</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <p className="text-sm text-gray-400 mt-3">
                    We'll contact you within 24 hours to schedule your consultation
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Trust Building */}
      <section className="py-16 px-4 bg-gray-900/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Confidential & No-Pressure Approach
          </h2>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            We understand that discussing operational challenges and technology needs requires trust. All conversations are strictly confidential, 
            and we're committed to providing honest assessments about whether our services align with your needs.
          </p>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
            <p className="text-blue-400 font-semibold">
              "We only pursue partnerships where we're confident we can deliver measurable value. 
              If we're not the right fit, we'll tell you honestly and may even recommend alternative solutions."
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  )
}