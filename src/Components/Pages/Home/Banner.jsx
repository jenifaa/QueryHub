import React from "react";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import bg1 from "../../../assets/images/banner.jpg";
import bg2 from "../../../assets/images/banner2.webp";
import bg3 from "../../../assets/images/banner3.jpg";
import Slide from "./Slide";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
import Typewriter from "typewriter-effect";
const Banner = () => {
  return (
    <Swiper
      className="mySwiper"
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 8000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide>
        <Slide
          image={bg1}
          text1={
            <>
              <span>
                "Find What You Need,{" "}
                <motion.span
                  className="text-6xl"
                  animate={{ color: ["#f1391c", "#1cf1b7", "#dbf11c"] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  Effortlessly
                </motion.span>
                ; "
              </span>
            </>
          }
          text2={
            <>
              <span className="text-center">
                <Typewriter
                  options={{
                    strings: [
                      "Discover the perfect products with QueryHive!",
                      " We provide personalized recommendations based on your needs",
                      "Join us and make smarter, more informed purchasing decisions!",
                    ],
                    autoStart: true,
                    loop: true,
                    typeSpeed: 30,
                    deleteSpeed: 30,
                  }}
                />
              </span>
            </>
          }
        ></Slide>
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          image={bg2}
          text1={
            <>
              <span>
                "Your
                <motion.span
                  className="mx-3 text-6xl"
                  animate={{ color: ["#f1391c", "#1cf1b7", "#dbf11c"] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  Personalized
                </motion.span>
                Product Guide "
              </span>
            </>
          }
          text2={
            <>
              <span className="text-center">
                <Typewriter
                  options={{
                    strings: [
                      "Discover the perfect products with QueryHive!",
                      " We provide personalized recommendations based on your needs",
                      "Join us and make smarter, more informed purchasing decisions!",
                    ],
                    autoStart: true,
                    loop: true,
                    typeSpeed: 30,
                    deleteSpeed: 30,
                  }}
                />
              </span>
            </>
          }
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          image={bg3}
          text1={
            <>
              <span>
                <motion.span
                  className="mx-3 text-6xl"
                  animate={{ color: ["#f1391c", "#1cf1b7", "#dbf11c"] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  Discover
                </motion.span>
                , Compare, and Choose Smarter"
              </span>
            </>
          }
          text2={
            <>
              <span className="text-center">
                <Typewriter
                  options={{
                    strings: [
                      "Discover the perfect products with QueryHive!",
                      " We provide personalized recommendations based on your needs",
                      "Join us and make smarter, more informed purchasing decisions!",
                    ],
                    autoStart: true,
                    loop: true,
                    typeSpeed: 30,
                    deleteSpeed: 30,
                  }}
                />
              </span>
            </>
          }
        ></Slide>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
