import Image from "next/image";

const events = [
  {
    title: "Registrations",
    description:
      "Get Started for the day, grab your badge and enjoy some coffee and let people know you're here!",
  },
  {
    title: "Keynote",
    description: "Keynote & Opening remarks and vision for KCD Delhi 2026",
  },
  {
    title: "Breakfast/Coffee",
    description: "Enjoy morning refreshments and networking",
  },
  {
    title: "Parallel Technical Sessions/Workshops",
    description: "Deep dive into Kubernetes and Cloud Native technologies",
  },
  {
    title: "Lunch",
    description: "Enjoy a delicious food, meet with amazing people",
  },
  {
    title: "Parallel Technical Sessions/Workshops",
    description: "Hands-on learning experiences and advanced sessions",
  },
  {
    title: "High Tea and Snacks",
    description: "Afternoon refreshments and community networking",
  },
  { title: "Closing Remarks", description: "Wrap up and community awards" },
];

export default function EventJourney() {
  return (
    <section
      id="agenda"
      className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/event-timeline.png"
          alt="Event Journey Background"
          fill
          quality={100}
        />
      </div>

      <h2 className="text-4xl md:text-6xl font-bold text-[#D3472A] text-center mb-16 md:mb-32 z-10 text-shadow-lg/20">
        Event Timeline
      </h2>

      <div className="md:hidden relative w-full max-w-md mx-auto px-4 z-10 flex flex-col gap-6 pb-20">
        <div className="absolute left-9 top-0 bottom-0 w-[3px] bg-[#d97757] -translate-x-1/2" />

        {events.map((event, index) => (
          <div key={index} className="relative flex items-start gap-4 ml-2">
            <div className="relative shrink-0 w-6 h-6 mt-4">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#d97757] rounded-full z-20 ring-4 ring-[#fae8d9]" />
            </div>

            <div className="flex-1 bg-[#fae8d9] border border-[#e8c9b3] rounded-2xl p-5 text-left shadow-md">
              <h3 className="font-bold text-gray-900 leading-tight text-lg mb-2">
                {event.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden md:block relative w-full max-w-7xl mx-auto h-[500px] z-10">
        <div className="absolute left-0 right-0 top-1/2 h-[3px] bg-[#d97757] -translate-y-1/2 z-10" />

        <div className="absolute left-72 right-4 top-0 bottom-0 flex justify-between">
          {events.map((event, index) => {
            const isAbove = index % 2 === 0;

            return (
              <div
                key={index}
                className="relative h-full flex items-center"
                style={{ width: "160px" }}
              >
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#d97757] rounded-full z-30" />

                <div
                  className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-[#d97757] z-20"
                  style={{
                    top: isAbove ? "auto" : "50%",
                    bottom: isAbove ? "50%" : "auto",
                    height: "80px",
                  }}
                />

                <div
                  className="absolute left-1/2 -translate-x-1/2 w-48 z-10"
                  style={{
                    top: isAbove ? "auto" : "calc(50% + 90px)",
                    bottom: isAbove ? "calc(50% + 90px)" : "auto",
                  }}
                >
                  <div className="bg-[#fae8d9] border border-[#e8c9b3] rounded-2xl p-5 text-center shadow-sm hover:scale-105 transition-transform duration-300">
                    <h3 className="font-bold text-gray-900 leading-tight text-base mb-2">
                      {event.title}
                    </h3>
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
