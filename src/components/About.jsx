import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, CheckCircle, ChevronRight, Star, Globe, Home, Calendar } from 'react-feather';

const About = () => {
  const values = [
    { 
      icon: <Award size={28} />, 
      title: 'Excellence', 
      description: 'Uncompromising quality in every project',
      gradient: 'from-blue-400/20 to-blue-600/10'
    },
    { 
      icon: <Users size={28} />, 
      title: 'Integrity', 
      description: 'Transparent and honest dealings',
      gradient: 'from-emerald-400/20 to-emerald-600/10'
    },
    { 
      icon: <Target size={28} />, 
      title: 'Innovation', 
      description: 'Pioneering real estate solutions',
      gradient: 'from-purple-400/20 to-purple-600/10'
    },
    { 
      icon: <CheckCircle size={28} />, 
      title: 'Reliability', 
      description: 'Consistent delivery on promises',
      gradient: 'from-amber-400/20 to-amber-600/10'
    },
  ];

  const milestones = [
    { year: '2008', title: 'Founded', description: 'Started operations in Lagos' },
    { year: '2012', title: 'Expansion', description: 'Expanded to Abuja & PH' },
    { year: '2016', title: 'Award', description: 'Best Luxury Developer' },
    { year: '2023', title: 'Milestone', description: '₦50B+ Portfolio Value' },
  ];

  const textRevealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const floatingCardVariants = {
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="about" className="relative overflow-hidden">
      {/* Background Elements - Mobile Optimized */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-black/5 to-transparent rounded-full blur-xl sm:blur-2xl md:blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-tl from-black/5 to-transparent rounded-full blur-xl sm:blur-2xl md:blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-36">
        {/* Section Header - Mobile Optimized */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.div variants={textRevealVariants} className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-px sm:w-12 md:w-16 bg-gradient-to-r from-transparent via-black/30 to-transparent"></div>
            <span className="text-white/80 tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-xs sm:text-sm font-light uppercase">
             Oakvine Realty
            </span>
            <div className="w-8 h-px sm:w-12 md:w-16 bg-gradient-to-r from-transparent via-black/30 to-transparent"></div>
          </motion.div>
          
          <motion.h2 
            variants={textRevealVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-black mb-6 sm:mb-8 leading-tight px-4 sm:px-0"
          >
            Redefining <span className="italic">Excellence</span>
            <br />
            <span className="text-gray-600">In Nigerian Real Estate</span>
          </motion.h2>

          <motion.p 
            variants={textRevealVariants}
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed px-4 sm:px-6 md:px-0"
          >
            For over 15 years, Oakvine Realty has shaped Nigeria's skyline with visionary architecture and unparalleled investment opportunities.
          </motion.p>
        </motion.div>

        {/* Main Content - Mobile Optimized */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 lg:gap-24 items-center mb-20 sm:mb-24 md:mb-28 lg:mb-32">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative order-2 lg:order-1 px-4 sm:px-6 md:px-0"
          >
            {/* Floating Stats - Mobile Optimized */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
              {[
                { value: '15+', label: 'Years of Excellence', icon: <Calendar size={20} /> },
                { value: '500+', label: 'Properties Managed', icon: <Home size={20} /> },
                { value: '₦50B+', label: 'Portfolio Value', icon: <Target size={20} /> },
                { value: '98%', label: 'Client Satisfaction', icon: <CheckCircle size={20} /> },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="text-black w-5 h-5 sm:w-6 sm:h-6">
                      {stat.icon}
                    </div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-light text-black">{stat.value}</div>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="space-y-6 sm:space-y-8">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed"
              >
                As Nigeria's premier luxury real estate and investment firm, we combine deep local expertise with global standards to deliver exceptional value across every facet of our operations.
              </motion.p>

              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed"
              >
                Our portfolio spans the most exclusive residential developments, commercial landmarks, and strategic investment vehicles across Nigeria's most promising markets, setting new benchmarks for quality and innovation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="pt-4"
              >
                <motion.button
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative inline-flex items-center gap-2 sm:gap-3 text-black font-medium tracking-wider py-3 sm:py-4 px-0"
                >
                  <span className="relative z-10 text-sm sm:text-base">Explore Our Journey</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="relative z-10"
                  >
                    <ChevronRight size={16} className="sm:w-5 sm:h-5" />
                  </motion.div>
                  <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-black transition-all duration-500"></div>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative order-1 lg:order-2 px-4 sm:px-6 md:px-0"
          >
            {/* Main Image Stack - Mobile Optimized */}
            <div className="relative">
              {/* Large Main Image */}
              <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden"
              >
                <img 
                  src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=2070&q=80" 
                  alt="Royal Estates Headquarters" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </motion.div>

              {/* Floating Images - Mobile Optimized */}
              <motion.div
                variants={floatingCardVariants}
                animate="float"
                className="absolute -bottom-4 -right-4 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl md:shadow-2xl border-2 sm:border-4 border-white"
              >
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2073&q=80" 
                  alt="Modern Architecture" 
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                variants={floatingCardVariants}
                animate="float"
                transition={{ delay: 1 }}
                className="absolute -top-4 -left-4 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 xl:w-56 xl:h-56 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl md:shadow-2xl border-2 sm:border-4 border-white"
              >
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=2058&q=80" 
                  alt="Luxury Interior" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Milestone Timeline - Mobile Optimized */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            >
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="relative"
                >
                  <div className="text-lg sm:text-xl md:text-2xl font-light text-black mb-1 sm:mb-2">{milestone.year}</div>
                  <div className="text-xs sm:text-sm font-medium text-black mb-1">{milestone.title}</div>
                  <div className="text-[10px] sm:text-xs text-gray-600 leading-tight">{milestone.description}</div>
                  {index < milestones.length - 1 && (
                    <div className="hidden lg:block absolute top-4 right-0 w-6 h-px bg-gray-200"></div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Core Values Section - Mobile Optimized */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="pt-12 sm:pt-16 md:pt-20 border-t border-gray-100"
        >
          <motion.div 
            variants={textRevealVariants}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-px sm:w-12 bg-gradient-to-r from-transparent via-black/30 to-transparent"></div>
              <span className="text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase text-gray-500 font-light">Our Philosophy</span>
              <div className="w-8 h-px sm:w-12 bg-gradient-to-r from-transparent via-black/30 to-transparent"></div>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-black mb-4 sm:mb-6">
              Core Values That Define Us
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
              The principles that guide every decision and define our commitment to excellence.
            </p>
          </motion.div>

          {/* Values Grid - Mobile Optimized */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-0">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                custom={index}
                variants={textRevealVariants}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className={`relative bg-gradient-to-br from-white to-gray-50 border border-gray-100 p-6 sm:p-7 md:p-8 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-500 group-hover:shadow-lg sm:group-hover:shadow-xl`}>
                  {/* Animated background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl bg-black flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500">
                      <div className="text-white w-5 h-5 sm:w-6 sm:h-6">
                        {React.cloneElement(value.icon, { 
                          size: window.innerWidth < 640 ? 20 : 
                                window.innerWidth < 768 ? 22 : 28 
                        })}
                      </div>
                    </div>
                    
                    <h4 className="text-lg sm:text-xl font-medium text-black mb-3 sm:mb-4 group-hover:text-black">
                      {value.title}
                    </h4>
                    
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {value.description}
                    </p>
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent group-hover:via-black/30 transition-all duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Floating Award Card - Mobile: Hidden, Tablet+: Show */}
        <motion.div
          variants={floatingCardVariants}
          animate="float"
          className="absolute right-4 sm:right-6 md:right-8 bottom-8 sm:bottom-16 md:bottom-24 lg:bottom-32 hidden sm:block"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/10 blur-lg sm:blur-xl md:blur-2xl"></div>
            <div className="relative bg-white/95 backdrop-blur-sm border border-amber-200 p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl md:shadow-2xl max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-xs">
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-amber-100 rounded-lg sm:rounded-xl">
                  <Award size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-amber-600" />
                </div>
                <div>
                  <div className="text-lg sm:text-xl md:text-2xl font-light text-black mb-1">Award Winning</div>
                  <div className="text-xs sm:text-sm text-amber-600 font-medium">Best Luxury Developer 2023</div>
                </div>
              </div>
              <div className="text-[10px] sm:text-xs text-gray-600">
                Recognized for excellence in architecture and customer satisfaction
              </div>
            </div>
          </div>
        </motion.div>

        {/* Global Presence - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 sm:mt-20 md:mt-24 lg:mt-32 pt-12 sm:pt-16 md:pt-20 border-t border-gray-100"
        >
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 md:px-0">
            <div className="inline-flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <div className="w-6 h-px sm:w-8 bg-gradient-to-r from-transparent via-black/30 to-transparent"></div>
              <Globe size={16} className="sm:w-5 sm:h-5 text-gray-400" />
              <div className="w-6 h-px sm:w-8 bg-gradient-to-r from-transparent via-black/30 to-transparent"></div>
            </div>
            <h4 className="text-xl sm:text-2xl md:text-3xl font-light text-black mb-4 sm:mb-6">
              Serving Nigeria's Most Prestigious Markets
            </h4>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              With strategic presence in Lagos, Abuja, and Port Harcourt, we're at the forefront of Nigeria's real estate evolution.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;