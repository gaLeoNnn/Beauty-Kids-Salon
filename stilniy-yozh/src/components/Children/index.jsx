import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Children.css";
import "./Swiper.css";
import { ImgLoader } from "../../images/ImgLoader";

function Children() {
  const hairs = ["HAIR", "HAIR2", "HAIR3", "HAIR4", "HAIR5"];

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <>
      <section className="children">
        <div className="container">
          <div className="children__box">
            <div className="title title_children">Наши Малыши</div>
            <ImgLoader classNames="children__img" name={"COMB"} />
          </div>
          <Slider {...settings}>
            {hairs.map(item => {
              return (
                <div>
                  <ImgLoader name={item} />
                </div>
              );
            })}
          </Slider>
          <ImgLoader classNames="children__foots" name={"FOOTS3"} />
        </div>
      </section>
    </>
  );
}
export default Children;
