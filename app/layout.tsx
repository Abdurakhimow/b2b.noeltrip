import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Noeltrip B2B',
  description: 'Partner portal for travel agencies',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="min-h-screen">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <header className="mb-8 flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Noeltrip B2B</div>
              <h1 className="text-2xl font-semibold text-slate-900">Партнёрский портал</h1>
            </div>
            <div className="rounded-full bg-slate-100 px-4 py-2 text-xs font-medium text-slate-700">
              MVP skeleton
            </div>
          </header>
          <main className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            {children}
          </main>
          <footer className="mt-8 text-center text-xs text-slate-500">
            Noeltrip • B2B MVP
          </footer>
        </div>
      </body>
    </html>
  );
}
