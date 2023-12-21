import "./Style.css";
import Navbar from "./components/Navbar";
import { ImgLoader } from "../../assets/images/ImgLoader";
import { useEffect, useState } from "react";
import Form from "./components/ModalMain";

const Header = () => {
  const [showMode, setShowMode] = useState(false);
  const handleClick = () => setShowMode(!showMode);

  useEffect(() => {
    if (showMode) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "15px";
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
  }, [showMode]);

  return (
    <>
      <header className="header">
        <div className="header__box">
          <a href="/">
            <ImgLoader name={"LOGO_PNG"} />
          </a>
          <Navbar handleClick={handleClick} />
        </div>
      </header>
      <div className={`overlay ${showMode ? "show" : ""}`}>
        {showMode ? <Form handleClick={handleClick} showMode={showMode} /> : null}
      </div>
    </>
  );
};

export default Header;
