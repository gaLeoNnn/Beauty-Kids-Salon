import "./Header.css";
import logo from "../../images/img/header-logo.svg";
import HeaderMenu from "./Header-menu";
import { useState } from "react";
import HeaderForm from "./Header-form";

function Header() {
  const menu = [
    { id: 0, name: "Студия", link: "/" },
    { id: 1, name: "Услуги", link: "/services" },
    { id: 2, name: "Форум", link: "promotions" },
    { id: 3, name: "Каталог причесок", link: "/catalog" },
  ];

  const [activeCategory, setActiveCategory] = useState("/");
  const handleCategoryClick = (name) => {
    console.log(name);
    // if (name === "Студия") return setActiveCategory("");

    setActiveCategory(name);
  };

  const [showMode, setShowMode] = useState(false);
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
    <section className="header">
      <div className="header__box">
        <a href="#">
          <img src={logo} alt="" />
        </a>

        <nav className="menu">
          <ul className="menu__items">
            {menu.map((item, index) => {
              return (
                <HeaderMenu
                  key={item.id}
                  activeCategory={activeCategory}
                  setActiveCategor={setActiveCategory}
                  menu={item}
                  handleCategoryClick={handleCategoryClick}
                />
              );
            })}
          </ul>
          <button className="btn" onClick={handlerClick}>
            Записаться
          </button>
          {content}
        </nav>
      </div>
    </section>
  );
}

export default Header;
