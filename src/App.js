import "./App.css";
import Header from "./components/Header/Header.js";
import Promo from "./components/Promo/Promo";
import Advantage from "./components/Advantages/Advantage";
import Children from "./components/Children/Children";
import Reviews from "./components/Reviews/Reviews";
import { useState } from "react";
import Registration from "./components/Registration/Registration";
import Footer from "./components/Footer/Footer";

function App() {
  const [reviews, setReviews] = useState([
    {
      id: 0,
      review:
        "Я очень довольна этой парикмахерской! Мой сын очень боится стрижки, но парикмахер сделала все, чтобы его успокоить и сделать процесс более комфортным. Она была очень профессиональна и сделала отличную стрижку.",
    },
    {
      id: 1,
      review:
        "Мы любим эту детскую парикмахерскую! Парикмахеры всегда очень дружелюбные и терпеливые с нашими детьми. Атмосфера очень детская, с игрушками и книгами, чтобы дети могли заняться во время стрижки. Рекомендую!",
    },
    {
      id: 2,
      review:
        "Мы посещаем эту детскую парикмахерскую уже несколько лет и никогда не разочаровываемся. Парикмахеры очень внимательны к детям и всегда делают красивые стрижки. Цены также очень разумные. Рекомендую!",
    },
    {
      id: 3,
      review:
        "Наш первый раз в этой парикмахерской был замечательным! Наша дочь чувствовала себя очень комфортно благодаря дружелюбной атмосфере и игрушкам. Парикмахер была очень внимательной и сделала красивую стрижку. Мы вернемся!",
    },
    {
      id: 4,
      review:
        "Мы очень любим эту детскую парикмахерскую! Наши дети всегда получают отличный сервис и красивые стрижки. Парикмахеры всегда улыбаются и терпеливо работают с детьми. Я бы определенно рекомендовала эту парикмахерскую.",
    },
  ]);

  return (
    <>
      <Header />
      <Promo />
      <Advantage />
      <Children />
      <Reviews reviews={reviews} setReviews={reviews} />
      <Registration />
      <Footer />
    </>
  );
}

export default App;
