import React, { useState } from "react";
import logo from "../../assets/icons/logo-black.svg";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <header className={styles.container}>
      <Link to="/">
        <img src={logo} alt="logo" className={styles.logo} />
      </Link>
      <ul className={showLinks ? styles.open : ""}>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <button
        onClick={() => {
          setShowLinks(!showLinks);
        }}
      >
        <FiMenu size={32} />
      </button>
    </header>
  );
};

export default Header;
