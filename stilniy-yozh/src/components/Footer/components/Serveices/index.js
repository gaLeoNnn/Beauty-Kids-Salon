const FooterServices = () => {

  const footerServiceItems = [
    {id: 1, value: 'Стрижка для мальчика'},
    {id: 2, value: 'Стрижка для девочки'},
    {id: 3, value: 'Бритье под ноль'},
    {id: 4, value: 'Стрижка челки для девочки'},
    {id: 5, value: 'Прокалывание мочек ушей Inverness'},
    {id: 6, value: 'Брейды с канекалоном / без канекалона'},
    {id: 7, value: '3Д косы с канекалоном'},
  ];

  return (
    <ul className="footer-menu">
      {footerServiceItems.map(item => (
        <li key={item.id} className="footer-menu__list">
          <a className="footer-menu__link" href="/">
            {item.value}
          </a>
        </li>
      ))}
    </ul>
  );
}
export default FooterServices;
