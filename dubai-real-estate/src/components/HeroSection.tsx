'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Play, Star, TrendingUp, Building, Users } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const stats = [
    { icon: Building, value: '500+', label: 'Properties Sold', delay: 0.2 },
    { icon: Users, value: '1000+', label: 'Happy Clients', delay: 0.4 },
    { icon: TrendingUp, value: '8.5%', label: 'Average ROI', delay: 0.6 },
    { icon: Star, value: '4.9/5', label: 'Client Rating', delay: 0.8 },
  ]

  const floatingElements = [
    { id: 1, size: 'w-3 h-3', position: 'top-20 left-10', delay: 0 },
    { id: 2, size: 'w-2 h-2', position: 'top-32 right-20', delay: 1 },
    { id: 3, size: 'w-4 h-4', position: 'top-48 left-1/4', delay: 2 },
    { id: 4, size: 'w-2 h-2', position: 'top-64 right-1/3', delay: 1.5 },
    { id: 5, size: 'w-3 h-3', position: 'bottom-32 left-20', delay: 0.5 },
    { id: 6, size: 'w-2 h-2', position: 'bottom-48 right-10', delay: 2.5 },
  ]

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-dubai-blue via-primary-600 to-dubai-dark" />
        
        {/* Animated Skyline Silhouette */}
        <motion.div 
          style={{ y }}
          className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black/30 to-transparent"
        >
          <svg
            className="absolute bottom-0 w-full h-full"
            viewBox="0 0 1200 400"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="skylineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(0,0,0,0.8)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0.2)" />
              </linearGradient>
            </defs>
            {/* Burj Khalifa and Dubai Skyline */}
            <path
              d="M0,400 L0,300 L50,280 L80,250 L120,200 L150,180 L200,160 L250,140 L300,120 L350,100 L400,80 L450,60 L500,40 L550,20 L600,10 L650,20 L700,40 L750,60 L800,80 L850,100 L900,120 L950,140 L1000,160 L1050,180 L1100,200 L1150,220 L1200,240 L1200,400 Z"
              fill="url(#skylineGradient)"
              className="animate-pulse-slow"
            />
          </svg>
        </motion.div>

        {/* Floating Particles */}
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              y: [-20, -40, -20]
            }}
            transition={{
              duration: 4,
              delay: element.delay,
              repeat: Infinity,
              repeatType: "loop"
            }}
            className={cn(
              'absolute bg-dubai-gold rounded-full',
              element.size,
              element.position
            )}
          />
        ))}

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{
                  duration: 3,
                  delay: i * 0.01,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
                className="border border-white/20"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 flex items-center min-h-screen"
      >
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-6"
              >
                <span className="inline-block px-4 py-2 bg-dubai-gold/20 backdrop-blur-sm rounded-full text-dubai-gold font-semibold mb-4">
                  Premium Real Estate Consultant
                </span>
                <h1 className="heading-primary text-white mb-6">
                  Discover Your
                  <span className="text-gradient block">
                    Dream Property
                  </span>
                  in Dubai
                </h1>
                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                  Expert guidance for luxury investments in Dubai's most prestigious developments. 
                  Connect with top developers and secure your future in the world's most dynamic real estate market.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-lg px-8 py-4 group"
                >
                  Explore Properties
                  <ArrowDown className="ml-2 w-5 h-5 group-hover:animate-bounce" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary text-lg px-8 py-4 group bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-dubai-dark"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Watch Video Tour
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: stat.delay }}
                    className="text-center group"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-dubai-gold/20 backdrop-blur-sm rounded-lg mb-3 group-hover:bg-dubai-gold/30 transition-colors duration-300">
                      <stat.icon className="w-6 h-6 text-dubai-gold" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-300">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Content - Floating Property Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative hidden lg:block"
            >
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, repeatType: "loop" }}
                className="relative"
              >
                {/* Property Preview Card */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
                  <div className="aspect-video bg-gradient-to-br from-gray-300 to-gray-400 rounded-xl mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-sm font-medium">Downtown Views</div>
                      <div className="text-xs opacity-75">Emaar Properties</div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 bg-dubai-gold text-white text-xs rounded-full">
                        Premium
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-white">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Starting from</span>
                      <span className="text-xl font-bold text-dubai-gold">AED 1.2M</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">ROI</span>
                      <span className="text-green-400 font-semibold">7.2%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Completion</span>
                      <span>Q4 2025</span>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-dubai-gold/30 rounded-full flex items-center justify-center"
                >
                  <div className="w-2 h-2 bg-dubai-gold rounded-full" />
                </motion.div>
                
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary-400/30 rounded-full"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white/70 cursor-pointer hover:text-white transition-colors duration-300"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}