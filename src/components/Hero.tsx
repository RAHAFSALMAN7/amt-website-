// Hero.tsx
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[80vh] md:min-h-screen overflow-hidden px-4 sm:px-6 md:px-20">
      {/* Video Background */}
      <video
        src="https://res.cloudinary.com/diroi6tnk/video/upload/v1756381893/Untitled_design_1_1_bhpahu.mp4"
        poster="https://res.cloudinary.com/diroi6tnk/image/upload/v1756381893/hero-mobile.jpg"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover md:object-cover object-center"
        style={{
          objectFit: window.innerWidth < 768 ? "contain" : "cover",
        }}
      />

      {/* Overlay لتفتيح النص */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Text Content */}
      <div className="absolute top-1/4 md:top-1/3 left-4 sm:left-6 md:left-20 max-w-full sm:max-w-xl md:max-w-2xl z-10 text-left">
        {/* Main Heading */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-white leading-snug sm:leading-snug md:leading-tight mb-3 sm:mb-4 md:mb-6"
          initial={{ opacity: 0, x: -80, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          YOUR PARTNER FOR <br />
          <span className="text-white">SUCCESS-</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-xs sm:text-sm md:text-lg lg:text-xl text-white/90 mb-4 sm:mb-6 md:mb-8 leading-snug sm:leading-relaxed md:leading-relaxed"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          WE ARE NOT JUST OFFERING NETWORK SOLUTIONS. <br />
          WE ARE OFFERING <span className="font-semibold text-white">PERFECTION</span>
        </motion.p>

        {/* Button */}
        <motion.button
          className="bg-white text-[#851A18] px-4 sm:px-6 md:px-8 py-2 sm:py-3 font-semibold shadow-md hover:scale-105 transition-transform mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
        >
          Learn More
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
