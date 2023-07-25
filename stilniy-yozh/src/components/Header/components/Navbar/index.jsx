import { useState } from "react";
import SubMenu from "../SubMenu";
import { Link } from "react-router-dom";
import Form from "../Form";

const HeaderMenu = () => {
  const [showMode, setShowMode] = useState(false);
  const [activeCategory, setActiveCategory] = useState("/");
  const [submenu, setSubmenu] = useState(false);

  const navMenu = [
    { id: 0, name: "Студия", link: "/" },
    { id: 1, name: "Услуги", link: "/services" },
    { id: 2, name: "Форум", link: "promotions" },
    { id: 3, name: "Каталог причесок", link: "/catalog" },
  ];

  const onMouseEnter = (id) => {
    if (id === 0) {
      setSubmenu(!submenu);
    }
  };
  const onMouseLeave = () => setSubmenu(false);

  const handleCategoryClick = (name) => {
    console.log(name);
    setActiveCategory(name);
  };

  const handlerClick = () => {
    setShowMode(!showMode);
  };

  let content = null;

  if (showMode) {
    content = (
      <>
        <Form />
      </>
    );
  }

  return (
    <>
      <nav className="menu">
        <ul className="menu__items">
          {navMenu.map((item) => (
            <li className="menu__item" key={item.id}>
              <Link
                onClick={() => handleCategoryClick(item.name)}
                onMouseEnter={() => onMouseEnter(item.id)}
                onMouseLeave={onMouseLeave}
                to={item.link}
                className={`menu__link ${
                  activeCategory === item.name ? "menu__link_active" : null
                }`}
              >
                {item.name}
                {submenu && item.id === 0 && <SubMenu />}
              </Link>
            </li>
          ))}
        </ul>
        <button className="btn" onClick={handlerClick}>
          Записаться
        </button>
        {content}
      </nav>
    </>
  );
};

export default HeaderMenu;
