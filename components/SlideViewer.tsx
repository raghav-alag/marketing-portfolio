"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TOTAL_SLIDES = 51;

export default function SlideViewer() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const nextSlide = () => {
    if (currentSlide < TOTAL_SLIDES) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [currentSlide]);

  return (
    <div className="min-h-screen bg-[#0F172A] flex flex-col">

      {/* Header */}

      <div className="sticky top-0 z-50 bg-[#111827] border-b border-slate-700">

        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

          <div>

            <h1 className="text-white text-3xl font-bold">
              Titan Eye+ Expansion Strategy
            </h1>

            <p className="text-slate-400 mt-1">
              Mumbai & Surat Market Analysis
            </p>

          </div>

          <div className="text-white text-xl font-semibold">

            {currentSlide} / {TOTAL_SLIDES}

          </div>

        </div>

      </div>

      {/* Slide */}

      <div className="flex-1 flex justify-center items-center p-10">

        <div className="relative">

          <Image
            src={`/images/case-studies/titan/Slide${currentSlide}.png`}
            alt={`Slide ${currentSlide}`}
            width={1800}
            height={1000}
            priority
            className="
              rounded-2xl
              shadow-2xl
              object-contain
              max-h-[82vh]
              w-auto
              transition-all
              duration-300
            "
          />

        </div>

      </div>

      {/* Bottom Controls */}

      <div className="sticky bottom-0 bg-[#111827] border-t border-slate-700">

        <div className="max-w-7xl mx-auto py-6 flex justify-center gap-6">

          <button
            onClick={prevSlide}
            disabled={currentSlide === 1}
            className="
              flex items-center
              gap-2
              px-6
              py-3
              rounded-xl
              bg-white
              hover:bg-slate-200
              disabled:opacity-40
              disabled:cursor-not-allowed
              transition
            "
          >
            <ChevronLeft size={22} />
            Previous
          </button>

          <button
            onClick={nextSlide}
            disabled={currentSlide === TOTAL_SLIDES}
            className="
              flex items-center
              gap-2
              px-6
              py-3
              rounded-xl
              bg-blue-600
              text-white
              hover:bg-blue-700
              disabled:opacity-40
              disabled:cursor-not-allowed
              transition
            "
          >
            Next
            <ChevronRight size={22} />
          </button>

        </div>

      </div>

    </div>
  );
}