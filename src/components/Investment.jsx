import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Shield, Globe, PieChart, ChevronRight, Target, BarChart, Award, Clock, CheckCircle, ArrowRight, Filter, X } from 'react-feather';
import { investmentPlans, investmentSteps, investmentStats, investmentBenefits } from '../data/investmentData';

const Investment = () => {
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isMobile, setIsMobile] = useState(false);
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);
  const [expandedPlan, setExpandedPlan] = useState(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const planIcons = {
    1: <TrendingUp size={isMobile ? 22 : 28} />,
    2: <PieChart size={isMobile ? 22 : 28} />,
    3: <Shield size={isMobile ? 22 : 28} />,
    4: <BarChart size={isMobile ? 22 : 28} />
  };

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'premium', label: 'Premium' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'residential', label: 'Residential' },
    { id: 'reit', label: 'REITs' }
  ];

  const filteredPlans = investmentPlans.filter(plan => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'premium') return plan.highlight;
    if (activeFilter === 'commercial') return plan.id === 2;
    if (activeFilter === 'residential') return plan.id === 3;
    if (activeFilter === 'reit') return plan.id === 4;
    return true;
  });

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
    initial: { y: 0, scale: 1 },
    hover: isMobile ? {} : { 
      y: -10,
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const riskLevelColors = {
    Low: 'bg-emerald-500',
    Medium: 'bg-amber-500',
    High: 'bg-red-500'
  };

  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId);
    if (showFilterDrawer) setShowFilterDrawer(false);
  };

  const togglePlanExpand = (planId) => {
    if (expandedPlan === planId) {
      setExpandedPlan(null);
    } else {
      setExpandedPlan(planId);
    }
  };

  return (
    <section id="investment" className="relative overflow-hidden">
      {/* Background Elements - Optimized for mobile */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-500/3 to-transparent rounded-full blur-2xl md:blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-purple-500/3 to-transparent rounded-full blur-2xl md:blur-3xl"></div>
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
            <span className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase text-gray-500 font-light">Wealth Creation</span>
            <div className="w-8 md:w-16 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
          </motion.div>
          
          <motion.h2 
            variants={textRevealVariants}
            className="text-3xl md:text-5xl lg:text-6xl font-light text-black mb-6 md:mb-8 leading-tight"
          >
            Strategic <span className="italic">Wealth</span>
            <br />
            <span className="text-gray-600">Through Real Estate</span>
          </motion.h2>

          <motion.p 
            variants={textRevealVariants}
            className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Access exclusive real estate investment opportunities for substantial returns.
          </motion.p>
        </motion.div>

        {/* Mobile Filter Drawer */}
        <AnimatePresence>
          {showFilterDrawer && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50 md:hidden"
              onClick={() => setShowFilterDrawer(false)}
            >
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ type: 'spring', damping: 25 }}
                className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 max-h-[70vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-medium">Filter Investments</h3>
                  <button
                    onClick={() => setShowFilterDrawer(false)}
                    className="p-2 rounded-full bg-gray-100"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  {filters.map((filter) => (
                    <motion.button
                      key={filter.id}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleFilterClick(filter.id)}
                      className={`px-4 py-3 rounded-lg font-medium text-sm ${
                        activeFilter === filter.id
                          ? 'bg-black text-white'
                          : 'bg-gray-50 text-gray-700 border border-gray-200'
                      }`}
                    >
                      {filter.label}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Investment Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-12 px-4 md:px-0"
        >
          {/* Mobile Filter Button */}
          <div className="md:hidden mb-4">
            <button
              onClick={() => setShowFilterDrawer(true)}
              className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-xl w-full justify-center"
            >
              <Filter size={18} />
              <span className="font-medium">Filter Investments</span>
            </button>
          </div>

          {/* Desktop Filters */}
          <div className="hidden md:flex flex-wrap justify-center gap-2 md:gap-3">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 md:px-6 py-2.5 md:py-3 rounded-lg md:rounded-xl font-medium text-sm md:text-base tracking-wider transition-all ${
                  activeFilter === filter.id
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Investment Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-24 px-4 md:px-0">
          {filteredPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              variants={cardHoverVariants}
              initial="initial"
              whileHover="hover"
              onClick={() => isMobile ? togglePlanExpand(plan.id) : setSelectedPlan(plan.id)}
              className="group relative cursor-pointer"
            >
              <div className={`relative bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-2xl md:rounded-3xl overflow-hidden shadow-md md:shadow-lg hover:shadow-xl transition-all duration-300 ${
                selectedPlan === plan.id ? 'ring-1 md:ring-2 ring-black' : ''
              } ${expandedPlan === plan.id ? 'ring-2 ring-black' : ''}`}>
                
                {/* Premium Badge */}
                {plan.highlight && (
                  <div className="absolute top-4 md:top-6 right-4 md:right-6 z-10">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 blur-sm md:blur-lg"></div>
                      <div className="relative bg-gradient-to-r from-amber-400 to-amber-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
                        Premium
                      </div>
                    </div>
                  </div>
                )}

                {/* Main Content */}
                <div className="relative p-5 md:p-8 lg:p-10">
                  <div className="flex items-start justify-between mb-6 md:mb-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg md:rounded-xl bg-black flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                          <div className="text-white">
                            {planIcons[plan.id]}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mb-1">
                            {plan.subtitle}
                          </div>
                          <h3 className="text-lg md:text-2xl lg:text-3xl font-light text-black">
                            {plan.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                    
                    {/* Risk Level */}
                    <div className="flex flex-col items-end ml-2">
                      <div className={`px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-medium text-white mb-1 md:mb-2 ${riskLevelColors[plan.riskLevel]}`}>
                        {plan.riskLevel}
                      </div>
                      <div className="text-xs md:text-sm text-gray-500">Risk</div>
                    </div>
                  </div>

                  {/* Returns Section */}
                  <div className="mb-6 md:mb-8 p-4 md:p-6 bg-black/5 rounded-xl md:rounded-2xl">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-2xl md:text-4xl lg:text-5xl font-light text-black mb-1 md:mb-2">
                          {plan.returns}
                        </div>
                        <div className="text-xs md:text-sm text-gray-600">
                          {plan.returnsLabel}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg md:text-2xl font-light text-black mb-1 md:mb-2">
                          {plan.minInvestment}
                        </div>
                        <div className="text-xs md:text-sm text-gray-600">
                          Min Investment
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center gap-2 mb-4 md:mb-6">
                    <Clock size={isMobile ? 16 : 18} className="text-gray-400" />
                    <span className="text-gray-700 font-medium text-sm md:text-base">{plan.duration}</span>
                    <span className="text-gray-500 ml-2 text-xs md:text-sm">Investment Period</span>
                  </div>

                  {/* Collapsible Features for Mobile */}
                  {isMobile && (
                    <div className="mb-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          togglePlanExpand(plan.id);
                        }}
                        className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-2"
                      >
                        {expandedPlan === plan.id ? 'Hide Features' : 'Show Features'}
                        <ChevronRight 
                          size={16} 
                          className={`transition-transform ${expandedPlan === plan.id ? 'rotate-90' : ''}`}
                        />
                      </button>
                      
                      <AnimatePresence>
                        {expandedPlan === plan.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="space-y-2 mb-4"
                          >
                            {plan.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-black/10 flex items-center justify-center flex-shrink-0">
                                  <CheckCircle size={12} className="text-black" />
                                </div>
                                <span className="text-sm text-gray-700">{feature}</span>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

                  {/* Desktop Features */}
                  {!isMobile && (
                    <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 md:gap-3">
                          <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-black/10 flex items-center justify-center flex-shrink-0">
                            <CheckCircle size={isMobile ? 12 : 14} className="text-black" />
                          </div>
                          <span className="text-sm md:text-base text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Invest Button */}
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="group relative w-full py-3 md:py-4 bg-black text-white font-medium text-sm md:text-base tracking-wider rounded-lg md:rounded-xl overflow-hidden active:scale-95 transition-transform"
                  >
                    <div className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                      Start Investing
                      <motion.div
                        animate={{ x: [0, 3, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      >
                        <ArrowRight size={isMobile ? 14 : 18} />
                      </motion.div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-black to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Investment Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 px-4 md:px-0"
        >
          <div className="text-center mb-10 md:mb-16">
            <motion.div className="inline-flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
              <Target size={isMobile ? 18 : 20} className="text-gray-400" />
              <div className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
            </motion.div>
            <h3 className="text-2xl md:text-4xl font-light text-black mb-4 md:mb-6">
              Our Investment Process
            </h3>
            <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
              A streamlined approach for transparency and maximum returns
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line - Hidden on mobile */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {investmentSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={isMobile ? {} : { y: -10 }}
                  className="relative text-center"
                >
                  {/* Step Number */}
                  <div className="relative mb-6 md:mb-8">
                    <div className="text-5xl md:text-6xl font-bold text-gray-100">{step.number}</div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-2xl font-bold text-black">
                      {step.number}
                    </div>
                  </div>
                  
                  <h4 className="text-lg md:text-xl font-medium text-black mb-2 md:mb-4">{step.title}</h4>
                  <p className="text-gray-600 text-sm md:text-base">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Investment Benefits */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 px-4 md:px-0"
        >
          <div className="bg-gradient-to-br from-black to-gray-900 text-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12">
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                <Award size={isMobile ? 20 : 24} className="text-white/60" />
                <div className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              </div>
              <h3 className="text-2xl md:text-4xl font-light mb-4 md:mb-6">
                Why Invest With Us
              </h3>
              <p className="text-white/70 max-w-xl mx-auto text-sm md:text-base">
                Experience professional real estate investment management
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {investmentBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={isMobile ? {} : { y: -5 }}
                  className="group"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-5 md:p-6 lg:p-8 rounded-xl md:rounded-2xl hover:bg-white/10 transition-all duration-300">
                    <div className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-3 md:mb-4 group-hover:text-white">
                      0{index + 1}
                    </div>
                    <h4 className="text-lg md:text-xl font-medium text-white mb-2 md:mb-4">{benefit.title}</h4>
                    <p className="text-white/70 text-sm md:text-base">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center px-4 md:px-0"
        >
          <motion.div 
            variants={textRevealVariants}
            className="mb-8 md:mb-12"
          >
            <h3 className="text-2xl md:text-4xl font-light text-black mb-4 md:mb-6">
              Trusted by Investors
            </h3>
            <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
              Our proven track record speaks for itself
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {investmentStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={textRevealVariants}
                custom={index}
                whileHover={isMobile ? {} : { scale: 1.05 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-100 p-5 md:p-6 lg:p-8 rounded-xl md:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-light text-black mb-2 md:mb-4">
                    {stat.value}
                  </div>
                  <div className="text-base md:text-lg font-medium text-black mb-1 md:mb-2">
                    {stat.label}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600">
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 pt-8 md:pt-12 border-t border-gray-100 px-4 md:px-0"
        >
          <div className="max-w-xl md:max-w-3xl mx-auto text-center">
            <motion.button
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-2 md:gap-3 text-black font-medium tracking-wider text-base md:text-lg py-3 md:py-4 px-0 active:scale-95 transition-transform"
            >
              <span className="relative z-10">Schedule Investment Consultation</span>
              <motion.div
                animate={{ x: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="relative z-10"
              >
                <ChevronRight size={isMobile ? 18 : 20} />
              </motion.div>
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-black transition-all duration-500"></div>
            </motion.button>
            
            <p className="mt-4 md:mt-6 text-gray-600 text-sm">
              Contact our wealth advisors for a personalized investment strategy
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Investment;