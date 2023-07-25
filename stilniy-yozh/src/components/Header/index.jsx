import "./Header.css";
import Navbar from "./components/Navbar";
import { ImgLoader } from "../../images/ImgLoader";
const Header = () => {
  return (
    <header className="header">
      <div className="header__box">
        <a href="/">
          <ImgLoader name={'LOGO_PNG'}/>
        </a>
        <Navbar/>
      </div>
    </header>
  );
}

export default Header;
