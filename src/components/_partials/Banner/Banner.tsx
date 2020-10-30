import React from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./bannerStyle.scss";

SwiperCore.use([Navigation, Pagination]);

function Banner() {
  return (
    <div className="slider">
      <Swiper navigation pagination={{ clickable: true }}>
        <SwiperSlide className="ss1">
          <div className="container">
            <h2>Choose Thrilling.</h2>
            <p>The Macan.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="ss2">
          <div className="container">
            <h2>Shaped by performance.</h2>
            <p>The Cayenne Coupé.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="ss3">
          <div className="container">
            <h2>Designed to be seen.</h2>
            <p>Discover what makes GTS unique.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="ss4">
          <div className="container">
            <h2>Relentless.</h2>
            <p>The 911 Turbo S models.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
