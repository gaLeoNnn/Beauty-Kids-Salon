import { useState } from "react";
import "./Tabs.css";
import { ImgLoader } from "../../../images/ImgLoader";

export const Tabs = (props) => {
  const { piers, list } = props;

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const divClassNameContent = `tabs__content ${
    !isActive ? "tabs__content_active" : null
  }`;

  const divClassNameChange = `tabs-change ${
    isActive ? "tabs-change_active" : null
  }`;

  return (
    <div onClick={() => handleClick(piers.id)} className="tabs__item">
      <div className="tabs__wrapper">
        <div className={divClassNameContent}>
          <ImgLoader name={piers.img} classNames="tabs__img" />
          <div className="tabs__subbox">
            <div className="tabs__subtitle">{piers.title}</div>
            <div className="tabs__descr">{piers.descr}</div>
            {/* <a href="/" className="tabs__link"></a> */}
          </div>
        </div>
        <div className={divClassNameChange}>
          <div className="tabs-change__title">{piers.title}</div>
          <ul className="tabs-change__item">
            {list.map((item) => <li className="tabs-change__list">{item}</li>)}
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
