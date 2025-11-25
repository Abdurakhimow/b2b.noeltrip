import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🇺🇿</span>
              <span className="font-bold text-xl">Noel Trip B2B</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted B2B partner for inbound tourism to Uzbekistan. 
              We connect travel agencies worldwide with authentic Uzbekistan experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tours" className="text-gray-400 hover:text-white transition-colors">
                  Tours
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-400 hover:text-white transition-colors">
                  Partner Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Destinations</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Samarkand</li>
              <li>Bukhara</li>
              <li>Khiva</li>
              <li>Tashkent</li>
              <li>Fergana Valley</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <span>📍</span>
                <span>Tashkent, Uzbekistan</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📧</span>
                <span>b2b@noeltrip.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📞</span>
                <span>+998 71 123 4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Noel Trip B2B. All rights reserved.</p>
          <p className="mt-2">Licensed tour operator for inbound tourism in Uzbekistan</p>
        </div>
      </div>
    </footer>
  );
}
