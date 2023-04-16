import {
  COMB,
  FOOTS3,
  HAIR,
  HAIR2,
  HAIR3,
  HAIR4,
  HAIR5,
} from "../../images/images";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./Swaiper.css";
import "./Children.css";

function Children() {
  return (
    <section className="children">
      <div className="container">
        <div className="children__box">
          <div className="title title_children">Наши Малыши</div>
          <img className="children__img" src={COMB} alt="" />
        </div>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={HAIR} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={HAIR2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={HAIR3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={HAIR4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={HAIR5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={HAIR5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={HAIR5} alt="" />
          </SwiperSlide>
          ...
        </Swiper>
        <img className="children__foots" src={FOOTS3} alt="" />
      </div>
    </section>
  );
}
export default Children;
