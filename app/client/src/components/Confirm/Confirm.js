import React from "react";
import styles from "./Confirm.module.css";
import checkSvg from "../../assets/icons/confirmation.svg";

const Confirm = () => {
  return (
    <div className={styles.container}>
      <img src={checkSvg} alt="Confirm" className={styles.img} />
      <p className={styles.title}>Thank you!</p>
      <p className={styles.body}>
        Your message has been sent. I will get back to you as soon as possible!
      </p>
    </div>
  );
};

export default Confirm;
