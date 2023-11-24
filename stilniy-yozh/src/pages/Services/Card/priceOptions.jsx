function PriceOptions({ priceOptions }) {
  function onOrderClick(e) {
    e.stopPropagation();
  }
  return (
    <div className="price-options__container">
      <ul className="price-options">
        {priceOptions.map(({ optionId, title }) => (
          <li key={optionId}>{title}</li>
        ))}
      </ul>
      <button className="btn btn_card" onClick={onOrderClick}>
        Записаться
      </button>
    </div>
  );
}

export default PriceOptions;
