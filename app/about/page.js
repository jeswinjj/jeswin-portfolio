"use client";

import ImagePage from "./ImagePage";
import MainPage from "./MainPage";


export default function About() {
  
 
  
  return (
    <section className="relative flex justify-center items-center">
      <div className="flex justify-center items-center w-full">
        
        <div className="w-fit">
          <MainPage />
        </div>
        <div className="w-fit">
         <ImagePage />
        </div>
       
        
      </div>
    </section>
  );
}