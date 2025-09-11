// Solutions.tsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CircularGallery from "./CircularGallery";
import ElectricBorder from "./ElectricBorder";

// hook لحجم الشاشة
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
    main: {
      img: "/images/big2.png",
      label: "ICT Networking",
      button: "VIEW SOLUTIONS",
    },
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

  // إعدادات متجاوبة للـ CircularGallery
  const scrollEase = width < 768 ? 0.005 : 0.02;
  const galleryHeight = width < 768 ? 400 : width < 1024 ? 500 : 600;
  const bend = width < 768 ? 1.5 : 3; // تقلل الانحناء على الموبايل

  return (
    <>
      {/* عنوان Our Solution مع كابشن */}
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

        {/* سكشن المربعات الثلاثة الكبيرة مع ElectricBorder */}
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

      {/* سكشن CircularGallery مع عبارة Our most important services */}
      <section className="bg-white px-4 sm:px-6 md:px-28 py-20 md:py-32 relative overflow-hidden">
        <div className="mb-8 text-center">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold"
            style={{ color: "#851A1A" }}
          >
            Our most important services
          </h2>
        </div>
        <div
          className="w-full relative"
          style={{ height: galleryHeight }}
        >
          <CircularGallery
            items={allItems}
            bend={bend} // bend متغير حسب الشاشة
            textColor="#851A1A"
            borderRadius={0.05}
            scrollEase={scrollEase}
          />
        </div>
      </section>
    </>
  );
};

export default Solutions;
