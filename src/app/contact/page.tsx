import { Header, Footer } from '@/components';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-r from-sky-600 to-emerald-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-sky-100 max-w-2xl mx-auto">
              Get in touch with our B2B team for partnership inquiries and custom tour requests
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input 
                        type="text" 
                        required
                        className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input 
                        type="text" 
                        required
                        className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="Your Travel Agency"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      required
                      className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country
                    </label>
                    <select className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white">
                      <option value="">Select your country</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                      <option value="JP">Japan</option>
                      <option value="CN">China</option>
                      <option value="KR">South Korea</option>
                      <option value="IN">India</option>
                      <option value="AE">United Arab Emirates</option>
                      <option value="RU">Russia</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type
                    </label>
                    <select className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white">
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="quote">Tour Quote Request</option>
                      <option value="custom">Custom Tour Request</option>
                      <option value="group">Group Booking</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea 
                      required
                      rows={5}
                      className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-sky-600 text-white py-4 rounded-lg font-semibold hover:bg-sky-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">📍</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Address</h3>
                        <p className="text-gray-600">
                          123 Amir Temur Avenue<br />
                          Tashkent, Uzbekistan 100000
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">📧</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Email</h3>
                        <p className="text-gray-600">b2b@noeltrip.com</p>
                        <p className="text-gray-600">support@noeltrip.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">📞</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Phone</h3>
                        <p className="text-gray-600">+998 71 123 4567</p>
                        <p className="text-gray-600">+998 90 123 4567 (WhatsApp)</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">🕐</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Business Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 6:00 PM (UZT)<br />
                          Saturday: 10:00 AM - 2:00 PM (UZT)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-4">Why Partner With Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <span>✓</span>
                      <span>Competitive B2B rates</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span>✓</span>
                      <span>Fast response within 24 hours</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span>✓</span>
                      <span>Flexible payment terms</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span>✓</span>
                      <span>24/7 emergency support</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span>✓</span>
                      <span>Custom tour development</span>
                    </li>
                  </ul>
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
