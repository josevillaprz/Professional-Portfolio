import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, icon, type, variant, handler, src, download }) => {
  return (
    <a
      type={type}
      onClick={handler}
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
