"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const TARGET_DATE = new Date("2026-02-21T00:00:00Z");

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = +TARGET_DATE - +now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24))
            .toString()
            .padStart(2, "0"),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24)
            .toString()
            .padStart(2, "0"),
          minutes: Math.floor((difference / 1000 / 60) % 60)
            .toString()
            .padStart(2, "0"),
          seconds: Math.floor((difference / 1000) % 60)
            .toString()
            .padStart(2, "0"),
        });
      } else {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/hero-section.png"
          alt=""
          fill
          className="object-cover object-bottom"
          priority
          quality={100}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="flex flex-col items-center text-center gap-10 max-w-5xl mx-auto">
          <h1 className="text-[#001F3F] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none whitespace-nowrap text-shadow-lg/70">
            KCD Delhi 2026
          </h1>

          <div className="flex gap-4 md:gap-8 flex-wrap">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="flex flex-col gap-2 items-center">
                <span className="text-[#7D2143] text-sm md:text-[28px] capitalize font-bold text-shadow-md/50">
                  {unit}
                </span>
                <div className="w-32 h-16 md:w-40 md:h-20 flex items-center justify-center bg-[#D6D6D60D] backdrop-blur-[25.37530517578125px] shadow-[0px_23.97px_53.57px_0px_#0000001A,0px_97.27px_97.27px_0px_#00000017,0px_219.92px_132.52px_0px_#0000000D,0px_390.5px_156.48px_0px_#00000003,0px_610.42px_170.58px_0px_#00000000] relative">
                  <div className="absolute inset-0 bg-[#D6D6D60D] backdrop-blur-[25.37530517578125px] shadow-[0px_23.97px_53.57px_0px_#0000001A,0px_97.27px_97.27px_0px_#00000017,0px_219.92px_132.52px_0px_#0000000D,0px_390.5px_156.48px_0px_#00000003,0px_610.42px_170.58px_0px_#00000000] [border-image:linear-gradient(180deg,#F2F2F2_0%,#818181_41.42%,#FFFFFF_100%)_1] border-[2.82px]"></div>
                  <span className="text-[#001F3F] text-2xl md:text-3xl font-bold relative z-10">
                    {value}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
            <button className="bg-[#0f172a] text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-[#0f172a]/90 transition-colors shadow-lg w-full sm:w-auto">
              Registrations Coming Soon
            </button>
            <a
              href="https://sessionize.com/kcd-new-delhi/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white/80 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-white/10 transition-colors shadow-lg w-full sm:w-auto backdrop-blur-sm text-center inline-block"
            >
              Call for papers
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
