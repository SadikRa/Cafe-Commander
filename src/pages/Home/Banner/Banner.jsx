import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co.com/F4nLXcW/Banner1.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co.com/xLJnqqN/Banner2.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co.com/jv4KHTr/Banner3.webp" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
