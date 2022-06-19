import React from "react";
import TagList from "../TagList/TagList";
import styles from "./ProjectCard.module.css";
import Button from "../Buttons/Button";
import H2 from "../H2/H2";

const ProjectCard = ({ title, description }) => {
  return (
    <article className={styles.container}>
      <div className={styles.textContainer}>
        <H2 text="Project title" />
        <p className={styles.body}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id
          dolor aliquam, pellentesque ipsum in, consequat turpis.
        </p>
        <TagList />
        <div className={styles.buttonGroup}>
          <Button text="Demo" />
          <Button text="Code" variant="outline" />
        </div>
      </div>
      <img
        src="https://placekitten.com/500/300"
        alt="Project screenshot"
        className={styles.img}
      />
    </article>
  );
};

export default ProjectCard;
