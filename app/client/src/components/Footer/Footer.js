import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import logo from "../../assets/icons/logo-white.svg";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import LinkedInIcon from "../../assets/icons/linkedin.svg";
import InstagramIcon from "../../assets/icons/instagram.svg";
import GithubIcon from "../../assets/icons/github.svg";
import CodepenIcon from "../../assets/icons/codepen.svg";

const Footer = () => {
  return (
    <footer className={styles.container}>
      {/* LOGO SECTION */}
      <section className={styles.logoSection}>
        <div>
          <img src={logo} alt="logo" className={styles.logo} />
        </div>
        <div>
          <p className={styles.name}>Jose Villaperez</p>
          <p className={styles.text}>Full Stack Web Developer</p>
        </div>
      </section>
      {/* CONTACT SECTION */}
      <section className={styles.contactSection}>
        <p className={styles.label}>Contact</p>
        <ul>
          <li className={styles.item}>
            <FaPhoneAlt className={styles.icon} size={18} />
            <address className={styles.text}>jose.villaprz@gmail.com</address>
          </li>
          <li className={styles.item}>
            <FaEnvelope className={styles.icon} size={18} />
            <address className={styles.text}>{"+1 (208) 600-3097"}</address>
          </li>
        </ul>
      </section>
      {/* SITEMAP SECTION */}
      <section className={styles.navSection}>
        <p className={styles.label}>Sitemap</p>
        <ul className={styles.linkList}>
          <li>
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={styles.navLink}>
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className={styles.navLink}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className={styles.navLink}>
              Contact
            </Link>
          </li>
        </ul>
      </section>
      {/* FOLLOW ME SECTION */}
      <section className={styles.linksSection}>
        <p className={styles.label}>Follow me</p>
        <ul className={styles.socialList}>
          <li>
            <a
              href="https://www.linkedin.com/in/josevillaperez/"
              className={styles.link}
            >
              <img src={LinkedInIcon} alt="LinkedIn logo" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/villadzn/?hl=en"
              className={styles.link}
            >
              <img src={InstagramIcon} alt="instagram logo" />
            </a>
          </li>
          <li>
            <a href="https://github.com/josevillaprz" className={styles.link}>
              <img src={GithubIcon} alt="github logo" />
            </a>
          </li>
          <li>
            <a href="https://codepen.io/josevillaprz" className={styles.link}>
              <img src={CodepenIcon} alt="codepen logo" />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
