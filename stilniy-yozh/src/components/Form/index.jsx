import { useState } from "react";
import "./Form.css";
import InputForm from "./components/InputForm";
import BasicSelect from "./components/BasicSelect";

function Form() {
  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    setDate(date);
  };

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
        type="number"
        id="phone"
        name="phone"
      />
      <label>Выберите услугу</label>
      <BasicSelect />

      {/* <select
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
      </select> */}

      <div className="date-box">
        <div className="date-box__item">
          {/* <InputForm
            label="Укажите время записи"
            type="time"
            id="time"
            name="time"
            className="date-box__time"
          /> */}
        </div>
        <div className="date-box__item">
          {/* <InputForm
            label="Выберите дату записи"
            type="date"
            id="date"
            name="date"
            className="date-box__date"
          /> */}
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
