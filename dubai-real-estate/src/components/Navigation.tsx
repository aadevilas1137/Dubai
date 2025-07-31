'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react'
import { cn, scrollToElement } from '@/lib/utils'

const navigationItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Developers', href: '#developers' },
  { name: 'Projects', href: '#projects' },
  { name: 'Investment Calculator', href: '#calculator' },
  { name: 'Why Dubai', href: '#why-dubai' },
  { name: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    const handleSectionChange = () => {
      const sections = navigationItems.map(item => item.href.slice(1))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('scroll', handleSectionChange)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scroll', handleSectionChange)
    }
  }, [])

  const handleNavClick = (href: string) => {
    const elementId = href.slice(1)
    scrollToElement(elementId)
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-dubai-dark text-white py-2 text-sm hidden lg:block">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+971 50 123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>consultant@dubairealestate.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Dubai, UAE</span>
              </div>
            </div>
            <div className="text-dubai-gold">
              Premium Real Estate Consultant
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' 
            : 'bg-transparent py-6 lg:mt-10'
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-dubai-gold to-gold-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <div>
                <h1 className={cn(
                  'font-playfair font-bold text-xl',
                  isScrolled ? 'text-dubai-dark' : 'text-white'
                )}>
                  Dubai Real Estate
                </h1>
                <p className={cn(
                  'text-sm',
                  isScrolled ? 'text-gray-600' : 'text-gray-200'
                )}>
                  Premium Consultant
                </p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    'relative px-4 py-2 font-medium transition-colors duration-200',
                    activeSection === item.href.slice(1)
                      ? isScrolled 
                        ? 'text-dubai-gold' 
                        : 'text-dubai-gold'
                      : isScrolled
                        ? 'text-gray-700 hover:text-dubai-gold'
                        : 'text-white hover:text-dubai-gold'
                  )}
                >
                  {item.name}
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-dubai-gold rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick('#contact')}
                className="btn-primary"
              >
                Get Consultation
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                'lg:hidden p-2 rounded-lg',
                isScrolled ? 'text-dubai-dark' : 'text-white'
              )}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
            >
              <div className="container-custom py-4">
                <div className="flex flex-col space-y-4">
                  {navigationItems.map((item) => (
                    <motion.button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      whileHover={{ x: 10 }}
                      className={cn(
                        'text-left py-2 font-medium transition-colors duration-200',
                        activeSection === item.href.slice(1)
                          ? 'text-dubai-gold'
                          : 'text-gray-700 hover:text-dubai-gold'
                      )}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleNavClick('#contact')}
                    className="btn-primary mt-4 w-full"
                  >
                    Get Consultation
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}