import { Header, Footer, TourCard } from '@/components';
import { tours } from '@/data/tours';
import { TourCategory } from '@/types';

const categories: { value: TourCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All Tours' },
  { value: 'silk-road', label: 'Silk Road' },
  { value: 'cultural', label: 'Cultural' },
  { value: 'historical', label: 'Historical' },
  { value: 'nature', label: 'Nature' },
  { value: 'city-break', label: 'City Break' },
  { value: 'adventure', label: 'Adventure' },
];

export default function ToursPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-r from-sky-600 to-emerald-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Explore Our Tours
            </h1>
            <p className="text-xl text-sky-100 max-w-2xl mx-auto">
              Discover the best of Uzbekistan with our carefully curated tour packages
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="bg-white py-6 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map(category => (
                <button
                  key={category.value}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category.value === 'all'
                      ? 'bg-sky-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Tours Grid */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex justify-between items-center">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{tours.length}</span> tours
              </p>
              <select className="border rounded-lg px-4 py-2 text-gray-700 bg-white">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Duration: Short to Long</option>
                <option>Rating: High to Low</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tours.map(tour => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          </div>
        </section>

        {/* B2B CTA */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Looking for Custom Group Tours?
              </h2>
              <p className="text-lg mb-6 opacity-90">
                We offer tailored packages for travel agencies with competitive B2B pricing
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
              >
                Request Quote
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
