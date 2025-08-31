// InteractiveScreens.tsx
import React from "react";
import { motion } from "framer-motion";

const InteractiveScreens: React.FC = () => {
  const sections = [
    {
      title: "OUR SOLUTIONS",
      text: "AMT is a primer Audio Visual System integrator specializing in the supply, installation and support of multimedia presentation technology, video and audio conferencing systems, and customized communication products in KSA."
    },
    {
      title: "Interactive Screens Solutions",
      text: "Our interactive screens solutions allow seamless collaboration, presentation, and digital engagement across multiple platforms. They provide high-resolution displays, intuitive touch controls, and integration with modern AV systems."
    },
    {
      title: "Advanced Features",
      text: "We offer a range of interactive screens with advanced features such as multi-touch support, wireless connectivity, remote management, and compatibility with popular conferencing and educational software."
    },
    {
      title: "Integration & Support",
      text: "AMT ensures smooth integration of interactive screens with existing AV systems. We provide full support, maintenance, and training to optimize usage and productivity in meeting rooms, classrooms, and collaborative spaces."
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
          <span className="text-[#851A18]">Interactive Screens Solutions</span>
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

export default InteractiveScreens;
