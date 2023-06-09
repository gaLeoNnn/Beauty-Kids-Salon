import "./Footer.css";
import logoFooter from "../../images/img/logo-footer.svg";
import inst from "../../images/icons/inst.svg";
import endText from "../../images/img/footer-text.svg";
import phone from "../../images/icons/ws.svg";
import Studio from "./Footer-studio";
import FooterServices from "./Footer-services";
import Adress from "./Footer-adress";

function Footer({ color, image, colorFooter }) {
  // const colored = color.orange;
  // const darkOrange = color.darkorange;
  const logo = image ? image : logoFooter;

  return (
    <footer style={{ backgroundColor: color }}>
      <div className="footer__container">
        <div className="footer__box">
          <img className="logo-footer" src={logo} alt="" />
          <div className="footer__icons">
            <div className="footer__icon">
              <div className="footer__title">Студия</div>
              <Studio />
            </div>
            <div className="footer__icon">
              <div className="footer__title">Услуги</div>
              <FooterServices />
            </div>
            <div className="footer__icon">
              <div className="footer__title">Адресс</div>
              <Adress />
            </div>
          </div>
          <div className="footer-social">
            <a className="footer-social__link" href="">
              <img src={inst} alt="" />
            </a>
            <a className="footer-social__link" href="">
              <img src={phone} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bg" style={{ backgroundColor: colorFooter }}>
        <img src={endText} alt="" />
      </div>
    </footer>
  );
}

export default Footer;
