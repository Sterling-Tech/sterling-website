import React from "react";
import { motion } from "framer-motion";
import { MissionIcon, VisionIcon, ValuesIcon } from "@/components/icons";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function MissionVisionValues() {
  return (
    <section className="relative py-28 overflow-hidden">

      {/* 🔥 Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-100 to-blue-100"></div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* 🧊 Glassmorphism Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="backdrop-blur-xl bg-white/60 border border-white/40 shadow-2xl rounded-[40px] p-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">

            {/* ================= MISSION ================= */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center flex-1 transition"
            >
              {/* Animated Pulse Icon */}
              <div className="relative mb-6">
                <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping"></span>
                <div className="relative w-24 h-24 flex items-center justify-center rounded-full bg-primary/10 text-primary shadow-md">
                  <MissionIcon className="w-10 h-10" />
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                Our Mission
              </h3>

              <p className="text-slate-600 leading-relaxed max-w-sm">
                To empower businesses with innovative, scalable, and secure
                technology solutions that drive measurable growth.
              </p>
            </motion.div>

            {/* Divider */}
            <div className="hidden md:block w-px h-40 bg-white/40"></div>

            {/* ================= VISION ================= */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center flex-1 transition"
            >
              <div className="relative mb-6">
                <span className="absolute inset-0 rounded-full bg-purple-300/30 animate-ping"></span>
                <div className="relative w-24 h-24 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 shadow-md">
                  <VisionIcon className="w-10 h-10" />
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                Our Vision
              </h3>

              <p className="text-slate-600 leading-relaxed max-w-sm">
                To become a leading technology partner delivering world-class
                IT consulting and software solutions across Africa.
              </p>
            </motion.div>

            {/* Divider */}
            <div className="hidden md:block w-px h-40 bg-white/40"></div>

            {/* ================= VALUES ================= */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center flex-1 transition"
            >
              <div className="relative mb-6">
                <span className="absolute inset-0 rounded-full bg-blue-300/30 animate-ping"></span>
                <div className="relative w-24 h-24 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 shadow-md">
                  <ValuesIcon className="w-10 h-10" />
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                Our Values
              </h3>

              <p className="text-slate-600 leading-relaxed max-w-sm">
                Integrity, innovation, collaboration, and excellence guide
                everything we design, build, and deliver.
              </p>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}