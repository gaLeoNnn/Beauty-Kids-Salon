import { useState } from "react";
import "./Tabs.css";
import { ImgLoader } from "../../../images/ImgLoader";
import PriceOptions from "./priceOptions";
import classNames from "classnames";

function Card(props) {
  const { id, title, summary, description, wideColor, narrowColor, priceOptions, selectedCardId, setSelectCard } =
    props;
  console.log(description);
  const isActive = id === selectedCardId;

  function onCardClick() {
    const newSelectedId = isActive ? null : id;
    setSelectCard(newSelectedId);
  }

  return (
    <div
      className={classNames("card__container", {
        card_container_active: isActive,
        card_container_deactive: isActive === false,
      })}
      onClick={onCardClick}
    >
      <div>
        <div className="card__image_big">
          <ImgLoader name={narrowColor} classNames="card__img" />
        </div>
        <div className="card__image_small">
          <ImgLoader name={wideColor} classNames="card__img" />
        </div>
        <div className="card__text-content">
          <h3>{title}</h3>
          <div className="card__summary">{summary}</div>
        </div>
      </div>
      <div>
        <div className="card__description">{description}</div>
      </div>

      <PriceOptions priceOptions={priceOptions} />
    </div>
  );
}

export default Card;
