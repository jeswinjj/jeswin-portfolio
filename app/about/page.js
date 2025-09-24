"use client";

import Contact from "../contact/page";
import DevelopmentApproach from "./DevelopmentApproach";
import ImagePage from "./ImagePage";
import MainPage from "./MainPage";
import { useState, useEffect } from "react";

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setCurrentImageIndex(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative px-5 md:px-10 lg:px-20 flex flex-col items-center">
      <div className="flex max-md:flex-col-reverse w-full gap-10 md:max-w-7xl px-5 md:px-5 lg:px-20">
        {/* Main Content - Scrolls normally */}
        <div className="md:w-1/2">
          <MainPage />
        </div>
        
        {/* Image Gallery - Fixed position with changing images */}
        <div className="md:w-1/2 md:sticky max-md:mt-[200px] md:top-0 md:h-screen flex items-center">
          <ImagePage currentImageIndex={currentImageIndex} />
        </div>
      </div>
      <div className="md:max-w-7xl px-5 md:px-5 lg:px-20">
        <DevelopmentApproach />
      </div>
      <div className="md:max-w-7xl px-5 md:px-5 lg:px-20">
        <Contact />
      </div>
    </section>
  );
}