import "./Form.css";
import InputForm from "./components/InputForm";

function Form() {
  const services = [
    { id: 1, value: "Стрижка для мальчика" },
    { id: 2, value: "Стрижка для девочки" },
    { id: 3, value: "Бритье под ноль" },
    { id: 4, value: "Стрижка челки для девочки" },
    { id: 5, value: "Прокалывание мочек ушей Inverness" },
    { id: 6, value: "Брейды с канекалоном/без канекалона" },
    { id: 7, value: "3Д косы с канекалоном" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data));
  };

  return (
    <form onSubmit={handleSubmit} className="feed-form">
      <div className="feed-form__text">Записаться онлайн</div>
      <InputForm
        label="Имя ребенка"
        placeholder="Имя"
        type="text"
        id="childName"
        name="childName"
      />

      <InputForm
        label="Телефон"
        placeholder="Телефон"
        type="tel"
        id="phone"
        name="phone"
      />

      <label>Выберите Услугу</label>
      <select
        className="feed-form__services"
        name="service"
        id="service"
        placeholder="Выберите"
      >
        {services.map((item) => (
          <option key={item.id} value={item.value}>
            {item.value}
          </option>
        ))}
      </select>

      <div className="date-box">
        <div className="date-box__item">
          <InputForm
            label="Укажите время записи"
            type="time"
            id="time"
            name="time"
            className="date-box__time"
          />
        </div>
        <div className="date-box__item">
          <InputForm
            label="Выберите дату записи"
            type="date"
            id="date"
            name="date"
            className="date-box__date"
          />
        </div>
      </div>
      <textarea
        className="feed-form__area"
        name="textField"
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
