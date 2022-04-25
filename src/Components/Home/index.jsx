import styles from "./home.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const Home = () => {
  const cx = classNames.bind(styles);
  return (
    <>
      <div className="grid grid-cols-3 mb-3">
        <div className="bg-blue-100 p-3 rounded">
          <p className="text-base text-zinc-700">
            Сборник небольших <strong>React Pet Projects</strong>, реализованных
            в целях изучения и тестирования.
          </p>
        </div>
      </div>
      <div className={cx("grid grid-cols-4 gap-2")}>
        <Link
          className="transition hover:bg-rose-300 hover:text-white border-2 border-rose-300 rounded p-2"
          to="/snake-game"
        >
          <h6 className="title font-bold">Snake Game</h6>
          <p className="desc">Игра "Змейка", реализованная при помощи React.</p>
        </Link>
      </div>
    </>
  );
};

export default Home;
