import { getTourById } from '@/data/tours';
import { NextResponse } from 'next/server';

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(
  request: Request,
  { params }: RouteParams
) {
  const { id } = await params;
  const tour = getTourById(id);

  if (!tour) {
    return NextResponse.json(
      { error: 'Tour not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(tour);
}
