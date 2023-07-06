import classes from "./telegram.module.scss";
import { IIcons } from "../../Interface/Interface";

const Telegram: React.FC = ({ opacity = "0" }: IIcons) => {
  return (
    <div className={classes["tg-wrapper"]}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="none"
      >
        <rect
          width="39"
          height="39"
          x=".5"
          y=".5"
          fill="#fff"
          fill-opacity={opacity}
          rx="19.5"
        />
        <path
          fill="#fff"
          fill-rule="evenodd"
          d="M25.32 28.483c.269.19.614.237.923.12a.967.967 0 0 0 .603-.7c.724-3.403 2.481-12.017 3.14-15.113a.65.65 0 0 0-.216-.631.667.667 0 0 0-.665-.117C25.611 13.335 14.85 17.372 10.452 19a.69.69 0 0 0-.452.666.69.69 0 0 0 .495.637c1.972.59 4.561 1.41 4.561 1.41s1.21 3.655 1.841 5.513a.73.73 0 0 0 .503.48.722.722 0 0 0 .675-.172l2.58-2.436s2.977 2.182 4.665 3.385Zm-9.175-7.231 1.4 4.615.31-2.923 8.488-7.655a.231.231 0 0 0 .027-.314.237.237 0 0 0-.313-.053l-9.912 6.33Z"
          clip-rule="evenodd"
        />
        <rect width="39" height="39" x=".5" y=".5" stroke="#fff" rx="19.5" />
      </svg>
    </div>
  );
};
export default Telegram;
