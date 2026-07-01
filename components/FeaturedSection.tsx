import Image from "next/image";
import Link from "next/link";

const studies = [
  {
    tag: "RETAIL",
    title: "Identifying Market Growth Opportunities for Titan Eye+",
    description:
      "Building a standard process map and sales forecasting tool to identify profitable store locations across Surat & Mumbai.",
    image: "/images/case-studies/titan-eye.png",
    link: "/case-studies/titan",
  },
  {
    tag: "QUICK COMMERCE",
    title: "Go-to-Market Strategy for Flipkart Minutes",
    description:
      "Designing GTM strategy, positioning and phased expansion roadmap for launching a quick commerce platform in three key cities.",
    image: "/images/case-studies/FLIPKART-12-8-2025.jpg",
    link: "/case-studies/flipkart",
  },
  {
    tag: "FMCG",
    title: "OOH FMCG Market Entry Strategy for Mondelez International",
    description:
      "Identifying the feasibility of entering the untapped HoReCa segment for Mondelez International with existing SKUs.",
    image: "/images/case-studies/mondelez.jpg",
    link: "/case-studies/mondelez",
  },
];

export default function FeaturedSection() {
  return (
    <section className="max-w-[1500px] mx-auto mt-10 px-8">

      {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-[32px] font-bold text-[#18255A]">
          Featured Case Studies
        </h2>

        <Link
          href="#"
          className="text-[#2563EB] font-semibold hover:underline"
        >
          View All →
        </Link>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-3 gap-7">

        {studies.map((study) => (

          <div
            key={study.title}
            className="bg-white rounded-[28px] overflow-hidden border border-slate-100 shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
          >

            {/* Image */}

            <div className="relative h-[230px] overflow-hidden">

              <Image
                src={study.image}
                alt={study.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />

              <span className="absolute top-5 left-5 bg-white rounded-full px-4 py-1 text-xs font-semibold text-[#18255A] shadow">
                {study.tag}
              </span>

            </div>

            {/* Content */}

            <div className="p-7 flex flex-col h-[290px]">

              <h3 className="text-[24px] font-bold text-[#18255A] leading-snug">
                {study.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-7 flex-grow">
                {study.description}
              </p>

              <Link
                href={study.link}
                className="inline-flex items-center gap-2 mt-7 w-fit text-[#2563EB] font-semibold hover:text-blue-700 transition-all hover:gap-3"
              >
                View Case Study →
              </Link>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}