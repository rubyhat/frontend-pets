import classNames from "classnames/bind";
import styles from "./modal.modules.scss";

const Modal = ({ isCorrect, turn, solution }) => {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("modal")}>
      {isCorrect && (
        <div>
          <h1>You win!</h1>
          <p className={cx("solution")}>{solution}</p>
          <p>You found the solution in {turn} guesses :)</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Ooops</h1>
          <p className={cx("solution")}>The solution - {solution}</p>
          <p>Better luck next time :)</p>
        </div>
      )}
    </div>
  );
};

export default Modal;
