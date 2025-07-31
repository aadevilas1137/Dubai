'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calculator, TrendingUp, Home, MapPin, Calendar, DollarSign } from 'lucide-react'
import { formatPrice, formatPercentage } from '@/lib/utils'
import { projects } from '@/data/mockData'

interface CalculatorInputs {
  budget: number
  propertyType: string
  location: string
  investmentPeriod: number
}

interface CalculationResults {
  monthlyRental: number
  annualRental: number
  roi: number
  totalReturn: number
  breakEvenYears: number
  capitalAppreciation: number
  recommendations: typeof projects
}

const propertyTypes = [
  { value: 'studio', label: 'Studio', minPrice: 500000 },
  { value: '1br', label: '1 Bedroom', minPrice: 800000 },
  { value: '2br', label: '2 Bedroom', minPrice: 1200000 },
  { value: '3br', label: '3 Bedroom', minPrice: 2000000 },
  { value: '4br', label: '4 Bedroom', minPrice: 3500000 },
  { value: 'penthouse', label: 'Penthouse', minPrice: 5000000 },
]

const locations = [
  { value: 'downtown', label: 'Downtown Dubai', avgROI: 7.2 },
  { value: 'marina', label: 'Dubai Marina', avgROI: 8.1 },
  { value: 'jlt', label: 'Jumeirah Lake Towers', avgROI: 9.2 },
  { value: 'business-bay', label: 'Business Bay', avgROI: 8.5 },
  { value: 'palm', label: 'Palm Jumeirah', avgROI: 6.8 },
  { value: 'jvc', label: 'Jumeirah Village Circle', avgROI: 10.1 },
]

export default function InvestmentCalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    budget: 1500000,
    propertyType: '1br',
    location: 'downtown',
    investmentPeriod: 5
  })

  const [results, setResults] = useState<CalculationResults | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const calculateInvestment = () => {
    setIsCalculating(true)
    
    // Simulate calculation delay for better UX
    setTimeout(() => {
      const selectedLocation = locations.find(loc => loc.value === inputs.location)
      const avgROI = selectedLocation?.avgROI || 7.5
      
      // Calculate rental yields (Dubai average: 6-10%)
      const annualRental = inputs.budget * (avgROI / 100)
      const monthlyRental = annualRental / 12
      
      // Calculate capital appreciation (Dubai average: 4-6% annually)
      const appreciationRate = 0.05
      const capitalAppreciation = inputs.budget * Math.pow(1 + appreciationRate, inputs.investmentPeriod) - inputs.budget
      
      // Calculate total returns
      const totalRentalIncome = annualRental * inputs.investmentPeriod
      const totalReturn = totalRentalIncome + capitalAppreciation
      const breakEvenYears = inputs.budget / annualRental

      // Filter recommendations based on inputs
      const recommendations = projects.filter(project => {
        const hasPropertyType = project.propertyTypes.some(pt => pt.type === inputs.propertyType)
        const inBudget = project.startingPrice <= inputs.budget * 1.2 // Allow 20% flexibility
        return hasPropertyType && inBudget
      }).slice(0, 3)

      setResults({
        monthlyRental,
        annualRental,
        roi: avgROI,
        totalReturn,
        breakEvenYears,
        capitalAppreciation,
        recommendations
      })
      
      setIsCalculating(false)
    }, 1500)
  }

  useEffect(() => {
    if (inputs.budget > 0) {
      calculateInvestment()
    }
  }, [inputs])

  return (
    <section id="calculator" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-6">Investment Calculator</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your potential returns and discover the perfect investment opportunity 
            tailored to your budget and preferences.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculator Inputs */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-luxury p-8"
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-dubai-gold rounded-lg flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-dubai-dark">Investment Parameters</h3>
              </div>

              <div className="space-y-6">
                {/* Budget Slider */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Investment Budget: {formatPrice(inputs.budget)}
                  </label>
                  <input
                    type="range"
                    min="500000"
                    max="10000000"
                    step="100000"
                    value={inputs.budget}
                    onChange={(e) => setInputs(prev => ({ ...prev, budget: Number(e.target.value) }))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>AED 500K</span>
                    <span>AED 10M</span>
                  </div>
                </div>

                {/* Property Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Property Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {propertyTypes.map((type) => (
                      <motion.button
                        key={type.value}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setInputs(prev => ({ ...prev, propertyType: type.value }))}
                        className={`p-3 rounded-lg border-2 transition-all duration-300 text-left ${
                          inputs.propertyType === type.value
                            ? 'border-dubai-gold bg-dubai-gold/10 text-dubai-gold'
                            : 'border-gray-200 hover:border-dubai-gold/50'
                        }`}
                      >
                        <div className="font-semibold">{type.label}</div>
                        <div className="text-xs text-gray-500">From {formatPrice(type.minPrice)}</div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Preferred Location
                  </label>
                  <select
                    value={inputs.location}
                    onChange={(e) => setInputs(prev => ({ ...prev, location: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dubai-gold focus:border-transparent"
                  >
                    {locations.map((location) => (
                      <option key={location.value} value={location.value}>
                        {location.label} (Avg ROI: {location.avgROI}%)
                      </option>
                    ))}
                  </select>
                </div>

                {/* Investment Period */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Investment Period: {inputs.investmentPeriod} years
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="15"
                    step="1"
                    value={inputs.investmentPeriod}
                    onChange={(e) => setInputs(prev => ({ ...prev, investmentPeriod: Number(e.target.value) }))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1 year</span>
                    <span>15 years</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card p-8 bg-gradient-to-br from-dubai-blue to-primary-600 text-white"
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Investment Analysis</h3>
              </div>

              <AnimatePresence mode="wait">
                {isCalculating ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center py-16"
                  >
                    <div className="loading-dots">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </motion.div>
                ) : results ? (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-6"
                  >
                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="text-sm opacity-75 mb-1">Monthly Rental</div>
                        <div className="text-2xl font-bold">{formatPrice(results.monthlyRental)}</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="text-sm opacity-75 mb-1">Annual ROI</div>
                        <div className="text-2xl font-bold text-green-300">{formatPercentage(results.roi)}</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="text-sm opacity-75 mb-1">Total Return</div>
                        <div className="text-2xl font-bold">{formatPrice(results.totalReturn)}</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="text-sm opacity-75 mb-1">Break-even</div>
                        <div className="text-2xl font-bold">{results.breakEvenYears.toFixed(1)} years</div>
                      </div>
                    </div>

                    {/* Breakdown */}
                    <div className="bg-white/10 rounded-lg p-6">
                      <h4 className="font-semibold mb-4">Investment Breakdown</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Total Rental Income ({inputs.investmentPeriod} years)</span>
                          <span className="font-semibold">{formatPrice(results.annualRental * inputs.investmentPeriod)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Capital Appreciation</span>
                          <span className="font-semibold text-green-300">{formatPrice(results.capitalAppreciation)}</span>
                        </div>
                        <div className="border-t border-white/20 pt-3 flex justify-between text-lg font-bold">
                          <span>Total Profit</span>
                          <span className="text-green-300">{formatPrice(results.totalReturn - inputs.budget)}</span>
                        </div>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full btn-primary bg-white text-dubai-blue hover:bg-gray-100"
                    >
                      Get Personalized Recommendations
                    </motion.button>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Property Recommendations */}
          {results?.recommendations && results.recommendations.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16"
            >
              <h3 className="text-2xl font-bold text-center text-dubai-dark mb-8">
                Recommended Properties
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {results.recommendations.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="card overflow-hidden group hover:shadow-xl transition-all duration-300"
                  >
                    <div className="aspect-video bg-gradient-to-br from-gray-300 to-gray-400 relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="font-semibold">{project.name}</div>
                        <div className="text-sm opacity-75">{project.developer}</div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="px-2 py-1 bg-dubai-gold text-white text-xs rounded-full">
                          {formatPercentage(project.roi)} ROI
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-2 text-gray-600 mb-3">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{project.location}</span>
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-2xl font-bold text-dubai-gold">
                          {formatPrice(project.startingPrice)}
                        </span>
                        <span className="text-sm text-gray-500">Starting from</span>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full btn-secondary text-sm"
                      >
                        View Details
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <style jsx>{`
        .slider {
          background: linear-gradient(to right, #d4af37 0%, #d4af37 ${((inputs.budget - 500000) / (10000000 - 500000)) * 100}%, #e5e7eb ${((inputs.budget - 500000) / (10000000 - 500000)) * 100}%, #e5e7eb 100%);
        }
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #d4af37;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #d4af37;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </section>
  )
}