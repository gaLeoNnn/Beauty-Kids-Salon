import "./Footer.css";
import Studio from "./components/Studio";
import FooterServices from "./components/Serveices";
import Adress from "./components/Adress";
import { ImgLoader } from "../../images/ImgLoader";

const Footer = (props) => {
  const { color, image, colorFooter } = props;
  const logo = image ? image : "";

  return (
    <footer style={{ backgroundColor: color }}>
      <div className="footer__container">
        <div className="footer__box">
          <div>
            <ImgLoader classNames="logo-footer" name={logo} />
          </div>

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
            <a className="footer-social__link" href="/">
              <ImgLoader name={"inst"} />
            </a>
            <a className="footer-social__link" href="/">
              <ImgLoader name={"phone"} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bg" style={{ backgroundColor: colorFooter }}>
        <ImgLoader name={"endText"} />
      </div>
    </footer>
  );
};

export default Footer;
