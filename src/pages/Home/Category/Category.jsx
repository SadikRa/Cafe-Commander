import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Category.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function Category() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Cake" className="w-full h-full object-cover"/>
          <h4 className="absolute bottom-4 left-4 text-3xl uppercase text-white shadow p-2">
            Cake Name
          </h4>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Cake" className="w-full h-full object-cover"/>
          <h4 className="absolute bottom-4 left-4 text-3xl uppercase text-white shadow p-2">
            Cake Name
          </h4>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Cake" className="w-full h-full object-cover"/>
          <h4 className="absolute bottom-4 left-4 text-3xl uppercase text-white shadow p-2">
            Cake Name
          </h4>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
