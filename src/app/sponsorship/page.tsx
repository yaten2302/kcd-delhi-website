import Link from "next/link";
import {
  Download,
  ArrowLeft,
  CheckCircle,
  Users,
  Target,
  TrendingUp,
} from "lucide-react";

export default function SponsorshipPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#172B4C] to-[#9FBAC3]">
      {/* Navigation */}
      <nav className="p-6">
        <Link
          href="/#sponsors"
          className="inline-flex items-center gap-2 text-white hover:text-gray-200 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Main Site
        </Link>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Sponsor KCD Delhi
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Partner with us to reach 700+ cloud-native professionals and
              showcase your brand at India's premier Kubernetes community event.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center">
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                700+ Attendees
              </h3>
              <p className="text-gray-300">
                Connect with cloud-native professionals, developers, and
                decision-makers
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center">
              <Target className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                Targeted Audience
              </h3>
              <p className="text-gray-300">
                Reach your ideal customers in the Kubernetes and cloud-native
                space
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center">
              <TrendingUp className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                Brand Visibility
              </h3>
              <p className="text-gray-300">
                Showcase your solutions and build lasting relationships
              </p>
            </div>
          </div>

          {/* Detailed Sponsorship Benefits Table */}
          <div className="bg-white/15 backdrop-blur-md rounded-xl p-8 md:p-12 mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-8">
              SPONSOR BENEFITS
            </h2>

            {/* Benefits Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm md:text-base">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="p-4 text-left font-bold border border-gray-300">
                      Benefits
                    </th>
                    <th className="p-4 text-center font-bold border border-gray-300 bg-gray-700">
                      Platinum
                    </th>
                    <th className="p-4 text-center font-bold border border-gray-300 bg-yellow-500 text-black">
                      Gold
                    </th>
                    <th className="p-4 text-center font-bold border border-gray-300 bg-gray-400 text-black">
                      Silver
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white/90 text-black">
                  <tr>
                    <td className="p-4 font-semibold border border-gray-300 bg-blue-100">
                      Sponsored Keynote
                    </td>
                    <td className="p-4 text-center border border-gray-300">
                      5-Minute Sponsored Keynote
                    </td>
                    <td className="p-4 text-center border border-gray-300">
                      -
                    </td>
                    <td className="p-4 text-center border border-gray-300">
                      -
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold border border-gray-300 bg-blue-100">
                      Booth
                    </td>
                    <td className="p-4 text-center border border-gray-300">
                      Large Booth
                    </td>
                    <td className="p-4 text-center border border-gray-300">
                      Medium Booth
                    </td>
                    <td className="p-4 text-center border border-gray-300">
                      Small Booth
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold border border-gray-300 bg-blue-100">
                      Talk
                    </td>
                    <td className="p-4 text-center border border-gray-300">
                      One Talk (Open-Source Tool Demo / Expert-led Presentation)
                    </td>
                    <td className="p-4 text-center border border-gray-300">
                      One Talk (Breakout / Demo Session)
                    </td>
                    <td className="p-4 text-center border border-gray-300">
                      One lightning talk
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold border border-gray-300 bg-blue-100">
                      Complimentary Tickets
                    </td>
                    <td className="p-4 text-center border border-gray-300">
                      12 Tickets
                    </td>
                    <td className="p-4 text-center border border-gray-300">
                      8 Tickets
                    </td>
                    <td className="p-4 text-center border border-gray-300">
                      5 Tickets
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold border border-gray-300 bg-blue-100">
                      Discount Code
                    </td>
                    <td className="p-4 text-center border border-gray-300">
                      30% Discount on 8 Additional Tickets
                    </td>
                    <td className="p-4 text-center border border-gray-300">
                      20% Discount on 5 Additional Tickets
                    </td>
                    <td className="p-4 text-center border border-gray-300">
                      10% Discount on 2 Additional Tickets
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold border border-gray-300 bg-blue-100">
                      Pre/Post Conference Email
                    </td>
                    <td className="p-4 text-center border border-gray-300">
                      Included
                    </td>
                    <td className="p-4 text-center border border-gray-300">
                      -
                    </td>
                    <td className="p-4 text-center border border-gray-300">
                      -
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold border border-gray-300 bg-blue-100">
                      Social Media Promotions
                    </td>
                    <td className="p-4 text-center border border-gray-300">
                      5 Mentions
                    </td>
                    <td className="p-4 text-center border border-gray-300">
                      3 Mentions
                    </td>
                    <td className="p-4 text-center border border-gray-300">
                      1 Mention
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold border border-gray-300 bg-blue-100">
                      Branding
                    </td>
                    <td className="p-4 text-center border border-gray-300">
                      Videos, Website, Lanyards, Venue
                    </td>
                    <td className="p-4 text-center border border-gray-300">
                      Website, Lanyards, Venue
                    </td>
                    <td className="p-4 text-center border border-gray-300">
                      Website, Venue
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Download Section */}
          <div className="text-center">
            <div className="bg-white/15 backdrop-blur-md rounded-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Download Sponsorship Prospectus
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Get detailed information about sponsorship packages, pricing,
                and how to become a sponsor at KCD Delhi 2026.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/KCD NEW Delhi 2025 SPONSORSHIP.pdf"
                  download="KCD_Delhi_2025_Sponsorship_Prospectus.pdf"
                  className="inline-flex items-center gap-3 bg-white text-[#172B4C] font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-lg transform hover:-translate-y-1"
                >
                  <Download size={20} />
                  Download Prospectus
                </a>

                <a
                  href="mailto:contact@kcddelhi.com?subject=KCD Delhi 2026 Sponsorship Inquiry"
                  className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-[#172B4C] transition-all duration-300 shadow-lg hover:shadow-xl text-lg transform hover:-translate-y-1"
                  title="Send email to contact@kcddelhi.com"
                >
                  Contact Us
                </a>
              </div>

              <div className="mt-8 p-6 bg-white/10 rounded-lg border border-gray-300/20">
                <p className="text-gray-600 text-sm mb-2">
                  <strong>For inquiries, contact: </strong>
                </p>
                <p className="text-gray-500 text-sm">
                  Email:{" "}
                  <span className="text-gray-500 font-medium">
                    contact@kcddelhi.com
                  </span>
                  <br />
                  Website:{" "}
                  <span className="text-slate-500 font-medium">kcddelhi.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
