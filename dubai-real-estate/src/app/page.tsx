import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import DevelopersSection from '@/components/DevelopersSection'
import InvestmentCalculator from '@/components/InvestmentCalculator'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <DevelopersSection />
      <InvestmentCalculator />

      <section id="projects" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-8">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover exceptional investment opportunities in Dubai's most sought-after locations.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Project cards will be added here */}
            <div className="card overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-gray-300 to-gray-400"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Downtown Views</h3>
                <p className="text-gray-600 mb-4">Premium apartments in Downtown Dubai</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-dubai-gold">AED 1.2M+</span>
                  <span className="text-green-600 font-semibold">7.2% ROI</span>
                </div>
              </div>
            </div>
            <div className="card overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-gray-300 to-gray-400"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Marina Heights</h3>
                <p className="text-gray-600 mb-4">Luxury waterfront living in Dubai Marina</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-dubai-gold">AED 950K+</span>
                  <span className="text-green-600 font-semibold">8.1% ROI</span>
                </div>
              </div>
            </div>
            <div className="card overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-gray-300 to-gray-400"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Palm Residences</h3>
                <p className="text-gray-600 mb-4">Ultra-luxury beachfront on Palm Jumeirah</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-dubai-gold">AED 2.5M+</span>
                  <span className="text-green-600 font-semibold">6.8% ROI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="calculator" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-8">Investment Calculator</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Calculate your potential returns and find the perfect investment opportunity.
            </p>
          </div>
          <div className="max-w-4xl mx-auto card p-8">
            <p className="text-center text-gray-600">
              Interactive investment calculator coming soon...
            </p>
          </div>
        </div>
      </section>

      <section id="why-dubai" className="section-padding bg-gradient-to-br from-dubai-blue to-primary-600 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-white mb-8">Why Invest in Dubai?</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Dubai offers unparalleled investment opportunities with world-class infrastructure, 
              tax benefits, and strategic location.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">Tax-Free Investment</h3>
              <p className="text-gray-200">No capital gains tax, income tax, or property tax</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-2">High ROI</h3>
              <p className="text-gray-200">Average rental yields of 6-8% with strong appreciation</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-2">Strategic Location</h3>
              <p className="text-gray-200">Gateway between East and West, connecting 3 continents</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-8">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to explore Dubai's real estate opportunities? 
              Let's discuss your investment goals and find the perfect property.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-dubai-gold rounded-lg flex items-center justify-center">
                      <span className="text-white">📞</span>
                    </div>
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-gray-600">+971 50 123 4567</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-dubai-gold rounded-lg flex items-center justify-center">
                      <span className="text-white">✉️</span>
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-gray-600">consultant@dubairealestate.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-dubai-gold rounded-lg flex items-center justify-center">
                      <span className="text-white">📍</span>
                    </div>
                    <div>
                      <div className="font-semibold">Location</div>
                      <div className="text-gray-600">Dubai, UAE</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card p-8">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dubai-gold focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dubai-gold focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Your Phone" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dubai-gold focus:border-transparent"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Your Message" 
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dubai-gold focus:border-transparent"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
