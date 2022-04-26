import classNames from "classnames/bind";
import styles from "./trello.module.scss";

const Trello = () => {
  const cx = classNames.bind(styles);
  return <div className={cx("trello")}>hello world</div>;
};

export default Trello;
