import classes from "./owner.module.scss";
import ArrowRight from "../../assets/icons/ArrowRight";
import hero from "../../assets/matvey.png";
import Projects from "../Projects/Projects";

const OwnerInfo = () => {
  return (
    <>
      <div className={classes["owner-wrapper"]}>
        <div className={classes["about-wrapper"]}>
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
        <div className={classes["ava-wrapper"]}>
          <img alt="Mxlehill" src={hero}></img>
          <p className={classes.designer}>Currently in Moscow</p>
        </div>
      </div>
      <Projects />
    </>
  );
};
export default OwnerInfo;
