import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import H1 from "../../components/H1/H1";
import styles from "./Projects.module.css";
import ProjectList from "../../components/ProjectList/ProjectList";

const Projects = () => {
  return (
    <div>
      <Header />
      <main className={styles.mainContainer}>
        <H1 text="Projects" />
        <ProjectList />
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
