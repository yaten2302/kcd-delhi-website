import Image from "next/image";

const events = [
    { time: "9:00 AM", title: "Registration & Welcome Coffee", description: "Network with fellow attendees and grab some refreshments" },
    { time: "10:00 AM", title: "Keynote Speech", description: "Opening remarks and vision for KCD Delhi 2026" },
    { time: "11:30 AM", title: "Technical Sessions", description: "Deep dive into Kubernetes and Cloud Native technologies" },
    { time: "1:00 PM", title: "Lunch Break", description: "Enjoy a delicious spread and networking" },
    { time: "2:00 PM", title: "Workshops", description: "Hands-on learning experiences" },
    { time: "4:00 PM", title: "Closing Remarks", description: "Wrap up and community awards" },
];

export default function EventJourney() {
    return (
        <section id="agenda" className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/eventjourney.png"
                    alt="Event Journey Background"
                    fill
                    className="object-cover object-center"
                    quality={100}
                />
            </div>

            {/* Top Fade Gradient */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#EFBB9E] to-transparent z-[5]" />

            {/* Bottom Fade Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#DCA15F] to-transparent z-[5]" />


            {/* Title */}
            <h2 className="text-4xl md:text-6xl font-bold text-black text-center mb-16 md:mb-32 z-10">
                Event Journey
            </h2>

            {/* MOBILE: Vertical Timeline */}
            <div className="md:hidden relative w-full max-w-md mx-auto px-4 z-10 flex flex-col gap-6 pb-20">
                {/* Vertical Line - positioned absolutely from container */}
                <div className="absolute left-[36px] top-0 bottom-0 w-[3px] bg-[#d97757] -translate-x-1/2" />

                {events.map((event, index) => (
                    <div key={index} className="relative flex items-start gap-4 ml-2">
                        {/* Dot - positioned inline with flex */}
                        <div className="relative flex-shrink-0 w-6 h-6 mt-4">
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#d97757] rounded-full z-20 ring-4 ring-[#fae8d9]" />
                        </div>

                        {/* Card */}
                        <div className="flex-1 bg-[#fae8d9] border border-[#e8c9b3] rounded-2xl p-5 text-left shadow-md">
                            <h3 className="font-bold text-gray-900 leading-tight text-lg mb-1">
                                {event.title}
                            </h3>
                            <span className="block text-[#d97757] font-bold text-sm mb-2">
                                {event.time}
                            </span>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {event.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* DESKTOP: Horizontal Timeline */}
            <div className="hidden md:block relative w-full max-w-7xl mx-auto h-[500px] z-10">

                {/* Main Horizontal Line */}
                <div className="absolute left-0 right-0 top-1/2 h-[3px] bg-[#d97757] -translate-y-1/2 z-10" />

                {/* Train - Larger */}
                <div className="absolute left-4 top-1/2 -translate-y-[72%] z-20 w-64 h-40">
                    <Image src="/train.png" alt="Train" fill className="object-contain" />
                </div>

                {/* Timeline Items */}
                <div className="absolute left-72 right-4 top-0 bottom-0 flex justify-between">
                    {events.map((event, index) => {
                        const isAbove = index % 2 === 0;

                        return (
                            <div key={index} className="relative h-full flex items-center" style={{ width: '160px' }}>

                                {/* Dot */}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#d97757] rounded-full z-30" />

                                {/* Vertical Line */}
                                <div
                                    className="absolute left-1/2 -translate-x-1/2 w-[2px] bg-[#d97757] z-20"
                                    style={{
                                        top: isAbove ? 'auto' : '50%',
                                        bottom: isAbove ? '50%' : 'auto',
                                        height: '80px',
                                    }}
                                />

                                {/* Card - Larger */}
                                <div
                                    className="absolute left-1/2 -translate-x-1/2 w-48 z-10"
                                    style={{
                                        top: isAbove ? 'auto' : 'calc(50% + 90px)',
                                        bottom: isAbove ? 'calc(50% + 90px)' : 'auto',
                                    }}
                                >
                                    <div className="bg-[#fae8d9] border border-[#e8c9b3] rounded-2xl p-5 text-center shadow-sm hover:scale-105 transition-transform duration-300">
                                        <h3 className="font-bold text-gray-900 leading-tight text-base mb-1">
                                            {event.title}
                                        </h3>
                                        <span className="block text-[#d97757] font-bold text-sm mb-1">
                                            {event.time}
                                        </span>
                                        <p className="text-gray-600 text-xs leading-relaxed">
                                            {event.description}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
