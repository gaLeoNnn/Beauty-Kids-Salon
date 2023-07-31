import "./Header.css";
import Navbar from "./components/Navbar";
import { ImgLoader } from "../../images/ImgLoader";
import { useState } from "react";
import Form from "./components/ModalMain";

const Header = () => {
  const [showMode, setShowMode] = useState(false);
  const handleClick = () => setShowMode(!showMode);

  // if (showMode) {
  //   document.body.style.overflow = "hidden";
  // } else {
  //   document.body.style.overflow = "";
  // }

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
        {showMode ? (
          <Form handleClick={handleClick} showMode={showMode} />
        ) : null}
      </div>
    </>
  );
};

export default Header;
