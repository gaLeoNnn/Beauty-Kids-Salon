import { useState } from "react";
import SubMenu from "../SubMenu";
import { Link, NavLink } from "react-router-dom";

const HeaderMenu = ({ handleClick }) => {
  const [activeCategory, setActiveCategory] = useState("/");

  const [submenu, setSubmenu] = useState(false);
  const handleBtnClick = () => {
    handleClick();
  };

  const navMenu = [
    { id: 0, name: "Студия", link: "/" },
    { id: 1, name: "Услуги", link: "/services" },
    { id: 2, name: "Форум", link: "promotions" },
    { id: 3, name: "Каталог причесок", link: "/catalog" },
  ];

  const onMouseEnter = id => {
    if (id === 0) {
      setSubmenu(!submenu);
    }
  };
  const onMouseLeave = () => setSubmenu(false);

  const handleCategoryClick = name => {
    setActiveCategory(name);
  };

  return (
    <>
      <nav className="menu">
        <ul className="menu__items">
          {navMenu.map(item => (
            <li className="menu__item" key={item.id}>
              <NavLink
                onClick={() => handleCategoryClick(item.name)}
                onMouseEnter={() => onMouseEnter(item.id)}
                onMouseLeave={onMouseLeave}
                to={item.link}
                className="menu__link"
                // className={({ isActive }) => (isActive ? "menu__link_active" : "")}
              >
                {item.name}
                {submenu && item.id === 0 && <SubMenu />}
              </NavLink>
            </li>
          ))}
        </ul>
        <button className="btn" onClick={handleBtnClick}>
          Записаться
        </button>
      </nav>
    </>
  );
};

export default HeaderMenu;
