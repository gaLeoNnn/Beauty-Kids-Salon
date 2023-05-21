import SubMenu from "./Header-submenu";
import { Link } from "react-router-dom";

function HeaderMenu({ menu, handleCategoryClick, activeCategory }) {
  const submenu = [
    "О нас",
    "Первая стрижка",
    "Прокалывание мочек ушей",
    "Отзывы",
    "Вакансии",
  ];

  let submenu2 = null;

  if (menu.link === "/") {
    submenu2 = <SubMenu />;
  }
  // const [showSubMenu, setShowSubMenu] = useState(false);

  return (
    <>
      <li className="menu__item">
        <Link
          onClick={() => handleCategoryClick(menu.name)}
          to={menu.link}
          className={`menu__link ${
            activeCategory === menu.name ? "menu__link_active" : ""
          }`}
        >
          {menu.name}
        </Link>
        {submenu2}
      </li>
    </>
  );
}

export default HeaderMenu;
