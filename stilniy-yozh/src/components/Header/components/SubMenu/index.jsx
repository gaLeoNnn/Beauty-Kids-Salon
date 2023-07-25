import { Link } from "react-router-dom";

const SubMenu = () => {
  const submenu = [
    { id: 1, to: "#", value: "О нас" },
    { id: 2, to: "#", value: "Первая стрижка" },
    { id: 3, to: "#", value: "Прокалывание мочек ушей" },
    { id: 4, to: "/feedback", value: "Отзывы" },
    { id: 5, to: "#", value: "Вакансии" },
  ];
  return (
    <div className="submenu__wrapper">
      <ul id="submenu" className="submenu">
        {submenu.map((item) => (
          <li className="submenu__item" key={item.id}>
            <Link to={item.to} className="submenu__link">
              {item.value}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubMenu;
