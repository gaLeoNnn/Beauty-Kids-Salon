import "./Feedback.css";

export const Feedback = () => {
  const names = [
    {
      id: 0,
      text: "Ваше имя",
    },
  ];

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
          <form action="" className="feedback__from">
            <div className="field__text">Оставьте свой отзыв</div>
            <div className="feedback__item">
              <label className="feed-form__name feed-form__name_m">
                Ваше имя
              </label>
              <input type="text" placeholder="Имя" name="name" />
            </div>
            <div className="feedback__item">
              <label className="feed-form__phone feed-form__name_m">
                Телефон
              </label>
              <input required type="text" placeholder="Телефон" name="phone" />
            </div>
            <div className="feedback__item">
              <label className="feed-form__phone feed-form__name_m">
                Текст отзыва
              </label>
              <textarea
                className="feed-form__area"
                name="name"
                id="feed-form__area"
                cols="30"
                rows="10"
                placeholder="Введите"
              ></textarea>
            </div>
            <button className="feed-form__btn">Отправить</button>
          </form>
        </div>
      </div>
    </section>
  );
};
