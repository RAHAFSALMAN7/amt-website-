import React from "react";
import { motion } from "framer-motion";

const FireAlarm: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-[#EBEBDF] p-10 md:p-20 rounded-lg shadow-lg max-w-5xl mx-auto mt-20"
    >
      {/* صورة الجهاز بحجم كامل على الكونتينر */}
      <motion.div
        className="flex justify-center mb-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/images/fire_alarm.png"
          alt="Fire Alarm"
          className="w-full max-w-3xl object-contain rounded-lg"
        />
      </motion.div>

      {/* العنوان الرئيسي */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-6 text-center"
        style={{ color: "#851A18" }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        FIRE ALARM SYSTEMS
      </motion.h2>

      {/* وصف مختصر */}
      <motion.p
        className="text-gray-800 text-lg md:text-xl leading-relaxed mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        AMT provides accurate and automatic fire and smoke detection and alert to the build-up of smoke and heat, which is mandatory in almost all office and public buildings.
      </motion.p>

      {/* النقاط الأساسية */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow-md mb-8"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <h3
          className="text-2xl font-semibold mb-4 text-center"
          style={{ color: "#851A18" }}
        >
          Key Functions
        </h3>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-3">
          <li>Quickly and effectively warn building occupants of fire, suspected fire, or smoke.</li>
          <li>Warn emergency services of an incident.</li>
          <li>Automatically deploy fire prevention measures like sprinklers or automatic fire doors.</li>
        </ul>
      </motion.div>

      {/* وصف إضافي */}
      <motion.p
        className="text-gray-800 text-lg md:text-xl leading-relaxed mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        AMT is the best choice for installing all kinds of fire alarm systems of any size, even for complex installations.
      </motion.p>

      {/* نصائح السلامة */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow-md"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
      >
        <h3
          className="text-2xl font-bold mb-6 text-center"
          style={{ color: "#851A18" }}
        >
          AMT SAFETY TIPS
        </h3>
        <ol className="list-decimal list-inside text-gray-700 text-lg md:text-xl space-y-4">
          <li><strong>Keep Your Workplace Clean and Tidy:</strong> Ensure corridors, stairs, and fire exits are clear to allow swift evacuation.</li>
          <li><strong>Have Relevant Fire Safety Equipment:</strong> Smoke alarms, fire exit signs, extinguishers, sprinklers, and escape ladders should be available.</li>
          <li><strong>Prepare A Detailed Risk Assessment:</strong> Identify hazards, assess risks, and implement control measures.</li>
          <li><strong>Train Employees in Fire Safety:</strong> Staff should know procedures and act correctly in case of fire.</li>
          <li><strong>Electrical Safety:</strong> Repair faulty electricals, avoid overloading sockets, and ensure regular inspections.</li>
          <li><strong>Replace Smoke Alarms Every 10 Years:</strong> Consider installing automatic sprinklers for complete protection.</li>
        </ol>
      </motion.div>
    </motion.section>
  );
};

export default FireAlarm;
