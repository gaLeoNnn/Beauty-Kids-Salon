import "./Reviews.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import { ImgLoader } from "../../images/ImgLoader";

const Reviews = (props) => {
  const { reviews } = props;

  return (
    <>
      <section className="reviews">
        <div className="container">
          <ImgLoader classNames="reviews__spray" name={"CREAM"} />
          <div className="title title__reviews">Отзывы</div>
          <Swiper
            navigation={true}
            loop={true}
            speed={500}
            modules={[Navigation]}
            className="mySwiper"
          >
            {reviews.map((item) => {
              return <SwiperSlide key={item.id}>{item.review}</SwiperSlide>;
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};
export default Reviews;
