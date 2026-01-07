"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import RegistrationModal from "./RegistrationModal";

// Event date: Feb 21, 2026 (UTC)
const TARGET_DATE = new Date("2026-02-21T00:00:00Z");

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const handleRegisterClick = () => {
    // On mobile, open in new tab; on desktop, open modal
    if (window.innerWidth < 768) {
      window.open("https://konfhub.com/kcd-delhi-2026", "_blank");
    } else {
      setIsModalOpen(true);
    }
  };

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
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden pb-24 md:pb-32">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/indiagate.png"
          alt="India Gate Background"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-[#EAB308]/60 via-[#F97316]/50 to-[#14B8A6]/60 mix-blend-multiply" />

      <div className="container mx-auto px-6 md:px-12 pt-20 z-10">
        <div className="flex flex-col items-start gap-8 max-w-4xl">
          <div className="flex flex-col items-start">
            {/* Mobile-only single line */}
            <h1 className="md:hidden text-white text-4xl font-bold leading-tight drop-shadow-lg whitespace-nowrap">
              KCD Delhi 2026
            </h1>

            {/* Desktop original - unchanged */}
            <h1 className="hidden md:block text-white text-6xl md:text-8xl font-bold leading-tight drop-shadow-lg">
              KCD
              <br />
              Delhi
              <br />
              2026
            </h1>
          </div>

          {/* Countdown - Single Frame */}
          <div className="flex gap-3 md:gap-6 w-full max-w-lg border-2 border-white/30 rounded-3xl p-4 md:p-6">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div
                key={unit}
                className="flex flex-col gap-1 md:gap-2 items-center flex-1"
              >
                <span className="text-white/90 text-xs md:text-lg capitalize font-medium drop-shadow-md whitespace-nowrap">
                  {unit}
                </span>
                <div className="bg-white rounded-xl w-full h-14 md:h-20 flex items-center justify-center shadow-lg">
                  <span className="text-black text-xl md:text-3xl font-bold">
                    {value}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
            <button
              onClick={handleRegisterClick}
              className="bg-[#0f172a] text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-[#0f172a]/90 transition-colors shadow-lg w-full sm:w-auto text-center"
            >
              Register Now
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

      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
