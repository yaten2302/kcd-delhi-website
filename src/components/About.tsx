import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col items-center py-20 overflow-hidden"
    >
      <div className="absolute inset-0 -z-20">
        <Image
          src="/about-section.png"
          alt="About section background"
          fill
          quality={100}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 z-10 flex flex-col items-center gap-12">
        <div className="w-full max-w-6xl relative mt-12">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-16 shadow-lg">
            <h2 className="text-4xl md:text-5xl font-bold text-[#763841] text-center pb-8 text-shadow-lg/20">
              About Event
            </h2>

            <p className="text-xl md:text-2xl text-center text-[#2D4059] font-semibold leading-snug max-w-4xl mx-auto mb-16 text-shadow-lg/10">
              Presenting you the first ever KCD in the heart of India - KCD
              Delhi, that brings together adopters and technologists from the
              open source and cloud native ecosystem for a full day of learning,
              collaboration, and meaningful networking. With 700+ attendees
              expected, it stands as one of India&apos;s most vibrant cloud
              native gatherings.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white/12 rounded-[40px] p-6 md:p-7 flex flex-col items-center justify-center border border-white-20 shadow-md hover:scale-105 transition-transform backdrop-blur-[6px]">
                <Image
                  src="/about-section-attendees-img.png"
                  alt="Attendees Icon"
                  width={128}
                  height={128}
                />
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-[#811313] mb-1">
                    700+
                  </h3>
                  <p className="text-lg text-[#213044] font-semibold">
                    Attendees
                  </p>
                </div>
              </div>

              <div className="bg-white/12 rounded-[40px] p-6 md:p-7 flex flex-col items-center justify-center border border-white-20 shadow-md hover:scale-105 transition-transform backdrop-blur-[6px]">
                <Image
                  src="/about-section-speakers-img.png"
                  alt="Speakers Icon"
                  width={128}
                  height={128}
                />
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-[#811313] mb-1">
                    30+
                  </h3>
                  <p className="text-lg text-[#213044] font-semibold">
                    Speakers
                  </p>
                </div>
              </div>

              <div className="bg-white/12 rounded-[40px] p-6 md:p-7 flex flex-col items-center justify-center border border-white-20 shadow-md hover:scale-105 transition-transform backdrop-blur-[6px]">
                <Image
                  src="/about-section-event-day-img.png"
                  alt="Event Day Icon"
                  width={128}
                  height={128}
                />
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-[#811313] mb-1">1</h3>
                  <p className="text-lg text-[#213044] font-semibold">
                    Day Event
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
