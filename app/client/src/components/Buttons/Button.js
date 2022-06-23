import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, icon, type, variant, src, download }) => {
  return (
    <a
      type={type}
      className={variant === "outline" ? styles.outline : styles.btn}
      href={src}
      download={download}
    >
      {icon}
      {text}
    </a>
  );
};

export default Button;
