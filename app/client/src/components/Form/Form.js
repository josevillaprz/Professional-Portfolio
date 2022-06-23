import React, { useState } from "react";
import styles from "./Form.module.css";
import Confirm from "../Confirm/Confirm";
import Button from "../Button/Button";
import emailjs from "emailjs-com";
import { BiMessageError } from "react-icons/bi";

const Form = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [messageErr, setMessageErr] = useState("");
  const [displayConfirm, setDisplayConfirm] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    let isValid = validateInput();
    if (isValid) {
      emailjs
        .sendForm(
          "service_dh8btah",
          "template_uvezofi",
          e.target,
          "f_FhLaTr9BnLsLifd"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setDisplayConfirm(true);
      e.target.reset();
    }
  };

  const validateInput = () => {
    let valid = true;

    // reset error values if any
    setEmailErr("");
    setMessageErr("");

    // check each input and set error if meets condition
    if (userEmail.length < 4 && !userEmail.includes("@")) {
      setEmailErr("Please enter a valid email address.");
      valid = false;
    }

    if (userMessage.length < 4) {
      setMessageErr("Please enter a valid message.");
      valid = false;
    }

    return valid;
  };

  return (
    <>
      {displayConfirm ? (
        <Confirm />
      ) : (
        <form onSubmit={submitHandler} className={styles.container} noValidate>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              type="name"
              id="name"
              name="name"
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
              name="email"
              placeholder="pparker@stark.com"
              className={styles.textInput}
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
            />
            {emailErr !== "" && (
              <span className={styles.err}>
                <BiMessageError style={{ marginRight: "6px" }} />
                {emailErr}
              </span>
            )}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <textarea
              type="textarea"
              id="message"
              name="message"
              placeholder="Hello..."
              className={styles.messageInput}
              onChange={(e) => {
                setUserMessage(e.target.value);
              }}
            />
            {messageErr !== "" && (
              <span className={styles.err}>
                <BiMessageError style={{ marginRight: "6px" }} />
                {messageErr}
              </span>
            )}
          </div>
          <Button text="Send" type="submit" />
        </form>
      )}
    </>
  );
};

export default Form;
