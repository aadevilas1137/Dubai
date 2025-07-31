'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Award, Building, Calendar, Star } from 'lucide-react'
import { developers } from '@/data/mockData'

export default function DevelopersSection() {
  return (
    <section id="developers" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-6">Top Dubai Developers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partnering with Dubai's most renowned developers to bring you 
            exclusive access to premium properties and investment opportunities.
          </p>
        </motion.div>

        {/* Developers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {developers.map((developer, index) => (
            <motion.div
              key={developer.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="card-luxury p-8 h-full flex flex-col relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <Building className="w-full h-full text-dubai-gold" />
                </div>

                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    {/* Logo Placeholder */}
                    <div className="w-16 h-16 bg-gradient-to-br from-dubai-gold to-gold-500 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xl">
                        {developer.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-dubai-dark group-hover:text-dubai-gold transition-colors duration-300">
                        {developer.name}
                      </h3>
                      <div className="flex items-center space-x-1 mt-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-semibold text-gray-600">
                          {developer.rating}/5
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <motion.a
                    href={developer.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-dubai-gold/10 rounded-lg hover:bg-dubai-gold/20 transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5 text-dubai-gold" />
                  </motion.a>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  {developer.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-white/50 rounded-lg border border-gold-200/50">
                    <div className="text-2xl font-bold text-dubai-gold mb-1">
                      {developer.foundedYear}
                    </div>
                    <div className="text-xs text-gray-600">Founded</div>
                  </div>
                  <div className="text-center p-3 bg-white/50 rounded-lg border border-gold-200/50">
                    <div className="text-2xl font-bold text-dubai-gold mb-1">
                      {developer.totalProjects}+
                    </div>
                    <div className="text-xs text-gray-600">Projects</div>
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {developer.specialties.slice(0, 3).map((specialty, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-dubai-gold/10 text-dubai-gold text-xs font-medium rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Achievement */}
                <div className="mt-auto">
                  <div className="flex items-start space-x-3 p-4 bg-gradient-to-r from-dubai-gold/5 to-gold-500/5 rounded-lg border border-dubai-gold/20">
                    <Award className="w-5 h-5 text-dubai-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-dubai-dark mb-1">
                        Key Achievement
                      </div>
                      <div className="text-sm text-gray-600">
                        {developer.achievements[0]}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-dubai-gold/0 to-gold-500/0 group-hover:from-dubai-gold/5 group-hover:to-gold-500/5 transition-all duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-dubai-blue to-primary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Explore Premium Developments?
            </h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Get exclusive access to off-plan projects and investment opportunities 
              from Dubai's top developers. Connect with me for personalized recommendations.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary bg-white text-dubai-blue hover:bg-gray-100"
            >
              Schedule Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}