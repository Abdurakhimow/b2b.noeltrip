# Noel Trip B2B - Uzbekistan Inbound Tourism Platform

A B2B platform for travel agencies receiving tourists from around the world to Uzbekistan. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🏛️ **Tour Catalog**: Browse and search tours across Uzbekistan's famous Silk Road cities
- 📋 **Partner Dashboard**: Manage bookings, view statistics, and track commissions
- 💼 **B2B Pricing**: Competitive wholesale rates for travel agency partners
- 📍 **Top Destinations**: Samarkand, Bukhara, Khiva, Tashkent, and more
- 📱 **Responsive Design**: Optimized for desktop and mobile devices

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **API**: Next.js API Routes

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Abdurakhimow/b2b.noeltrip.git
cd b2b.noeltrip
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   └── tours/         # Tours API endpoints
│   ├── contact/           # Contact page
│   ├── dashboard/         # Partner dashboard
│   ├── tours/             # Tours listing and details
│   │   └── [id]/          # Dynamic tour detail page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable UI components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── TourCard.tsx
├── data/                  # Mock data
│   └── tours.ts           # Tour data and helpers
└── types/                 # TypeScript types
    └── index.ts
```

## API Endpoints

- `GET /api/tours` - Get all tours (supports `category` and `search` query params)
- `GET /api/tours/[id]` - Get a specific tour by ID

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary to Noel Trip.

## Contact

For partnership inquiries: b2b@noeltrip.com
