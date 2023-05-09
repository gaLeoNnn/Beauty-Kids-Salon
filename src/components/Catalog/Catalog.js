import { FOOTS4 } from "../../images/images";
import servicesLogo from "../../images/img/services-logo.svg";
import "./Catalog.css";
export const Catalog = () => {
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
        </div>
      </section>
    </>
  );
};
