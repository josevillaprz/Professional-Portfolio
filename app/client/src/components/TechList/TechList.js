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
import bootstrap from "../../assets/icons/bootstrap.svg";
import graphql from "../../assets/icons/graphql.svg";
import figma from "../../assets/icons/figma.svg";

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
          body="Defines the meaning and structure of web content."
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
          body="Javascript library for building user interfaces."
          src={react}
        />
      </li>
      <li>
        <TechCard
          title="Bootstrap"
          body="Responsive CSS Framework."
          src={bootstrap}
        />
      </li>
      <li>
        <TechCard
          title="Node JS"
          body="Server side scripting language."
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
        <TechCard title="GraphQL" body="API query language." src={graphql} />
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
          body="Vector assests design tool."
          src={illustrator}
        />
      </li>
      <li>
        <TechCard title="XD" body="User interface design tool." src={xd} />
      </li>
      <li>
        <TechCard
          title="Figma"
          body="User interface design tool."
          src={figma}
        />
      </li>
    </ul>
  );
};

export default TechList;
