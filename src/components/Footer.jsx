import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp, Mail, MapPin, Phone, Clock, ChevronRight, Globe, Shield, Award } from 'react-feather';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Properties', href: '#properties' },
    { label: 'Investment', href: '#investment' },
    { label: 'Contact', href: '#contact' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
  ];

  const services = [
    { label: 'Luxury Residential Sales', href: '#' },
    { label: 'Commercial Leasing', href: '#' },
    { label: 'Property Management', href: '#' },
    { label: 'Real Estate Investment', href: '#' },
    { label: 'Property Valuation', href: '#' },
    { label: 'Legal & Advisory', href: '#' },
  ];

  const certifications = [
    { label: 'NIESV Certified', icon: <Shield size={14} /> },
    { label: 'Luxury Portfolio', icon: <Award size={14} /> },
    { label: 'Green Certified', icon: <Globe size={14} /> },
  ];

  const socialLinks = [
    { icon: <Facebook size={18} />, href: '#', label: 'Facebook' },
    { icon: <Twitter size={18} />, href: '#', label: 'Twitter' },
    { icon: <Instagram size={18} />, href: '#', label: 'Instagram' },
    { icon: <Linkedin size={18} />, href: '#', label: 'LinkedIn' },
  ];

  const officeLocations = [
    { city: 'Lagos', address: 'Lagos Island, Victoria Island' },
    { city: 'Abuja', address: 'Maitama District, CBD' },
    { city: 'Port Harcourt', address: 'GRA Phase 2, Old GRA' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const scrollButtonVariants = {
    idle: { scale: 1 },
    hover: { 
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.9 }
  };

  return (
    <>
      {/* Pre-footer CTA - Mobile Optimized */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white px-4 sm:px-6"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center px-2">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6"
            >
              <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              <span className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase text-white/60 font-light">Begin Your Journey</span>
              <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            </motion.div>

            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-6 sm:mb-8 leading-tight sm:leading-normal"
            >
              Experience the Royal Standard
            </motion.h3>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg md:text-xl text-white/70 mb-8 sm:mb-12 max-w-2xl mx-auto font-light leading-relaxed px-2 sm:px-0"
            >
              Connect with our luxury real estate specialists for a personalized consultation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-2 sm:px-0"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-white text-black px-6 sm:px-10 py-3 sm:py-4 font-medium tracking-wider flex items-center justify-center gap-2 sm:gap-3 overflow-hidden text-sm sm:text-base rounded-lg sm:rounded-none"
              >
                <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                  Schedule Consultation
                  <ChevronRight size={16} className="sm:size-[18px]" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-white to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-6 sm:px-10 py-3 sm:py-4 border border-white/30 text-white font-medium tracking-wider hover:bg-white/10 transition-all duration-300 overflow-hidden text-sm sm:text-base rounded-lg sm:rounded-none"
              >
                <span className="relative z-10">Call +234 812 345 6789</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Footer - Mobile Optimized */}
      <footer className="bg-black text-white">
        <div className="relative">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16"
            >
              {/* Brand Column */}
              <motion.div variants={itemVariants} className="lg:col-span-2">
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <div className="relative">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center overflow-hidden">
                        <span className="text-black font-bold text-xl sm:text-2xl">R</span>
                      </div>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full border border-white/20 border-t-transparent"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-2xl sm:text-3xl font-light tracking-wider">OAKVINE</span>
                      <span className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase text-white/60 font-light">REALTY</span>
                    </div>
                  </div>

                  <p className="text-white/60 mb-6 sm:mb-8 leading-relaxed max-w-md text-sm sm:text-base">
                    Nigeria's premier luxury real estate and investment firm, 
                    setting the standard for excellence since 2008.
                  </p>

                  {/* Certifications */}
                  <div className="mb-6 sm:mb-8">
                    <div className="text-xs sm:text-sm text-white/40 mb-3 sm:mb-4 uppercase tracking-wider">Certifications</div>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {certifications.map((cert, index) => (
                        <motion.div
                          key={cert.label}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-1 sm:gap-2 px-3 py-2 bg-white/5 rounded-full border border-white/10 text-xs"
                        >
                          {cert.icon}
                          <span className="text-xs">{cert.label}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div>
                    <div className="text-xs sm:text-sm text-white/40 mb-3 sm:mb-4 uppercase tracking-wider">Connect With Us</div>
                    <div className="flex gap-3 sm:gap-4">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={social.label}
                          href={social.href}
                          variants={itemVariants}
                          whileHover={{ y: -3, scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="relative group"
                          aria-label={social.label}
                        >
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-all duration-300">
                            <div className="text-white/60 group-hover:text-white transition-colors">
                              {social.icon}
                            </div>
                          </div>
                          <div className="hidden sm:block absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="text-xs bg-white text-black px-2 py-1 rounded whitespace-nowrap">
                              {social.label}
                            </div>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div variants={itemVariants}>
                <h3 className="text-lg font-light tracking-wider mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-white/10">
                  Quick Links
                </h3>
                <ul className="space-y-3 sm:space-y-4">
                  {quickLinks.map((link) => (
                    <motion.li
                      key={link.label}
                      whileHover={{ x: 5 }}
                      className="group"
                    >
                      <a
                        href={link.href}
                        className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group-hover:gap-3 duration-300 text-sm sm:text-base"
                      >
                        <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Services */}
              <motion.div variants={itemVariants}>
                <h3 className="text-lg font-light tracking-wider mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-white/10">
                  Our Services
                </h3>
                <ul className="space-y-3 sm:space-y-4">
                  {services.map((service) => (
                    <motion.li
                      key={service.label}
                      whileHover={{ x: 5 }}
                      className="group"
                    >
                      <a
                        href={service.href}
                        className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group-hover:gap-3 duration-300 text-sm sm:text-base"
                      >
                        <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        {service.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Info */}
              <motion.div variants={itemVariants}>
                <h3 className="text-lg font-light tracking-wider mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-white/10">
                  Contact Information
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                      <Phone size={14} className="sm:size-[16px] text-white/60" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-white/40 mb-1">24/7 Support</div>
                      <div className="text-white font-light text-sm sm:text-base">+234 812 345 6789</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                      <Mail size={14} className="sm:size-[16px] text-white/60" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-white/40 mb-1">Email</div>
                      <div className="text-white font-light text-sm sm:text-base">info@OakvineRealty.ng</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                      <Clock size={14} className="sm:size-[16px] text-white/60" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-white/40 mb-1">Business Hours</div>
                      <div className="text-white font-light text-sm sm:text-base">Mon - Fri: 9am - 6pm</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Office Locations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 sm:mt-20 pt-8 sm:pt-12 border-t border-white/10"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {officeLocations.map((office, index) => (
                  <motion.div
                    key={office.city}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-all shrink-0">
                        <MapPin size={16} className="sm:size-[18px] text-white/60 group-hover:text-white" />
                      </div>
                      <div>
                        <div className="text-base sm:text-lg font-light mb-1 sm:mb-2">{office.city}</div>
                        <div className="text-white/60 text-xs sm:text-sm leading-relaxed">{office.address}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 sm:mt-20 pt-8 sm:pt-12 border-t border-white/10"
            >
              <div className="max-w-2xl">
                <h3 className="text-xl sm:text-2xl font-light mb-4 sm:mb-6">Subscribe to Our Newsletter</h3>
                <p className="text-white/60 mb-6 sm:mb-8 text-sm sm:text-base">
                  Receive exclusive market insights, new property listings, and investment opportunities.
                </p>
                <form className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div className="flex-1">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors placeholder:text-white/30 text-sm sm:text-base"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-medium tracking-wider hover:bg-gray-100 transition-colors rounded-lg text-sm sm:text-base"
                  >
                    Subscribe
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Bottom Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12 sm:mt-20 pt-6 sm:pt-8 border-t border-white/10"
            >
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
                <div className="text-white/40 text-xs sm:text-sm text-center sm:text-left">
                  © {new Date().getFullYear()} Oakvine Realty. All rights reserved.
                </div>
                
                <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm text-white/40 justify-center">
                  {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Legal'].map((item, index) => (
                    <motion.a
                      key={item}
                      href="#"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="hover:text-white transition-colors"
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll to Top Button - Mobile Optimized */}
        <motion.button
          variants={scrollButtonVariants}
          initial="idle"
          whileHover="hover"
          whileTap="tap"
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50"
          aria-label="Scroll to top"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 blur-xl"></div>
            <div className="relative w-10 h-10 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center group hover:bg-white hover:text-black transition-all duration-300">
              <ArrowUp size={16} className="sm:size-[20px]" />
              <div className="hidden sm:block absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-xs bg-white text-black px-2 py-1 rounded whitespace-nowrap">
                  Back to top
                </div>
              </div>
            </div>
          </div>
        </motion.button>
      </footer>
    </>
  );
};

export default Footer;