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
          <img
            src="https://i.ibb.co.com/bJz8bHM/rsz-1gemini-generated-image-w12g65w12g65w12g-1.jpg
"
            alt="Cake"
            className="w-full h-full object-cover"
          />
          <h4 className="absolute bottom-4 left-4 text-3xl uppercase text-white shadow shadow-black p-2">
          chocolate cake
          </h4>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
          src="https://i.ibb.co.com/DDdZ1yk/rsz-cake1.jpg"
            alt="Cake"
            className="w-full h-full object-cover"
          />
          <h4 className="absolute bottom-4 left-4 text-3xl uppercase text-white shadow shadow-black p-2">
          Commander’s Cheesecake
          </h4>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src="https://i.ibb.co.com/8dnd8sQ/rsz-cake4.jpg"
            alt="Cake"
            className="w-full h-full object-cover"
          />
          <h4 className="absolute bottom-4 left-4 text-3xl uppercase text-white shadow shadow-black p-2">
          Lava Cake
          </h4>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src="https://i.ibb.co.com/FKQ5Sf7/rsz-1cake3.jpg"
            alt="Cake"
            className="w-full h-full object-cover"
          />
          <h4 className="absolute bottom-4 left-4 text-3xl uppercase text-white shadow shadow-black p-2">
          Commander’s Cheesecake
          </h4>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src="https://i.ibb.co.com/2FWSw5T/rsz-cake2.jpg"
            alt="Cake"
            className="w-full h-full object-cover"
          />
          <h4 className="absolute bottom-4 left-4 text-3xl uppercase text-white shadow shadow-black p-2">
          Chocolate Lava Cake
          </h4>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
             src="https://i.ibb.co.com/WKzqR87/rsz-gemini-generated-image-oq2hruoq2hruoq2h.jpg"
            alt="Cake"
            className="w-full h-full object-cover"
          />
          <h4 className="absolute bottom-4 left-4 text-3xl uppercase text-white shadow p-2">
          Commander’s Cheesecake
          </h4>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
