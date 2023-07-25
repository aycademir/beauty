import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import style from "@/styles/Slide.module.css"

// import required modules
import { EffectCube,Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {

  return (
    
      <Swiper
        autoplay={{
            delay: 7000,
            disableOnInteraction: false,
        }}
        spaceBetween={30}
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        
        modules={[Autoplay,EffectCube, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className={style.swiper_slide}>
          <img src="https://wallpapercave.com/wp/wp6836093.jpg"/>
        </SwiperSlide>
        <SwiperSlide className={style.swiper_slide}>
          <img src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4041392.jpg&fm=jpg" />
        </SwiperSlide>
        <SwiperSlide className={style.swiper_slide}>
          <img  src="https://png.pngtree.com/background/20230401/original/pngtree-skin-care-products-flowers-water-splash-background-picture-image_2252423.jpg" />
        </SwiperSlide>
        <SwiperSlide className={style.swiper_slide}>
          <img src="https://png.pngtree.com/background/20230401/original/pngtree-skin-care-products-ocean-flowers-background-picture-image_2252616.jpg" />
        </SwiperSlide>
      </Swiper>
  
  );
}
