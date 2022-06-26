import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./ProjectList.module.css";

const ProjectList = ({ projects }) => {
  return (
    <ul className={styles.container}>
      {projects.map((project, index) => (
        <li key={index}>
          <ProjectCard
            title={project.title}
            description={project.description}
            tags={project.tags}
            img={project.image}
            disableDemo={project.disableDemo}
            link={project.demoLink}
            code={project.codeLink}
          />
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
