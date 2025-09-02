import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WhyChooseUs = () => {
  const items = [
    {
      title: "Client focus",
      desc: "AMT focus intensely on providing our customers with the best solutions for their needs. Besides, we deliver customized solutions and work closely with the client’s team."
    },
    {
      title: "Transparency",
      desc: "AMT follow ethical standards in conducting our business. In addition, we always seek to communicate directly and honestly and to take fair decisions."
    },
    {
      title: "Commitment & accountability",
      desc: "Our customers can trust that we are committed to satisfy their requirements. Also, we are responsible for our actions and for meeting fixed objectives."
    },
    {
      title: "Teamwork",
      desc: "AMT invest a lot in our employees because we believe that they are the foundation of all our business. Also, we want our teams to work positively, learn and grow with us in an excellent environment of teamwork."
    },
    {
      title: "Innovation",
      desc: "AMT drive continually constructive change in our business to meet our customer satisfaction."
    },
    {
      title: "Great Support",
      desc: "AMT strive to build a collaborative relationship with its customers and partners. Furthermore, we always adopt properly governed systems and methodologies."
    }
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const handlePrev = () => {
    setDirection("left");
    setStartIndex((prev) => (prev === 0 ? items.length - 3 : prev - 1));
    setHoveredIndex(null);
  };

  const handleNext = () => {
    setDirection("right");
    setStartIndex((prev) => (prev + 3 >= items.length ? 0 : prev + 1));
    setHoveredIndex(null);
  };

  useEffect(() => {
    document.body.style.backgroundColor = "#ffffff";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <section className="flex flex-col items-center my-20 bg-white w-full min-h-screen">
      {/* Slider */}
      <div className="bg-[#851A18] rounded-[80px] py-6 px-6 md:px-12 text-center text-white max-w-7xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Why us?</h2>

        <div className="flex items-center justify-center gap-4">
          <button onClick={handlePrev} className="text-white hover:text-gray-200">
            <ChevronLeft size={32} />
          </button>

          <div className="flex justify-center flex-wrap relative min-h-[120px] overflow-visible w-full max-w-5xl px-4">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={startIndex}
                initial={{ opacity: 0, x: direction === "right" ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction === "right" ? -100 : 100 }}
                transition={{ duration: 0.5 }}
                className="flex gap-16 justify-center flex-wrap"
              >
                {items.slice(startIndex, startIndex + 3).map((item, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredIndex(startIndex + idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="relative w-52"
                  >
                    {/* البطاقة */}
                    <div
                      className={`px-8 py-6 rounded-3xl shadow-lg hover:scale-105 transition-transform text-center cursor-pointer font-semibold leading-snug
                        ${["Transparency", "Commitment & accountability", "Teamwork"].includes(item.title)
                          ? "text-[#292929] bg-white"
                          : "text-black bg-white"
                        }`}
                    >
                      {item.title}
                    </div>

                    {/* Tooltip باللون الرمادي الغامق */}
                    <AnimatePresence>
                      {hoveredIndex === startIndex + idx && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.3 }}
                          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-64 bg-[#292929] text-white text-sm p-3 rounded-lg shadow-lg z-50"
                        >
                          {item.desc}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <button onClick={handleNext} className="text-white hover:text-gray-200">
            <ChevronRight size={32} />
          </button>
        </div>
      </div>

      {/* Video Section */}
      <div className="mt-32 w-full max-w-6xl rounded-3xl overflow-hidden shadow-lg bg-white">
        <h3 className="text-2xl md:text-3xl font-bold text-[#851A1A] text-center mb-8">
          Get to Know More About AMT
        </h3>

        <video
          src="https://res.cloudinary.com/diroi6tnk/video/upload/v1756645983/AMT_LONG_VIDEO_sfx_edited_1_1_nkseiy.mp4"
          controls
          autoPlay
          loop
          muted
          className="w-full h-80 md:h-[600px] object-cover rounded-xl bg-white"
        />
      </div>
    </section>
  );
};

export default WhyChooseUs;
