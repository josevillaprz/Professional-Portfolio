import React from "react";
import styles from "./TechCard.module.css";

const TechCard = ({ title, body, src }) => {
  return (
    <div className={styles.container}>
      <img src={src} alt="logo" className={styles.img} />
      <p className={styles.title}>{title}</p>
      <p className={styles.body}>{body}</p>
    </div>
  );
};

export default TechCard;
