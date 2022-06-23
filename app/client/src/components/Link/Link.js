import React from "react";
import styles from "./Link.module.css";

const Link = ({ text, icon, type, variant, src, download }) => {
  return (
    <a
      type={type}
      className={variant === "outline" ? styles.outline : styles.btn}
      href={src}
      download={download}
      data-aos="flip-right"
      data-aos-easing="ease-in-out-back"
      data-aos-duration="1000"
    >
      {icon}
      {text}
    </a>
  );
};

export default Link;
