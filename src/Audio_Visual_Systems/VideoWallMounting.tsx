// VideoWallMounting.tsx
import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.3, duration: 0.6 },
  }),
};

const VideoWallMounting: React.FC = () => {
  const paragraphs = [
    `As a professional, you want to be able to install a video wall quickly and easily. Mounting requires precision: all of the displays have to fit together seamlessly. Even in an environment that is not perfect. That’s why our video wall solutions are intelligently designed. You can easily align each display on the X, Y and Z axis, and after installation the displays remain easily accessible for maintenance.`,
    `In addition, the attractive design of our solutions blends into every environment, which is important for many clients and interior architects. Whether against the wall, on the ceiling, on the floor or freestanding, we have the right video wall solution for every situation.`,
    `Whether you are installing a small or large video wall, AMT has the right solution for any size of video wall. Want to mount your video wall from the ceiling or against the wall? Or do you prefer a floor-to-wall or floor-to-ceiling mounting? Perhaps you’d rather a back-to-back mounting option? It’s all possible. A freestanding, fixed or mobile floor solution is also possible if you are not able to use a ceiling and/or wall mounting. In addition, AMT even offers a curved installation option for your video wall.`,
  ];

  return (
    <div className="min-h-screen bg-[#EBEBDF] px-6 md:px-24 py-20">
      {/* عنوان القسم */}
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-red-700 text-center">
        Video Wall Mounting Solutions
      </h1>

      {/* صورة */}
      <div className="flex justify-center mb-12">
        <img
          src="/images/WALL.png"
          alt="Video Wall"
          className="w-full max-w-5xl rounded-lg shadow-lg"
        />
      </div>

      {/* نص المعلومات مع انيميشن */}
      <div className="max-w-4xl mx-auto space-y-8 text-lg md:text-xl leading-relaxed text-[#292929]">
        {paragraphs.map((para, index) => (
          <motion.p
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
          >
            {para}
          </motion.p>
        ))}
      </div>
    </div>
  );
};

export default VideoWallMounting;
