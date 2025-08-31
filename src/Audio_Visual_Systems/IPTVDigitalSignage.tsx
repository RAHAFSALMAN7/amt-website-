// IPTVDigitalSignage.tsx
import React from "react";
import { motion } from "framer-motion";

const IPTVDigitalSignage: React.FC = () => {
  const sections = [
    {
      title: "IPTV & Digital Signage Solutions",
      text: "A dynamic sign is more eye catching with a higher probability to get your customers’ attention. Once you have their attention, you have an opportunity to influence their buying decisions. Also, we have a dedicated team of digital signage experts who can plan and install digital signage solutions that deliver bright and sharp images in real time."
    },
    {
      title: "Easy-Management Digital Signage",
      text: "AMT Digital Signage solutions include drag and drop layout editors, event triggers for single and multiple dynamic screen change, playlist creators as well as full reporting and analytics tools so you can see exactly what was played when and on what end devices."
    },
    {
      title: "Meeting Room Signage",
      text: "AMT integrates with Reserva meeting room booking software which dynamically links to your calendar system. Book meetings & conferences more efficiently with our market leading digital meeting room signage solutions."
    },
    {
      title: "IP Television (IPTV) Solutions",
      text: "AMT IPTV headend platform allows the capture and ingest of content from a wide range of sources, encoding and redistributing them across an IP network to our Digital Signage screens, desktop video app, Interactive IPTV Portal, mobile IPTV application or as a standalone TV feed."
    }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="w-full min-h-screen relative text-white font-sans">
      {/* Background Video */}
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
          <span className="text-[#851A18]">IPTV & Digital Signage Solutions</span>
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

export default IPTVDigitalSignage;
