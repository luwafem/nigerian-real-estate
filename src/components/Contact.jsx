import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, ChevronRight, MessageSquare, Calendar, Home, Globe, CheckCircle, X } from 'react-feather';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showContactDrawer, setShowContactDrawer] = useState(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setSubmitSuccess(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        preferredContact: 'email'
      });
      setSubmitSuccess(false);
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    { 
      icon: <Phone size={isMobile ? 20 : 24} />, 
      title: '24/7 Support', 
      info: '+234 812 345 6789',
      detail: 'Mon-Fri, 9am-6pm',
      gradient: 'from-blue-500/20 to-blue-600/10',
      action: 'tel:+2348123456789'
    },
    { 
      icon: <Mail size={isMobile ? 20 : 24} />, 
      title: 'Email', 
      info: 'info@OakvineRealty.ng',
      detail: 'Response within 24 hours',
      gradient: 'from-emerald-500/20 to-emerald-600/10',
      action: 'mailto:info@OakvineRealty.ng'
    },
    { 
      icon: <MapPin size={isMobile ? 20 : 24} />, 
      title: 'Headquarters', 
      info: 'Lagos Island, Lagos',
      detail: 'Visit by appointment',
      gradient: 'from-purple-500/20 to-purple-600/10',
      action: '#map'
    },
    { 
      icon: <Calendar size={isMobile ? 20 : 24} />, 
      title: 'Consultation', 
      info: 'Schedule Meeting',
      detail: 'Virtual or in-person',
      gradient: 'from-amber-500/20 to-amber-600/10',
      action: '#form'
    },
  ];

  const contactMethods = [
    { value: 'email', label: 'Email', icon: <Mail size={isMobile ? 14 : 16} /> },
    { value: 'phone', label: 'Phone', icon: <Phone size={isMobile ? 14 : 16} /> },
    { value: 'whatsapp', label: 'WhatsApp', icon: <MessageSquare size={isMobile ? 14 : 16} /> },
  ];

  const officeLocations = [
    { city: 'Lagos', address: 'Lagos Island, Victoria Island', phone: '+234 812 345 6789' },
    { city: 'Abuja', address: 'Maitama District, Central Business District', phone: '+234 812 345 6789' },
    { city: 'Port Harcourt', address: 'GRA Phase 2, Old GRA', phone: '+234 812 345 6789' },
  ];

  const textRevealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const cardHoverVariants = {
    initial: { y: 0 },
    hover: isMobile ? {} : { 
      y: -8,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    idle: { scale: 1 },
    hover: { scale: 1.02 },
    tap: { scale: 0.98 }
  };

  const handleContactAction = (action) => {
    if (action === '#form') {
      const formElement = document.querySelector('#contact-form');
      formElement?.scrollIntoView({ behavior: 'smooth' });
    } else if (action.startsWith('#') || action.startsWith('mailto:') || action.startsWith('tel:')) {
      // Let the browser handle the link
      return;
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Background Elements - Optimized for mobile */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-black/3 to-transparent rounded-full blur-2xl md:blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-black/3 to-transparent rounded-full blur-2xl md:blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 py-12 md:py-20 lg:py-28">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="text-center mb-10 md:mb-16 px-4 md:px-0"
        >
          <motion.div 
            variants={textRevealVariants}
            className="inline-flex items-center gap-2 md:gap-3 mb-4 md:mb-6"
          >
            <div className="w-8 md:w-16 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
            <span className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase text-gray-500 font-light">Connect With Us</span>
            <div className="w-8 md:w-16 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
          </motion.div>
          
          <motion.h2 
            variants={textRevealVariants}
            className="text-3xl md:text-5xl lg:text-6xl font-light text-black mb-6 md:mb-8 leading-tight"
          >
            Begin Your <span className="italic">Luxury</span>
            <br />
            <span className="text-gray-600">Real Estate Journey</span>
          </motion.h2>

          <motion.p 
            variants={textRevealVariants}
            className="text-base md:text-lg lg:text-xl text-gray-600 max-w-xl md:max-w-3xl mx-auto font-light leading-relaxed"
          >
            Connect with our team of luxury real estate specialists for personalized guidance.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 mb-16 md:mb-20 px-4 md:px-0">
          {/* Contact Information Cards */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 md:space-y-6"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                variants={cardHoverVariants}
                initial="initial"
                whileHover="hover"
                className="group relative"
              >
                <a
                  href={item.action}
                  onClick={(e) => {
                    if (item.action === '#form' || item.action === '#map') {
                      e.preventDefault();
                      handleContactAction(item.action);
                    }
                  }}
                  className="block"
                >
                  <div className={`relative bg-gradient-to-br from-white to-gray-50 border border-gray-100 p-6 md:p-8 rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-lg md:hover:shadow-xl transition-all duration-300 active:scale-95`}>
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-start gap-4 md:gap-6">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg md:rounded-xl bg-black flex items-center justify-center group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                          <div className="text-white">
                            {item.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="text-xs md:text-sm text-gray-500 mb-1 md:mb-2 uppercase tracking-wider">
                            {item.title}
                          </div>
                          <div className="text-lg md:text-xl font-light text-black mb-1 md:mb-2 group-hover:text-black truncate">
                            {item.info}
                          </div>
                          <div className="text-xs md:text-sm text-gray-600">
                            {item.detail}
                          </div>
                        </div>
                      </div>
                      
                      {/* Animated Arrow */}
                      <motion.div
                        initial={{ x: 0, opacity: 0 }}
                        animate={{ x: 3, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ChevronRight size={isMobile ? 16 : 20} className="text-gray-400" />
                      </motion.div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            id="contact-form"
            initial={{ opacity: 0, y: isMobile ? 20 : 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="relative">
              {/* Form Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl md:rounded-3xl border border-gray-100 shadow-lg md:shadow-2xl"></div>
              
              <form onSubmit={handleSubmit} className="relative bg-white/80 backdrop-blur-sm p-6 md:p-8 lg:p-12 rounded-2xl md:rounded-3xl">
                {/* Success Message */}
                <AnimatePresence>
                  {submitSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="mb-6 md:mb-8 p-4 md:p-6 bg-emerald-50 border border-emerald-200 rounded-xl md:rounded-2xl"
                    >
                      <div className="flex items-center gap-3 md:gap-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <div className="text-emerald-600">
                            <CheckCircle size={isMobile ? 20 : 24} />
                          </div>
                        </div>
                        <div>
                          <div className="text-base md:text-lg font-medium text-emerald-800 mb-1">
                            Message Sent Successfully
                          </div>
                          <div className="text-emerald-600 text-sm md:text-base">
                            Our team will contact you within 24 hours.
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
                  {/* Name Field */}
                  <div className="relative">
                    <label className="block text-xs md:text-sm font-light tracking-wider text-gray-700 mb-2 md:mb-3 uppercase">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 md:px-6 py-3 md:py-4 bg-white/50 border border-gray-200 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-transparent transition-all placeholder:text-gray-400 text-sm md:text-base"
                        placeholder="John Adekunle"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <label className="block text-xs md:text-sm font-light tracking-wider text-gray-700 mb-2 md:mb-3 uppercase">
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 md:px-6 py-3 md:py-4 bg-white/50 border border-gray-200 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-transparent transition-all placeholder:text-gray-400 text-sm md:text-base"
                        placeholder="john@example.com"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="relative">
                    <label className="block text-xs md:text-sm font-light tracking-wider text-gray-700 mb-2 md:mb-3 uppercase">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 md:px-6 py-3 md:py-4 bg-white/50 border border-gray-200 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-transparent transition-all placeholder:text-gray-400 text-sm md:text-base"
                        placeholder="+234 812 345 6789"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="relative">
                    <label className="block text-xs md:text-sm font-light tracking-wider text-gray-700 mb-2 md:mb-3 uppercase">
                      Inquiry Type *
                    </label>
                    <div className="relative">
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 md:px-6 py-3 md:py-4 bg-white/50 border border-gray-200 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-transparent transition-all appearance-none text-sm md:text-base"
                      >
                        <option value="">Select inquiry type</option>
                        <option value="property-viewing">Luxury Property Viewing</option>
                        <option value="investment">Investment Consultation</option>
                        <option value="partnership">Business Partnership</option>
                        <option value="general">General Inquiry</option>
                        <option value="valuation">Property Valuation</option>
                      </select>
                      <div className="absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <ChevronRight size={isMobile ? 16 : 20} className="text-gray-400 rotate-90" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                    </div>
                  </div>
                </div>

                {/* Preferred Contact Method */}
                <div className="mb-6 md:mb-8">
                  <label className="block text-xs md:text-sm font-light tracking-wider text-gray-700 mb-3 md:mb-4 uppercase">
                    Preferred Contact Method
                  </label>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {contactMethods.map((method) => (
                      <motion.label
                        key={method.value}
                        whileTap={{ scale: 0.98 }}
                        className={`flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 md:py-3 rounded-lg cursor-pointer border transition-all text-sm md:text-base ${
                          formData.preferredContact === method.value
                            ? 'bg-black text-white border-black'
                            : 'bg-white/50 border-gray-200 text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="preferredContact"
                          value={method.value}
                          checked={formData.preferredContact === method.value}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        {method.icon}
                        <span>{method.label}</span>
                      </motion.label>
                    ))}
                  </div>
                </div>

                {/* Message Field */}
                <div className="mb-8 md:mb-10">
                  <label className="block text-xs md:text-sm font-light tracking-wider text-gray-700 mb-3 md:mb-4 uppercase">
                    Your Message *
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 md:px-6 py-3 md:py-4 bg-white/50 border border-gray-200 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-transparent transition-all placeholder:text-gray-400 resize-none text-sm md:text-base"
                      placeholder="Please describe your luxury real estate needs, preferences, and timeline..."
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  variants={buttonVariants}
                  initial="idle"
                  whileHover={isMobile ? "idle" : "hover"}
                  whileTap="tap"
                  type="submit"
                  disabled={isSubmitting}
                  className={`group relative w-full py-3 md:py-4 lg:py-5 bg-black text-white font-medium tracking-wider rounded-lg md:rounded-xl overflow-hidden text-sm md:text-base ${
                    isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
                  }`}
                >
                  <div className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <motion.div
                          animate={{ x: [0, 3, 0] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                        >
                          <Send size={isMobile ? 14 : 18} />
                        </motion.div>
                      </>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-black to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>

                {/* Privacy Note */}
                <p className="mt-4 md:mt-6 text-center text-xs md:text-sm text-gray-500 px-2">
                  By submitting this form, you agree to our privacy policy. We respect your data and will only use it to contact you.
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Global Offices */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 px-4 md:px-0"
        >
          <div className="text-center mb-8 md:mb-12">
            <motion.div className="inline-flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
              <Globe size={isMobile ? 18 : 20} className="text-gray-400" />
              <div className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
            </motion.div>
            <h3 className="text-2xl md:text-4xl font-light text-black mb-4 md:mb-6">
              Our Global Presence
            </h3>
            <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
              Connect with our luxury real estate specialists across Nigeria's most prestigious markets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {officeLocations.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={isMobile ? {} : { y: -5 }}
                className="group"
              >
                <div className="relative bg-gradient-to-br from-white to-gray-50 border border-gray-100 p-5 md:p-6 lg:p-8 rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 group-hover:shadow-lg">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent"></div>
                  
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-black flex items-center justify-center group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                      <Home size={isMobile ? 20 : 24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-lg md:text-2xl font-light text-black mb-2 md:mb-3">
                        {office.city}
                      </div>
                      <div className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">
                        {office.address}
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 text-sm md:text-base">
                        <Phone size={isMobile ? 14 : 16} />
                        <span>{office.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative px-4 md:px-0"
        >
          <div className="bg-gradient-to-br from-black to-gray-900 text-white rounded-2xl md:rounded-3xl overflow-hidden">
            {/* Map Header */}
            <div className="p-6 md:p-8 lg:p-12 border-b border-white/10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6">
                <div className="mb-4 md:mb-0">
                  <div className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase text-white/60 mb-2 md:mb-3">
                    Visit Our Headquarters
                  </div>
                  <h3 className="text-xl md:text-3xl lg:text-4xl font-light">
                    Oakvine Realty Headquarters
                  </h3>
                  <p className="text-white/70 mt-1 md:mt-2 text-sm md:text-base">
                    Lagos Island, Victoria Island, Lagos, Nigeria
                  </p>
                </div>
                
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-6 md:px-8 py-3 md:py-4 bg-white text-black font-medium tracking-wider rounded-lg md:rounded-xl overflow-hidden whitespace-nowrap text-sm md:text-base"
                >
                  <span className="relative z-10 flex items-center gap-2 md:gap-3">
                    <MapPin size={isMobile ? 16 : 18} />
                    Get Directions
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-white to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </div>
            </div>

            {/* Map Container */}
            <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] bg-gradient-to-br from-gray-800 to-black">
              {/* Map Placeholder with Luxury Design */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="relative mb-4 md:mb-6">
                    <MapPin size={isMobile ? 48 : 64} className="text-white/20 mx-auto" />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-full border border-white/10"
                    />
                  </div>
                  <div className="text-white/40 text-sm md:text-lg mb-1 md:mb-2">
                    Interactive Luxury Map
                  </div>
                  <div className="text-white/30 text-xs md:text-sm">
                    Google Maps integration available
                  </div>
                </div>
              </div>

              {/* Decorative Grid Overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49%,rgba(255,255,255,0.1)_50%)] bg-[length:30px_30px] md:bg-[length:40px_40px]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_50%,transparent_50%)] bg-[length:30px_30px] md:bg-[length:40px_40px]"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;