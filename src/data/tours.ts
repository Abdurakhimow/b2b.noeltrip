import { Tour, Destination } from '@/types';

export const tours: Tour[] = [
  {
    id: '1',
    title: 'Classic Silk Road Adventure',
    description: 'Experience the legendary Silk Road through Uzbekistan\'s most iconic cities. Visit the ancient trading posts of Samarkand, Bukhara, and Khiva, where caravans once traveled carrying precious goods between East and West.',
    duration: 8,
    price: 1299,
    currency: 'USD',
    destinations: ['Tashkent', 'Samarkand', 'Bukhara', 'Khiva'],
    highlights: [
      'Registan Square in Samarkand',
      'Historic Old Town of Bukhara',
      'Itchan Kala fortress in Khiva',
      'Shah-i-Zinda necropolis',
      'Poi Kalon complex'
    ],
    included: [
      'Airport transfers',
      'Domestic flights',
      'All accommodations (4-star hotels)',
      'Daily breakfast',
      'Professional English-speaking guide',
      'All entrance fees'
    ],
    excluded: [
      'International flights',
      'Travel insurance',
      'Personal expenses',
      'Tips and gratuities'
    ],
    imageUrl: '/images/silk-road.jpg',
    category: 'silk-road',
    maxGroupSize: 16,
    difficulty: 'easy',
    startDates: ['2024-03-15', '2024-04-01', '2024-05-10', '2024-09-15', '2024-10-01'],
    rating: 4.9,
    reviewCount: 127
  },
  {
    id: '2',
    title: 'Samarkand Cultural Discovery',
    description: 'Immerse yourself in the rich history and stunning architecture of Samarkand, the jewel of Central Asia. This city tour takes you through centuries of history, from the Timurid Empire to modern Uzbekistan.',
    duration: 4,
    price: 599,
    currency: 'USD',
    destinations: ['Samarkand'],
    highlights: [
      'Registan Square',
      'Gur-e-Amir Mausoleum',
      'Bibi-Khanym Mosque',
      'Ulugh Beg Observatory',
      'Siab Bazaar'
    ],
    included: [
      'Hotel accommodation',
      'Daily breakfast',
      'Private guide',
      'All entrance fees',
      'Local transportation'
    ],
    excluded: [
      'Flights',
      'Travel insurance',
      'Meals not mentioned',
      'Personal expenses'
    ],
    imageUrl: '/images/samarkand.jpg',
    category: 'cultural',
    maxGroupSize: 12,
    difficulty: 'easy',
    startDates: ['2024-03-01', '2024-04-15', '2024-05-20', '2024-06-10'],
    rating: 4.8,
    reviewCount: 89
  },
  {
    id: '3',
    title: 'Uzbekistan Mountains & Nature',
    description: 'Escape to the natural beauty of Uzbekistan. Trek through the Western Tien Shan mountains, discover alpine lakes, and experience the peaceful countryside away from the historic cities.',
    duration: 6,
    price: 899,
    currency: 'USD',
    destinations: ['Tashkent', 'Chimgan', 'Charvak Lake', 'Nurata Mountains'],
    highlights: [
      'Chimgan mountain resort',
      'Charvak Lake boat trip',
      'Nurata eco-tourism village',
      'Yurt camp experience',
      'Petroglyphs hiking'
    ],
    included: [
      'All transportation',
      'Accommodation including yurt stay',
      'All meals during trek',
      'Professional mountain guide',
      'Hiking equipment'
    ],
    excluded: [
      'International flights',
      'Travel insurance',
      'Personal hiking gear',
      'Tips'
    ],
    imageUrl: '/images/mountains.jpg',
    category: 'nature',
    maxGroupSize: 10,
    difficulty: 'moderate',
    startDates: ['2024-05-01', '2024-06-15', '2024-07-01', '2024-09-01'],
    rating: 4.7,
    reviewCount: 45
  },
  {
    id: '4',
    title: 'Bukhara Heritage Walk',
    description: 'Walk through the living museum of Bukhara, a UNESCO World Heritage Site. Discover ancient trading domes, madrasas, and the historic Ark fortress that has witnessed over 2000 years of history.',
    duration: 3,
    price: 449,
    currency: 'USD',
    destinations: ['Bukhara'],
    highlights: [
      'Ark Fortress',
      'Poi Kalon Complex',
      'Lyabi-Hauz ensemble',
      'Trading Domes',
      'Chor Minor'
    ],
    included: [
      'Boutique hotel accommodation',
      'Daily breakfast',
      'Expert local guide',
      'All entrance fees',
      'Traditional dinner'
    ],
    excluded: [
      'Transport to/from Bukhara',
      'Travel insurance',
      'Lunches',
      'Personal expenses'
    ],
    imageUrl: '/images/bukhara.jpg',
    category: 'historical',
    maxGroupSize: 14,
    difficulty: 'easy',
    startDates: ['2024-03-20', '2024-04-10', '2024-05-05', '2024-10-15'],
    rating: 4.9,
    reviewCount: 112
  },
  {
    id: '5',
    title: 'Grand Uzbekistan Tour',
    description: 'The ultimate Uzbekistan experience covering all major destinations. From the modern capital Tashkent to the ancient fortress city of Khiva, this comprehensive tour showcases the best of Uzbekistan.',
    duration: 12,
    price: 1899,
    currency: 'USD',
    destinations: ['Tashkent', 'Fergana Valley', 'Samarkand', 'Shakhrisabz', 'Bukhara', 'Khiva', 'Nukus'],
    highlights: [
      'Complete Silk Road cities circuit',
      'Fergana Valley crafts tour',
      'Savitsky Art Museum in Nukus',
      'Shakhrisabz - Timur\'s birthplace',
      'High-speed train experience'
    ],
    included: [
      'All transportation including flights',
      '4-star hotel accommodations',
      'All meals',
      'English-speaking guide throughout',
      'All entrance fees',
      'Cultural performances'
    ],
    excluded: [
      'International flights',
      'Travel insurance',
      'Personal expenses',
      'Optional activities'
    ],
    imageUrl: '/images/grand-tour.jpg',
    category: 'silk-road',
    maxGroupSize: 16,
    difficulty: 'easy',
    startDates: ['2024-04-01', '2024-05-15', '2024-09-01', '2024-10-15'],
    rating: 5.0,
    reviewCount: 67
  },
  {
    id: '6',
    title: 'Tashkent City Break',
    description: 'Discover the vibrant capital of Uzbekistan. A perfect introduction to the country, combining Soviet-era architecture, ancient mosques, bustling bazaars, and modern developments.',
    duration: 3,
    price: 399,
    currency: 'USD',
    destinations: ['Tashkent'],
    highlights: [
      'Chorsu Bazaar',
      'Khast Imam Complex',
      'Tashkent Metro stations',
      'Museum of Applied Arts',
      'Amir Timur Square'
    ],
    included: [
      'Central hotel accommodation',
      'Daily breakfast',
      'City guide',
      'Metro tour',
      'Entrance fees'
    ],
    excluded: [
      'Flights',
      'Travel insurance',
      'Meals not mentioned',
      'Personal expenses'
    ],
    imageUrl: '/images/tashkent.jpg',
    category: 'city-break',
    maxGroupSize: 20,
    difficulty: 'easy',
    startDates: ['2024-03-01', '2024-03-15', '2024-04-01', '2024-04-15'],
    rating: 4.6,
    reviewCount: 78
  }
];

export const destinations: Destination[] = [
  {
    id: '1',
    name: 'Samarkand',
    description: 'The heart of the Silk Road, known for its stunning Islamic architecture and the famous Registan Square.',
    imageUrl: '/images/destinations/samarkand.jpg',
    tours: ['1', '2', '5']
  },
  {
    id: '2',
    name: 'Bukhara',
    description: 'A living museum with over 140 architectural monuments, a UNESCO World Heritage Site.',
    imageUrl: '/images/destinations/bukhara.jpg',
    tours: ['1', '4', '5']
  },
  {
    id: '3',
    name: 'Khiva',
    description: 'An open-air museum with the perfectly preserved inner city of Itchan Kala.',
    imageUrl: '/images/destinations/khiva.jpg',
    tours: ['1', '5']
  },
  {
    id: '4',
    name: 'Tashkent',
    description: 'The modern capital blending Soviet-era architecture with ancient Islamic sites and vibrant bazaars.',
    imageUrl: '/images/destinations/tashkent.jpg',
    tours: ['1', '3', '5', '6']
  }
];

export function getTourById(id: string): Tour | undefined {
  return tours.find(tour => tour.id === id);
}

export function getToursByCategory(category: string): Tour[] {
  return tours.filter(tour => tour.category === category);
}

export function searchTours(query: string): Tour[] {
  const lowerQuery = query.toLowerCase();
  return tours.filter(tour => 
    tour.title.toLowerCase().includes(lowerQuery) ||
    tour.description.toLowerCase().includes(lowerQuery) ||
    tour.destinations.some(dest => dest.toLowerCase().includes(lowerQuery))
  );
}
