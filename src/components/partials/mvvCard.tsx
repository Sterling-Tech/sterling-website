"use client"; // Required if using Next.js App Router

import React from "react";
import { motion, Variants } from "framer-motion";

// 1. Define the Props Type for Icons
interface IconProps extends React.ComponentPropsWithoutRef<"svg"> {
  className?: string;
}

// 2. Icon Components
const MissionIcon = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <circle cx="12" cy="11" r="3" />
  </svg>
);

const VisionIcon = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ValuesIcon = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

// 3. Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

// 4. Main Component
export default function MissionVisionValues(): JSX.Element {
  return (
    <section className="relative py-28 overflow-hidden bg-white">
      {/* 🔥 Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-70" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* 🧊 Glassmorphism Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="backdrop-blur-xl bg-white/60 border border-white/40 shadow-2xl rounded-[40px] p-8 md:p-16"
        >
          <div className="flex flex-col md:flex-row items-stretch justify-between gap-12">
            
            {/* MISSION */}
            <motion.div variants={itemVariants} whileHover={{ y: -8 }} className="flex flex-col items-center text-center flex-1 group">
              <div className="relative mb-8">
                <span className="absolute inset-0 rounded-full bg-blue-400/20 animate-ping" />
                <div className="relative w-24 h-24 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 shadow-inner">
                  <MissionIcon className="w-10 h-10 transition-transform group-hover:scale-110" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To empower businesses with innovative, scalable, and secure technology solutions that drive measurable growth.
              </p>
            </motion.div>

            {/* Divider */}
            <div className="hidden md:block w-px self-center h-48 bg-gradient-to-b from-transparent via-slate-200 to-transparent" />

            {/* VISION */}
            <motion.div variants={itemVariants} whileHover={{ y: -8 }} className="flex flex-col items-center text-center flex-1 group">
              <div className="relative mb-8">
                <span className="absolute inset-0 rounded-full bg-purple-400/20 animate-ping" />
                <div className="relative w-24 h-24 flex items-center justify-center rounded-full bg-purple-50 text-purple-600 shadow-inner">
                  <VisionIcon className="w-10 h-10 transition-transform group-hover:scale-110" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To become a leading technology partner delivering world-class IT consulting and software solutions across Africa.
              </p>
            </motion.div>

            {/* Divider */}
            <div className="hidden md:block w-px self-center h-48 bg-gradient-to-b from-transparent via-slate-200 to-transparent" />

            {/* VALUES */}
            <motion.div variants={itemVariants} whileHover={{ y: -8 }} className="flex flex-col items-center text-center flex-1 group">
              <div className="relative mb-8">
                <span className="absolute inset-0 rounded-full bg-pink-400/20 animate-ping" />
                <div className="relative w-24 h-24 flex items-center justify-center rounded-full bg-pink-50 text-pink-600 shadow-inner">
                  <ValuesIcon className="w-10 h-10 transition-transform group-hover:scale-110" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Values</h3>
              <p className="text-slate-600 leading-relaxed">
                Integrity, innovation, collaboration, and excellence guide everything we design, build, and deliver.
              </p>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}