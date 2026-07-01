const impacts = [
  {
    title: "Impact\nThat Matters",
    isHeading: true,
  },
  {
    icon: "🤝",
    title: "€11M Deal",
    subtitle:
      "Secured an international banking client project deploying 48 employees",
  },
  {
    icon: "👨‍🏫",
    title: "Training of 30+ resources in UBS & eClerx, UK",
    subtitle:
      "Trained offshore teams across Singapore & UK on enhanced due diligence for FI's",
  },
  {
    icon: "👓",
    title: "Market Growth Strategy - Titan Eye+",
    subtitle:
      "Built an automated process map and forecasting tool for retail expansion",
  },
  {
    icon: "🚀",
    title: "Launch of Flipkart Minutes",
    subtitle:
      "Designed GTM strategy and expansion plan fora Quick Commerce platform",
  },
  {
    icon: "🏆",
    title: "India's Top 50 Most Hirable Talent",
    subtitle:
      "Flipkart Most Hirable Talent Award Winner 2024",
  },
  {
    icon: "🥇",
    title: "National Runners-Up",
    subtitle:
      "Flipkart Wired 8.0 & Mondelez International Case Competitions",
  },
];

export default function ImpactStrip() {
  return (
    <section className="relative -mt-8 z-20 px-8">
      <div className="max-w-[1800px] mx-auto bg-white rounded-[32px] shadow-lg border border-slate-100 overflow-hidden">

        <div className="grid grid-cols-7">

          {impacts.map((item, index) => (

            <div
              key={item.title}
              className={`flex flex-col justify-center px-5 py-5 ${
                index !== impacts.length - 1
                  ? "border-r border-slate-100"
                  : ""
              }`}
            >

              {/* First Heading Column */}

              {"isHeading" in item ? (
                <>
                  <h2 className="text-[18px] font-bold text-[#18255A] leading-tight whitespace-pre-line">
                    {item.title}
                  </h2>

                  <div className="mt-4 w-12 h-[3px] rounded-full bg-green-500"></div>
                </>
              ) : (
                <>
                  <div className="text-[26px] mb-2">
                    {item.icon}
                  </div>

                  <h3 className="text-[15px] font-semibold text-[#18255A] leading-5">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[12px] leading-5 text-slate-500">
                    {item.subtitle}
                  </p>
                </>
              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}