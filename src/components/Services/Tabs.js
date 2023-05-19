import { useState } from "react";
import "./Tabs.css";
// import { PIERCING, MODEL, MODEL2 } from "../../images/images";
// import MODEL from "../../images/img/model.jpg";
// import PIERCING from "../../images/img/piercing.jpeg";

export const Tabs = ({ piers, list }) => {
  const [isActive, setIsActive] = useState(false);
  console.log(list);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const divClassNameContent = `tabs__content ${
    !isActive ? "tabs__content_active" : ""
  }`;

  const divClassNameChange = `tabs-change ${
    isActive ? "tabs-change_active" : ""
  }`;

  return (
    <div onClick={() => handleClick(piers.id)} className="tabs__item">
      <div className="tabs__wrapper">
        <div className={divClassNameContent}>
          <img src={piers.img} className="tabs__img" />
          <div className="tabs__subbox">
            <div className="tabs__subtitle">{piers.title}</div>
            <div className="tabs__descr">{piers.descr}</div>
            <a href="" className="tabs__link"></a>
          </div>
        </div>
        <div className={divClassNameChange}>
          <div className="tabs-change__title">{piers.title}</div>
          <ul className="tabs-change__item">
            {list.map((item) => {
              return <li className="tabs-change__list">{item}</li>;
            })}
          </ul>
        </div>
      </div>

      <div className="tabs__footer">
        <hr />
        <div className="tabs__prices">{piers.price}</div>
      </div>
    </div>
  );
};
