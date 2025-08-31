import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Video Background */}
      <video
        src="https://res.cloudinary.com/diroi6tnk/video/upload/v1756381893/Untitled_design_1_1_bhpahu.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Text Content on left, floating directly on video */}
      <div className="absolute top-[18%] md:top-[22%] left-6 md:left-20 max-w-2xl z-10 text-left">
        {/* Main Heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white leading-snug mb-6"
          initial={{ opacity: 0, x: -80, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          YOUR PARTNER FOR <br />
          <span className="text-white">SUCCESS</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-base md:text-lg text-white/90 mb-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          WE ARE NOT JUST OFFERING NETWORK SOLUTIONS. <br />
          WE ARE OFFERING <span className="font-semibold text-white">PERFECTION</span>
        </motion.p>

        {/* Button */}
        <motion.button
          className="bg-white text-[#851A18] px-8 py-3 font-semibold shadow-md hover:scale-105 transition-transform mb-6"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
        >
          Learn More
        </motion.button>

        {/* Extra Text */}
        <motion.h2
          className="text-xl md:text-2xl font-bold text-white mt-6"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
        >
          Our Solutions
        </motion.h2>
      </div>
    </section>
  );
};

export default Hero;
