import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, icon, type, variant, handler }) => {
  return (
    <button
      type={type}
      onClick={handler}
      className={variant === "outline" ? styles.outline : styles.btn}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
