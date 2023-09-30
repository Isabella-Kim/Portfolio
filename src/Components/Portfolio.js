import React, { useRef, useState, useEffect } from "react";
//swiper component
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";
//Data
import { front } from "./PortfolioData/FrontData";
//component
import PortfolioModal from "./PortfolioModal";

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsOpen(false);
  };

  return (
    <div className="Portfolio">
      <div className="aboutTitle commonTitle">
        <p className="subTitle">My Work</p>
        <h1 className="mainTitle">PORTFOLIO</h1>
      </div>
      <div className="slideWrap">
        <Swiper
          effect="fade"
          slidesPerView={3}
          spaceBetween={30}
          loop={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {front.map((item) => {
            return (
              <SwiperSlide
                className="swiperSlide"
                key={item.id}
                onClick={() => openModal(item)}
              >
                <div className="dataWrap">
                  <img src={item.icon} alt="" className="icon" />
                  <div className="txtInfo">
                    <h4>{item.categoty}</h4>
                    <h2>{item.title}</h2>
                  </div>
                  <img src={item.img} alt="" className="pj" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {isOpen && (
        <PortfolioModal
          item={selectedItem}
          closeModal={closeModal} // 모달 닫기 함수 전달
        />
      )}
    </div>
  );
};

export default Portfolio;
