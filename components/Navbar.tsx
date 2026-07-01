"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaLinkedin,
  FaWhatsapp,
  FaPhoneAlt,
  FaChevronDown,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
        setShowPhone(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-[1450px] mx-auto h-[74px] px-10 flex items-center justify-between">

        {/* Logo */}

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#1E3A8A] flex items-center justify-center">
            <span className="text-white text-xl font-bold">RA</span>
          </div>

          <h1 className="text-[28px] font-bold text-[#16245B]">
            Raghav Alag
          </h1>
        </div>

        {/* Navigation */}

        <nav className="hidden lg:flex gap-14 text-[17px] font-medium text-[#1B1B1B]">
          <a href="#" className="hover:text-[#2563EB] transition">
            Home
          </a>

          <a href="#" className="hover:text-[#2563EB] transition">
            About Me
          </a>

          <a href="#" className="hover:text-[#2563EB] transition">
            My Thinking
          </a>

          <a href="#" className="hover:text-[#2563EB] transition">
            Case Studies
          </a>

          <a href="#" className="hover:text-[#2563EB] transition">
            Experience
          </a>

          <a href="#" className="hover:text-[#2563EB] transition">
            Insights
          </a>
        </nav>

        {/* Connect Dropdown */}

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => {
              setOpen(!open);
              setShowPhone(false);
            }}
            className="
              flex
              items-center
              gap-2
              px-8
              py-3
              rounded-2xl
              bg-[#2563EB]
              text-white
              font-semibold
              shadow-lg
              hover:bg-[#1D4ED8]
              hover:scale-105
              transition-all
              duration-300
            "
          >
            Let's Connect

            <FaChevronDown
              size={14}
              className={`transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>

          {open && (
            <div
              className="
                absolute
                right-0
                mt-3
                w-[190px]
                rounded-2xl
                bg-white
                border
                border-slate-200
                shadow-2xl
                overflow-hidden
              "
            >

              <a
                href="https://www.linkedin.com/in/raghav-alag-52075b280/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  hover:bg-blue-50
                  transition
                "
              >
                <FaLinkedin
                  size={18}
                  className="text-[#0A66C2]"
                />

                <span className="text-[15px] font-medium text-slate-700">
                  LinkedIn
                </span>
              </a>

              <a
                href="mailto:raghavalag2325@gmail.com"
                className="
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  hover:bg-red-50
                  transition
                "
              >
                <MdEmail
                  size={19}
                  className="text-red-500"
                />

                <span className="text-[15px] font-medium text-slate-700">
                  Gmail
                </span>
              </a>

              <a
                href="https://wa.me/919896416812"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  hover:bg-green-50
                  transition
                "
              >
                <FaWhatsapp
                  size={18}
                  className="text-green-500"
                />

                <span className="text-[15px] font-medium text-slate-700">
                  WhatsApp
                </span>
              </a>

              <button
                onClick={() => setShowPhone(!showPhone)}
                className="
                  w-full
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  hover:bg-slate-50
                  transition
                  text-left
                "
              >
                <FaPhoneAlt
                  size={16}
                  className="text-[#2563EB]"
                />

                <span className="text-[15px] font-medium text-slate-700">
                  Call
                </span>
              </button>

              {showPhone && (
                <div className="border-t bg-slate-50 px-4 py-3">

                  <div className="flex items-center gap-2">

                    <FaPhoneAlt
                      size={14}
                      className="text-[#2563EB]"
                    />

                    <span className="text-[14px] font-semibold text-[#16245B]">
                      +91 9896416812
                    </span>

                  </div>

                </div>
              )}
            </div>
          )}
        </div>

      </div>
    </header>
  );
}