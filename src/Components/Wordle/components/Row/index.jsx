import React from "react";
import classNames from "classnames/bind";
import styles from "./row.module.scss";

export default function Row({ guess, currentGuess }) {
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

  if (currentGuess) {
    let letters = currentGuess.split("");
    return (
      <div className={cx("row", "current")}>
        {letters.map((letter, index) => (
          <div key={index} className={cx("filled")}>
            {letter}
          </div>
        ))}
        {[...Array(5 - letters.length)].map((_, index) => (
          <div key={index}></div>
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
