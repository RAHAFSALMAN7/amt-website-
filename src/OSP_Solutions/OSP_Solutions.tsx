// src/OSP_Solutions/OSP_Solutions.tsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // إذا تستخدم React Router

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const OSP_Solutions: React.FC = () => {
  const navigate = useNavigate(); // للتنقل بين الصفحات

  const handleContactClick = () => {
    navigate("/contact"); // ضع مسار صفحة الاتصال الصحيح
  };

  return (
    <div className="min-h-screen bg-[#EBEBDF] text-[#292929] px-6 md:px-24 py-20">
      {/* العنوان الرئيسي */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-[#851A18] mb-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        OSP Solutions
      </motion.h1>

      {/* مقدمة مختصرة */}
      <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-10 text-justify">
        AMT’s proven OSP solutions enable our clients to keep pace with the increased magnitude 
        in broadband access demand and customers faster. Together with technically superior products 
        and cost-effective network solutions, AMT provides a full range of support services to help 
        customers realize the full benefits of AMT’s expertise in complex OSP network installations.
      </p>

      {/* قسم الخبرة */}
      <div className="bg-white shadow-lg rounded-xl p-8 mb-10">
        <motion.h2
          className="text-2xl font-bold text-[#851A18] mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Our Expertise
        </motion.h2>
        <p className="text-base md:text-lg leading-relaxed text-justify">
          With extensive experience deploying cost-effective networks across the Kingdom of Saudi Arabia, 
          we provide expert advice on maximizing performance and minimizing costs. Our rigorous approach 
          guarantees every cable and connector is installed and performs as specified. By pairing superior 
          connectivity products with high-quality cables, you reduce labor and overall cost of ownership 
          without sacrificing efficiency.
        </p>
      </div>

      {/* قسم الحلول */}
      <div className="grid gap-10 md:grid-cols-2">
        <div className="bg-white shadow-lg rounded-xl p-8">
          <motion.h2
            className="text-2xl font-bold text-[#851A18] mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Campus & Network Deployments
          </motion.h2>
          <p className="text-base md:text-lg leading-relaxed text-justify">
            With the proliferation of connected devices, users expect constant connectivity everywhere, 
            all the time, with high capacity and low latency. AMT ensures your outside plant (OSP) 
            infrastructure is ready to meet these expectations.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-8">
          <motion.h2
            className="text-2xl font-bold text-[#851A18] mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Turnkey OSP Services
          </motion.h2>
          <p className="text-base md:text-lg leading-relaxed text-justify">
            Along with our service partners, we handle all OSP/ISP and communications construction requirements 
            including fiber optic & copper cable laying, splicing, terminating, and testing. AMT provides 
            complete turnkey solutions, project management, and comprehensive Fiber Network outside plant (OSP) projects.
          </p>
        </div>
      </div>

      {/* قسم الاتصال */}
      <div className="mt-12 text-center">
        <motion.h2
          className="text-2xl font-bold text-[#851A18] mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Contact Us
        </motion.h2>
        <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-6">
          Please contact your AMT representative for additional information about the variety of OSP Network Solutions 
          that suit your needs.
        </p>

        {/* زر Contact */}
        <motion.button
          onClick={handleContactClick}
          className="bg-[#851A18] text-white font-bold py-3 px-8 rounded-full hover:bg-red-700 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.button>
      </div>
    </div>
  );
};

export default OSP_Solutions;
