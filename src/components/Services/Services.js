import servicesLogo from "../../images/img/services-logo.svg";
import "./Services.css";
export const Services = () => {
  return (
    <>
      <section className="services">
        <div className="container">
          <div className="services__box">
            <div className="services__logo">
              <img src={servicesLogo} alt="" />
              <h2 className="services__text">Детска парикмахерская</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
