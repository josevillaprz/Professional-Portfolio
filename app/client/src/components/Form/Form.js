import React from "react";
import styles from "./Form.module.css";
import Button from "../Buttons/Button";

const Form = () => {
  return (
    <form className={styles.container}>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <input
          type="name"
          id="name"
          placeholder="Peter Parker"
          className={styles.textInput}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="pparker@stark.com"
          className={styles.textInput}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>
          Message
        </label>
        <textarea
          type="textarea"
          id="message"
          placeholder="Hello..."
          className={styles.messageInput}
        />
      </div>
      <Button text="Send" type="submit" />
    </form>
  );
};

export default Form;
