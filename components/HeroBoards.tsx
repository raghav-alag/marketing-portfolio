import Link from "next/link";

const boards = [
  {
    icon: "🏅",
    title: "Gold Medalist",
    subtitle: "MBA - XIMB (Rank 9)",
  },
  {
    icon: "🥇",
    title: "Lean Six Sigma",
    subtitle: "Green Belt Certified",
    link: "/certificates/lean-six-sigma",
  },
  {
    icon: "📈",
    title: "Bloomberg Market",
    subtitle: "Concepts Certified",
    link: "/certificates/bloomberg",
  },
  {
    icon: "📋",
    title: "PMP® Certified",
    subtitle: "Project Management",
    link: "https://www.coursera.org/account/accomplishments/specialization/ZU015ZH6F62P?utm_source=android&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n",
    external: true,
  },
];

export default function HeroBoards() {
  return (
    <div className="flex flex-col gap-4">
      {boards.map((board) => {
        const BoardCard = (
          <div
            className="
              w-[300px]
              h-[78px]
              rounded-[18px]
              bg-gradient-to-b
              from-[#84522C]
              to-[#6D4223]
              shadow-lg
              border
              border-[#5A361C]
              px-5
              flex
              items-center
              gap-4
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-2xl
              hover:scale-[1.02]
              cursor-pointer
            "
          >
            <div className="text-[30px] flex-shrink-0">
              {board.icon}
            </div>

            <div>
              <h3 className="text-white text-[16px] font-semibold leading-5">
                {board.title}
              </h3>

              <p className="text-white/80 text-[14px] leading-5">
                {board.subtitle}
              </p>
            </div>
          </div>
        );

        if (board.external) {
          return (
            <a
              key={board.title}
              href={board.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {BoardCard}
            </a>
          );
        }

        if (board.link) {
          return (
            <Link
              key={board.title}
              href={board.link}
              className="block"
            >
              {BoardCard}
            </Link>
          );
        }

        return (
          <div key={board.title}>
            {BoardCard}
          </div>
        );
      })}
    </div>
  );
}