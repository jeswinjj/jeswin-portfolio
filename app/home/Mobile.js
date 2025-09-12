"use client";
import AccordionItem from "@/components/AccordionItem";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdHand } from "react-icons/io";

const Mobile = () => {
  // track which accordion is open
  const [activeIndex, setActiveIndex] = useState(null);
  const [showHand, setShowHand] = useState(true);

  // Toggle between hand and "Hi" every 2s
    useEffect(() => {
      const interval = setInterval(() => {
        setShowHand((prev) => !prev);
      }, 2000);
      return () => clearInterval(interval);
    }, []);

  // data for multiple accordions
  const data = [
    {
      title: "Full-Stack Web Development",
      items: [
        "Design and development of responsive, accessible web applications using React.js and Next.js",
        "End-to-end project leadership, from concept to deployment on live domains",
        "RESTful API design and implementation for efficient client-server data exchange",
        "State management solutions using Redux for complex application logic",
      ],
    },
    {
      title: "Front-End Engineering & Optimization",
      items: [
        "Building modern, user-friendly interfaces with HTML, CSS, and Tailwind CSS",
        "Website performance optimization (lazy loading, code minification) for faster load times",
        "Responsive design implementation for flawless across desktop, tablet, and mobile",
        "Fixing UI/UX issues like text overflow and element misalignment",
      ],
    },
    {
      title: "Back-End & Security Integration",
      items: [
        "Developing secure authentication workflows with token-based login and session management",
        "Identifying and resolving critical security vulnerabilities to ensure application safety",
        "Building internal tools and portals (e.g., company announcements, admin dashboards)",
        "Database management and efficient SQL querying",
      ],
    },
    {
      title: "Data Analytics & Visualization",
      items: [
        "Data processing and analysis using Python, SQL, and SPSS", 
        "Translating complex data into clear, actionable insights through Power BI dashboards",
        "Leveraging analytical skills to inform development decisions and create data-driven solutions"
      ],
    },
  ];

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        {/* Hero Section */}
        <div className=" h-screen flex flex-col gap-6 w-full items-center justify-center lg:ml-[160px] lg:mr-[140px]">
          <div className="font-heading text-center">
            <div className="font-medium text-2xl md:text-xl lg:text-2xl uppercase">
              Jeswin J J
            </div>
            <div className="font-black text-5xl md:text-4xl lg:text-8xl uppercase">
              Software
            </div>
          </div>

          <div className="w-fit">
            <Image
              src="./images/home/profile-pic.jpg"
              alt="Profile Pic"
              className="w-[200px] h-auto object-cover rounded-xl relative"
              width={2000}
              height={2000}
              priority
            />

            {/* Floating Hand / Hi */}
            {/* <div className="relative flex justify-start items-end"> */}
              <div className="absolute rounded-full bg-primary -ml-10 -mt-20 w-16 h-16 flex justify-center items-center overflow-hidden">
                <AnimatePresence mode="wait">
                  {showHand ? (
                    <motion.div
                      key="hand"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{
                        y: 0,
                        opacity: 1,
                        rotate: [0, 20, -10, 20, 0],
                      }}
                      exit={{ y: 50, opacity: 0 }}
                      transition={{
                        duration: 0.6,
                        rotate: {
                          repeat: Infinity,
                          repeatType: "mirror",
                          duration: 1,
                        },
                      }}
                    >
                      <IoMdHand className="text-white text-4xl" />
                    </motion.div>
                  ) : (
                    <motion.span
                      key="hi"
                      className="text-white text-2xl font-sans font-light"
                      initial={{ y: -50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -50, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      Hi
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
          </div>
          
          <div className="font-heading">
            <div className="font-extrabold text-5xl md:text-4xl lg:text-8xl uppercase">
              Developer
            </div>
            <div className="font-sans font-light mt-4 text-base lg:text-lg text-center">
              Full Stack Developer & <br /> Data Analyst.
            </div>
          </div>
        </div>

        {/* What I Can Do Section */}
        <div className="h-screen font-heading flex w-full items-center gap-10 ">
          <div className="font-heading max-w-[500px]">
            <div className="font-semibold text-4xl uppercase">
              what I can do for you
            </div>
            <div className="font-sans text-base font-light max-w-[350px] mt-5">
              I specialize in turning ideas into fully functional, secure, and performant web platforms that enhance user engagement and streamline business operations.
            </div>

            {/* Accordion List */}
            <div className="flex flex-col mt-12">
              {data.map((section, i) => (
                <AccordionItem
                  key={i}
                  index={i + 1}
                  title={section.title}
                  items={section.items}
                  isOpen={activeIndex === i}
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                />
              ))}
            </div>
          </div>

          {/* <Image
            src="./images/home/profile-back.jpg"
            alt="Profile Pic"
            className="max-w-[300px] h-fit object-cover rounded-xl rotate-6"
            width={2000}
            height={2000}
            priority
          /> */}
        </div>

          {/* About Me */}
          <div className="h-[80vh] items-center flex w-full gap-10">
              <div className="flex flex-col max-w-[800px]">
                  <div className="uppercase font-heading font-semibold text-4xl">About me</div>
                  <div className="font-sans text-base font-light max-w-[350px] mt-5">
                    {"Hi, I'm Jeswin — A Full Stack Developer specializing in modern React and Next.js, building secure, high-performance digital experiences from front-end to back-end."}
                  </div>

                  <div className="flex flex-col gap-4 w-full py-5">
                      <div className="basis-1/3">
                          <div className="flex gap-4 items-end">
                              <span className="font-heading text-4xl font-extrabold text-primary">1+</span>
                              <span className="font-sans font-semibold text-base">Years of Experience</span>
                          </div>
                      </div>
                      <div className="basis-1/3">
                          <div className="flex gap-4 items-end">
                              <span className="font-heading text-4xl font-extrabold text-primary">5+</span>
                              <span className="font-sans font-semibold text-base">Completed Projects</span>
                          </div>
                      </div>
                      <div className="basis-1/3">
                          <div className="flex gap-4 items-end">
                              <span className="font-heading text-4xl font-extrabold text-primary">100%</span>
                              <span className="font-sans font-semibold text-base">Client Satisfaction</span>
                          </div>
                      </div>
                  </div>

                  <div className="flex flex-col w-full gap-6 py-5">
                    <div className="flex gap-2 text-left font-sans">
                      <span className="font-semibold">Phone:</span>
                      <a href="tel:+9196118220021" className="font-light hover:text-primary">
                        +91 96118220021
                      </a>
                    </div>
                    <div className="flex gap-2 text-left font-sans">
                      <span className="font-semibold">Email:</span>
                      <a href="mailto:jeswinjj13@gmail.com" className="font-light hover:text-primary">
                        jeswinjj13@gmail.com
                      </a>
                    </div>
                  </div>


                  <div className="flex gap-5 mb-8">
                    <a href="" className=""><FaLinkedin className="size-8 hover:text-primary"/></a>
                    <a href="" className=""><RiInstagramFill className="size-8 hover:text-primary"/></a>
                    <a href="" className=""><FaFacebook className="size-8 hover:text-primary"/></a>
                  </div>

                  <div className="w-full flex justify-center">
                    <Link href="/about">
                      <button className="w-fit text-2xl border border-primary px-6 py-1 bg-primary text-white rounded-full uppercase font-heading transition-all duration-500 cursor-pointer">
                        My Story
                      </button>
                    </Link>
                  </div>

              </div>
              {/* <Image
              src="./images/home/profile-pic.jpg"
              alt="Profile Pic"
              className="max-w-[300px] h-fit object-cover rounded-xl rotate-6"
              width={2000}
              height={2000}
              priority
              /> */}
          </div>
      </div>
    </div>
  );
};

export default Mobile;
