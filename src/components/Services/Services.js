import servicesLogo from "../../images/img/services-logo.svg";
import sprayer from "../../images/img/sprayer_services.svg";
import footprint from "../../images/img/footprints_services.png";
import footerlogo from "../../images/img/footer_logo.svg";
import YOZH from "../../images/img/services_yozh.svg";
import DRYER from "../../images/img/services_dryer.svg";
import Form from "../Form/Form";

import "./Services.css";
import { useEffect } from "react";
import {
  FOOTS5,
  PIERCING,
  MODEL2,
  MODEL3,
  MODEL4,
  MODEL5,
  MODEL6,
} from "../../images/images";
import { Tabs } from "./Tabs";
import Footer from "../Footer/Footer";
import Registration from "../Registration/Registration";

export const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const piers = [
    {
      id: 0,
      title: "Прокол мочки уха",
      descr: "Система Inverness - быстро, стерильно, без щелчка",
      price: "от 10000 тг",
      img: PIERCING,
      list: [
        "Система 75 — самая современная и безболезненная система для прокалывания мочек ушей детям. Подходит даже с самого раннего возраста. ",
        "Большой ассортимент сережек-игл в стерильных картриджах, которые  приобретаются в наших студиях дополнительно.",
        "Поздравительная открытка  с инструкцией по уходу.",
        "Для ухода можно приобрести гель Studex для обработки ушек.",
      ],
    },
    {
      id: 1,
      title: "Стрижка машинкой",
      descr:
        "Мытье головы и легкая укладка при необходимости делаются бесплатно к стрижке",
      price: "2000тг",
      img: MODEL3,
      list: [
        "Практичные короткие стрижки, не требуют ежедневной укладки.",
        "Мытье головы детским шампунем и легкая укладка при необходимости — бесплатно.",
      ],
    },
    {
      id: 2,
      title: "Модельная стрижка для мальчиков",
      descr:
        "Мытье головы и легкая укладка при необходимости делаются бесплатно к стрижке",
      price: "3000тг",
      img: MODEL2,
      list: [
        "Все виды современных детских стрижек с учетом модных тенденций и особенностей роста волос.",
        "Мытье головы и легкая укладка при необходимости — бесплатно.",
      ],
    },
    {
      id: 3,
      title: "Модельная стрижка для девочек",
      descr:
        "Мытье головы и легкая укладка при необходимости делаются бесплатно к стрижке",
      price: "2000тг",
      img: MODEL5,
      list: [
        "Все виды современных детских стрижек с учетом модных тенденций и особенностей роста волос.",
        "Мытье головы и легкая укладка при необходимости — бесплатно.",
      ],
    },
    {
      id: 4,
      title: "Цветное плетение с канекалоном",
      descr: "Стильыне косы с исскуственными цветными прядями (канекалоном)",
      price: "2000тг",
      img: MODEL4,
      list: [
        "С помощью цветного канекалона можно создавать различные плетения и прически, которые надолго сделают образ ребёнка стильным и ярким.",
      ],
    },
    {
      id: 5,
      title: "Первая стрижка в жизни ребенка",
      descr: "Важное событие в жизни каждого малыша и его семьи",
      price: "2000тг",
      img: MODEL6,
      list: [
        "Подготовка и адаптация ребенка к первой в жизни стрижке, торжественное срезание первого локона, любая стрижка на ваш выбор, поздравительная открытка с первым локоном на память, фольгированный шарик в подарок",
      ],
    },
  ];

  return (
    <>
      <section className="services">
        <div className="container">
          <div className="services__box">
            <div className="services__logo">
              <img className="services__img" src={servicesLogo} alt="" />
              <h2 className="services__text">Наши Услуги</h2>
              <div className="services__definition">
                На все услуги студии действует гарантия качества. Детский
                прайскурант действует до 14 лет включительно.
              </div>
            </div>
            <div className="services__foots">
              <img src={FOOTS5} alt="" />
            </div>
            <div className="services__sprayer">
              <img src={sprayer} alt="" />
            </div>
          </div>
          <div className="services__content">
            {piers.map((item) => {
              return <Tabs piers={item} list={item.list} key={item.id} />;
            })}
          </div>
          <img src={footprint} className="services__footprint" alt="" />
        </div>
        <div className="services__order">
          <div className="container">
            <img className="services__dryer" src={DRYER} alt="" />
            <div className="services__item">
              <div className="services__pic">
                <img src={YOZH} alt="" />
                <div className="services__text">
                  Стало Интересно? Запишитесь прямо сейчас!
                </div>
              </div>
              <Form />
            </div>
          </div>
        </div>
        <Footer color={"#F4AD54"} colorFooter={"#E5922A"} image={footerlogo} />
      </section>
    </>
  );
};
