"use client";

import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

export default function AccordionItem({ index, title, items, isOpen, onClick }) {
  return (
    <div className="flex flex-col border-b border-gray-300">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full py-2"
      >
        <div className="flex text-2xl gap-2">
          <span>{index}.</span>
          <span className="uppercase text-left">{title}</span>
        </div>
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden flex flex-col font-sans text-sm font-light mt-2 mb-3 gap-3"
          >
            {items.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <IoMdCheckmark className="text-primary border border-gray-400 rounded-full" />
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
