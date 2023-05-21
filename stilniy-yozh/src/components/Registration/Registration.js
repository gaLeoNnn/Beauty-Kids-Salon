import { BLONDE, HEAD } from "../../images/images";
import Form from "../Form/Form";
import "./Registration.css";

function Registration({ imageBg }) {
  const containerStyle = {
    backgroundImage: `url(${imageBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  const bg = imageBg ? containerStyle : null;
  return (
    <section className="registration" style={bg}>
      <div className="container">
        <img className="registration__hair" src={BLONDE} alt="" />
        <div className="registration__box">
          <div className="registration__logo">
            <img src={HEAD} alt="" />
            <div className="registration__text">
              Стало Интересно? Запишитесь прямо сейчас!
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
}
export default Registration;
