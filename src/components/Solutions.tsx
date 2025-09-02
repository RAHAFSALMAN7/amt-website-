import React from "react";
import { motion } from "framer-motion";
import CircularGallery from "./CircularGallery";
import ElectricBorder from "./ElectricBorder";

const Solutions = () => {
  const solutionBoxes = [
    { title: "AMT data network solutions", img: "/images/herosec1.png" },
    { title: "Low Current Systems", img: "/images/herosec2.png" },
    { title: "AMT audio visual systems", img: "/images/2150038862.png" },
  ];

  const gallery = {
    main: {
      img: "/images/big.png",
      label: "ICT Networking",
      button: "VIEW SOLUTIONS",
    },
    others: [
      { img: "/images/num2.png", label: "Fire Alarm Solutions" },
      { img: "/images/242.png", label: "IPTV Solutions" },
      { img: "/images/num3.png", label: "Access Control" },
      { img: "/images/num4.png", label: "OSP Solutions" },
    ],
  };

  return (
    <>
      {/* سكشن المربعات الثلاثة الكبيرة مع ElectricBorder */}
      <section className="bg-white relative px-6 md:px-28 pb-32 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10">
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
                className="bg-[#851A18] w-80 md:w-96 aspect-square mx-auto flex flex-col 
                           items-center justify-start shadow-lg transform transition-transform 
                           duration-500 hover:scale-105 hover:-translate-y-3 overflow-hidden"
              >
                <img
                  src={box.img}
                  alt={box.title}
                  className="w-full h-3/4 object-cover"
                />
                <h3 className="text-white font-bold text-center text-lg md:text-xl mt-4 px-2">
                  {box.title}
                </h3>
              </div>
            </ElectricBorder>
          ))}
        </div>
      </section>

      {/* سكشن CircularGallery مع عبارة Our most important services */}
      <section className="bg-white px-6 md:px-28 py-32 relative overflow-hidden">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#851A1A" }}>
            Our most important services
          </h2>
        </div>
        <div style={{ height: "600px", position: "relative" }}>
          <CircularGallery
            items={[
              { image: gallery.main.img, text: gallery.main.label },
              ...gallery.others.map(item => ({
                image: item.img,
                text: item.label,
              })),
            ]}
            bend={3}
            textColor="#851A1A"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>
      </section>
    </>
  );
};

export default Solutions;
