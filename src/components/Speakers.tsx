import Image from "next/image";
import { MessageSquare } from "lucide-react";

export default function Speakers() {
    return (
        <section id="speakers" className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/loksabha.png"
                    alt="Lok Sabha Background"
                    fill
                    className="object-cover object-center"
                    quality={100}
                />
            </div>

            {/* Top Fade Gradient - matching Event Journey bottom */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#EFBB9E] to-transparent z-[5]" />

            {/* Bottom Fade Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a6b7c] to-transparent z-[5]" />

            {/* Main Container */}
            <div className="relative z-10 w-full px-4 md:px-16">

                {/* Large Glassmorphism Box */}
                <div className="bg-[#DEDEDE]/20 backdrop-blur-xs border border-black/50 rounded-xl p-8 md:p-16 flex flex-col items-center gap-8 md:gap-12 relative overflow-hidden">

                    {/* Inner Content */}
                    <div className="flex flex-col items-center gap-6 md:gap-8 max-w-4xl mx-auto w-full">

                        {/* Title */}
                        <h2 className="text-4xl md:text-7xl font-bold text-black text-center tracking-tight">
                            Call for Speakers
                        </h2>

                        {/* Subtitle */}
                        <p className="text-xl md:text-4xl text-gray-800 text-center font-normal leading-relaxed max-w-4xl">
                            We&apos;re looking for passionate speakers to share their knowledge and experience with the Kubernetes community in New Delhi.
                        </p>

                        {/* Call for Papers Inner Box */}
                        <div className="bg-[#cc9c68]/90 border border-[#b08050] rounded-2xl p-6 md:p-8 w-full shadow-sm mt-4">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 mt-1">
                                    <MessageSquare className="w-6 h-6 text-black/70" />
                                </div>
                                <div>
                                    <p className="text-black text-lg md:text-xl leading-relaxed font-medium">
                                        <span className="font-bold">Call for Papers</span> Now Open! Share your cloud-native expertise. We welcome talks on Kubernetes, observability, security, CI/CD, and platform engineering.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <a
                            href="#"
                            className="bg-[#0f172a] text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[#1e293b] transition-colors shadow-lg mt-4"
                        >
                            Submit your talk
                        </a>

                    </div>
                </div>
            </div>
        </section>
    );
}
