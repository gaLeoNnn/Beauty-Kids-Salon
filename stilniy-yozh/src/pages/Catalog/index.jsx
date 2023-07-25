import { useEffect, useState } from "react";
import "./Catalog.css";
import { Carousel } from "../../components/Carousel";
import { Carouselmen } from "../../components/Carousel/CarouselMen";
import Form from "../../components/Form";
import Footer from "../../components/Footer";
import { ImgLoader } from "../../images/ImgLoader";
import footerHeadPurple from "../../images/img/catalog_head.svg";

const Catalog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [gender, setGender] = useState("Girl");
  const [isActive, setIsActive] = useState("Girl");
  const handleClickActive = (gender) => {
    setGender(gender);
  };

  return (
    <>
      <section className="catalog">
        <div className="container">
          <div className="catalog__box">
            <div className="catalog__logo">
              <ImgLoader name={"servicesLogo"} />
            </div>
            <h2 className="catalog__text">Каталог причесок</h2>
            <ImgLoader classNames="catalog__foots" name={"FOOTS4"} />
          </div>
          <ul className="catalog__tabs">
            <li
              onClick={() => {
                handleClickActive("Girl");
              }}
              className={`catalog__tab ${
                gender === "Girl" ? "catalog__tab_active" : ""
              }`}
            >
              Для девочек
            </li>
            <li
              onClick={() => handleClickActive("Men")}
              className={`catalog__tab ${
                gender === "Men" ? "catalog__tab_active" : ""
              }`}
            >
              Для малчиков
            </li>
          </ul>
          {gender === "Girl" && <Carousel style={{ marginBottom: "50px" }} />}
          {gender === "Men" && <Carouselmen style={{ marginBottom: "50px" }} />}
          <ImgLoader name={"FOOTS6"} classNames="catalog__footsbottom" />
        </div>
      </section>
      <div className="catalog__order">
        <div className="container">
          <div className="catalog__item">
            <div className="catalog__pic">
              <ImgLoader name={"logoCatalog"} />
              <div className="catalog__text">
                Стало Интересно? Запишитесь прямо сейчас!
              </div>
            </div>
            <Form />
          </div>
        </div>
      </div>
      <Footer
        color={"#D3B5DA"}
        colorFooter={"#C39BCC"}
        image={"catalog_head"}
      />
    </>
  );
};
export default Catalog;
