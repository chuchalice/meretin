import classes from "./case-header.module.scss";
import ArrowRight from "../../assets/icons/ArrowRight";

const CaseHeader = () => {
  return (
    <>
      <div className={classes["owner-wrapper"]}>
        <div className={classes["about-info"]}>
          <p className={classes.designer}>UI Designer</p>
          <p className={classes.designer}>UX Designer</p>
        </div>
        <h1 className={classes.name}>Matvei Meretin —</h1>
        <a href="#" className={classes["tg-button"]}>
          <p>Contact me (Telegram)</p>
          <ArrowRight />
        </a>
      </div>
    </>
  );
};
export default CaseHeader;
