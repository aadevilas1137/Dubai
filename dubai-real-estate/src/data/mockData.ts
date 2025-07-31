import { Developer, Project, Testimonial, MarketTrend } from '@/types'

export const developers: Developer[] = [
  {
    id: 'emaar',
    name: 'Emaar Properties',
    logo: '/images/developers/emaar-logo.png',
    description: 'The leading real estate developer in Dubai, creator of iconic landmarks including Burj Khalifa and Dubai Mall.',
    foundedYear: 1997,
    totalProjects: 150,
    completedProjects: 120,
    rating: 4.8,
    website: 'https://www.emaar.com',
    specialties: ['Luxury Residential', 'Commercial', 'Hospitality', 'Retail'],
    achievements: [
      'Developer of Burj Khalifa - World\'s Tallest Building',
      'Creator of Dubai Mall - World\'s Largest Shopping Mall',
      'Over 65,000 homes delivered globally',
      'Winner of multiple international awards'
    ]
  },
  {
    id: 'damac',
    name: 'DAMAC Properties',
    logo: '/images/developers/damac-logo.png',
    description: 'Luxury real estate developer known for premium residential and commercial properties across Dubai.',
    foundedYear: 2002,
    totalProjects: 100,
    completedProjects: 85,
    rating: 4.6,
    website: 'https://www.damacproperties.com',
    specialties: ['Luxury Villas', 'High-end Apartments', 'Golf Communities', 'Branded Residences'],
    achievements: [
      'Over 44,000 homes delivered',
      'Partnerships with Versace, Fendi, and Paramount',
      'Award-winning golf communities',
      'Innovative smart home technologies'
    ]
  },
  {
    id: 'dubai-properties',
    name: 'Dubai Properties',
    logo: '/images/developers/dp-logo.png',
    description: 'A leading real estate master developer creating integrated communities and destinations.',
    foundedYear: 2004,
    totalProjects: 80,
    completedProjects: 65,
    rating: 4.5,
    website: 'https://www.dubaiproperties.ae',
    specialties: ['Master Communities', 'Mixed-use Developments', 'Waterfront Properties', 'Commercial Spaces'],
    achievements: [
      'Developer of Jumeirah Beach Residence (JBR)',
      'Creator of Business Bay district',
      'Over 30,000 residential units delivered',
      'Sustainable development pioneer'
    ]
  },
  {
    id: 'sobha',
    name: 'Sobha Realty',
    logo: '/images/developers/sobha-logo.png',
    description: 'Premium real estate developer focused on luxury residential projects with exceptional quality.',
    foundedYear: 1976,
    totalProjects: 45,
    completedProjects: 35,
    rating: 4.7,
    website: 'https://www.sobharealty.com',
    specialties: ['Luxury Apartments', 'Premium Villas', 'Waterfront Properties', 'Golf Communities'],
    achievements: [
      'Backward integration model ensuring quality',
      'Award-winning architectural designs',
      'Green building certifications',
      'Over 40 years of construction excellence'
    ]
  },
  {
    id: 'meraas',
    name: 'Meraas',
    logo: '/images/developers/meraas-logo.png',
    description: 'Dubai-based holding company creating destinations that enhance the emirate\'s position as a global hub.',
    foundedYear: 2007,
    totalProjects: 60,
    completedProjects: 45,
    rating: 4.4,
    website: 'https://www.meraas.com',
    specialties: ['Beachfront Properties', 'Entertainment Districts', 'Retail Destinations', 'Mixed-use Communities'],
    achievements: [
      'Developer of Bluewaters Island',
      'Creator of La Mer beachfront destination',
      'Innovative entertainment and retail concepts',
      'Sustainable urban development focus'
    ]
  }
]

export const projects: Project[] = [
  {
    id: 'downtown-views',
    name: 'Downtown Views',
    developerId: 'emaar',
    developer: 'Emaar Properties',
    location: 'Downtown Dubai',
    district: 'Downtown',
    coordinates: { lat: 25.1972, lng: 55.2744 },
    images: [
      '/images/projects/downtown-views-1.jpg',
      '/images/projects/downtown-views-2.jpg',
      '/images/projects/downtown-views-3.jpg'
    ],
    video: '/videos/downtown-views-tour.mp4',
    virtualTour: 'https://virtualtour.example.com/downtown-views',
    status: 'construction',
    completionDate: '2025-12-31',
    startingPrice: 1200000,
    maxPrice: 8500000,
    propertyTypes: [
      { type: '1br', area: { min: 700, max: 900 }, price: { min: 1200000, max: 1800000 }, available: 45 },
      { type: '2br', area: { min: 1100, max: 1400 }, price: { min: 2200000, max: 3200000 }, available: 38 },
      { type: '3br', area: { min: 1600, max: 2100 }, price: { min: 3800000, max: 5500000 }, available: 22 },
      { type: 'penthouse', area: { min: 3500, max: 5000 }, price: { min: 7000000, max: 8500000 }, available: 8 }
    ],
    amenities: [
      'Infinity Pool', 'State-of-the-art Gym', 'Spa & Wellness Center', 'Children\'s Play Area',
      'BBQ Areas', 'Retail Outlets', 'Concierge Services', 'Valet Parking', 'Smart Home Technology'
    ],
    paymentPlan: {
      downPayment: 20,
      duringConstruction: 60,
      onHandover: 20,
      installments: 36
    },
    roi: 7.2,
    rentalYield: 6.8,
    description: 'Experience luxury living in the heart of Downtown Dubai with stunning views of Burj Khalifa and Dubai Fountain.',
    highlights: [
      'Direct views of Burj Khalifa',
      'Walking distance to Dubai Mall',
      'Premium finishes and fixtures',
      'Smart home automation',
      '24/7 security and concierge'
    ],
    floorPlans: [
      { id: 'fp1', type: '1BR', area: 800, bedrooms: 1, bathrooms: 2, image: '/images/floorplans/1br.jpg', price: 1500000 },
      { id: 'fp2', type: '2BR', area: 1200, bedrooms: 2, bathrooms: 3, image: '/images/floorplans/2br.jpg', price: 2800000 }
    ],
    nearbyAttractions: [
      { name: 'Dubai Mall', distance: '2 min walk', type: 'mall' },
      { name: 'Burj Khalifa', distance: '3 min walk', type: 'landmark' },
      { name: 'Dubai Fountain', distance: '1 min walk', type: 'landmark' },
      { name: 'Business Bay Metro', distance: '8 min walk', type: 'metro' }
    ]
  },
  {
    id: 'marina-heights',
    name: 'Marina Heights',
    developerId: 'damac',
    developer: 'DAMAC Properties',
    location: 'Dubai Marina',
    district: 'Marina',
    coordinates: { lat: 25.0657, lng: 55.1713 },
    images: [
      '/images/projects/marina-heights-1.jpg',
      '/images/projects/marina-heights-2.jpg',
      '/images/projects/marina-heights-3.jpg'
    ],
    status: 'completed',
    completionDate: '2024-06-30',
    startingPrice: 950000,
    maxPrice: 4200000,
    propertyTypes: [
      { type: 'studio', area: { min: 450, max: 550 }, price: { min: 950000, max: 1200000 }, available: 25 },
      { type: '1br', area: { min: 650, max: 800 }, price: { min: 1350000, max: 1650000 }, available: 42 },
      { type: '2br', area: { min: 1000, max: 1300 }, price: { min: 2100000, max: 2800000 }, available: 35 },
      { type: '3br', area: { min: 1500, max: 1900 }, price: { min: 3200000, max: 4200000 }, available: 18 }
    ],
    amenities: [
      'Rooftop Pool', 'Marina Views', 'Gym & Fitness Center', 'Steam & Sauna',
      'Children\'s Pool', 'Landscaped Gardens', 'Retail Podium', 'Covered Parking'
    ],
    paymentPlan: {
      downPayment: 25,
      duringConstruction: 50,
      onHandover: 25,
      installments: 24
    },
    roi: 8.1,
    rentalYield: 7.5,
    description: 'Luxury waterfront living in Dubai Marina with stunning marina and sea views.',
    highlights: [
      'Panoramic marina views',
      'Walking distance to JBR Beach',
      'Premium marina lifestyle',
      'World-class amenities',
      'Ready to move in'
    ],
    floorPlans: [
      { id: 'fp3', type: 'Studio', area: 500, bedrooms: 0, bathrooms: 1, image: '/images/floorplans/studio.jpg', price: 1100000 },
      { id: 'fp4', type: '1BR', area: 720, bedrooms: 1, bathrooms: 2, image: '/images/floorplans/1br-marina.jpg', price: 1500000 }
    ],
    nearbyAttractions: [
      { name: 'JBR Beach', distance: '5 min walk', type: 'beach' },
      { name: 'Dubai Marina Mall', distance: '3 min walk', type: 'mall' },
      { name: 'Marina Metro Station', distance: '7 min walk', type: 'metro' },
      { name: 'The Walk JBR', distance: '6 min walk', type: 'landmark' }
    ]
  },
  {
    id: 'palm-residences',
    name: 'Palm Residences',
    developerId: 'sobha',
    developer: 'Sobha Realty',
    location: 'Palm Jumeirah',
    district: 'Palm Jumeirah',
    coordinates: { lat: 25.1124, lng: 55.1390 },
    images: [
      '/images/projects/palm-residences-1.jpg',
      '/images/projects/palm-residences-2.jpg',
      '/images/projects/palm-residences-3.jpg'
    ],
    status: 'planning',
    completionDate: '2026-03-31',
    startingPrice: 2500000,
    maxPrice: 15000000,
    propertyTypes: [
      { type: '2br', area: { min: 1400, max: 1700 }, price: { min: 2500000, max: 3500000 }, available: 28 },
      { type: '3br', area: { min: 1900, max: 2400 }, price: { min: 4200000, max: 6500000 }, available: 35 },
      { type: '4br', area: { min: 2800, max: 3500 }, price: { min: 7500000, max: 12000000 }, available: 20 },
      { type: 'penthouse', area: { min: 4500, max: 6000 }, price: { min: 12000000, max: 15000000 }, available: 6 }
    ],
    amenities: [
      'Private Beach Access', 'Infinity Pool', 'Spa & Wellness', 'Private Marina',
      'Concierge Services', 'Valet Parking', 'Fine Dining Restaurant', 'Kids Club'
    ],
    paymentPlan: {
      downPayment: 30,
      duringConstruction: 50,
      onHandover: 20,
      installments: 48
    },
    roi: 6.8,
    rentalYield: 6.2,
    description: 'Ultra-luxury beachfront residences on the iconic Palm Jumeirah with private beach access.',
    highlights: [
      'Exclusive Palm Jumeirah location',
      'Private beach and marina access',
      'Ultra-luxury finishes',
      'World-class amenities',
      'Investment opportunity'
    ],
    floorPlans: [
      { id: 'fp5', type: '3BR', area: 2100, bedrooms: 3, bathrooms: 4, image: '/images/floorplans/3br-palm.jpg', price: 5500000 },
      { id: 'fp6', type: '4BR', area: 3200, bedrooms: 4, bathrooms: 5, image: '/images/floorplans/4br-palm.jpg', price: 9500000 }
    ],
    nearbyAttractions: [
      { name: 'Atlantis The Palm', distance: '10 min drive', type: 'landmark' },
      { name: 'Nakheel Mall', distance: '8 min drive', type: 'mall' },
      { name: 'Dubai Marina', distance: '15 min drive', type: 'landmark' },
      { name: 'Al Maktoum Airport', distance: '45 min drive', type: 'airport' }
    ]
  }
]

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Ahmed Al Mansoori',
    role: 'Business Owner',
    company: 'Al Mansoori Group',
    image: '/images/testimonials/ahmed.jpg',
    content: 'Working with this consultant was exceptional. Their deep knowledge of Dubai\'s real estate market and connections with top developers helped me secure the perfect investment property in Downtown Dubai.',
    rating: 5,
    projectName: 'Downtown Views'
  },
  {
    id: 't2',
    name: 'Sarah Johnson',
    role: 'International Investor',
    image: '/images/testimonials/sarah.jpg',
    content: 'As a foreign investor, I needed someone who understood both the market dynamics and legal requirements. The service was professional, transparent, and resulted in an excellent ROI.',
    rating: 5,
    projectName: 'Marina Heights'
  },
  {
    id: 't3',
    name: 'Mohammed Hassan',
    role: 'Real Estate Portfolio Manager',
    company: 'Hassan Investments',
    image: '/images/testimonials/mohammed.jpg',
    content: 'The market insights and developer relationships provided were invaluable. We\'ve successfully expanded our portfolio with premium properties across Dubai.',
    rating: 5
  }
]

export const marketTrends: MarketTrend[] = [
  {
    period: '2024 Q4',
    averagePrice: 1250000,
    priceChange: 8.5,
    salesVolume: 12500,
    volumeChange: 15.2,
    topDistricts: [
      { name: 'Downtown Dubai', averagePrice: 1800000, change: 12.3 },
      { name: 'Dubai Marina', averagePrice: 1400000, change: 9.8 },
      { name: 'Business Bay', averagePrice: 1200000, change: 7.5 },
      { name: 'JLT', averagePrice: 950000, change: 6.2 },
      { name: 'DIFC', averagePrice: 2200000, change: 15.1 }
    ]
  }
]

export const whyDubaiReasons = [
  {
    title: 'Tax-Free Investment',
    description: 'No capital gains tax, income tax, or property tax on real estate investments',
    icon: '💰',
    stats: '0% Tax Rate'
  },
  {
    title: 'High ROI',
    description: 'Average rental yields of 6-8% with strong capital appreciation potential',
    icon: '📈',
    stats: '6-8% Yield'
  },
  {
    title: 'Strategic Location',
    description: 'Gateway between East and West, connecting 3 continents within 8 hours',
    icon: '🌍',
    stats: '8hr Flight Radius'
  },
  {
    title: 'World-Class Infrastructure',
    description: 'Modern transportation, healthcare, education, and business facilities',
    icon: '🏗️',
    stats: 'Top 10 Global'
  },
  {
    title: 'Golden Visa Program',
    description: 'Long-term residency for property investors with qualifying investments',
    icon: '🏅',
    stats: '10 Year Visa'
  },
  {
    title: 'Economic Stability',
    description: 'Stable currency, strong banking system, and diversified economy',
    icon: '🏛️',
    stats: 'AAA Rated'
  }
]