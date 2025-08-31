import React from "react";
import { motion } from "framer-motion";
import { Server, Zap, Layers } from "lucide-react";
import CountUp from "react-countup";

const DataCenter: React.FC = () => {
  const features = [
    {
      icon: <Server className="w-8 h-8" />,
      title: "Simplify and Automate IT Operations",
      desc: "AMT can deliver for its clients, based in Khobar or all the Kingdom of Saudi Arabia, a consistent and cloud-like operational experience across every domain of the enterprise network.",
      img: "/images/datacenter.png",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Accelerate Service Delivery",
      desc: "AMT is offering a new network orchestration solution that solves the problems faced by data center and IT administrators who often struggle with manual and siloed activities for IT service provisioning across compute, virtualization, storage, and network infrastructure environments.",
      img: "/images/data_center_modernization.png",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Integrate with Industry Leaders",
      desc: "AMT helps server and storage customers seamlessly extend connectivity to their solutions, to deliver a consistent user experience and operating model. Integrations with ecosystem partners span a wide range of computing, storage, HCI, and cloud offerings.",
      img: "/images/data_center_mode.png",
    },
  ];

  const stats = [
    { label: "Projects Delivered", value: 150 },
    { label: "Satisfied Clients", value: 120 },
    { label: "Years of Experience", value: 10 },
  ];

  return (
    <section className="w-full bg-white text-[#292929]">

      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center text-center py-24 px-6 overflow-hidden bg-white">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 text-[#851A18]"
        >
          DATA CENTER NETWORKING SOLUTIONS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl text-lg md:text-xl leading-relaxed text-[#292929]"
        >
          Automate IT operations, accelerate service delivery, and deliver a cloud-like operational experience.
        </motion.p>

        <motion.img
          src="/images/datacenter.png"
          alt="Data Center"
          initial={{ scale: 0.8, x: -100, opacity: 0 }}
          animate={{ scale: 1, x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 rounded-xl shadow-2xl w-full max-w-4xl object-cover"
        />
      </div>

      {/* Introduction Section */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-6 md:px-0 py-16 space-y-6 text-center"
      >
        <p className="text-xl md:text-2xl leading-relaxed">
          AMT deploys business applications, data analytics, desktop virtualization, and cloud solutions faster using proven data center solutions, good experience, simplified management, and streamlined operations. Increase your flexibility and interchangeability with a programmable infrastructure built on open standards.
        </p>
      </motion.div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-10 px-6 md:px-20 py-20">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="p-8 rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#851A18] text-white mb-6 mx-auto">
              {f.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-[#851A18]">{f.title}</h3>
            <p className="text-center text-[#292929]">{f.desc}</p>
            <img
              src={f.img}
              alt={f.title}
              className="mt-6 rounded-lg shadow-md w-full h-48 object-contain"
            />
          </motion.div>
        ))}
      </div>

      {/* Statistics Section */}
      <div className="bg-[#F5F5F0] py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <h3 className="text-4xl font-extrabold text-[#851A18] mb-2">
                <CountUp end={s.value} duration={2} />+
              </h3>
              <p className="text-lg text-[#292929]">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-24 px-6 text-center bg-[#851A18]">
        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Ready to Transform Your Data Center?
        </motion.h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-[#851A18] font-bold py-3 px-8 rounded-full text-lg"
        >
          Contact Us
        </motion.button>
      </div>

    </section>
  );
};

export default DataCenter;
