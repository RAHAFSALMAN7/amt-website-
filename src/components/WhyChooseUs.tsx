import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WhyChooseUs = () => {
  const items = [
    { title: "Client focus", desc: "AMT focus intensely on providing our customers with the best solutions for their needs. Besides, we deliver customized solutions and work closely with the client’s team." },
    { title: "Transparency", desc: "AMT follow ethical standards in conducting our business. In addition, we always seek to communicate directly and honestly and to take fair decisions." },
    { title: "Commitment & accountability", desc: "Our customers can trust that we are committed to satisfy their requirements. Also, we are responsible for our actions and for meeting fixed objectives." },
    { title: "Teamwork", desc: "AMT invest a lot in our employees because we believe that they are the foundation of all our business. Also, we want our teams to work positively, learn and grow with us in an excellent environment of teamwork." },
    { title: "Innovation", desc: "AMT drive continually constructive change in our business to meet our customer satisfaction." },
    { title: "Great Support", desc: "AMT strive to build a collaborative relationship with its customers and partners. Furthermore, we always adopt properly governed systems and methodologies." },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const handlePrev = () => {
    setDirection("left");
    setStartIndex(prev => (prev === 0 ? items.length - 3 : prev - 1));
    setHoveredIndex(null);
  };

  const handleNext = () => {
    setDirection("right");
    setStartIndex(prev => (prev + 3 >= items.length ? 0 : prev + 1));
    setHoveredIndex(null);
  };

  return (
    <section className="flex flex-col items-center my-20">
      <div className="bg-[#851A18] rounded-[80px] py-6 px-6 md:px-12 text-center text-white max-w-7xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Why us?</h2>

        <div className="flex items-center justify-center gap-4 relative">
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
                className="flex gap-16 justify-center flex-wrap relative"
              >
                {items.slice(startIndex, startIndex + 3).map((item, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredIndex(startIndex + idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="relative flex items-center justify-center"
                  >
                    <div className="bg-white text-black px-8 py-6 rounded-3xl shadow-lg hover:scale-105 transition-transform w-52 text-center cursor-pointer font-semibold leading-snug z-10">
                      {item.title}
                    </div>

                    {/* Tooltip */}
                    <AnimatePresence>
                      {hoveredIndex === startIndex + idx && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.3 }}
                          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-64 bg-black text-white text-sm p-3 rounded-lg shadow-lg z-50"
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
    </section>
  );
};

export default WhyChooseUs;
