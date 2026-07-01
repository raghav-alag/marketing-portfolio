import Image from "next/image";
import Link from "next/link";

export default function ValuePropositionPage() {
  return (
    <main className="min-h-screen bg-[#F7FAFF] py-12">

      <div className="max-w-[1700px] mx-auto px-8">

        {/* Back Button */}

        <Link
          href="/"
          className="
            inline-flex
            items-center
            gap-2
            mb-8
            rounded-full
            border
            border-slate-200
            bg-white
            px-6
            py-3
            font-medium
            text-[#18255A]
            shadow-sm
            hover:shadow-md
            transition
          "
        >
          ← Back to Portfolio
        </Link>

        {/* Image */}

        <div
          className="
            rounded-[28px]
            overflow-hidden
            bg-white
            shadow-2xl
          "
        >
          <Image
            src="/images/value-proposition/value-proposition.png"
            alt="Value Proposition"
            width={4000}
            height={2500}
            priority
            className="w-full h-auto"
          />
        </div>

      </div>

    </main>
  );
}