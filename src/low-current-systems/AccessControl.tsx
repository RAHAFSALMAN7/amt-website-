import React from "react";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AccessControl: React.FC = () => {
  return (
    <section className="bg-[#EBEBDF] p-10 md:p-20 rounded-lg shadow-lg max-w-5xl mx-auto mt-20">
      {/* صورة الجهاز ممتدة على كامل الكونتينر */}
      <motion.div
        className="w-full mb-8"
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img
          src="/images/Access_control.png"
          alt="Access Control Systems"
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </motion.div>

      {/* العنوان الرئيسي */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-6 text-center"
        style={{ color: "#851A18" }}
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        ACCESS CONTROL SYSTEMS
      </motion.h2>

      {/* وصف مختصر */}
      <motion.p
        className="text-gray-800 text-lg md:text-xl leading-relaxed mb-8 text-center"
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Access control ensures secure and efficient management of entry points. AMT offers authorization identification, authentication, access approval, and accountability of entities through login credentials including passwords, personal identification numbers (PINs), biometric scans, and physical or electronic keys.
      </motion.p>

      {/* النقاط الأساسية */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow-md mb-8"
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold mb-4 text-center" style={{ color: "#851A18" }}>
          OnGuard Integrated Platform
        </h3>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          An open security platform with a level of integration that allows you to select hardware and software components that best fit your needs. OnGuard software allows customers to better protect and manage their people, property, and assets.
        </p>
      </motion.div>

      <motion.div
        className="bg-white p-6 rounded-lg shadow-md mb-8"
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold mb-4 text-center" style={{ color: "#851A18" }}>
          Open Integration
        </h3>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Security management systems designed around open standards, allowing for integration with virtually any system and components. With publicly documented APIs, OnGuard allows any manufacturer to develop an OnGuard software interface, marketable to more than 20,000 OnGuard system users worldwide.
        </p>
      </motion.div>

      <motion.div
        className="bg-white p-6 rounded-lg shadow-md mb-8"
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold mb-4 text-center" style={{ color: "#851A18" }}>
          Video Management & Access Control
        </h3>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Robust stand-alone and integrated offerings designed to meet the rigors and sophistication of enterprise video management. AMT Solutions include simple stand-alone options along with robust enterprise solutions that feature advanced surveillance technologies, including alarm integration, investigative analytics, event-driven recordings, and total system management.
        </p>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mt-4">
          Innovative access control hardware and software that deliver maximum protection and flexibility for installations of any size. AMT delivers innovative, flexible, and cost-effective access control for applications of almost any size.
        </p>
      </motion.div>

      <motion.div
        className="bg-white p-6 rounded-lg shadow-md"
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: "#851A18" }}>
          Our Trusted Partners
        </h3>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          AMT is an official Lenel partner in Khobar, Saudi Arabia, committed to developing innovative security technology and progressive solutions that deliver leading integrated access control. As the definitive open architecture partner, AMT provides flexible and reliable options to support your current and future security needs.
        </p>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mt-4 text-center font-semibold">
          Please contact your AMT representative for additional information on a variety of possible Access Control Systems solutions.
        </p>
      </motion.div>
    </section>
  );
};

export default AccessControl;
