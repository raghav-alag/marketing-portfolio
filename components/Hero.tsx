import HeroBadge from "./HeroBadge";
import HeroContent from "./HeroContent";
import HeroButtons from "./HeroButtons";
import HeroIllustration from "./HeroIllustration";

export default function Hero() {
  return (
    <section className="bg-[#F5F8FF] pb-24">
      <div className="max-w-[1480px] mx-auto px-8 lg:px-12">

        <div className="flex items-start justify-between gap-10 pt-6">

          {/* LEFT SIDE */}

          <div className="w-[510px] shrink-0">

            <HeroBadge />

            <div className="mt-6">
              <HeroContent />
            </div>

            <div className="mt-8">
              <HeroButtons />
            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="flex-1 relative h-[620px]">

            <HeroIllustration />

          </div>

        </div>

      </div>
    </section>
  );
}