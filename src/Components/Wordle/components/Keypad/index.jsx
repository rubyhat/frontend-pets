import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";

import styles from "./keypad.module.scss";
import db from "../../data/db.json";

export default function Keypad({ usedKeys }) {
  const cx = classNames.bind(styles);
  const [letters, setLetters] = useState(null);
  useEffect(() => {
    setLetters(db.letters);

    // if using json-server
    // fetch("http://localhost:3001/letters").then((res) =>
    //   res.json().then((data) => setLetters(data))
    // );
  }, []);
  return (
    <div className={cx("keypad")}>
      {letters &&
        letters.map((letter, index) => {
          const color = usedKeys[letter.key];
          return (
            <div className={cx(color)} key={index}>
              {letter.key}
            </div>
          );
        })}
    </div>
  );
}
