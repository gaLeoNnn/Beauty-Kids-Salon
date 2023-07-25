import React, { useState } from "react";
import axios from "axios";
import "./Feedback.css";

const Feedback = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const nameInput = React.createRef();
  const phoneInput = React.createRef();
  const textInput = React.createRef();

  const postFeedback = () => {
    axios
      .post("http://localhost:8000/add", {
        id: null,
        name: nameInput.current.value,
        tel: phoneInput.current.value,
        feedback: textInput.current.value,
      })

      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    nameInput.current.value = "";
    phoneInput.current.value = "";
    textInput.current.value = "";
  };

  const openModal = () => {
    setShowSuccessModal(!showSuccessModal);
  };

  return (
    <section className="feedback">
      <div className="container">
        <h3 className="feedback__title">Отзывы</h3>
        <div className="feedback__text">
          Дорогие клиенты, мы будем рады вашим отзывам! Что вам понравилось? А
          что не очень? Какие замечания и/или пожелания есть у вас к нашей
          работе? Вы придете к нам снова и будете рекомендовать «Стильный еж»
          своим друзьям и знакомым?
        </div>
        <div className="feedback__field field">
          <div className="feedback__from">
            <div className="field__text">Оставьте свой отзыв</div>
            <div className="feedback__item">
              <label className="feed-form__name feed-form__name_m">
                Ваше имя
              </label>
              <input
                ref={nameInput}
                type="text"
                placeholder="Имя"
                name="name"
              />
            </div>
            <div className="feedback__item">
              <label className="feed-form__phone feed-form__name_m">
                Телефон
              </label>
              <input
                ref={phoneInput}
                required
                type="text"
                placeholder="Телефон"
                name="phone"
              />
            </div>
            <div className="feedback__item">
              <label className="feed-form__phone feed-form__name_m">
                Текст отзыва
              </label>
              <textarea
                ref={textInput}
                className="feed-form__area"
                name="name"
                id="feed-form__area"
                cols="30"
                rows="10"
                placeholder="Введите"
              ></textarea>
            </div>
            <button
              onClick={() => {
                postFeedback();
                openModal();
              }}
              className="feed-form__btn"
            >
              Отправить
            </button>
            {showSuccessModal && (
              <div className="modal">
                <p className="modal__text">Спасибо за ваш отзыв</p>
                <button onClick={openModal} className="modal__btn">
                  OK
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Feedback;