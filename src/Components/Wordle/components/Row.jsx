import React from "react";
import classNames from "classnames/bind";
import styles from "./row.module.scss";

export default function Row({ guess }) {
  const cx = classNames.bind(styles);

  if (guess) {
    return (
      <div className={cx("row", "past")}>
        {guess.map((letter, index) => (
          <div key={index} className={cx(letter.color)}>
            {letter.key}
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className={cx("row")}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
