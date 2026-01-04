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
          priority
          quality={100}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="flex flex-col items-center text-center gap-10 max-w-5xl mx-auto -translate-y-10 md:-translate-y-15">
          <h1 className="text-[#001F3F] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-none whitespace-nowrap text-shadow-lg/70">
            KCD Delhi 2026
          </h1>

          <div className="flex gap-4 md:gap-8 flex-wrap">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="flex flex-col gap-2 items-center">
                <span className="text-[#7D2143] text-sm md:text-[28px] capitalize font-bold text-shadow-md/50">
                  {unit}
                </span>
                <div className="w-28 h-14 md:w-32 md:h-16 flex items-center justify-center bg-[#D6D6D60D] backdrop-blur-[25.37530517578125px] shadow-[0px_23.97px_53.57px_0px_#0000001A,0px_97.27px_97.27px_0px_#00000017,0px_219.92px_132.52px_0px_#0000000D,0px_390.5px_156.48px_0px_#00000003,0px_610.42px_170.58px_0px_#00000000] relative">
                  <div className="absolute inset-0 bg-[#D6D6D60D] backdrop-blur-[25.37530517578125px] shadow-[0px_23.97px_53.57px_0px_#0000001A,0px_97.27px_97.27px_0px_#00000017,0px_219.92px_132.52px_0px_#0000000D,0px_390.5px_156.48px_0px_#00000003,0px_610.42px_170.58px_0px_#00000000] [border-image:linear-gradient(180deg,#F2F2F2_0%,#818181_41.42%,#FFFFFF_100%)_1] border-[2.82px]"></div>
                  <span className="text-[#001F3F] text-2xl md:text-3xl font-bold relative z-10">
                    {value}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-8 sm:items-center">
            <button className="w-full sm:w-[300px] bg-[#001F3F] text-white px-8 py-3 rounded-[50px] font-bold text-lg shadow-2xl cursor-pointer">
              Registrations Coming Soon
            </button>

            <a
              href="https://sessionize.com/kcd-new-delhi/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-[300px] px-8 py-3 rounded-[50px] font-bold text-lg text-[#001F3F] inline-block text-center bg-[#D6D6D64D] backdrop-blur-[7.794900417327881px] border-[0.87px]_solid_transparent border-image-source:linear-gradient(180deg,#F2F2F2_0%,#818181_41.42%,#FFFFFF_100%) border-image-slice:1 shadow-[0px_7.36px_16.46px_#0000001A,0px_29.88px_29.88px_#00000017,0px_67.56px_40.71px_#0000000D,0px_119.95px_48.07px_#00000003,0px_187.51px_52.4px_#00000000] hover:bg-[#D6D6D66A] transition-colors"
            >
              Call for papers
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
