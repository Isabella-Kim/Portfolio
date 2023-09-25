import React from "react";
import { Link } from "react-router-dom";
import { postings } from "./BlogData/Data";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

const Blog = () => {
  return (
    <div className="Blog">
      <div className="blogTitle commonTitle">
        <div>
          <p className="subTitle">My Everyday Writing</p>
          <h1 className="mainTitle">BLOG POSTINGS</h1>
        </div>
        <button
          onClick={() =>
            window.open("https://m.blog.naver.com/jack6512", "_blank")
          }
        >
          VISIT MY BLOG
        </button>
      </div>
      <div className="blogMain">
        <img
          src={`${process.env.PUBLIC_URL}/images/Blog/filmBottom.png`}
          alt=""
          className="film filmTop"
        />
        <div className="postingArea">
          <div className="posting">
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              scrollbar={{ draggable: true }}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                768: {
                  slidesPerView: 7,
                },
              }}
            >
              <SwiperSlide>
                {postings.map((positings) => (
                  <div key={positings.id} className="posting">
                    <img src={positings.img} alt="" />
                    <h2>{positings.title}</h2>
                  </div>
                ))}
              </SwiperSlide>
            </Swiper>
            {/* {postings.map((positings) => (
              <div key={positings.id} className="posting">
                <img src={positings.img} alt="" />
                <h2>{positings.title}</h2>
              </div>
            ))} */}
          </div>
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/images/Blog/filmbottom.png`}
          alt=""
          className="film filmBottom"
        />
      </div>
    </div>
  );
};

export default Blog;
