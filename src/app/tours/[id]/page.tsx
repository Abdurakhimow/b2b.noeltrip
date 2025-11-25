import { Header, Footer } from '@/components';
import { getTourById, tours } from '@/data/tours';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return tours.map((tour) => ({
    id: tour.id,
  }));
}

export default async function TourDetailPage({ params }: PageProps) {
  const { id } = await params;
  const tour = getTourById(id);

  if (!tour) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-sky-600 to-emerald-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-sky-200 mb-4">
              <Link href="/tours" className="hover:text-white">Tours</Link>
              <span>/</span>
              <span className="text-white">{tour.title}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {tour.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-sky-100">
              <span className="flex items-center">
                📅 {tour.duration} days
              </span>
              <span className="flex items-center">
                👥 Max {tour.maxGroupSize} people
              </span>
              <span className="flex items-center">
                ⭐ {tour.rating} ({tour.reviewCount} reviews)
              </span>
              <span className="flex items-center capitalize">
                🎯 {tour.difficulty}
              </span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Description */}
                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                  <p className="text-gray-600 leading-relaxed">{tour.description}</p>
                </div>

                {/* Destinations */}
                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Destinations</h2>
                  <div className="flex flex-wrap gap-2">
                    {tour.destinations.map((dest, index) => (
                      <span key={index} className="flex items-center space-x-2">
                        <span className="bg-sky-100 text-sky-700 px-4 py-2 rounded-full font-medium">
                          📍 {dest}
                        </span>
                        {index < tour.destinations.length - 1 && (
                          <span className="text-gray-400">→</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Tour Highlights</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {tour.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start space-x-2 text-gray-600">
                        <span className="text-emerald-500 mt-0.5">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Included/Excluded */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-8 shadow-sm">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <span className="text-emerald-500 mr-2">✓</span> Included
                    </h2>
                    <ul className="space-y-2">
                      {tour.included.map((item, index) => (
                        <li key={index} className="text-gray-600 flex items-start space-x-2">
                          <span className="text-emerald-500">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-8 shadow-sm">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <span className="text-red-500 mr-2">✗</span> Not Included
                    </h2>
                    <ul className="space-y-2">
                      {tour.excluded.map((item, index) => (
                        <li key={index} className="text-gray-600 flex items-start space-x-2">
                          <span className="text-red-500">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Sidebar - Booking Card */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
                  <div className="text-center mb-6">
                    <span className="text-sm text-gray-500">From</span>
                    <p className="text-4xl font-bold text-gray-900">
                      ${tour.price}
                      <span className="text-lg font-normal text-gray-500">/person</span>
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Start Date
                      </label>
                      <select className="w-full border rounded-lg px-4 py-3 text-gray-700 bg-white">
                        {tour.startDates.map((date, index) => (
                          <option key={index} value={date}>
                            {new Date(date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Travelers
                      </label>
                      <input 
                        type="number" 
                        min="1" 
                        max={tour.maxGroupSize}
                        defaultValue="2"
                        className="w-full border rounded-lg px-4 py-3 text-gray-700"
                      />
                    </div>
                  </div>

                  <button className="w-full bg-sky-600 text-white py-4 rounded-lg font-semibold hover:bg-sky-700 transition-colors mb-4">
                    Request Booking
                  </button>
                  
                  <button className="w-full border border-sky-600 text-sky-600 py-4 rounded-lg font-semibold hover:bg-sky-50 transition-colors">
                    Get B2B Quote
                  </button>

                  <p className="text-center text-sm text-gray-500 mt-4">
                    No payment required now
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
