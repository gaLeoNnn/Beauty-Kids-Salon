import { useState } from "react";
import HeaderForm from "./Header-form";
import SubMenu from "./Header-submenu";

function HeaderMenu() {
  const [showMode, setShowMode] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);

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
        <a href="#" className="menu__link">
          Студия
        </a>
        {<SubMenu />}
      </li>
      <li className="menu__item">
        <a href="" className="menu__link">
          Услуги{" "}
        </a>
      </li>
      <li className="menu__item">
        <a href="" className="menu__link">
          Акции
        </a>
      </li>
      <li className="menu__item">
        <a href="" className="menu__link">
          Каталог причесок
        </a>
      </li>
      <button className="btn" onClick={handlerClick}>
        {" "}
        Записаться
      </button>
      {content}
    </ul>
  );
}

export default HeaderMenu;
