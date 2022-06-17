import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, icon, handler }) => {
  return (
    <button onClick={handler} className={styles.btn}>
      {icon && <img src={icon} alt="icon" className={styles.icon} />}
      {text}
    </button>
  );
};

export default Button;