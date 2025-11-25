import { Header, Footer } from '@/components';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        {/* Dashboard Header */}
        <section className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Partner Dashboard</h1>
                <p className="text-gray-600 mt-1">Welcome back! Manage your bookings and requests</p>
              </div>
              <div className="mt-4 md:mt-0 flex space-x-3">
                <button className="bg-sky-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-sky-700 transition-colors">
                  New Booking
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  Download Price List
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Content */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Active Bookings</p>
                    <p className="text-3xl font-bold text-gray-900">12</p>
                  </div>
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📋</span>
                  </div>
                </div>
                <p className="text-sm text-emerald-600 mt-2">↑ 3 new this week</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Pending Quotes</p>
                    <p className="text-3xl font-bold text-gray-900">5</p>
                  </div>
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">⏳</span>
                  </div>
                </div>
                <p className="text-sm text-amber-600 mt-2">2 awaiting response</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Total Travelers</p>
                    <p className="text-3xl font-bold text-gray-900">156</p>
                  </div>
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">👥</span>
                  </div>
                </div>
                <p className="text-sm text-emerald-600 mt-2">↑ 23% vs last month</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Commission Earned</p>
                    <p className="text-3xl font-bold text-gray-900">$4,250</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💰</span>
                  </div>
                </div>
                <p className="text-sm text-emerald-600 mt-2">↑ 15% vs last month</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Recent Bookings */}
              <div className="lg:col-span-2 bg-white rounded-xl shadow-sm">
                <div className="p-6 border-b">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-gray-900">Recent Bookings</h2>
                    <Link href="#" className="text-sky-600 hover:text-sky-700 text-sm font-medium">
                      View All →
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="text-left text-sm text-gray-500">
                          <th className="pb-4">Booking ID</th>
                          <th className="pb-4">Tour</th>
                          <th className="pb-4">Travelers</th>
                          <th className="pb-4">Date</th>
                          <th className="pb-4">Status</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr className="border-t">
                          <td className="py-4 font-medium">#BK-2024-001</td>
                          <td className="py-4">Classic Silk Road</td>
                          <td className="py-4">4</td>
                          <td className="py-4">Mar 15, 2024</td>
                          <td className="py-4">
                            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium">
                              Confirmed
                            </span>
                          </td>
                        </tr>
                        <tr className="border-t">
                          <td className="py-4 font-medium">#BK-2024-002</td>
                          <td className="py-4">Samarkand Discovery</td>
                          <td className="py-4">2</td>
                          <td className="py-4">Mar 20, 2024</td>
                          <td className="py-4">
                            <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-medium">
                              Pending
                            </span>
                          </td>
                        </tr>
                        <tr className="border-t">
                          <td className="py-4 font-medium">#BK-2024-003</td>
                          <td className="py-4">Grand Uzbekistan</td>
                          <td className="py-4">8</td>
                          <td className="py-4">Apr 1, 2024</td>
                          <td className="py-4">
                            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium">
                              Confirmed
                            </span>
                          </td>
                        </tr>
                        <tr className="border-t">
                          <td className="py-4 font-medium">#BK-2024-004</td>
                          <td className="py-4">Bukhara Heritage</td>
                          <td className="py-4">6</td>
                          <td className="py-4">Apr 10, 2024</td>
                          <td className="py-4">
                            <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-xs font-medium">
                              Processing
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
                  <div className="space-y-3">
                    <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left">
                      <span className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center">
                        📝
                      </span>
                      <span className="font-medium text-gray-700">Request New Quote</span>
                    </button>
                    <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left">
                      <span className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                        📊
                      </span>
                      <span className="font-medium text-gray-700">View Reports</span>
                    </button>
                    <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left">
                      <span className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                        📁
                      </span>
                      <span className="font-medium text-gray-700">Download Catalog</span>
                    </button>
                    <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left">
                      <span className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        💬
                      </span>
                      <span className="font-medium text-gray-700">Contact Support</span>
                    </button>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-sky-600 to-emerald-600 rounded-xl p-6 text-white">
                  <h3 className="text-lg font-bold mb-2">Partner Tier: Gold</h3>
                  <p className="text-sky-100 text-sm mb-4">
                    You&apos;re earning 12% commission on all bookings
                  </p>
                  <div className="bg-white/20 rounded-full h-2 mb-2">
                    <div className="bg-white rounded-full h-2 w-3/4" />
                  </div>
                  <p className="text-sm text-sky-100">
                    $750 more to reach Platinum tier
                  </p>
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
