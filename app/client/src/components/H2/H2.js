import React from "react";
import styles from "./H2.module.css";

const H2 = ({ text }) => {
  return <h2 className={styles.h2}>{text}</h2>;
};

export default H2;
