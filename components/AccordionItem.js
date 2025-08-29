"use client";

import React from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";

export default function AccordionItem({ index, title, items, isOpen, onClick }) {
  return (
    <div className="flex flex-col border-b border-gray-300">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full py-2"
      >
        <div className="flex text-2xl gap-2">
          <span>{index}.</span>
          <span className="uppercase">{title}</span>
        </div>
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>

      {isOpen && (
        <ul className="flex flex-col font-sans text-sm font-light mt-2 mb-3 gap-3">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <IoMdCheckmark className="text-green-500 border border-gray-400 rounded-full" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}