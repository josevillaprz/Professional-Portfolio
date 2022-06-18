import React from "react";
import styles from "./TechList.module.css";
import TechCard from "../TechCard/TechCard";

// LOGO IMPORTS
import js from "../../assets/icons/javascript.svg";
import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css.svg";
import react from "../../assets/icons/react.svg";
import node from "../../assets/icons/nodejs.svg";
import mysql from "../../assets/icons/mysql.svg";
import c from "../../assets/icons/c-sharp.svg";
import illustrator from "../../assets/icons/illustrator.svg";
import xd from "../../assets/icons/adobexd.svg";
import mongo from "../../assets/icons/mongodb.svg";

const TechList = () => {
  return (
    <ul className={styles.container}>
      <li>
        <TechCard
          title="JavaScript"
          body="Used to add logic to the application."
          src={js}
        />
      </li>
      <li>
        <TechCard
          title="HTML5"
          body="Defines the meaning and structure of web content"
          src={html}
        />
      </li>
      <li>
        <TechCard
          title="CSS3"
          body="Used to style content for users."
          src={css}
        />
      </li>
      <li>
        <TechCard
          title="React JS"
          body="Library for building interactive elements in web apps."
          src={react}
        />
      </li>
      <li>
        <TechCard
          title="Node JS"
          body="Useful for developing servers for applications"
          src={node}
        />
      </li>
      <li>
        <TechCard
          title="MongoDB"
          body="NoSQL database management system."
          src={mongo}
        />
      </li>
      <li>
        <TechCard
          title="MySQL"
          body="Relational database management system."
          src={mysql}
        />
      </li>
      <li>
        <TechCard title="C#" body="OOP programming language." src={c} />
      </li>
      <li>
        <TechCard
          title="Illustrator"
          body="Tool used to create graphic assets"
          src={illustrator}
        />
      </li>
      <li>
        <TechCard title="XD" body="Tool for designing UI mockups" src={xd} />
      </li>
    </ul>
  );
};

export default TechList;
