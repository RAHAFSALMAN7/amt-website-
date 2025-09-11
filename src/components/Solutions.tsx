// Solutions.tsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CircularGallery from "./CircularGallery";
import ElectricBorder from "./ElectricBorder";

const useWindowSize = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const updateSize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

const Solutions: React.FC = () => {
  const solutionBoxes = [
    { title: "Data Network Solutions", img: "/images/datanetwork.png" },
    { title: "Low Current Systems", img: "/images/herosec2.png" },
    { title: "Audio Visual Systems", img: "/images/audisystem.png" },
  ];

  const gallery = {
    main: { img: "/images/big2.png", label: "ICT Networking" },
    others: [
      { img: "/images/num22.png", label: "Fire Alarm Solutions" },
      { img: "/images/num33.png", label: "IPTV Solutions" },
      { img: "/images/num55.png", label: "Access Control" },
      { img: "/images/num44.png", label: "OSP Solutions" },
    ],
  };

  const allItems = [
    { image: gallery.main.img, text: gallery.main.label },
    ...gallery.others.map((item) => ({ image: item.img, text: item.label })),
  ];

  const { width } = useWindowSize();
  const isMobile = width < 768;

  return (
    <>
      {/* Our Solution Section */}
      <section className="bg-white px-4 sm:px-6 md:px-28 pt-16">
        <div className="text-center mb-10">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold"
            style={{ color: "#851A1A" }}
          >
            Our Solution
          </h2>
          <motion.p
            className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed"
            style={{ color: "#6d6a6aff" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Discover the innovative solutions we provide to empower your
            business and technology needs. From cutting-edge network systems to
            advanced audio-visual integrations, our expert team ensures seamless
            implementation and unmatched support, helping your organization stay
            ahead in a fast-evolving digital world.
          </motion.p>
        </div>

        {/* Solution Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mt-10 justify-items-center">
          {solutionBoxes.map((box, idx) => (
            <ElectricBorder
              key={idx}
              color="#851A1A"
              speed={1.5}
              chaos={0.7}
              thickness={2}
              style={{ borderRadius: 16 }}
            >
              <div
                className="bg-[#851A18] w-full max-w-xs sm:max-w-sm md:max-w-md 
                           aspect-[4/5] sm:aspect-square flex flex-col 
                           items-center justify-start shadow-lg overflow-hidden"
              >
                <img
                  src={box.img}
                  alt={box.title}
                  className="w-full h-3/4 object-cover"
                />
                <h3 className="text-white font-bold text-center text-base sm:text-lg md:text-xl mt-4 px-2">
                  {box.title}
                </h3>
              </div>
            </ElectricBorder>
          ))}
        </div>
      </section>

      {/* CircularGallery Section */}
      <section className="bg-white px-4 sm:px-6 md:px-28 py-20 md:py-32 relative overflow-hidden">
        <div className="mb-8 text-center">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold"
            style={{ color: "#851A1A" }}
          >
            Our most important services
          </h2>
        </div>

        {isMobile ? (
          // نسخة الموبايل: scrollable horizontal gallery
          <div className="flex overflow-x-auto space-x-4 py-4">
            {allItems.map((item, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-64 h-64 bg-[#fff] shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.text}
                  className="w-full h-3/4 object-cover"
                />
                <h3 className="text-center text-[#851A1A] font-bold mt-2 px-2">
                  {item.text}
                </h3>
              </div>
            ))}
          </div>
        ) : (
          // نسخة الديسكتوب: circular gallery
          <div className="w-full relative" style={{ height: 600 }}>
            <CircularGallery
              items={allItems}
              bend={3}
              textColor="#851A1A"
              borderRadius={0.05}
              scrollEase={0.02}
            />
          </div>
        )}
      </section>
    </>
  );
};

export default Solutions;
