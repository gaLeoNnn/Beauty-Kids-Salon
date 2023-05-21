import { DIMOND, DRYER, FLESH, GIFT, HEART, FOOTS2 } from "../../images/images";
import "./Advantage.css";
function Advantage() {
  return (
    <section className="advantage">
      <div className="container">
        <div className="advantage__relative">
          <img className="advantage__dryer" src={DRYER} alt="" />
        </div>
        <h2 className="title">Причины полюбить Стильный Еж</h2>
        <div className="advantage__box">
          <div className="advantage__item">
            {HEART}
            <div className="advantage__item-title">Парикмахеры не кусаются</div>
            <div className="advantage__item-text">
              {" "}
              Обязательная часть подготовки наших мастеров - психологические
              курсы, после которых они умеют находить подход ко всем деткам,
              даже к самым маленьким и непоседливым{" "}
            </div>
          </div>
          <div className="advantage__item">
            {DIMOND}
            <div className="advantage__item-title">Чистота и уют</div>
            <div className="advantage__item-text">
              Оборудование в Стильном Еже собственного производства, абсолютно
              не трамоопасное. А инструменты постоянно дезенфицируются и
              стерелизуются.
            </div>
          </div>
          <div className="advantage__item">
            {GIFT}
            <div className="advantage__item-title">
              Детки играют вместо того, чтобы плакать
            </div>
            <div className="advantage__item-text">
              В нашей студии море игрушек,вместо кресел-машинки, вместо зеркал
              телевизоры. Дети хоят в Стильный Еж как на праздник и даже не
              замечают, что их стригут
            </div>
          </div>
          <div className="advantage__item">
            {FLESH}
            <div className="advantage__item-title">Чистота и уют</div>
            <div className="advantage__item-text">
              Оборудование в Стильном Еже собственного производства, абсолютно
              не трамоопасное. А инструменты постоянно дезенфицируются и
              стерелизуются.
            </div>
          </div>
        </div>
        <img className="promo__foots2" src={FOOTS2} alt="" />
      </div>
    </section>
  );
}

export default Advantage;
