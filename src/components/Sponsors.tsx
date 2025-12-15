import Link from "next/link";
import ImageBtn from "../components/ImageBtn";

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="relative w-full py-24 bg-gradient-to-b from-[#172B4C] to-[#9FBAC3] min-h-[60vh] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-white/5 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 w-full max-w-5xl">
        <div className="bg-white/25 backdrop-blur-md border border-white/30 rounded-xl p-6 md:p-20 text-center shadow-2xl">
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#0f172a] mb-12 tracking-tight">
            Sponsors
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-14 place-items-center">
            <div className="flex items-center justify-center bg-white/40 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <ImageBtn
                href="https://www.vcluster.com"
                src="/vCluster_logo.svg"
                alt="vCluster Logo"
                width={220}
                height={220}
              />
            </div>

            <div className="flex items-center justify-center bg-white/40 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <ImageBtn
                href="https://kodekloud.com/"
                src="/KodeKloud.svg"
                alt="KodeKloud Logo"
                width={220}
                height={220}
              />
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
