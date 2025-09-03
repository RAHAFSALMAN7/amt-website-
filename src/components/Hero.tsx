// Hero.tsx
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden px-6 md:px-20">
      {/* Video Background */}
      <video
        src="https://res.cloudinary.com/diroi6tnk/video/upload/v1756381893/Untitled_design_1_1_bhpahu.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
      />

      {/* Text Content */}
      <div className="absolute top-1/4 md:top-1/3 left-6 md:left-20 max-w-2xl z-10 text-left">
        {/* Main Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-snug sm:leading-snug mb-6"
          initial={{ opacity: 0, x: -80, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          YOUR PARTNER FOR <br />
          <span className="text-white">SUCCESS-</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-sm sm:text-base md:text-lg text-white/90 mb-8 leading-relaxed"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          WE ARE NOT JUST OFFERING NETWORK SOLUTIONS. <br />
          WE ARE OFFERING <span className="font-semibold text-white">PERFECTION</span>
        </motion.p>

        {/* Button */}
        <motion.button
          className="bg-white text-[#851A18] px-6 sm:px-8 py-2 sm:py-3 font-semibold shadow-md hover:scale-105 transition-transform mb-6"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
        >
          Learn More
        </motion.button>

        {/* Extra Text */}
        <motion.h2
          className="text-lg sm:text-xl md:text-2xl font-bold text-white mt-6"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
        >
         </motion.h2>
      </div>
    </section>
  );
};

export default Hero;
