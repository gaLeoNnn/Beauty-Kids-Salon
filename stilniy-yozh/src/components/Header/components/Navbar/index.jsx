import { useState } from "react";
import SubMenu from "../SubMenu";
import { NavLink } from "react-router-dom";

const navMenu = [
  { id: 0, name: "Студия", link: "/" },
  { id: 1, name: "Услуги", link: "/services" },
  { id: 2, name: "Форум", link: "promotions" },
  { id: 3, name: "Каталог причесок", link: "/catalog" },
];

const Navbar = ({ handleClick }) => {
  const [submenu, setSubmenu] = useState(false);

  const onMouseEnter = id => {
    if (id === 0) {
      setSubmenu(!submenu);
    }
  };

  const onMouseLeave = () => setSubmenu(false);

  return (
    <>
      <nav className="menu">
        <ul className="menu__items">
          {navMenu.map(item => (
            <li className="menu__item" key={item.id}>
              <NavLink
                onMouseEnter={() => onMouseEnter(item.id)}
                onMouseLeave={onMouseLeave}
                to={item.link}
                className="menu__link"
              >
                {item.name}
                {submenu && item.id === 0 && <SubMenu />}
              </NavLink>
            </li>
          ))}
        </ul>
        <button className="btn" onClick={handleClick}>
          Записаться
        </button>
      </nav>
    </>
  );
};

export default Navbar;
