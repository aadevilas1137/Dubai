'use client'

import { motion } from 'framer-motion'
import { Award, Users, Building2, TrendingUp, Clock, MapPin, Phone, Mail } from 'lucide-react'

const achievements = [
  {
    year: '2014',
    title: 'Started Real Estate Career',
    description: 'Began journey in Dubai real estate market with focus on luxury properties',
    icon: Building2
  },
  {
    year: '2017',
    title: 'Top Performer Award',
    description: 'Recognized as top 5% performer in luxury real estate sales',
    icon: Award
  },
  {
    year: '2019',
    title: 'Developer Partnerships',
    description: 'Established exclusive partnerships with Emaar, DAMAC, and Sobha',
    icon: Users
  },
  {
    year: '2021',
    title: 'Investment Specialist',
    description: 'Specialized in high-ROI investment opportunities for international clients',
    icon: TrendingUp
  },
  {
    year: '2024',
    title: 'Premium Consultant',
    description: 'Leading consultant for ultra-luxury properties and exclusive developments',
    icon: Award
  }
]

const stats = [
  { value: '10+', label: 'Years Experience', icon: Clock },
  { value: '500+', label: 'Properties Sold', icon: Building2 },
  { value: '1000+', label: 'Happy Clients', icon: Users },
  { value: '8.5%', label: 'Average ROI', icon: TrendingUp }
]

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-6">About Your Dubai Real Estate Expert</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over a decade of experience in Dubai's luxury real estate market, 
            I specialize in connecting discerning clients with premium properties 
            from the emirate's most prestigious developers.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Profile Card */}
            <div className="card-luxury p-8 mb-8">
              <div className="flex items-center space-x-6 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-dubai-gold to-gold-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">RE</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dubai-dark mb-1">Real Estate Expert</h3>
                  <p className="text-dubai-gold font-semibold">Premium Dubai Consultant</p>
                  <p className="text-gray-600">Licensed Real Estate Professional</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Passionate about helping clients achieve their real estate dreams in Dubai. 
                Specializing in luxury properties, investment opportunities, and providing 
                comprehensive market insights to ensure successful transactions.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Phone className="w-5 h-5 text-dubai-gold" />
                  <span>+971 50 123 4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Mail className="w-5 h-5 text-dubai-gold" />
                  <span>consultant@dubairealestate.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <MapPin className="w-5 h-5 text-dubai-gold" />
                  <span>Dubai, United Arab Emirates</span>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card text-center p-6 group hover:shadow-xl transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-dubai-gold/10 rounded-lg mb-3 group-hover:bg-dubai-gold/20 transition-colors duration-300">
                    <stat.icon className="w-6 h-6 text-dubai-gold" />
                  </div>
                  <div className="text-2xl font-bold text-dubai-dark mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-dubai-dark mb-8">Professional Journey</h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-dubai-gold to-gold-300"></div>
              
              {/* Timeline Items */}
              <div className="space-y-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative flex items-start space-x-6"
                  >
                    {/* Timeline Dot */}
                    <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white border-4 border-dubai-gold rounded-full shadow-lg">
                      <achievement.icon className="w-5 h-5 text-dubai-gold" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <div className="flex items-center space-x-4 mb-2">
                        <span className="px-3 py-1 bg-dubai-gold text-white text-sm font-semibold rounded-full">
                          {achievement.year}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-dubai-dark mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Specializations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center text-dubai-dark mb-8">Areas of Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Luxury Apartments', description: 'High-end residential properties in prime locations' },
              { title: 'Investment Properties', description: 'High-ROI opportunities for savvy investors' },
              { title: 'Off-Plan Projects', description: 'Exclusive access to pre-launch developments' },
              { title: 'Commercial Real Estate', description: 'Office spaces and retail investment opportunities' }
            ].map((specialty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-dubai-gold to-gold-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-dubai-dark mb-2">{specialty.title}</h4>
                <p className="text-gray-600 text-sm">{specialty.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}