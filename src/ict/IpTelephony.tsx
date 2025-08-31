import React from "react";
import { motion } from "framer-motion";

const IpTelephony: React.FC = () => {
  const features = [
    {
      title: "Make Every Voice Heard",
      desc: "The digital workplace of the future starts with giving your employees more ways to be heard. Powerful features like one-touch dialing and directory integration make every call a snap.",
    },
    {
      title: "Move to Multi-experience",
      desc: "AMT helps you get even more from conversations. Converse easily across touchpoints, devices, and modalities to meet customers wherever they are.",
    },
    {
      title: "Connect Anywhere",
      desc: "Make work happen however it needs to with a cloud-based phone system. Support multiple devices on a single number and switch easily from desk phone to mobile phone.",
    },
    {
      title: "Gain All-in-One Functionality",
      desc: "Add a full spectrum of advanced UC options for your team in every location and for every role. Gain the complete freedom of a deployment (cloud, on premise, hybrid model) that fits your need.",
    },
  ];

  return (
    <section className="w-full bg-white text-[#292929] min-h-screen px-6 md:px-20 py-20">
      {/* Hero Section with Background Image and Title */}
      <div
        className="relative rounded-xl overflow-hidden mb-12"
        style={{
          backgroundImage: "url('/images/IP-TELEPHONY.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold text-[#EBEBDF] text-center px-6"
          >
            IP Telephony Solutions
          </motion.h1>
        </div>
      </div>

      {/* Text under the image */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-lg md:text-xl leading-relaxed mb-4"
        >
          When creating an experience that matters, using the right device matters.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#292929] text-lg"
        >
          IP telephony refers to any phone system that uses an internet connection to send and receive voice data. Unlike a regular telephone that uses landlines to transmit analog signals, IP phones connect to the internet via a router and modem. AMT offers its customers the best solutions that suit their needs.
        </motion.p>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="p-6 rounded-2xl shadow-lg bg-[#29292980] hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-4 text-[#EBEBDF]">{f.title}</h3>
            <p className="text-[#ffffffcc]">{f.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="py-24 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-[#292929] mb-6"
        >
          Upgrade Your Communication
        </motion.h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#EBEBDF] text-[#292929] font-bold py-3 px-8 rounded-full text-lg"
        >
          Contact Us
        </motion.button>
      </div>
    </section>
  );
};

export default IpTelephony;
