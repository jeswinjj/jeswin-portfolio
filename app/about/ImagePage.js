"use client";
import Image from 'next/image';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImagePage = ({ currentImageIndex }) => {
  const images = [
    {
      src: "./images/home/profile-pic.jpg",
      alt: "first image"
    },
    {
      src: "./images/home/profile-back.jpg",
      alt: "second image"
    },
    {
      src: "./images/projects/image3.avif",
      alt: "third image"
    },
    {
      src: "./images/projects/image4.avif",
      alt: "Fourth image"
    }
  ];

  return (
    <div className="relative w-full h-96 flex justify-center items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.8, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex justify-center items-center"
        >
          <div className="border-2 border-gray-200 rounded-lg overflow-hidden shadow-lg h-[500px]">
            <Image
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="object-cover h-full w-full"
              width={400}
              height={400}
              priority={currentImageIndex === 0}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ImagePage;