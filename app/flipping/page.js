"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdHand } from "react-icons/io";

export default function Flipping() {
  const [scrollY, setScrollY] = useState(0);
  const [showHand, setShowHand] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowHand((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const containerTop = containerRef.current.getBoundingClientRect().top;
        const containerHeight = containerRef.current.offsetHeight;
        const scrollProgress = Math.max(
          0,
          Math.min(1, -containerTop / containerHeight)
        );
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Easing functions for smoother animations
  const easeInOutCubic = (t) => {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  // Calculate animation values based on scroll progress
  const getFlipValues = () => {
    if (scrollY < 0.4270783847980998) {
      // First phase: centered to right, rotating to show back
      const progress = scrollY / 0.4270783847980998;
      const easedProgress = easeInOutCubic(progress);

      return {
        rotation: easedProgress * 180, // Rotates from 0° to 180° (showing back)
        translateX: easedProgress * 200, // Moves 200px to the right
        translateY: 0,
        tilt: easedProgress * 15,
        opacityFront: 1,
        opacityBack: 1,
        zIndex: 3,
        scale: 1,
      };
    } else if (scrollY < 0.807125890736342) {
      // Second phase: moving to final position while rotating back to front
      const progress =
        (scrollY - 0.4270783847980998) /
        (0.807125890736342 - 0.4270783847980998);
      const easedProgress = easeInOutCubic(progress);

      return {
        rotation: 180 + easedProgress * 180, // Rotates from 180° to 360° (back to front)
        translateX: 200 + easedProgress * 100, // Moves further right
        translateY: easedProgress * 100, // Moves down
        tilt: 15,
        opacityFront: 1,
        opacityBack: 1,
        zIndex: 2,
        scale: 1,
      };
    } else {
      // Third phase: fixed in corner showing front image
      return {
        rotation: 360, // Front facing
        translateX: 300,
        translateY: 100,
        tilt: 15,
        opacityFront: 1,
        opacityBack: 0,
        zIndex: 2,
        scale: 1,
      };
    }
  };

  const {
    rotation,
    translateX,
    translateY,
    tilt,
    opacityFront,
    opacityBack,
    zIndex,
    scale,
  } = getFlipValues();

  return (
    <div className="min-h-screen">
      <section
        ref={containerRef}
        className="h-[230vh] py-4 flex flex-col items-center justify-start relative"
      >
        <div className="sticky top-1/2 transform -translate-y-1/2 w-full flex justify-center items-center h-0">
          {/* Card container */}
          <div
            className="relative w-[290px] h-[450px] mx-auto"
            style={{
              transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale}) rotateZ(${tilt}deg)`,
              zIndex: zIndex,
              perspective: "1000px",
              transition: "transform 0.1s ease-out",
            }}
          >
            {/* Front of the card */}
            <div
              className="absolute inset-0"
              style={{
                transform: `rotateY(${rotation}deg)`,
                transformStyle: "preserve-3d",
                opacity: opacityFront,
                transition:
                  "transform 0.1s ease-out, opacity 0.1s ease-out",
              }}
            >
              <div
                className="w-full h-full rounded-xl shadow-2xl relative"
                style={{ backfaceVisibility: "hidden" }}
              >
                <Image
                  src="./images/home/profile-pic.jpg"
                  alt="Profile Pic"
                  className="w-full h-full object-cover rounded-xl"
                  width={2000}
                  height={2000}
                  priority
                />
                {scrollY <= 0.4270783847980998 && (
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
                          className="text-white text-4xl"
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
                )}
              </div>
            </div>

            {/* Back of the card */}
            <div
              className="absolute inset-0"
              style={{
                transform: `rotateY(${rotation + 180}deg)`,
                transformStyle: "preserve-3d",
                opacity: opacityBack,
                transition:
                  "transform 0.1s ease-out, opacity 0.1s ease-out",
              }}
            >
              <div
                className="w-full h-full rounded-xl shadow-2xl"
                style={{ backfaceVisibility: "hidden" }}
              >
                <Image
                  src="./images/home/profile-back.jpg"
                  alt="Profile Back"
                  className="w-full h-full object-cover rounded-xl"
                  width={2000}
                  height={2000}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
