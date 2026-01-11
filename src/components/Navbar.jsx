import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MapPin, Phone, ChevronRight, Clock } from 'react-feather';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Properties', href: '#properties', hasDropdown: true },
    { label: 'Investments', href: '#investment' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const propertyTypes = [
    { label: 'Luxury Villas', count: '45' },
    { label: 'Penthouse Suites', count: '28' },
    { label: 'Waterfront Properties', count: '22' },
    { label: 'Commercial Spaces', count: '36' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.5 }
    })
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <motion.div
        initial={{ y: -40 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-black via-gray-900 to-black text-white py-2 hidden md:block"
      >
        <div className="container-custom px-6">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Clock size={12} className="text-gray-300" />
                <span className="text-gray-300">Mon - Fri: 9am - 6pm</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={12} className="text-gray-300" />
                <span className="text-gray-300">Lagos | Abuja | Port Harcourt</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">Award-Winning Real Estate Company</span>
              <div className="w-px h-4 bg-gray-600"></div>
              <span className="text-gray-300">Since 2008</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-xl shadow-lg py-3 mt-0' 
            : 'bg-transparent py-6 md:py-8 mt-8 md:mt-12'
        }`}
        style={{
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none'
        }}
      >
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="relative">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-full border border-white/30"
                />
              </div>
              
              <div className="flex flex-col">
                <span className={`text-2xl font-light tracking-wider ${
                  scrolled ? 'text-black' : 'text-white'
                }`}>
                  OAKVINE
                </span>
                <span className={`text-xs tracking-[0.3em] uppercase font-light ${
                  scrolled ? 'text-gray-600' : 'text-white/60'
                }`}>
                  REALTY
                </span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.label)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <a
                    href={item.href}
                    className={`relative px-3 py-2 text-sm tracking-wider transition-colors duration-300 ${
                      scrolled 
                        ? 'text-black hover:text-gray-800' 
                        : 'text-white hover:text-white/80'
                    }`}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronRight 
                        size={12} 
                        className={`inline ml-1 transform transition-transform duration-300 ${
                          hoveredItem === item.label ? 'rotate-90' : ''
                        } ${scrolled ? 'text-gray-600' : 'text-white/60'}`}
                      />
                    )}
                    
                    {/* Animated underline */}
                    <motion.div
                      initial={false}
                      animate={{ 
                        width: hoveredItem === item.label ? '100%' : '0%',
                        opacity: hoveredItem === item.label ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className={`absolute bottom-0 left-0 h-px ${
                        scrolled ? 'bg-black' : 'bg-white'
                      }`}
                    />
                  </a>

                  {/* Property Types Dropdown */}
                  {item.hasDropdown && hoveredItem === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-xl rounded-lg shadow-2xl border border-gray-100 overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">
                          Property Types
                        </div>
                        {propertyTypes.map((type) => (
                          <motion.div
                            key={type.label}
                            whileHover={{ x: 5 }}
                            className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0 cursor-pointer group"
                          >
                            <span className="text-sm text-gray-800 group-hover:text-black">
                              {type.label}
                            </span>
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                              {type.count}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}

              {/* Contact Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="ml-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-6 py-3 bg-black text-white rounded-none overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2 text-sm tracking-wider">
                    <Phone size={14} />
                    Schedule Consultation
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-black to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled 
                  ? 'text-black hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="lg:hidden overflow-hidden"
            >
              <div className="bg-white/95 backdrop-blur-xl shadow-2xl border-t border-gray-100">
                <div className="container-custom px-6 py-8">
                  <div className="space-y-1">
                    {navItems.map((item) => (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-4 text-lg text-gray-800 hover:text-black hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          {item.label}
                          {item.hasDropdown && (
                            <ChevronRight size={16} className="text-gray-400" />
                          )}
                        </div>
                      </motion.a>
                    ))}
                  </div>
                  
                  {/* Contact Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-8 pt-8 border-t border-gray-100"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-gray-100 rounded-lg">
                        <Phone size={18} className="text-gray-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">24/7 Support</div>
                        <div className="text-lg font-medium text-black">+234 812 345 6789</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gray-100 rounded-lg">
                        <MapPin size={18} className="text-gray-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Main Office</div>
                        <div className="text-base text-black">Lagos Island, Lagos, Nigeria</div>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsOpen(false)}
                      className="w-full mt-8 bg-black text-white py-4 rounded-lg font-medium tracking-wider"
                    >
                      Book Consultation
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-black/30 to-transparent"
          animate={{ scaleX: scrolled ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.nav>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="fixed top-1/2 right-8 z-40 hidden lg:block"
      >
        <div className="flex flex-col items-center gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative group"
              onMouseEnter={() => setHoveredItem(item.label)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <motion.div
                animate={{ 
                  backgroundColor: hoveredItem === item.label ? '#000' : 'transparent',
                  borderColor: hoveredItem === item.label ? '#000' : '#666'
                }}
                className="w-3 h-3 rounded-full border border-gray-400 transition-all duration-300"
              />
              <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-xs text-white bg-black px-3 py-1 rounded whitespace-nowrap">
                  {item.label}
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;