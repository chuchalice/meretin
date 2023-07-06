import classes from "./card.module.scss";
import ArrowRight from "../../assets/icons/ArrowRight";
import { ICard } from "../../Interface/Interface";
const Card: React.FC<ICard> = ({
  pin,
  img,
  name,
  description,
  styleName,
  adev,
}) => {
  return (
    <>
      <div className={classes.card}>
        <div className={classes[`custom-${styleName}`]}>
          <div className={classes.pin}>
            <p
              className={`${
                adev ? classes["custom-pin__title"] : classes["pin__title"]
              }`}
            >
              {pin}
            </p>
            <button className={classes.btn}>
              <ArrowRight />
            </button>
          </div>
          <div className={classes.main}>
            <img className={classes.img} src={img} alt="alt" />
            <h2 className={`${adev ? classes["custom-name"] : classes.name}`}>
              {name}
            </h2>
            <p
              className={`${
                adev ? classes["custom-description"] : classes.description
              }`}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
