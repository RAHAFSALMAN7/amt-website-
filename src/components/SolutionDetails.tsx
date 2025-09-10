import React from "react";
import { Link } from "react-router-dom";
import { Router, ShieldCheck, Tv, Globe } from "lucide-react";
import { motion } from "framer-motion";

const SolutionDetails: React.FC = () => {
  const solutionSections = [
    {
      title: "ICT Networking",
      icon: <Router className="w-14 h-14 text-[#851A18]" />,
      options: [
        { name: "Data Network", path: "/ict/data-network" },
        { name: "Unified Communications", path: "/ict/unified-communications" },
        { name: "Wireless Solutions", path: "/ict/wireless" },
        { name: "Data Center Networking Solutions", path: "/ict/data-center" },
        { name: "Network Security Systems", path: "/ict/network-security" },
        { name: "IP Telephony Solutions", path: "/ict/ip-telephony" },
      ],
    },
    {
      title: "Low Current Systems",
      icon: <ShieldCheck className="w-14 h-14 text-[#851A18]" />,
      options: [
        { name: "Fire Alarm Systems", path: "/low-current/fire-alarm" },
        { name: "CCTV Solutions", path: "/low-current/cctv" },
        { name: "Access Control Systems", path: "/low-current/access-control" },
        { name: "Master Clock Systems", path: "/low-current/master-clock" },
      ],
    },
    {
      title: "Audio Visual Systems",
      icon: <Tv className="w-14 h-14 text-[#851A18]" />,
      options: [
        { name: "Meeting & Conference Rooms AV Solutions", path: "/av/meeting-rooms" },
        { name: "Auditoriums & Theaters", path: "/av/auditoriums" },
        { name: "IPTV & Digital Signage Solutions", path: "/av/iptv" },
        { name: "Video Wall Mounting Solutions", path: "/av/video-wall" },
        { name: "Interactive Screens Solutions", path: "/av/interactive-screens" },
      ],
    },
    {
      title: "OSP Solutions",
      icon: <Globe className="w-14 h-14 text-[#851A18]" />,
      options: [
        { name: "OSP Solutions", path: "/osp-solutions" },
      ],
    },
  ];

  return (
    <section className="bg-[#292929] min-h-screen px-6 md:px-16 py-20 text-white">
      {/* عنوان رئيسي */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-center mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
      >
        Products & Solutions
      </motion.h1>

      {/* وصف */}
      <motion.p
        className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-16 text-gray-300 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
      >
        Discover our specialized solutions designed to elevate your business. 
        Explore ICT Networking, Low Current Systems, Audio Visual Systems, and OSP Solutions with advanced technologies.
      </motion.p>

      {/* الكروت */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {solutionSections.map((section, idx) => (
          <motion.div
            key={idx}
            className="group relative bg-[#1f1f1f] rounded-2xl p-8 shadow-lg border border-[#333] cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0, transition: { delay: idx * 0.2, duration: 0.6 } }}
            whileHover={{
              rotateY: 8,
              rotateX: -6,
              scale: 1.05,
              boxShadow: "0px 15px 40px rgba(133, 26, 24, 0.7)",
              transition: { duration: 0.4, ease: "easeOut" },
            }}
          >
            {/* أيقونة */}
            <motion.div
              className="flex justify-center mb-6"
              whileHover={{ scale: 1.3, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-white rounded-full p-4 shadow-md">
                {section.icon}
              </div>
            </motion.div>

            {/* عنوان */}
            <motion.h2
              className="text-xl font-bold text-center mb-6 text-white group-hover:text-[#851A18] transition"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {section.title}
            </motion.h2>

            {/* خيارات */}
            <motion.ul
              className="space-y-3"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.15 },
                },
              }}
            >
              {section.options.map((opt, i) => (
                <motion.li
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
                  }}
                  className="text-center"
                >
                  <Link
                    to={opt.path}
                    className="text-gray-300 hover:text-[#851A18] font-medium transition"
                  >
                    {opt.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SolutionDetails;
