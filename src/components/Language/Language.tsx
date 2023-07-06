import classes from "./language.module.scss";
import ArrowRight from "../../assets/icons/ArrowRight";

const Language = () => {
  return (
    <div className="lang">
      <button className={classes.link}>
        <span className={classes["lang__wrapper"]}>English</span>
        <ArrowRight />
      </button>
    </div>
  );
};
export default Language;
