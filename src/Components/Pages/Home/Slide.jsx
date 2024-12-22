import React from "react";
// import { motion } from "motion/react";
// import { easeOut } from "motion";

import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
const Slide = ({ image, text1, text2, card1Title, card2Title }) => {
  return (
    <div
      className="w-full bg-center bg-cover h-[35rem]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="absolute inset-0 bg-gray-900/70 flex items-center justify-center">
        <div className=" text-white flex-1">
          <motion.h1
            animate={{
              x: [0, 100, 0],
              transition: {
                duration: 4,
                repeat: Infinity,
                delay: 2,
                ease: easeOut,
              },
            }}
            className="text-white text-center text-3xl lg:text-5xl font-bold my-6"
          >
            {text1}
          </motion.h1>

          <h1 className="text-white text-center">{text2}</h1>
        </div>
      </div>
    </div>
  );
};

export default Slide;
