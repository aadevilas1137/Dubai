export interface Developer {
  id: string
  name: string
  logo: string
  description: string
  foundedYear: number
  totalProjects: number
  completedProjects: number
  rating: number
  website: string
  specialties: string[]
  achievements: string[]
}

export interface Project {
  id: string
  name: string
  developerId: string
  developer: string
  location: string
  district: string
  coordinates: {
    lat: number
    lng: number
  }
  images: string[]
  video?: string
  virtualTour?: string
  status: 'planning' | 'construction' | 'completed' | 'handover'
  completionDate: string
  startingPrice: number
  maxPrice: number
  propertyTypes: PropertyType[]
  amenities: string[]
  paymentPlan: PaymentPlan
  roi: number
  rentalYield: number
  description: string
  highlights: string[]
  floorPlans: FloorPlan[]
  nearbyAttractions: NearbyAttraction[]
}

export interface PropertyType {
  type: 'studio' | '1br' | '2br' | '3br' | '4br' | '5br' | 'penthouse' | 'villa' | 'townhouse'
  area: {
    min: number
    max: number
  }
  price: {
    min: number
    max: number
  }
  available: number
}

export interface PaymentPlan {
  downPayment: number
  duringConstruction: number
  onHandover: number
  postHandover?: number
  installments: number
}

export interface FloorPlan {
  id: string
  type: string
  area: number
  bedrooms: number
  bathrooms: number
  image: string
  price: number
}

export interface NearbyAttraction {
  name: string
  distance: string
  type: 'mall' | 'school' | 'hospital' | 'metro' | 'beach' | 'airport' | 'landmark'
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company?: string
  image: string
  content: string
  rating: number
  projectName?: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  author: string
  publishedAt: string
  category: string
  tags: string[]
  readTime: number
}

export interface MarketTrend {
  period: string
  averagePrice: number
  priceChange: number
  salesVolume: number
  volumeChange: number
  topDistricts: {
    name: string
    averagePrice: number
    change: number
  }[]
}

export interface ContactForm {
  name: string
  email: string
  phone: string
  message: string
  propertyType?: string
  budget?: string
  timeline?: string
}

export interface InvestmentCalculation {
  budget: number
  propertyType: string
  location: string
  expectedROI: number
  monthlyRental: number
  totalReturn: number
  breakEvenYears: number
  recommendations: Project[]
}