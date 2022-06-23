import React from "react";
import styles from "./Button.module.css";

const Button = ({ type, text }) => {
  return (
    <button type={type} className={styles.container}>
      {text}
    </button>
  );
};

export default Button;
