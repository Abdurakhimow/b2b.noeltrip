export interface Tour {
  id: string;
  title: string;
  description: string;
  duration: number; // in days
  price: number;
  currency: string;
  destinations: string[];
  highlights: string[];
  included: string[];
  excluded: string[];
  imageUrl: string;
  category: TourCategory;
  maxGroupSize: number;
  difficulty: 'easy' | 'moderate' | 'challenging';
  startDates: string[];
  rating: number;
  reviewCount: number;
}

export type TourCategory = 
  | 'cultural'
  | 'adventure'
  | 'silk-road'
  | 'historical'
  | 'nature'
  | 'city-break';

export interface Destination {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  tours: string[];
}

export interface Booking {
  id: string;
  tourId: string;
  partnerEmail: string;
  partnerCompany: string;
  numberOfTravelers: number;
  startDate: string;
  specialRequests?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

export interface Partner {
  id: string;
  companyName: string;
  email: string;
  country: string;
  phone: string;
  website?: string;
  isVerified: boolean;
}
