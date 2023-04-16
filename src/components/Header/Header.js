import "./Header.css";
import logo from "../../images/img/header-logo.svg";
import HeaderMenu from "./Header-menu";

function Header() {
  return (
    <section className="header">
      <div className="header__box">
        <a href="#">
          <img src={logo} alt="" />
        </a>
        <nav className="menu">
          <HeaderMenu />
        </nav>
      </div>
    </section>
  );
}

export default Header;
