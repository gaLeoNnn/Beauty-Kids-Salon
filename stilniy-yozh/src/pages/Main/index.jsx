import { useState, useEffect } from "react";
import "./Main.css";
import Children from "../../components/Children";
import Reviews from "../../components/Reviews";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import { ImgLoader, SvgImporter } from "../../images/ImgLoader";

const Main = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [reviews, setReviews] = useState([
    {
      id: 0,
      review:
        "Я очень довольна этой парикмахерской! Мой сын очень боится стрижки, но парикмахер сделала все, чтобы его успокоить и сделать процесс более комфортным. Она была очень профессиональна и сделала отличную стрижку.",
    },
    {
      id: 1,
      review:
        "Мы любим эту детскую парикмахерскую! Парикмахеры всегда очень дружелюбные и терпеливые с нашими детьми. Атмосфера очень детская, с игрушками и книгами, чтобы дети могли заняться во время стрижки. Рекомендую!",
    },
    {
      id: 2,
      review:
        "Мы посещаем эту детскую парикмахерскую уже несколько лет и никогда не разочаровываемся. Парикмахеры очень внимательны к детям и всегда делают красивые стрижки. Цены также очень разумные. Рекомендую!",
    },
    {
      id: 3,
      review:
        "Наш первый раз в этой парикмахерской был замечательным! Наша дочь чувствовала себя очень комфортно благодаря дружелюбной атмосфере и игрушкам. Парикмахер была очень внимательной и сделала красивую стрижку. Мы вернемся!",
    },
    {
      id: 4,
      review:
        "Мы очень любим эту детскую парикмахерскую! Наши дети всегда получают отличный сервис и красивые стрижки. Парикмахеры всегда улыбаются и терпеливо работают с детьми. Я бы определенно рекомендовала эту парикмахерскую.",
    },
  ]);

  return (
    <>
      <section className="promo">
        <div className="container">
          <div className="promo__box">
            <div className="promo__column">
              <ImgLoader name={"logo_svg"} />
              <h2 className="promo__text">Детская парикмахерская</h2>
            </div>
            <ImgLoader name={"SHAVER"} />
          </div>
          <ImgLoader classNames="promo__foots" name={"FOOTS"} />
        </div>
      </section>
      <section className="advantage">
        <div className="container">
          <div className="advantage__relative">
            <ImgLoader classNames="advantage__dryer" name={"DRYER"} />
          </div>
          <h2 className="title">Причины полюбить Стильный Еж</h2>
          <div className="advantage__box">
            <div className="advantage__item">
              {SvgImporter.HEART}
              <div className="advantage__item-title">Парикмахеры не кусаются</div>
              <div className="advantage__item-text">
                Обязательная часть подготовки наших мастеров - психологические курсы, после которых они умеют находить
                подход ко всем деткам, даже к самым маленьким и непоседливым{" "}
              </div>
            </div>
            <div className="advantage__item">
              {SvgImporter.DIMOND}
              <div className="advantage__item-title">Чистота и уют</div>
              <div className="advantage__item-text">
                Оборудование в Стильном Еже собственного производства, абсолютно не трамоопасное. А инструменты
                постоянно дезенфицируются и стерелизуются.
              </div>
            </div>
            <div className="advantage__item">
              {SvgImporter.GIFT}
              <div className="advantage__item-title">Детки играют вместо того, чтобы плакать</div>
              <div className="advantage__item-text">
                В нашей студии море игрушек,вместо кресел-машинки, вместо зеркал телевизоры. Дети хоят в Стильный Еж как
                на праздник и даже не замечают, что их стригут
              </div>
            </div>
            <div className="advantage__item">
              {SvgImporter.FLESH}
              <div className="advantage__item-title">Чистота и уют</div>
              <div className="advantage__item-text">
                Оборудование в Стильном Еже собственного производства, абсолютно не трамоопасное. А инструменты
                постоянно дезенфицируются и стерелизуются.
              </div>
            </div>
          </div>
          <ImgLoader classNames="promo__foots2" name={"FOOTS2"} />
        </div>
      </section>
      <Children />
      <Reviews reviews={reviews} />
      <section className="registration">
        <div className="container">
          <ImgLoader classNames="registration__hair" name={"BLONDE"} />
          <div className="registration__box">
            <div className="registration__logo">
              <ImgLoader name={"HEAD"} />
              <div className="registration__text">Стало Интересно? Запишитесь прямо сейчас!</div>
            </div>
            <Form />
          </div>
        </div>
      </section>
      <Footer image={"logoFooter"} />
    </>
  );
};

export default Main;
