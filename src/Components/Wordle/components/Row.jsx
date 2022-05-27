import React from "react";
import classNames from "classnames/bind";
import styles from "./row.module.scss";

export default function Row() {
  const cx = classNames.bind(styles);
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
