const Studio = () => {
  const footerStudioItems = [
    {id: 1, value: 'О нас​'},
    {id: 2, value: 'Первая стрижка'},
    {id: 3, value: 'Прокалывание мочек ушей'},
    {id: 4, value: 'Отзывы'},
    {id: 5, value: 'Вакансии'},
  ];
  return (
    <ul className="footer-menu">
      {footerStudioItems.map(item => (
         <li className="footer-menu__list" key={item.id}>
            <a className="footer-menu__link" href="/">
              {item.value}
            </a>
        </li>
      ))}
    </ul>
  );
}
export default Studio;
