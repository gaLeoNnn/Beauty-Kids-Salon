import { FOOTS4, FOOTS6 } from "../../images/images";
import servicesLogo from "../../images/img/services-logo.svg";
import logoCatalog from "../../images/img/logo_catalog.svg";
import logoFooter from "../../images/img/catalog_head.svg";
import { useEffect, useState } from "react";
import "./Catalog.css";
import { Carousel } from "./Carousel";
import { Carouselmen } from "./CarouselMen";
import Form from "../Form/Form";
import Footer from "../Footer/Footer";

export const Catalog = () => {
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
              <img src={servicesLogo} alt="" />
            </div>
            <h2 className="catalog__text">Каталог причесок</h2>
            <img className="catalog__foots" src={FOOTS4} alt="" />
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
          <img src={FOOTS6} alt="" className="catalog__footsbottom" />
        </div>
      </section>
      <div className="catalog__order">
        <div className="container">
          <div className="catalog__item">
            <div className="catalog__pic">
              <img src={logoCatalog} alt="" />
              <div className="catalog__text">
                Стало Интересно? Запишитесь прямо сейчас!
              </div>
            </div>
            <Form />
          </div>
        </div>
      </div>
      <Footer color={"#D3B5DA"} colorFooter={"#C39BCC"} image={logoFooter} />
    </>
  );
};
