import { FOOTS4 } from "../../images/images";
import servicesLogo from "../../images/img/services-logo.svg";
import { useEffect, useState } from "react";
import "./Catalog.css";
import { Carousel } from "./Carousel";

export const Catalog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [gender, setGender] = useState("Girl");
  const handleClickActive = (gender) => {
    setGender(gender);
  };

  // const genderLogic = () => {
  //   if (gender === "Men") {
  //     return "catalog__tab catalog__tab_active";
  //   }
  // };
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
              onClick={() => handleClickActive("Girl")}
              className="catalog__tab catalog__tab_active"
            >
              Для девочек
            </li>
            <li
              onClick={() => handleClickActive("Men")}
              className="catalog__tab"
            >
              Для малчиков
            </li>
          </ul>
          <Carousel />
        </div>
      </section>
    </>
  );
};
