import Link from 'next/link';
import { Header, Footer, TourCard } from '@/components';
import { tours, destinations } from '@/data/tours';

export default function Home() {
  const featuredTours = tours.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-sky-600 to-emerald-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Your Gateway to Uzbekistan Tourism
              </h1>
              <p className="text-xl md:text-2xl text-sky-100 mb-8 max-w-3xl mx-auto">
                B2B platform connecting global travel agencies with authentic Uzbekistan experiences. 
                Discover the treasures of the Silk Road.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/tours" 
                  className="bg-white text-sky-600 px-8 py-4 rounded-lg font-semibold hover:bg-sky-50 transition-colors"
                >
                  Browse Tours
                </Link>
                <Link 
                  href="/dashboard" 
                  className="bg-sky-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-sky-800 transition-colors border border-sky-500"
                >
                  Partner Login
                </Link>
              </div>
            </div>
          </div>
          {/* Decorative wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
            </svg>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-sky-600">500+</p>
                <p className="text-gray-600 mt-2">Tours Completed</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-sky-600">50+</p>
                <p className="text-gray-600 mt-2">Partner Agencies</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-sky-600">30+</p>
                <p className="text-gray-600 mt-2">Countries Served</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-sky-600">98%</p>
                <p className="text-gray-600 mt-2">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Tours */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Tours
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our most popular tour packages, carefully curated for your clients
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredTours.map(tour => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link 
                href="/tours" 
                className="inline-block bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-sky-700 transition-colors"
              >
                View All Tours →
              </Link>
            </div>
          </div>
        </section>

        {/* Destinations */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Top Destinations
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore Uzbekistan&apos;s most captivating cities along the ancient Silk Road
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {destinations.map(destination => (
                <div 
                  key={destination.id} 
                  className="group relative h-64 rounded-xl overflow-hidden bg-gradient-to-br from-amber-400 to-orange-500"
                >
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                    <p className="text-sm text-white/90 line-clamp-2">{destination.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Partner With Us?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">B2B Pricing</h3>
                <p className="text-gray-600">
                  Competitive wholesale rates with flexible commission structures for travel partners
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Local Expertise</h3>
                <p className="text-gray-600">
                  20+ years of experience in Uzbekistan tourism with local guides and connections
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Response</h3>
                <p className="text-gray-600">
                  Fast booking confirmations and 24/7 support for your urgent requests
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-sky-600 to-emerald-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Partnership?
            </h2>
            <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
              Join our network of travel agencies and start offering amazing Uzbekistan tours to your clients
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-sky-600 px-8 py-4 rounded-lg font-semibold hover:bg-sky-50 transition-colors"
            >
              Contact Us Today
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
