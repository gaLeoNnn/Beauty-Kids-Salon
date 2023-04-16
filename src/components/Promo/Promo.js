import "./Promo.css";
import { FOOTS, PROMO, SHAVER } from "../../images/images";
import logo from "../../images/img/logo.svg";

function Promo() {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__box">
          <div className="promo__column">
            <img src={logo} alt="" />
            <h2 className="promo__text">Детска парикмахерская</h2>
          </div>
          <img src={SHAVER} alt="" />
        </div>

        <img className="promo__foots" src={FOOTS} alt="" />
      </div>
    </section>
  );
}
export default Promo;
