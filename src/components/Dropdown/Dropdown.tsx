import classes from "./dropdowm.module.scss";

const Dropdown: React.FC = () => {
  return (
    <div className={classes.dropdown}>
      <button className={classes.link}>Home Page</button>
      <div className={classes["dropdown__menu"]}>DropdownContent</div>
    </div>
  );
};
export default Dropdown;
