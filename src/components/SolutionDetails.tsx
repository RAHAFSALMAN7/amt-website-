import React from "react";
import { Link } from "react-router-dom";
import { Router, ShieldCheck, Tv, Globe } from "lucide-react";
import { motion, Variants, easeOut } from "framer-motion";

// استيراد الصفحة الجديدة
import OSP_Solutions from "../OSP_Solutions/OSP_Solutions";

const SolutionDetails: React.FC = () => {
  const solutionSections = [
    {
      title: "ICT Networking",
      icon: <Router className="w-12 h-12 text-white" />,
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
      icon: <ShieldCheck className="w-12 h-12 text-white" />,
      options: [
        { name: "Fire Alarm Systems", path: "/low-current/fire-alarm" },
        { name: "CCTV Solutions", path: "/low-current/cctv" },
        { name: "Access Control Systems", path: "/low-current/access-control" },
        { name: "Master Clock Systems", path: "/low-current/master-clock" },
      ],
    },
    {
      title: "Audio Visual Systems",
      icon: <Tv className="w-12 h-12 text-white" />,
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
      icon: <Globe className="w-12 h-12 text-white" />,
      options: [
        { 
          name: "OSP Solutions", 
          path: "/osp-solutions" // مطابق لApp.tsx
        }
      ],
    },
  ];

  const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  return (
    <motion.section
      className="bg-[#292929] min-h-screen px-6 md:px-28 py-20 text-white"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
      >
        Products & Solutions Details
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-center max-w-4xl mx-auto mb-12 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
      >
        AMT provides comprehensive solutions across ICT Networking, Low Current Systems, Audio Visual Systems, and OSP Solutions. 
        Explore each category below to discover detailed offerings tailored to meet your organization’s needs.
      </motion.p>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {solutionSections.map((section, idx) => (
          <motion.div
            key={idx}
            className="bg-[#851A18] p-6 rounded-xl shadow-md"
            variants={cardVariants}
          >
            <div className="bg-white p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-[#851A18] p-4 rounded-full border-4 border-white shadow-lg mr-4">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold text-[#851A18]">{section.title}</h2>
              </div>

              <ul className="list-disc list-inside space-y-2 mt-4 text-[#292929]">
                {section.options.map((opt, i) => (
                  <li key={i}>
                    <Link
                      to={opt.path} // عند الضغط يفتح الصفحة مباشرة
                      className="hover:underline hover:text-[#851A18]"
                    >
                      {opt.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default SolutionDetails;
