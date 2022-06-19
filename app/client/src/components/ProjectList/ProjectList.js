import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./ProjectList.module.css";

const ProjectList = () => {
  return (
    <ul className={styles.container}>
      <li>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </li>
    </ul>
  );
};

export default ProjectList;
