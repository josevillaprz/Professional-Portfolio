import React from "react";
import TagList from "../TagList/TagList";
import styles from "./ProjectCard.module.css";
import Link from "../Link/Link";
import H2 from "../H2/H2";

const ProjectCard = ({
  title,
  description,
  tags,
  img,
  link,
  code,
  disableDemo,
}) => {
  return (
    <article
      className={styles.container}
      data-aos="flip-up"
      data-aos-delay="300"
    >
      <div className={styles.textContainer}>
        <H2 text={title} />
        <p className={styles.body}>{description}</p>
        <TagList tags={tags} />
        <div className={styles.buttonGroup}>
          {link !== "/" && <Link text="Demo" src={link} />}
          <Link text="Code" variant="outline" src={code} />
        </div>
      </div>
      <img src={img} alt="Project screenshot" className={styles.img} />
    </article>
  );
};

export default ProjectCard;
