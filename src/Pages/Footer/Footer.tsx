import classes from "./footer.module.scss";

const Footer = () => {
  const year = new Date().getFullYear();
  const month = new Date()
    .toLocaleString("en-us", { month: "long" })
    .toLocaleUpperCase();
  return (
    <footer className={classes.footer}>
      <div>MATVEI MERETIN</div>
      <div>{`${month} ${year}`}</div>
    </footer>
  );
};
export default Footer;
