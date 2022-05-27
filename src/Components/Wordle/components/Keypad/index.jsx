import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";

import styles from "./keypad.module.scss";

export default function Keypad() {
  const cx = classNames.bind(styles);
  const [letters, setLetters] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3001/letters").then((res) =>
      res.json().then((data) => setLetters(data))
    );
  }, []);
  return (
    <div className={cx("keypad")}>
      {letters &&
        letters.map((letter, index) => <div key={index}>{letter.key}</div>)}
    </div>
  );
}
