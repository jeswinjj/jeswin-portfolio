"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdHand } from "react-icons/io";

export default function Contact() {
  const [showHand, setShowHand] = useState(true);

  // Toggle between hand and "Hi" every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setShowHand((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex py-10">
      <div className="flex gap-20 justify-center items-center relative">
        {/* Profile Pic */}
        <div className="w-1/2 flex justify-end">
          <div className="w-fit">
            <Image
              src="./images/home/profile-pic.jpg"
              alt="Profile Pic"
              className="w-[300px] h-auto object-cover rounded-xl relative"
              width={2000}
              height={2000}
              priority
            />

            {/* Floating Hand / Hi */}
            {/* <div className="relative flex justify-start items-end"> */}
              <div className="absolute rounded-full bg-primary -ml-10 -mt-10 w-20 h-20 flex justify-center items-center overflow-hidden">
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
        </div>

        {/* Text Content */}
        <div>
          <div className="uppercase font-heading font-semibold text-lg md:text-3xl lg:text-5xl mb-6">
            {"Let's work together"}
          </div>
          <div className="text-lg font-light font-sans">
            {`Let’s build something impactful together—whether it’s your brand, your website, or your next big idea.`}
          </div>

          <div>
            <form className="flex flex-col gap-4 w-full max-w-md py-10">
              {/* Name */}
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-1 text-sm text-primary font-sans font-light">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="border border-gray-100 rounded-3xl font-sans font-light text-sm bg-[#f5f5f5] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-1 text-sm text-primary font-sans font-light">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  className="border border-gray-100 rounded-3xl font-sans font-light text-sm bg-[#f5f5f5] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

                {/* Message */}
                <div className="flex flex-col">
                  <label htmlFor="message" className="mb-1 text-sm text-primary font-sans font-light">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Write your message..."
                    className="border border-gray-100 rounded-3xl font-sans font-light text-sm bg-[#f5f5f5] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-white border border-primary hover:bg-primary text-primary hover:text-white rounded-full text-xl font-heading w-fit uppercase font-medium transition-all duration-300 px-4 py-1"
                >
                  Submit
                </button>
              </form>
            </div>

        </div>
      </div>
    </section>
  );
}
