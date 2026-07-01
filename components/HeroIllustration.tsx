import Image from "next/image";
import HeroBoards from "./HeroBoards";

export default function HeroIllustration() {
  return (
    <div className="relative w-full h-full">

      {/* Background Landscape */}

      <div
        className="
          absolute
          inset-0
          rounded-[42px]
          overflow-hidden
          z-0
        "
      >
        <Image
          src="/images/hero/hero-background.png"
          alt="Landscape Background"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Soft blue overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-[#DFF3FF]/20
            via-transparent
            to-[#EAF9E8]/10
          "
        />

        {/* Left fade for seamless transition */}

        <div
          className="
            absolute
            left-0
            top-0
            bottom-0
            w-[25%]
            bg-gradient-to-r
            from-[#F5F8FF]
            via-[#F5F8FF]/40
            to-transparent
          "
        />
      </div>

      {/* Avatar */}

      <div
        className="
          absolute
          bottom-0
          left-[46%]
          -translate-x-1/2
          z-20
        "
      >
        <Image
          src="/images/hero/Avatar_RaghavAlag.png"
          alt="Raghav Alag"
          width={540}
          height={700}
          priority
          className="
            w-[470px]
            h-auto
            object-contain
            drop-shadow-[0_30px_45px_rgba(0,0,0,0.22)]
            select-none
          "
        />
      </div>

      {/* Achievement Boards */}

      <div
        className="
          absolute
          top-8
          right-8
          z-30
        "
      >
        <HeroBoards />
      </div>

    </div>
  );
}