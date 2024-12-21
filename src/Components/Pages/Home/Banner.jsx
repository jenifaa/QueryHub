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

const Banner = () => {
  return (
    <Swiper
      className="mt-[110px] mySwiper"
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 5000,
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
          text1="Find What You Need, Effortlessly"
          text2={
            <>
              <p>Discover the perfect products with QueryHive!</p>
              <p>
                We provide personalized recommendations based on your needs,
              </p>
              <p>making it easy to find the best options for you.</p>
              <p>
                Join us and make smarter, more informed purchasing decisions!
              </p>
            </>
          }></Slide>
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          image={bg2}
          text1="Your Personalized Product Guide"
          text2={
            <>
              <p>Discover the perfect products with QueryHive!</p>
              <p>
                We provide personalized recommendations based on your needs,
              </p>
              <p>making it easy to find the best options for you.</p>
              <p>
                Join us and make smarter, more informed purchasing decisions!
              </p>
            </>
          }
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          image={bg3}
          text1="Discover, Compare, and Choose Smarter"
          text2={
            <>
              <p className="font-semibold">
                Discover the perfect products with QueryHive!
              </p>
              <p>
                We provide personalized recommendations based on your needs,
              </p>
              <p>
                making it easy to find the best options for you. Join us and
              </p>
              <p className="font-semibold">
                make smarter, more informed purchasing decisions!
              </p>
            </>
          }
        ></Slide>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
