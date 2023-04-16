import { CREAM } from "../../images/images";
import "./Reviews.css";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import { Navigation } from "swiper";

export default function Reviews({ reviews }) {
  return (
    <section className="reviews">
      <div className="container">
        <img className="reviews__spray" src={CREAM} alt="" />
        <div className="title title__reviews">Отзывы</div>
        <Swiper
          navigation={true}
          loop={true}
          speed={500}
          modules={[Navigation]}
          className="mySwiper"
        >
          {reviews.map((item) => {
            return <SwiperSlide>{item.review}</SwiperSlide>;
          })}
        </Swiper>
      </div>
    </section>
  );
}
