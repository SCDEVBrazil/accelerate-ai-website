'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Search, Cog, TrendingUp, Users, Shield, Target, MapPin, Rocket, Brain, BarChart } from 'lucide-react'
import { useState } from 'react'

export default function ServicesPage() {
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
            href="/about" 
            className="relative text-lg lg:text-xl font-semibold tracking-wide text-gray-200 transition-all duration-300 group hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500"
          >
            <span className="relative z-10">About</span>
            <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
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
            AI Services
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Tailored to Your Journey
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Whether you're exploring AI possibilities or ready to implement automation, we have the right service to meet your business where it is.
          </motion.p>
        </div>
      </section>

      {/* Three Service Options */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Choose Your Path
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Three distinct services designed to help your business leverage technology for growth and efficiency.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* AI Consulting & Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-8 rounded-lg border border-blue-500/20"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <Brain className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-400">AI Consulting & Strategy</h3>
                  <p className="text-gray-400">For businesses exploring AI opportunities</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Not sure where AI fits in your business? Our expert consulting service helps you discover automation opportunities, assess feasibility, and create a strategic roadmap tailored to your operations.
              </p>

              <div className="space-y-4 mb-8">
                <h4 className="text-lg font-semibold text-blue-300">What You Get:</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-200">Comprehensive Operational Assessment</span>
                      <p className="text-sm text-gray-400">Deep dive into your workflows, bottlenecks, and inefficiencies</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-200">AI Opportunity Identification</span>
                      <p className="text-sm text-gray-400">Prioritized list of automation opportunities with impact analysis</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-200">Custom Strategic Roadmap</span>
                      <p className="text-sm text-gray-400">Step-by-step implementation plan with timelines and milestones</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-200">ROI Projections & Business Case</span>
                      <p className="text-sm text-gray-400">Detailed financial analysis and expected returns</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-900/20 p-4 rounded-lg mb-6">
                <p className="text-sm text-blue-300 font-medium">Investment Model:</p>
                <p className="text-gray-300 text-sm">Professional consulting fee - Strategic guidance that pays for itself through informed decision-making</p>
              </div>

              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
              >
                <span>Schedule Consulting Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Performance-Based Implementation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 p-8 rounded-lg border border-green-500/20"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-4">
                  <Rocket className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-400">Performance-Based Implementation</h3>
                  <p className="text-gray-400">For businesses ready to automate and optimize</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Ready to implement AI automation? We build and deploy custom solutions with zero upfront cost—you only pay from the measurable savings and efficiency gains we create for your business.
              </p>

              <div className="space-y-4 mb-8">
                <h4 className="text-lg font-semibold text-green-300">What You Get:</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-200">Custom Automation Development</span>
                      <p className="text-sm text-gray-400">Solutions built specifically for your operations and workflows</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-200">Full Implementation & Integration</span>
                      <p className="text-sm text-gray-400">End-to-end deployment with minimal business disruption</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-200">Continuous Optimization</span>
                      <p className="text-sm text-gray-400">Ongoing monitoring, updates, and performance improvements</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-200">Results Tracking & Reporting</span>
                      <p className="text-sm text-gray-400">Transparent documentation of savings and efficiency gains</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-900/20 p-4 rounded-lg mb-6">
                <p className="text-sm text-green-300 font-medium">Investment Model:</p>
                <p className="text-gray-300 text-sm">Zero upfront cost - Compensation tied directly to documented savings and measurable results</p>
              </div>

              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200"
              >
                <span>Explore Partnership</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Web Development & Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-900/30 to-red-900/30 p-8 rounded-lg border border-orange-500/20"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mr-4">
                  <Cog className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-orange-400">Web Development & Design</h3>
                  <p className="text-gray-400">Modern websites that drive business growth</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Need a professional website that converts visitors into customers? We create modern, fast, and mobile-optimized websites designed to grow your business and enhance your digital presence.
              </p>

              <div className="space-y-4 mb-8">
                <h4 className="text-lg font-semibold text-orange-300">What You Get:</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-200">Custom Website Design</span>
                      <p className="text-sm text-gray-400">Unique design tailored to your brand and business goals</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-200">Mobile-First Development</span>
                      <p className="text-sm text-gray-400">Responsive design that looks perfect on all devices</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-200">SEO Optimization</span>
                      <p className="text-sm text-gray-400">Built-in search engine optimization to help customers find you</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-200">Performance & Security</span>
                      <p className="text-sm text-gray-400">Fast loading speeds, secure hosting, and ongoing maintenance</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-900/20 p-4 rounded-lg mb-6">
                <p className="text-sm text-orange-300 font-medium">Investment Model:</p>
                <p className="text-gray-300 text-sm">Project-based pricing - Transparent costs with flexible payment options to fit your budget</p>
              </div>

              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-200"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Common Automation Areas */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Areas Ripe for Automation
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Although every business is unique and our consulting team can surely help you figure out your specific opportunities for automation, here are a few examples of business areas where AI automation typically delivers significant impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-black/30 p-6 rounded-lg text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-500 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Inventory Management</h3>
              <p className="text-gray-400 text-sm">
                Automated ordering, stock level optimization, demand forecasting, and supplier management
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-black/30 p-6 rounded-lg text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">HR & Scheduling</h3>
              <p className="text-gray-400 text-sm">
                Staff scheduling optimization, payroll automation, performance tracking, and recruitment workflows
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-black/30 p-6 rounded-lg text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-purple-500 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Compliance & Reporting</h3>
              <p className="text-gray-400 text-sm">
                Automated compliance tracking, regulatory reporting, audit preparation, and documentation
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-black/30 p-6 rounded-lg text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-orange-500 rounded-full flex items-center justify-center">
                <Cog className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Data Processing</h3>
              <p className="text-gray-400 text-sm">
                Document processing, data entry automation, file organization, and information extraction
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-black/30 p-6 rounded-lg text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-red-500 rounded-full flex items-center justify-center">
                <BarChart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Sales & Marketing</h3>
              <p className="text-gray-400 text-sm">
                Lead qualification, email automation, customer segmentation, and campaign optimization
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-black/30 p-6 rounded-lg text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-cyan-500 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Financial Operations</h3>
              <p className="text-gray-400 text-sm">
                Invoice processing, expense tracking, financial reporting, and budget monitoring
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Comparison */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              How Our Services Work
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Different approaches for different needs, but both focused on delivering real business value.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Consulting Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-6">Consulting Process</h3>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-200 mb-2">Discovery & Assessment</h4>
                  <p className="text-gray-400 text-sm">Comprehensive analysis of your operations, workflows, and current systems</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-200 mb-2">Opportunity Identification</h4>
                  <p className="text-gray-400 text-sm">Map automation opportunities with priority ranking and impact assessment</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-200 mb-2">Strategic Roadmap</h4>
                  <p className="text-gray-400 text-sm">Detailed implementation plan with timelines, resources, and ROI projections</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-200 mb-2">Recommendations & Next Steps</h4>
                  <p className="text-gray-400 text-sm">Clear guidance on how to proceed with implementation or vendor selection</p>
                </div>
              </div>
            </motion.div>

            {/* Implementation Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-green-400 mb-6">Implementation Process</h3>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-200 mb-2">Assessment & Strategy</h4>
                  <p className="text-gray-400 text-sm">Rapid analysis to identify highest-impact automation opportunities</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-200 mb-2">Custom Development</h4>
                  <p className="text-gray-400 text-sm">Build automation solutions tailored specifically to your operations</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-200 mb-2">Integration & Testing</h4>
                  <p className="text-gray-400 text-sm">Deploy solutions with minimal disruption and comprehensive testing</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-200 mb-2">Optimization & Growth</h4>
                  <p className="text-gray-400 text-sm">Continuous monitoring, optimization, and expansion of automation capabilities</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Whether you need strategic guidance or are ready for implementation, let's discuss how AI can transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
            >
              <span>Schedule Consulting Call</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200"
            >
              <span>Explore Partnership</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
