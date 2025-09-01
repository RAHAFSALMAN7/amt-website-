import React from "react";
import { motion } from "framer-motion";

const Solutions = () => {
  const solutionBoxes = [
    { title: "AMT data network solutions", img: "/images/herosec1.png" },
    { title: "Low Current Systems", img: "/images/herosec2.png" },
    { title: "AMT audio visual systems", img: "/images/2150038862.png" },
  ];

  const gallery = {
    main: { img: "/images/big.png", label: "ICT Networking", button: "VIEW SOLUTIONS" },
    others: [
      { img: "/images/num2.png", label: "Fire Alarm Solutions" },
      { img: "/images/242.png", label: "IPTV Solutions" },
      { img: "/images/num3.png", label: "Access Control" },
      { img: "/images/num4.png", label: "OSP Solutions" },
    ],
  };

  return (
    <>
      {/* سكشن المربعات الثلاثة الكبيرة بدون نص فوق */}
      <section className="bg-[#292929] relative px-6 md:px-28 pb-32 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10">
          {solutionBoxes.map((box, idx) => (
            <div
              key={idx}
              className="bg-[#851A18] border-4 border-white w-80 md:w-96 aspect-square mx-auto flex flex-col items-center justify-start shadow-lg 
                         transform transition-transform duration-500 hover:scale-105 hover:-translate-y-3 overflow-hidden"
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
          ))}
        </div>
      </section>

      {/* سكشن الصور الخمسة بتصميم Grid كبير */}
      <section className="bg-[#292929] px-6 md:px-28 py-32 relative overflow-hidden">
        {/* الصورة الكبيرة كخلفية أكبر */}
        <div className="relative w-full h-[700px] md:h-[750px] rounded-lg overflow-hidden shadow-lg">
          <motion.img
            src={gallery.main.img}
            alt={gallery.main.label}
            className="w-full h-full object-cover"
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
          />

          {/* نص وزر فوق الصورة الكبيرة */}
          <div className="absolute top-10 left-10 text-white z-10">
            <h3 className="text-4xl font-bold">{gallery.main.label}</h3>
            <button className="mt-4 px-5 py-2 border border-white text-white hover:bg-white hover:text-black transition">
              {gallery.main.button}
            </button>
          </div>

          {/* الصور الصغيرة كشبكة Grid أكبر لتظهر بالكامل بدون أي نصوص */}
          <div className="absolute top-0 right-0 w-[55%] h-full grid grid-cols-2 grid-rows-2 gap-6 p-6 z-10">
            {gallery.others.map((item, i) => (
              <motion.div
                key={i}
                className="w-full h-full shadow-lg overflow-hidden rounded-lg"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Solutions;
