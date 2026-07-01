import Link from "next/link";
import {
  Search,
  Building2,
  Users,
  BarChart3,
  Presentation,
} from "lucide-react";

const expertise = [
  {
    icon: Search,
    title: "GTM Strategy & Market Research",
  },
  {
    icon: Building2,
    title: "Client Onboarding, AML, KYC & Enhanced Due Diligence",
  },
  {
    icon: Users,
    title: "Team Leadership & Stakeholder Management",
  },
  {
    icon: BarChart3,
    title: "Data Analysis using Power BI, Tableau & SQL",
  },
  {
    icon: Presentation,
    title: "Dashboard Management & Presentation",
  },
];

export default function ExpertiseSection() {
  return (
    <section className="max-w-[1500px] mx-auto mt-8 px-8 pb-16">

      <div className="bg-white rounded-[28px] border border-slate-100 shadow-lg">

        {/* Header */}

        <div className="flex justify-between items-center px-7 py-5">

          <h2 className="text-[28px] font-bold text-[#18255A]">
            Areas of Expertise
          </h2>

          <Link
            href="#"
            className="text-[#2563EB] text-sm font-semibold hover:underline"
          >
            More About Me →
          </Link>

        </div>

        {/* Expertise Grid */}

        <div className="grid grid-cols-3 gap-x-8 gap-y-6 px-7 pb-6">

          {expertise.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="flex items-center gap-3"
              >

                <div
                  className="
                    w-11
                    h-11
                    rounded-full
                    border
                    border-blue-100
                    bg-blue-50
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >

                  <Icon
                    size={21}
                    strokeWidth={2}
                    className="text-[#1D4ED8]"
                  />

                </div>

                <p className="text-[15px] leading-6 font-medium text-[#18255A]">
                  {item.title}
                </p>

              </div>

            );

          })}

        </div>

        {/* Quote */}

        <div className="mx-6 mb-6 rounded-2xl bg-[#F7FBFF] px-5 py-4 flex items-center gap-4">

          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#DCEEFF] to-[#E7F9E9] flex items-center justify-center text-3xl">
            🌄
          </div>

          <p className="text-[15px] text-[#18255A] font-medium leading-6">
            I believe the strongest strategies are built at the intersection of
            data, people and purpose.
          </p>

        </div>

      </div>

    </section>
  );
}