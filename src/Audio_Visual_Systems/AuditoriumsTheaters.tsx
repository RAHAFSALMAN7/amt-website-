import React from "react";
import { motion } from "framer-motion";

const AuditoriumsTheaters: React.FC = () => {
  const sections = [
    { title: "Meeting Rooms AV Solutions", text: "Our professional meeting room AV solutions enable collaborative work..." },
    { title: "Auditoriums and Theaters", text: "AMT designs and implements eye-catching visual presentations..." },
    { title: "Digital Signage Solutions", text: "Dynamic signage attracts attention and influences decisions..." },
    { title: "Advanced Conference Room AV", text: "We deploy highly advanced conference room AV systems..." },
    { title: "Video Wall Solutions", text: "High-quality video wall solutions in different technologies..." },
    { title: "Interactive Screens Solutions", text: "Interactive display solutions provide a Pen-on-Paper experience..." },
    { title: "IPTV Solutions", text: "Access premium content consistently on any screen or platform..." },
    { title: "Background Music & Unified Communications", text: "Background Music works with multi-component music player apps..." },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="w-full min-h-screen relative text-white font-sans">
      {/* Background Video (muted) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/diroi6tnk/video/upload/v1756642662/AMT_Audio_Video_System_integrator_in_KSA_Khobar_ff24ar.mp4"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 container mx-auto px-6 py-16 space-y-16">

        {/* Page Title */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <span className="text-[#851A18]">Auditoriums & Theaters</span>
        </motion.h1>

        {/* Video Card with Controls */}
        <div className="relative w-full max-w-6xl mx-auto rounded-xl overflow-hidden shadow-2xl">
          <video
            className="w-full h-[550px] md:h-[600px] object-cover rounded-xl"
            src="https://res.cloudinary.com/diroi6tnk/video/upload/v1756642662/AMT_Audio_Video_System_integrator_in_KSA_Khobar_ff24ar.mp4"
            controls
            autoPlay
            loop
            playsInline
          />
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((sec, idx) => (
            <motion.section
              key={idx}
              className="bg-white text-dark-blue rounded-xl p-8 shadow-lg max-w-5xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <h2 className="text-2xl font-bold mb-4 text-[#851A18]">{sec.title}</h2>
              <p>{sec.text}</p>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuditoriumsTheaters;
