"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {  useRef } from "react";


const ImagePage = () => {
     const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // Adjusted animation values for seamless chain effect
  const image1Y = useTransform(scrollYProgress, [0, 0.33], [0, -400]);
  const image2Y = useTransform(scrollYProgress, [0, 0.33, 0.66], [400, 0, -400]);
  const image3Y = useTransform(scrollYProgress, [0.33, 0.66, 1], [400, 0, -400]);

  return (
    <section className="relative " ref={containerRef}>
        <div className="fixed top-1/2 transform -translate-y-1/2 w-[300px] h-[400px] bg-primary border-2 border-gray-300 rounded-xl overflow-hidden">
        <motion.div 
          className="absolute w-full h-full z-30"
          style={{ y: image1Y }}
        >
          <Image
            src="/images/home/profile-pic.jpg"
            alt="Profile Pic"
            className="w-full h-full object-cover"
            width={300}
            height={400}
            priority
          />
        </motion.div>
        
        <motion.div 
          className="absolute w-full h-full z-20"
          style={{ y: image2Y }}
        >
          <Image
            src="/images/home/profile-back.jpg"
            alt="Skills Illustration"
            className="w-full h-full object-cover"
            width={300}
            height={400}
          />
        </motion.div>
        
        <motion.div 
          className="absolute w-full h-full z-10"
          style={{ y: image3Y }}
        >
          <Image
            src="/images/projects/analyst-laptop.jpg"
            alt="Journey Illustration"
            className="w-full h-full object-cover"
            width={300}
            height={400}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default ImagePage