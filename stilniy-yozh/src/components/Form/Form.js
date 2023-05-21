import "./Form.css";
function Form() {
  const services = [
    "Стрижка для мальчика",
    "Стрижка для девочки",
    "Бритье под ноль",
    "Стрижка челки для девочки",
    "Прокалывание мочек ушей Inverness",
    "Брейды с канекалоном/без канекалона",
    "3Д косы с канекалоном",
  ];

  return (
    <form className="feed-form" action="">
      <div className="feed-form__text">Записаться онлайн</div>
      <label className="feed-form__name">Имя ребенка</label>
      <input type="text" placeholder="Имя" name="name" />
      <label className="feed-form__phone">Телефон</label>
      <input required type="text" placeholder="Телефон" name="phone" />
      <label>Выберите Услугу</label>
      <select
        className="feed-form__services"
        name="name"
        id=""
        placeholder="Выберите"
      >
        {services.map((item, index) => {
          return (
            <option id="index" value="">
              {item}
            </option>
          );
        })}
      </select>
      <div className="date-box">
        <div className="date-box__item">
          <label htmlFor="">Укажите время записи</label>
          <input
            required
            type="text"
            className="date-box__time"
            placeholder="Введите"
          />
        </div>
        <div className="date-box__item">
          <label htmlFor="">Выберите дату записи</label>
          <input required type="date" className="date-box__date" value="date" />
        </div>
      </div>
      <textarea
        className="feed-form__area"
        name="name"
        id="feed-form__area"
        cols="30"
        rows="10"
        placeholder="Введите"
      ></textarea>
      <div className="feed-form__footer">
        <div className="feed-form__prof">
          Подтверждаю свое согласие на <span>обработку</span> персональных
          данных
        </div>
        <button className="feed-form__btn">Отправить</button>
      </div>
    </form>
  );
}

export default Form;
