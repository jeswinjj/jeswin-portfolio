"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll) {
        // scrolling down
        setIsScrollingDown(true);
      } else if (currentScroll < lastScroll) {
        // scrolling up
        setIsScrollingDown(false);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    // { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex justify-center py-5 items-center">
        {/* Desktop navbar */}
        <div
          className={`hidden md:flex flex-row justify-center items-center px-3 p-2 gap-10 border border-gray-200 shadow-sm border-opacity-30 rounded-full transition-all duration-500 bg-white/80 text-black ${
            isScrollingDown ? "!gap-1" : ""
          }`}
        >
          {/* Logo */}
          <h1 className="text-xl font-light">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </h1>

          {/* Links (scroll up) */}
          {!isScrollingDown && (
            <div className="space-x-6">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="cursor-pointer transition-colors text-black font-light hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}

              <Link href="#contact">
                <button className="relative px-6 py-1 rounded-full bg-[#303030] text-white overflow-hidden group">
                  <span className="relative z-10">Contact</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary 
                                  -translate-x-full group-hover:translate-x-0 
                                  transition-transform duration-500 ease-out"></span>
                </button>
              </Link>
            </div>
          )}

          {/* Hire Me (scroll down) */}
          {isScrollingDown && (
           <Link href="#contact">
            <div className="flex items-center justify-center gap-4 px-2">
              <span>Available for work</span>
              <div className="relative flex items-center justify-center w-5 h-5">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
              </div>
            </div>
            </Link>
          )}
        </div>

        {/* Mobile navbar */}
        <div
          className={`md:hidden block flex flex-col justify-center items-center px-3 p-2 gap-2 border border-gray-200 shadow-sm border-opacity-30 transition-all duration-500 bg-white/80 text-black ${
            isMenuOpen
              ? "h-auto rounded-3xl w-[250px]"
              : "h-full rounded-3xl"
          }`}
        >
          {/* Top row */}
          <div className="flex justify-between gap-3 items-center w-full px-2">
            <h1 className="text-xl font-light">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </h1>

            {!isMenuOpen && (
              <div className="flex items-center justify-center gap-2 px-2">
                <span className="text-base">Available for work</span>
                <div className="relative flex items-center justify-center w-5 h-5">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
                </div>
              </div>
            )}

            <button
              className="text-xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <IoMdClose /> : <RxHamburgerMenu />}
            </button>
          </div>

          {/* Mobile links */}
          {isMenuOpen && (
            <div className="flex flex-col items-center w-full py-2 space-y-3">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="cursor-pointer transition-colors text-black font-light hover:text-primary py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <button className="relative px-6 py-1 rounded-full bg-[#303030] text-white overflow-hidden group mt-2">
                  <span className="relative z-10">Contact</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary 
                                    -translate-x-full group-hover:translate-x-0 
                                    transition-transform duration-500 ease-out"></span>
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
