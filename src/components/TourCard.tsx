import Link from 'next/link';
import { Tour } from '@/types';

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image placeholder */}
      <div className="h-48 bg-gradient-to-br from-sky-400 to-emerald-400 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl">🏛️</span>
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-sm font-semibold text-sky-600">{tour.duration} days</span>
        </div>
      </div>

      <div className="p-6">
        {/* Category Badge */}
        <span className="inline-block px-3 py-1 text-xs font-medium bg-sky-100 text-sky-700 rounded-full mb-3 capitalize">
          {tour.category.replace('-', ' ')}
        </span>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {tour.title}
        </h3>

        {/* Destinations */}
        <p className="text-gray-600 text-sm mb-3">
          📍 {tour.destinations.join(' → ')}
        </p>

        {/* Rating */}
        <div className="flex items-center space-x-1 mb-4">
          <span className="text-amber-400">★</span>
          <span className="font-medium">{tour.rating}</span>
          <span className="text-gray-400 text-sm">({tour.reviewCount} reviews)</span>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <span className="text-sm text-gray-500">From</span>
            <p className="text-2xl font-bold text-gray-900">
              ${tour.price}
              <span className="text-sm font-normal text-gray-500">/person</span>
            </p>
          </div>
          <Link 
            href={`/tours/${tour.id}`}
            className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
