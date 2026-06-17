import React from "react";
import { RightArrowCTA } from "../icons";

export default function CTAButton({ title, className }: { title: string; className?: string }) {
  return (
    <button className={className || "group flex w-30 md:w-60 lg:w-80 items-center gap-4 rounded-[40px] border border-primary bg-primary px-2 py-3 md:px-4 lg:px-5 lg:py-4 text-black transition-all duration-100 hover:bg-gray-700 hover:text-primary md:text-[1.75rem]"}>
      <span className="mx-auto font-semibold md:mx-0">{title}</span>{" "}
      <RightArrowCTA />
    </button>
  );
}

export const Btn=({title, className}:{title:string, className?: string})=>{
  return(
    // <div className="w-30 md:w-40 lg:w-60 bg-blue-950 text-white px-5 py-4 rounded-full text-center font-semibold cursor-pointer hover:bg-black border border-blue-950 transition-all duration-100">
    <div className={className ? className : "w-30 md:w-60 lg:w-72 bg-blue-950 text-white px-5 py-4 rounded-full text-center font-semibold cursor-pointer hover:bg-black border border-blue-950 transition-all duration-100"}>
      <span>{title}</span>
    </div>
  )
}