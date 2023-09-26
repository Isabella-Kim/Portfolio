import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
//import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Portfolio = () => {
  return (
    <div className="Portfolio">
      <div className="aboutTitle commonTitle">
        <p className="subTitle">My Work</p>
        <h1 className="mainTitle">PORTFOLIO</h1>
      </div>
      <div className="slideWrap">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="swiperSlide">Slide 1</SwiperSlide>
          <SwiperSlide className="swiperSlide">Slide 2</SwiperSlide>
          <SwiperSlide className="swiperSlide">Slide 3</SwiperSlide>
          <SwiperSlide className="swiperSlide">Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Portfolio;
