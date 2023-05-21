import { Link } from "react-router-dom";

function SubMenu() {
  return (
    <ul id="submenu" className="submenu">
      <li className="submenu__item">
        <Link to="#" className="submenu__link">
          О нас
        </Link>
      </li>
      <li className="submenu__item">
        <Link href="" className="submenu__link">
          Первая стрижка
        </Link>
      </li>
      <li className="submenu__item">
        <Link href="" className="submenu__link">
          Прокалывание мочек ушей
        </Link>
      </li>
      <li className="submenu__item">
        <Link to={"/feedback"} className="submenu__link">
          Отзывы
        </Link>
      </li>
      <li className="submenu__item">
        <Link href="" className="submenu__link">
          Вакансии
        </Link>
      </li>
    </ul>
  );
}

export default SubMenu;
