import Form from "../../components/Form";
import "./Services.css";
import { useEffect, useState } from "react";
// import { Tabs } from "./Card";
import Footer from "../../components/Footer";
import { piers } from "../../components/Piers";
import { ImgLoader } from "../../images/ImgLoader";
import { getCardData } from "../../components/Piers";
import classNames from "classnames";
import Card from "./Card";

const Services = () => {
  const [selectedCardId, setSelectCard] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="services">
        <div className="container">
          <div className="services__box">
            <div className="services__logo">
              <ImgLoader classNames="services__img" name={"servicesLogo"} />
              <h2 className="services__text">Наши Услуги</h2>
              <div className="services__definition">
                На все услуги студии действует гарантия качества. Детский прайскурант действует до 14 лет включительно.
              </div>
            </div>
            <div className="services__foots">
              <ImgLoader name={"FOOTS5"} />
            </div>
            <div className="services__sprayer">
              <ImgLoader name={"sprayer"} />
            </div>
          </div>
          <div
            className={classNames("services__content", {
              "has-active": selectedCardId > 0,
            })}
          >
            {getCardData()
              .map(item => ({ ...item, selectedCardId, setSelectCard }))
              .map(enrichedItem => (
                <Card {...enrichedItem} />
              ))}
          </div>
          {/* <div className="services__content">
            {piers.map(item => (
              <Tabs piers={item} list={item.list} key={item.id} />
            ))}
          </div> */}
          <ImgLoader name={"footprint"} classNames="services__footprint" />
        </div>
        <div className="services__order">
          <div className="container">
            <ImgLoader classNames="services__dryer" name={"servicesDryer"} />
            <div className="services__item">
              <div className="services__pic">
                <ImgLoader name={"YOZH"} />
                <div className="services__text">Стало Интересно? Запишитесь прямо сейчас!</div>
              </div>
              <Form />
            </div>
          </div>
        </div>
        <Footer color={"#F4AD54"} colorFooter={"#E5922A"} image={"footerlogo"} />
      </section>
    </>
  );
};

export default Services;
