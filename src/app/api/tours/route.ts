import { tours } from '@/data/tours';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const search = searchParams.get('search');

  let filteredTours = tours;

  if (category && category !== 'all') {
    filteredTours = filteredTours.filter(tour => tour.category === category);
  }

  if (search) {
    const searchLower = search.toLowerCase();
    filteredTours = filteredTours.filter(tour =>
      tour.title.toLowerCase().includes(searchLower) ||
      tour.description.toLowerCase().includes(searchLower) ||
      tour.destinations.some(dest => dest.toLowerCase().includes(searchLower))
    );
  }

  return NextResponse.json({
    tours: filteredTours,
    total: filteredTours.length
  });
}
