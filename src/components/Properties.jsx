import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Droplet, Maximize, MapPin, ArrowRight, Heart, Users, Star, Filter, ChevronRight, Menu, X } from 'react-feather';
import { properties, propertyFilters } from '../data/propertiesData';

const Properties = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredProperty, setHoveredProperty] = useState(null);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const filteredProperties = filter === 'all' 
    ? properties 
    : properties.filter(p => p.type === filter || p.category === filter);

  const sortedProperties = [...filteredProperties].sort((a, b) => {
    switch(sortBy) {
      case 'price-high': return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
      case 'price-low': return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
      case 'featured': return (b.featured === a.featured) ? 0 : b.featured ? 1 : -1;
      case 'newest': return b.id - a.id;
      default: return 0;
    }
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

  const imageHoverVariants = {
    hover: isMobile ? {} : { 
      scale: 1.05,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const handleFilterClick = (filterId) => {
    setFilter(filterId);
    if (showFilterDrawer) setShowFilterDrawer(false);
  };

  return (
    <section id="properties" className="relative overflow-hidden">
      {/* Background Elements - Simplified for mobile */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-gray-100/30 to-transparent rounded-full blur-2xl md:blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-gray-100/30 to-transparent rounded-full blur-2xl md:blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 py-12 md:py-20 lg:py-28">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="text-center mb-10 md:mb-16"
        >
          <motion.div 
            variants={textRevealVariants}
            className="inline-flex items-center gap-2 md:gap-3 mb-4 md:mb-6"
          >
            <div className="w-8 md:w-16 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
            <span className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase text-gray-500 font-light">Exclusive Portfolio</span>
            <div className="w-8 md:w-16 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
          </motion.div>
          
          <motion.h2 
            variants={textRevealVariants}
            className="text-3xl md:text-5xl lg:text-6xl font-light text-black mb-6 md:mb-8 leading-tight px-4"
          >
            Curated <span className="italic">Luxury</span>
            <br />
            <span className="text-gray-600">Properties</span>
          </motion.h2>

          <motion.p 
            variants={textRevealVariants}
            className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed px-4"
          >
            Discover Nigeria's most exclusive real estate portfolio.
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
                className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-medium">Filters</h3>
                  <button
                    onClick={() => setShowFilterDrawer(false)}
                    className="p-2 rounded-full bg-gray-100"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <Filter size={16} />
                    <span className="text-sm font-medium">Sort by:</span>
                  </div>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-transparent"
                  >
                    <option value="featured">Featured First</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="newest">Newest First</option>
                  </select>
                </div>

                <div className="mb-6">
                  <div className="text-sm font-medium text-gray-600 mb-3">Property Type</div>
                  <div className="grid grid-cols-2 gap-2">
                    {propertyFilters.map((filterItem) => (
                      <motion.button
                        key={filterItem.id}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleFilterClick(filterItem.id)}
                        className={`px-4 py-3 rounded-lg font-medium text-sm ${
                          filter === filterItem.id
                            ? 'bg-black text-white'
                            : 'bg-gray-50 text-gray-700 border border-gray-200'
                        }`}
                      >
                        {filterItem.label}
                      </motion.button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setShowFilterDrawer(false)}
                  className="w-full py-3 bg-black text-white font-medium rounded-lg mt-4"
                >
                  Apply Filters
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Filters and Controls */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-12 px-4 md:px-0"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Mobile Filter Button */}
            <div className="md:hidden">
              <button
                onClick={() => setShowFilterDrawer(true)}
                className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-xl w-full justify-center"
              >
                <Menu size={18} />
                <span className="font-medium">Filters & Sort</span>
              </button>
            </div>

            {/* Desktop Property Filters */}
            <div className="hidden md:flex flex-wrap gap-2 md:gap-3">
              {propertyFilters.map((filterItem) => (
                <motion.button
                  key={filterItem.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilter(filterItem.id)}
                  className={`px-4 md:px-5 py-2.5 md:py-3 rounded-lg md:rounded-xl font-medium text-sm md:text-base tracking-wider transition-all ${
                    filter === filterItem.id
                      ? 'bg-black text-white shadow-md'
                      : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300 hover:shadow-sm'
                  }`}
                >
                  {filterItem.label}
                </motion.button>
              ))}
            </div>

            {/* Desktop Sort Controls */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Filter size={18} />
                <span className="text-sm font-medium">Sort by:</span>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-transparent text-sm"
              >
                <option value="featured">Featured First</option>
                <option value="price-high">Price: High to Low</option>
                <option value="price-low">Price: Low to High</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Properties Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter + sortBy}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 px-4 md:px-0"
          >
            {sortedProperties.map((property, index) => (
              <motion.div
                key={property.id}
                variants={cardHoverVariants}
                initial="initial"
                whileHover="hover"
                onMouseEnter={() => !isMobile && setHoveredProperty(property.id)}
                onMouseLeave={() => !isMobile && setHoveredProperty(null)}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-2xl md:rounded-3xl overflow-hidden shadow-md md:shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Property Image Container */}
                  <div className="relative h-56 sm:h-48 md:h-60 lg:h-72 overflow-hidden">
                    <motion.img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover"
                      variants={imageHoverVariants}
                    />
                    
                    {/* Image Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Property Tags */}
                    <div className="absolute top-3 left-3 right-3 flex justify-between">
                      <div className="flex gap-1">
                        {property.featured && (
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 blur-sm"></div>
                            <div className="relative bg-gradient-to-r from-amber-400 to-amber-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                              Featured
                            </div>
                          </div>
                        )}
                        {property.virtualTour && (
                          <div className="bg-blue-500/90 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium">
                            3D Tour
                          </div>
                        )}
                      </div>
                      
                      {/* Favorite Button */}
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 md:w-10 md:h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all"
                      >
                        <Heart size={14} className="md:w-4 md:h-4" />
                      </motion.button>
                    </div>
                    
                    {/* Type Badge */}
                    <div className="absolute bottom-3 left-3">
                      <div className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                        property.type === 'sale' 
                          ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white' 
                          : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                      }`}>
                        {property.type === 'sale' ? 'FOR SALE' : 'FOR RENT'}
                      </div>
                    </div>
                  </div>

                  {/* Property Details */}
                  <div className="p-4 md:p-6">
                    {/* Location */}
                    <div className="flex items-center gap-1.5 md:gap-2 text-gray-500 mb-3">
                      <MapPin size={14} className="md:w-4 md:h-4" />
                      <span className="text-xs md:text-sm tracking-wide truncate">{property.location}</span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-light text-black mb-2 md:mb-3 leading-snug line-clamp-2">
                      {property.title}
                    </h3>
                    
                    {/* Price */}
                    <div className="text-xl md:text-2xl lg:text-3xl font-light text-black mb-4 md:mb-6">
                      {property.price}
                    </div>

                    {/* Property Features */}
                    <div className="grid grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-6">
                      <div className="flex items-center gap-1.5 md:gap-2">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                          <Home size={14} className="md:w-4 md:h-4" />
                        </div>
                        <div>
                          <div className="text-base md:text-lg font-medium text-black">{property.beds}</div>
                          <div className="text-xs text-gray-500">Beds</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-1.5 md:gap-2">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                          <Droplet size={14} className="md:w-4 md:h-4" />
                        </div>
                        <div>
                          <div className="text-base md:text-lg font-medium text-black">{property.baths}</div>
                          <div className="text-xs text-gray-500">Baths</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-1.5 md:gap-2">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                          <Maximize size={14} className="md:w-4 md:h-4" />
                        </div>
                        <div>
                          <div className="text-base md:text-lg font-medium text-black">{property.area}</div>
                          <div className="text-xs text-gray-500">Area</div>
                        </div>
                      </div>
                    </div>

                    {/* Agent Info */}
                    <div className="flex items-center justify-between mb-4 md:mb-6 pt-3 md:pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-gray-200 to-gray-300"></div>
                        <div>
                          <div className="text-xs md:text-sm font-medium text-black truncate max-w-[100px] md:max-w-none">{property.agent}</div>
                          <div className="flex items-center gap-1">
                            <Star size={10} className="md:w-3 md:h-3 text-amber-500 fill-amber-500" />
                            <span className="text-xs text-gray-500">{property.agentRating}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-xs md:text-sm text-gray-500">
                        {property.yearBuilt}
                      </div>
                    </div>

                    {/* View Details Button */}
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      className="group relative w-full py-3 md:py-4 bg-black text-white font-medium text-sm md:text-base tracking-wider rounded-lg md:rounded-xl overflow-hidden active:scale-95 transition-transform"
                    >
                      <div className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                        View Details
                        <motion.div
                          animate={{ x: [0, 3, 0] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                        >
                          <ArrowRight size={14} className="md:w-4 md:h-4" />
                        </motion.div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-black to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.button>
                  </div>
                </div>

                {/* Quick View Overlay - Desktop Only */}
                {!isMobile && hoveredProperty === property.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/30 rounded-3xl pointer-events-none"
                  >
                    <div className="absolute bottom-4 left-4 right-4">
                      <motion.button
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="w-full py-2.5 bg-white text-black font-medium text-sm rounded-xl shadow-lg"
                      >
                        Quick View
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Properties CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-gray-100 px-4 md:px-0"
        >
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
              <div className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
              <span className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase text-gray-500 font-light">Explore More</span>
              <div className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
            </div>
            
            <motion.button
              whileTap={{ scale: 0.98 }}
              className="group relative px-6 md:px-10 py-3 md:py-4 bg-black text-white font-medium text-sm md:text-base tracking-wider rounded-lg md:rounded-xl overflow-hidden active:scale-95 transition-transform"
            >
              <div className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                Browse Complete Portfolio
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <ChevronRight size={16} className="md:w-5 md:h-5" />
                </motion.div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-black to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
            
            <p className="mt-4 md:mt-6 text-sm md:text-base text-gray-600 px-4">
              Connect with our luxury property specialists
            </p>
          </div>
        </motion.div>

        {/* Statistics Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 px-4 md:px-0"
        >
          <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { value: '200+', label: 'Luxury Properties', icon: '🏠' },
                { value: '15+', label: 'Cities Covered', icon: '📍' },
                { value: '98%', label: 'Client Satisfaction', icon: '⭐' },
                { value: '24/7', label: 'Concierge Support', icon: '👨‍💼' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl lg:text-5xl mb-2 md:mb-4">{stat.icon}</div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-light mb-1 md:mb-2">{stat.value}</div>
                  <div className="text-white/70 text-xs md:text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Properties;