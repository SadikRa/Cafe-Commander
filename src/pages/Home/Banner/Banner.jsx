import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import img1 from '../../../assets/01.jpg'
import img2 from '../../../assets/02.jpg'
import img3 from '../../../assets/03.png'
import img4 from '../../../assets/04.jpg'
import img5 from '../../../assets/05.png'
import img6 from '../../../assets/06.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

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
        <SwiperSlide><img src={img1} /></SwiperSlide>
        <SwiperSlide><img src={img2} /></SwiperSlide>
        <SwiperSlide><img src={img3} /></SwiperSlide>
        <SwiperSlide><img src={img4} /></SwiperSlide>
        <SwiperSlide><img src={img5} /></SwiperSlide>
        <SwiperSlide><img src={img6} /></SwiperSlide>
        
      </Swiper>
    </>
  );
}
