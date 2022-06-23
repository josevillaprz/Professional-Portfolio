import React from "react";
import TagList from "../TagList/TagList";
import styles from "./ProjectCard.module.css";
import Button from "../Buttons/Button";
import H2 from "../H2/H2";

const ProjectCard = ({ title, description, tags, img, link, code }) => {
  return (
    <article className={styles.container}>
      <div className={styles.textContainer}>
        <H2 text={title} />
        <p className={styles.body}>{description}</p>
        <TagList tags={tags} />
        <div className={styles.buttonGroup}>
          <Button text="Demo" src={link} />
          <Button text="Code" variant="outline" src={code} />
        </div>
      </div>
      <img src={img} alt="Project screenshot" className={styles.img} />
    </article>
  );
};

export default ProjectCard;
