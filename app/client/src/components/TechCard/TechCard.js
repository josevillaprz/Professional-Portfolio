import React from "react";
import styles from "./TechCard.module.css";

const TechCard = ({ title, body, src }) => {
  return (
    <div
      className={styles.container}
      data-aos="fade-up"
      data-aos-easing="ease-in-out-quad"
      data-aos-duration="1200"
    >
      <img src={src} alt="logo" className={styles.img} />
      <p className={styles.title}>{title}</p>
      <p className={styles.body}>{body}</p>
    </div>
  );
};

export default TechCard;
