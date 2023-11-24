import { useState } from "react";
import "./Tabs.css";
import { ImgLoader } from "../../../images/ImgLoader";
import PriceOptions from "./priceOptions";
import classNames from "classnames";
// export const Tabs = props => {
//   const { piers, list } = props;

//   const [isActive, setIsActive] = useState(false);

//   const handleClick = () => {
//     setIsActive(!isActive);
//   };

//   const divClassNameContent = `tabs__content ${!isActive ? "tabs__content_active" : null}`;

//   const divClassNameChange = `tabs-change ${isActive ? "tabs-change_active" : null}`;

//   return (
//     <div onClick={() => handleClick(piers.id)} className="tabs__item">
//       <div className="tabs__wrapper">
//         <div className={divClassNameContent}>
//           <div className="tabs__img-box">
//             <ImgLoader name={piers.img} classNames="tabs__img" />
//           </div>
//           <div className="tabs__subbox">
//             <div className="tabs__subtitle">{piers.title}</div>
//             <div className="tabs__descr">{piers.descr}</div>
//             {/* <a href="/" className="tabs__link"></a> */}
//           </div>
//         </div>
//         <div className={divClassNameChange}>
//           <div className="tabs-change__title">{piers.title}</div>
//           <ul className="tabs-change__item">
//             {list.map(item => (
//               <li className="tabs-change__list">{item}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       <div className="tabs__footer">
//         <hr />
//         <div className="tabs__prices">{piers.price}</div>
//       </div>
//     </div>
//   );
// };
function Card(props) {
  const { id, title, summary, description, wideColor, narrowColor, priceOptions, selectedCardId, setSelectCard } =
    props;

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
      <div className="card__image_big">
        <ImgLoader name={narrowColor} classNames="card__img" />
      </div>
      <div className="card__image_small">
        <ImgLoader name={wideColor} classNames="card__img" />
      </div>
      <div className="card__text-content">
        <h3>{title}</h3>
        <div className="card__summary">{summary}</div>
        <div className="card__description">{description}</div>
      </div>
      <PriceOptions priceOptions={priceOptions} />
    </div>
  );
}

export default Card;
