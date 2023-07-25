import Slider from "react-slick";
import React from "react";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

import img_1 from "./fotomen/1.png";
import img_2 from "./fotomen/2.jpg";
import img_3 from "./fotomen/3.jpg";
import img_4 from "./fotomen/4.jpg";
import img_5 from "./fotomen/5.jpeg";
import img_6 from "./fotomen/6.jpeg";

export const Carouselmen = () => {
  const [mainImage, setMainImage] = useState({
    id: 1,
    src: img_1,
  });
  const [smallImages, setSmallImages] = useState([
    { id: 2, src: img_2 },
    { id: 3, src: img_3 },
    { id: 4, src: img_4 },
    { id: 5, src: img_5 },
    { id: 6, src: img_6 },
  ]);

  const handleClick = (item) => {
    setMainImage(item);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: () => {
      setMainImage(smallImages[0]);
    },
  };

  const slides = [
    {
      id: 1,
      imgMain: mainImage.src, 
      styles: { width: "400px", height: "400px", borderRadius: "10%" },
      imgSmall: smallImages.map(item => <img key={item.id} src={item.src} style={{ width: "190px", height: "190px" }} onClick={() => handleClick(item)} alt=""/> )
    },
    {
      id: 2,
      imgMain: mainImage.src, 
      styles: { width: "400px", height: "400px", borderRadius: "10%" },
      imgSmall: smallImages.map(item => <img key={item.id} src={item.src} style={{ width: "190px", height: "190px" }} onClick={() => handleClick(item)} alt=""/> )
    },
    {
      id: 3,
      imgMain: mainImage.src, 
      styles: { width: "400px", height: "400px", borderRadius: "10%" },
      imgSmall: smallImages.map(item => <img key={item.id} src={item.src} style={{ width: "190px", height: "190px" }} onClick={() => handleClick(item)} alt=""/> )
    },
    {
      id: 4,
      imgMain: mainImage.src, 
      styles: { width: "400px", height: "400px", borderRadius: "10%" },
      imgSmall: smallImages.map(item => <img key={item.id} src={item.src} style={{ width: "190px", height: "190px" }} onClick={() => handleClick(item)} alt=""/> )
    },
    {
      id: 5,
      imgMain: mainImage.src, 
      styles: { width: "400px", height: "400px", borderRadius: "10%" },
      imgSmall: smallImages.map(item => <img key={item.id} src={item.src} style={{ width: "190px", height: "190px" }} onClick={() => handleClick(item)} alt=""/> )
    },
    {
      id: 6,
      imgMain: mainImage.src, 
      styles: { width: "400px", height: "400px", borderRadius: "10%" },
      imgSmall: smallImages.map(item => <img key={item.id} src={item.src} style={{ width: "190px", height: "190px" }} onClick={() => handleClick(item)} alt=""/> )
    }
  ];

  return (
    <div className="carousel">
      <Slider {...settings}>
        {slides.map(item => (
          <div className="slider__content" key={item.id}>
            <div className="slider__item">
              <div className="big__image">
                <img
                  src={item.imgMain}
                  alt=""
                  style={item.styles}
                />
              </div>
              <div className="small__images">
                {item.imgSmall}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};