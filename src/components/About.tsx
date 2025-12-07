import Image from "next/image";
import { Shield, Lightbulb, UsersRound } from "lucide-react";


export default function About() {
    return (
        <section id="about" className="relative min-h-screen w-full flex flex-col items-center py-20 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 -z-20">
                <Image
                    src="/chandnichowk.png"
                    alt="Chandni Chowk Background"
                    fill
                    className="object-cover object-center opacity-40"
                    quality={100}
                />
            </div>
            {/* Background Overlay Color */}
            <div className="absolute inset-0 -z-10 bg-[#f8e1d4]/80 mix-blend-overlay" />


            <div className="container mx-auto px-6 md:px-12 z-10 flex flex-col items-center gap-12">
                <h2 className="text-4xl md:text-5xl font-bold text-black text-center">
                    About Event
                </h2>

                <div className="w-full max-w-6xl relative">
                    {/* Glassmorphism Container */}
                    <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl p-8 md:p-16 shadow-xl">

                        <p className="text-xl md:text-2xl text-center text-gray-800 font-medium leading-relaxed max-w-4xl mx-auto mb-16">
                            Kubernetes Community Days (KCD) are community-organized events that bring
                            together adopters and technologists from open source and cloud native communities.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                            {/* Feature 1: UsersRound */}
                            <div className="bg-white/30 rounded-2xl p-10 flex items-center justify-center md:aspect-square border border-gray-400/20 shadow-sm hover:scale-105 transition-transform">
                                <UsersRound className="w-24 h-24 text-blue-500 fill-blue-200/50" strokeWidth={1.5} />
                            </div>

                            {/* Feature 2: Shield */}
                            <div className="bg-white/30 rounded-2xl p-10 flex items-center justify-center md:aspect-square border border-gray-400/20 shadow-sm hover:scale-105 transition-transform">
                                <Shield className="w-24 h-24 text-green-500 fill-green-200/50" strokeWidth={1.5} />
                            </div>

                            {/* Feature 3: Lightbulb */}
                            <div className="bg-white/30 rounded-2xl p-10 flex items-center justify-center md:aspect-square border border-gray-400/20 shadow-sm hover:scale-105 transition-transform">
                                <Lightbulb className="w-24 h-24 text-sky-400 fill-yellow-200/80" strokeWidth={1.5} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
