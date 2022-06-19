import React from "react";
import styles from "./LinkList.module.css";
import LinkedInIcon from "../../assets/icons/linkedin.svg";
import InstagramIcon from "../../assets/icons/instagram.svg";
import GithubIcon from "../../assets/icons/github.svg";
import CodepenIcon from "../../assets/icons/codepen.svg";

const LinkList = () => {
  return (
    <ul className={styles.container}>
      <li className={styles.item}>
        <a
          href="https://www.linkedin.com/in/josevillaperez/"
          className={styles.link}
        >
          <img src={LinkedInIcon} alt="LinkedIn logo" />
        </a>
      </li>
      <li className={styles.item}>
        <a
          href="https://www.instagram.com/villadzn/?hl=en"
          className={styles.link}
        >
          <img src={InstagramIcon} alt="instagram logo" />
        </a>
      </li>
      <li className={styles.item}>
        <a href="https://github.com/josevillaprz" className={styles.link}>
          <img src={GithubIcon} alt="github logo" />
        </a>
      </li>
      <li className={styles.item}>
        <a href="https://codepen.io/josevillaprz" className={styles.link}>
          <img src={CodepenIcon} alt="codepen logo" />
        </a>
      </li>
    </ul>
  );
};

export default LinkList;
