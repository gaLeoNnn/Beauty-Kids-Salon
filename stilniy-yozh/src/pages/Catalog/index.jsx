import { useEffect, useState } from "react";
import "./Catalog.css";
import { Carousel } from "../../components/Carousel";
import Form from "../../components/Form";
import Footer from "../../components/Footer";
import { ImgLoader } from "../../images/ImgLoader";
import footerHeadPurple from "../../images/img/catalog_head.svg";

import img_1 from "../../components/Carousel/foto/1.png";
import img_2 from "../../components/Carousel/foto/2.png";
import img_3 from "../../components/Carousel/foto/3.png";
import img_4 from "../../components/Carousel/foto/4.png";
import img_5 from "../../components/Carousel/foto/5.png";
import img_6 from "../../components/Carousel/foto/6.png";
import img1 from "../../components/Carousel/fotomen/1.png";
import img2 from "../../components/Carousel/fotomen/2.jpg";
import img3 from "../../components/Carousel/fotomen/3.jpg";
import img4 from "../../components/Carousel/fotomen/4.jpg";
import img5 from "../../components/Carousel/fotomen/5.jpeg";
import img6 from "../../components/Carousel/fotomen/6.jpeg";

const Catalog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [photosGirl, setPhotosGirl] = useState([
    { id: 1, src: img_1 },
    { id: 2, src: img_2 },
    { id: 3, src: img_3 },
    { id: 4, src: img_4 },
    { id: 5, src: img_5 },
    { id: 6, src: img_6 },
  ]);
  const [photosMen, setPhotosMen] = useState([
    { id: 1, src: img1 },
    { id: 2, src: img2 },
    { id: 3, src: img3 },
    { id: 4, src: img4 },
    { id: 5, src: img5 },
    { id: 6, src: img6 },
  ]);

  const [gender, setGender] = useState("Girl");

  const handleClickActive = gender => {
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
              className={`catalog__tab ${gender === "Girl" ? "catalog__tab_active" : ""}`}
            >
              Для девочек
            </li>
            <li
              onClick={() => handleClickActive("Men")}
              className={`catalog__tab ${gender === "Men" ? "catalog__tab_active" : ""}`}
            >
              Для малчиков
            </li>
          </ul>
          {gender === "Girl" ? (
            <Carousel photos={photosGirl} style={{ marginBottom: "50px" }} />
          ) : gender === "Men" ? (
            <Carousel photos={photosMen} style={{ marginBottom: "50px" }} />
          ) : null}
          <ImgLoader name={"FOOTS6"} classNames="catalog__footsbottom" />
        </div>
      </section>
      <div className="catalog__order">
        <div className="container">
          <div className="catalog__item">
            <div className="catalog__pic">
              <ImgLoader name={"logoCatalog"} />
              <div className="catalog__text">Стало Интересно? Запишитесь прямо сейчас!</div>
            </div>
            <Form />
          </div>
        </div>
      </div>
      <Footer color={"#D3B5DA"} colorFooter={"#C39BCC"} image={"catalog_head"} />
    </>
  );
};
export default Catalog;
