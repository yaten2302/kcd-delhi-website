import Link from "next/link";
import ImageBtn from "../components/ImageBtn";

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="relative w-full py-24 bg-linear-to-b from-[#172B4C] to-[#9FBAC3] min-h-[60vh] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-white/5 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 w-full max-w-5xl">
        <div className="bg-white/25 backdrop-blur-md border border-white/30 rounded-xl p-6 md:p-20 text-center shadow-2xl">
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#0f172a] mb-12 tracking-tight">
            Sponsors
          </h2>

          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 bg-linear-to-r from-yellow-400 to-yellow-600 bg-clip-text">
              Gold Sponsors
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
              <div className="flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 w-full h-32 hover:bg-white">
                <ImageBtn
                  href="https://www.vcluster.com"
                  src="/vCluster_logo.svg"
                  alt="vCluster Logo"
                  width={180}
                  height={60}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 w-full h-32 hover:bg-white">
                <ImageBtn
                  href="https://www.vultr.com/"
                  src="/vultr_logo.png"
                  alt="Vultr Logo"
                  width={180}
                  height={60}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 w-full h-32 hover:bg-white">
                <ImageBtn
                  href="https://www.elastic.co/"
                  src="/elastic-logo.png"
                  alt="Elastic Logo"
                  width={180}
                  height={60}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 bg-linear-to-r from-gray-400 to-gray-600 bg-clip-text">
              Silver Sponsors
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
              <div className="flex items-center justify-center bg-[#1F2937]/95 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 w-full h-32 hover:bg-[#1F2937]">
                <ImageBtn
                  href="https://kodekloud.com/"
                  src="/KodeKloud.svg"
                  alt="KodeKloud Logo"
                  width={180}
                  height={60}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 w-full h-32 hover:bg-white">
                <ImageBtn
                  href="https://nudgebee.com/"
                  src="/nudgebee-logo.svg"
                  alt="NudgeBee Logo"
                  width={180}
                  height={60}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mb-14">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 bg-linear-to-r from-pink-400 to-purple-600 bg-clip-text">
              Diversity Sponsor
            </h3>
            <div className="grid grid-cols-1 gap-8 place-items-center">
              <div className="flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 w-full h-32 hover:bg-white">
                <ImageBtn
                  href="https://www.docker.com/"
                  src="/docker-logo.png"
                  alt="Docker Logo"
                  width={180}
                  height={60}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>

          <Link
            href="/sponsorship.html"
            className="inline-block bg-[#e2e8f0] hover:bg-white text-[#0f172a] font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-lg md:text-xl transform hover:-translate-y-1"
          >
            Check Sponsorship Opportunities
          </Link>
        </div>
      </div>
    </section>
  );
}
