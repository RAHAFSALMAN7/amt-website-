import React, { useState, useEffect } from "react";
import { Wifi, Database, Lock, Shield, Video, Camera, Flame, Phone, Network } from "lucide-react";

const Solutions = () => {
  // الكلمات + الأيقونات
  const phrases = [
    { text: "Wireless", icon: <Wifi className="w-8 h-8 text-white" /> },
    { text: "Data Center", icon: <Database className="w-8 h-8 text-white" /> },
    { text: "Access Control", icon: <Lock className="w-8 h-8 text-white" /> },
    { text: "Security Systems", icon: <Shield className="w-8 h-8 text-white" /> },
    { text: "Audio Visual", icon: <Video className="w-8 h-8 text-white" /> },
    { text: "Surveillance", icon: <Camera className="w-8 h-8 text-white" /> },
    { text: "Fire Alarm", icon: <Flame className="w-8 h-8 text-white" /> },
    { text: "Unified Communications", icon: <Phone className="w-8 h-8 text-white" /> },
    { text: "Data Network", icon: <Network className="w-8 h-8 text-white" /> },
  ];

  // المربعات مع الصور والنصوص تحتها
  const solutionBoxes = [
    { title: "AMT data network solutions", img: "/images/data network solutions.png" },
    { title: "Low Current Systems", img: "/images/2150038862.png" },
    { title: "AMT audio visual systems", img: "/images/audio visual systems.png" },
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // اخفاء الكلمة الحالية
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length);
        setFade(true); // اظهار الكلمة الجديدة
      }, 500);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* سكشن المربعات */}
      <section className="bg-[#292929] relative px-6 md:px-28 pb-32">
        <h2 className="text-5xl font-extrabold mb-16 text-white text-center">
          Our Solutions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 -mt-64">
          {solutionBoxes.map((box, idx) => (
            <div
              key={idx}
              className="bg-[#851A18] border-4 border-white w-72 md:w-80 aspect-square mx-auto flex flex-col items-center justify-start shadow-lg 
                         transform transition-transform duration-500 hover:scale-105 hover:-translate-y-3 overflow-hidden"
            >
              {/* الصورة تملأ المربع بالكامل */}
              <img
                src={box.img}
                alt={box.title}
                className="w-full h-3/4 object-cover"
              />
              
              {/* النص تحت الصورة */}
              <h3 className="text-white font-bold text-center text-lg md:text-xl mt-4 px-2">
                {box.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* سكشن الجملة المتغيرة + الأيقونة */}
      <section className="bg-[#292929] py-20 flex flex-col justify-center items-center space-y-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center">
          We offer{" "}
          <span
            className={`inline-block border-b-4 border-red-600 transition-opacity duration-500 ease-in-out ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {phrases[index].text}
          </span>{" "}
          Solutions
        </h2>

        {/* الأيقونة تحت الكلمة */}
        <div
          className={`w-16 h-16 flex items-center justify-center rounded-full bg-[#851A18] border-4 border-white shadow-lg transition-opacity duration-500 ease-in-out ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {phrases[index].icon}
        </div>
      </section>
    </>
  );
};

export default Solutions;
