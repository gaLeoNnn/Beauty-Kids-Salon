const Adress = () => {

  const footerAdressItems = [
    {id: 1, value: '​БЦ Crocus​'},
    {id: 2, value: 'Сатыбалдина, 7/6​1 этаж'},
    {id: 3, value: 'г.Караганды, Республика Казахатсан'},
  ];

  return (
    <ul className="footer-menu">
      {footerAdressItems.map(item => (
        <li key={item.id} className="footer-menu__list">
          <a className="footer-menu__link" href="/">
            {item.value}
          </a>
        </li>
      ))}
    </ul>
  );
}
export default Adress;
