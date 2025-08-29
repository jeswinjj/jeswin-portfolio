"use client";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [navItem, setNavItem] = useState("");
  const [contentOne, setContentOne] = useState("block");
  const [contentTwo, setContentTwo] = useState("hidden");
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll) {
        // Scrolling DOWN
        setContentOne("hidden");
        setContentTwo("block");
        setNavItem("!gap-1");
      } else if (currentScroll < lastScroll) {
        // Scrolling UP
        setContentOne("block");
        setContentTwo("hidden");
        setNavItem("");
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const links = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Experience", href: "experience" },
    { name: "Projects", href: "projects" },
    // { name: "Contact", href: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex justify-center py-5 items-center">
        <div
          className={`flex justify-center items-center px-3 p-2 gap-10 border border-gray-200 shadow-sm border-opacity-30 rounded-full transition-all duration-500 bg-white/80  text-black ${navItem}`}
        >
          <h1 className="text-xl font-light">
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </h1>

          {/* Links (visible when scrolling up) */}
          <div className={`space-x-6 ${contentOne}`}>
            {links.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.href}
                smooth={true}
                duration={600}
                spy={true}
                offset={-70} 
                className="cursor-pointer transition-colors text-black font-light"
                style={{ color: "black" }}
                onMouseEnter={(e) => (e.target.style.color = "var(--accent)")}
                onMouseLeave={(e) =>
                  (e.target.style.color = "black")
                }
              >
                {link.name}
              </ScrollLink>
            ))}
            <button className="relative px-6 py-1 rounded-full bg-[#303030] text-white overflow-hidden group">
  <span className="relative z-10">Contact</span>
  <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary 
                   translate-x-[-100%] group-hover:translate-x-0 
                   transition-transform duration-500 ease-out"></span>
</button>

          </div>
          

          {/* Hire Me (visible when scrolling down) */}
         <div className={`flex items-center justify-center gap-4 px-2 ${contentTwo}`}>
            <a>Available for work</a>
            <div className="relative flex items-center justify-center">
                {/* Green dot */}
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>

                {/* Ripple effect */}
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping-custom"></span>
            </div>
        </div>


        </div>
      </div>
    </nav>
  );
}
