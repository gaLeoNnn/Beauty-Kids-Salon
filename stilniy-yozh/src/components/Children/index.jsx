import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./Swaiper.css";
import "./Children.css";
import { ImgLoader } from "../../images/ImgLoader";

function Children() {
  return (
    <>
      <section className="children">
        <div className="container">
          <div className="children__box">
            <div className="title title_children">Наши Малыши</div>
            <ImgLoader classNames="children__img" name={'COMB'} />
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
              <ImgLoader name={'HAIR'} />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <ImgLoader name={'HAIR2'} />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <ImgLoader name={'HAIR3'} />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <ImgLoader name={'HAIR4'} />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <ImgLoader name={'HAIR5'} />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <ImgLoader name={'HAIR5'} />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <ImgLoader name={'HAIR5'} />
            </SwiperSlide>
            ...
          </Swiper>
          <ImgLoader classNames="children__foots" name={'FOOTS3'} />
        </div>
      </section>
    </>
  );
}
export default Children;
