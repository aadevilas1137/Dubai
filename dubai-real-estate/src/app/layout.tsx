import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap'
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Dubai Real Estate Consultant | Premium Properties & Investment",
  description: "Expert Dubai real estate consultant specializing in luxury properties, top developers, and investment opportunities. Discover premium projects in Downtown, Marina, Palm Jumeirah & more.",
  keywords: "Dubai real estate, property investment, luxury apartments, Dubai Marina, Downtown Dubai, Palm Jumeirah, Emaar, DAMAC, real estate consultant",
  authors: [{ name: "Dubai Real Estate Consultant" }],
  creator: "Dubai Real Estate Consultant",
  publisher: "Dubai Real Estate Consultant",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dubai-realestate-consultant.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Dubai Real Estate Consultant | Premium Properties & Investment",
    description: "Expert Dubai real estate consultant specializing in luxury properties, top developers, and investment opportunities.",
    url: 'https://dubai-realestate-consultant.com',
    siteName: 'Dubai Real Estate Consultant',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dubai Real Estate Consultant',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dubai Real Estate Consultant | Premium Properties & Investment",
    description: "Expert Dubai real estate consultant specializing in luxury properties, top developers, and investment opportunities.",
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-white text-gray-900 overflow-x-hidden`}>
        <div className="min-h-screen">
          {children}
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Dubai Real Estate Consultant",
              "description": "Expert Dubai real estate consultant specializing in luxury properties and investment opportunities",
              "url": "https://dubai-realestate-consultant.com",
              "areaServed": {
                "@type": "City",
                "name": "Dubai",
                "addressCountry": "AE"
              },
              "serviceType": ["Real Estate Consultation", "Property Investment", "Luxury Properties"],
              "priceRange": "$$$$"
            })
          }}
        />
      </body>
    </html>
  );
}
