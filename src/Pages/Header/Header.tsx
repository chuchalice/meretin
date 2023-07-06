import classes from "./header.module.scss";
import Dropdown from "../../components/Dropdown/Dropdown";
import Language from "../../components/Language/Language";
import Telegram from "../../assets/icons/Telegram";
import Instagram from "../../assets/icons/Instagram";

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <ul className={classes["nav-menu"]}>
        <li className={classes["nav-menu__li"]}>
          <Dropdown />
          <Language />
        </li>
        <li className={classes["icon-wrapper"]}>
          <Telegram />
          <Instagram />
        </li>
      </ul>
    </header>
  );
};
export default Header;
