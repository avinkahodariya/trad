import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import SliderCard from "./SliderCard";

export default function SliderWIthSwipe() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide className="w-auto"><SliderCard/></SwiperSlide>
        <SwiperSlide><SliderCard/></SwiperSlide>
        <SwiperSlide><SliderCard/></SwiperSlide>
       
      </Swiper>
    </>
  );
}
