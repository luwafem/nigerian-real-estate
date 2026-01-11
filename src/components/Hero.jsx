import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, TrendingUp, Home, ChevronRight } from 'react-feather';

const Hero = () => {
  const stats = [
    { value: '500+', label: 'Exclusive Properties', icon: <Home size={24} /> },
    { value: '15+', label: 'Years of Excellence', icon: <Shield size={24} /> },
    { value: '₦50B+', label: 'Portfolio Value', icon: <TrendingUp size={24} /> },
  ];

  const textRevealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const floatAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
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

  const statItemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: "backOut" }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Background with Parallax Effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/90 to-transparent sm:bg-gradient-to-r sm:from-black sm:via-black/90 sm:to-transparent"></div>
        <div className="absolute inset-0 z-5 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&w=2070&q=80)',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center'
          }}
        />
      </motion.div>

      {/* Animated Geometric Elements - Mobile Optimized */}
      <div className="absolute inset-0 z-1 overflow-hidden">
        <motion.div 
          animate={floatAnimation}
          className="absolute top-1/4 left-4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 border border-white/10 rounded-full"
        />
        <motion.div 
          animate={{
            ...floatAnimation,
            transition: { ...floatAnimation.transition, delay: 2 }
          }}
          className="absolute bottom-1/4 right-4 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 border border-white/5 rounded-full"
        />
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-20 px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          {/* Pre-title - Mobile Optimized */}

          {/* Main Heading - Mobile Optimized */}
          <motion.h1 
            variants={textRevealVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-light text-white mb-6 sm:mb-8 leading-tight sm:leading-[0.95] tracking-tight text-center sm:text-left"
          >
            <span className="block">Redefining</span>
            <span className="block mt-1 sm:mt-2">Luxury Living</span>
            <motion.span 
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100%" }}
              transition={{ delay: 1.2, duration: 1.5, ease: "easeInOut" }}
              className="block mt-2 sm:mt-4 text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-normal text-white/70 tracking-wider text-center sm:text-left"
            >
              In Nigeria
            </motion.span>
          </motion.h1>

          {/* Subtitle - Mobile Optimized */}
          <motion.p 
            variants={textRevealVariants}
            className="text-base sm:text-lg md:text-xl text-white/70 mb-8 sm:mb-12 max-w-2xl mx-auto sm:mx-0 font-light leading-relaxed text-center sm:text-left px-4 sm:px-0"
          >
            Where architectural excellence meets unparalleled investment opportunities. 
            Discover bespoke properties curated for the discerning elite.
          </motion.p>

          {/* CTA Buttons - Mobile Optimized */}
          <motion.div 
            variants={textRevealVariants}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12 sm:mb-20 px-4 sm:px-0"
          >
            <motion.button
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-white text-black px-6 py-4 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-none font-medium tracking-wider flex items-center justify-center gap-2 sm:gap-3 overflow-hidden w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                Explore Collection
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="hidden sm:block"
                >
                  <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                </motion.div>
                <ChevronRight size={16} className="sm:hidden" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-6 py-4 sm:px-8 sm:py-4 md:px-10 md:py-5 border border-white/30 text-white font-medium tracking-wider hover:bg-white/10 transition-all duration-300 overflow-hidden w-full sm:w-auto"
            >
              <span className="relative z-10 text-sm sm:text-base">Investment Portfolio</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </motion.button>
          </motion.div>

          {/* Premium Stats Cards - Mobile Optimized */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-4 sm:px-0"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={statItemVariants}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm sm:backdrop-blur-xl border border-white/10 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl overflow-hidden">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl p-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-full h-full rounded-xl sm:rounded-2xl bg-black"></div>
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="p-2 sm:p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors duration-300">
                        <div className="text-white transform group-hover:scale-110 transition-transform duration-300 w-5 h-5 sm:w-6 sm:h-6">
                          {React.cloneElement(stat.icon, { size: window.innerWidth < 640 ? 18 : 24 })}
                        </div>
                      </div>
                      <div className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-white">
                        {stat.value}
                      </div>
                    </div>
                    <div className="text-white/60 text-xs sm:text-sm tracking-wider uppercase font-light">
                      {stat.label}
                    </div>
                    
                    {/* Animated underline */}
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                      className="mt-3 sm:mt-4 h-0.5 bg-gradient-to-r from-white/30 via-white/50 to-white/30"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Luxury Scroll Indicator - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 sm:gap-4">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="flex flex-col items-center gap-1 sm:gap-2"
            >
              <div className="text-white/50 text-[10px] xs:text-xs tracking-widest uppercase font-light">
                Scroll
              </div>
              <div className="relative">
                <div className="w-[1px] h-12 sm:h-16 bg-gradient-to-b from-white/30 via-white/60 to-transparent"></div>
                <motion.div 
                  animate={{ y: [0, 48, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Luxury Badge - Mobile: Hidden, Tablet+: Show */}
      <motion.div
        initial={{ opacity: 0, rotate: -90 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 1, duration: 1, ease: "backOut" }}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 lg:top-12 lg:right-12"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 blur-lg sm:blur-xl"></div>
          <div className="relative border border-white/20 px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 backdrop-blur-sm">
            <div className="text-white/80 tracking-[0.2em] sm:tracking-[0.3em] text-[10px] xs:text-xs sm:text-sm font-light uppercase whitespace-nowrap">
              Since 2008
            </div>
          </div>
        </div>
      </motion.div>

      {/* Social Proof - Mobile: Hidden, Tablet+: Show */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 lg:bottom-12 lg:left-12 hidden sm:block"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
          <div className="text-white/60 text-xs sm:text-sm font-light">
            Featured in
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            {['Forbes', 'Financial Times', 'Bloomberg'].map((brand, index) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 + index * 0.1 }}
                className="text-white/40 text-xs sm:text-sm font-light tracking-wider hover:text-white/60 transition-colors cursor-pointer"
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;