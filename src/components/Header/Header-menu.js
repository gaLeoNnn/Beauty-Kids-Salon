import { useState } from "react";
import HeaderForm from "./Header-form";
import SubMenu from "./Header-submenu";
import { Link } from "react-router-dom";

function HeaderMenu() {
  const [showMode, setShowMode] = useState(false);
  // const [showSubMenu, setShowSubMenu] = useState(false);

  const handlerClick = () => {
    setShowMode(!showMode);
  };
  let content = null;

  if (showMode) {
    content = (
      <>
        <HeaderForm />
      </>
    );
  }

  return (
    <ul className="menu__items">
      <li className="menu__item">
        <Link to="/" className="menu__link">
          Студия
        </Link>
        {<SubMenu />}
      </li>
      <li className="menu__item">
        <Link to="/services" className="menu__link">
          Услуги
        </Link>
      </li>
      <li className="menu__item">
        <Link href="" className="menu__link">
          Акции
        </Link>
      </li>
      <li className="menu__item">
        <Link to="/catalog" className="menu__link">
          Каталог причесок
        </Link>
      </li>
      <button className="btn" onClick={handlerClick}>
        Записаться
      </button>
      {content}
    </ul>
  );
}

export default HeaderMenu;
