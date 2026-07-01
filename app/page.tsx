import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImpactStrip from "@/components/ImpactStrip";
import FeaturedSection from "@/components/FeaturedSection";
import ExpertiseSection from "@/components/ExpertiseSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F5F8FF]">

        <Hero />

        <ImpactStrip />

        <FeaturedSection />

        <ExpertiseSection />

      </main>
    </>
  );
}