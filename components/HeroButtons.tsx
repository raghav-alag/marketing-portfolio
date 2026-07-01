import Link from "next/link";

export default function HeroButtons() {
  return (
    <div className="flex gap-4 items-center pt-2">

      {/* Value Proposition */}

      <Link
        href="/value-proposition"
        className="
          px-8
          py-3.5
          bg-[#2563EB]
          text-white
          font-semibold
          rounded-2xl
          shadow-lg
          hover:bg-[#1D4ED8]
          hover:shadow-xl
          hover:-translate-y-0.5
          transition-all
          duration-300
        "
      >
        Value Proposition
      </Link>

      {/* Watch My Story */}

      <button
        className="
          px-8
          py-3.5
          border-2
          border-slate-300
          text-slate-700
          font-semibold
          rounded-2xl
          hover:bg-slate-50
          hover:-translate-y-0.5
          transition-all
          duration-300
        "
      >
        Watch My Story
      </button>

    </div>
  );
}