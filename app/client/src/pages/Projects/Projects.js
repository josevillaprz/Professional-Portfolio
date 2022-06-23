import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import H1 from "../../components/H1/H1";
import styles from "./Projects.module.css";
import ProjectList from "../../components/ProjectList/ProjectList";
import ontracImg from "../../assets/images/ontrac.webp";
import quiz from "../../assets/images/quiz.webp";
import headliner from "../../assets/images/headliner.webp";
import origin from "../../assets/images/origin.webp";

const projectData = [
  {
    title: "Ontrac Fitness Tracker",
    description:
      "Ontrac is an exercise tracker for weight lifting. This app utilizes full user authentication with hashed passwords and json web token. The user will be able to create and store exercises and workouts. This app shows my ability to create an application from planning to production.",
    tags: ["React", "MySQL", "NodeJs", "Express", "CSS", "HTML"],
    image: ontracImg,
    demoLink: "/",
    codeLink: "https://github.com/ePortfolios/ontrac-app/tree/dev",
  },
  {
    title: "Headliner",
    description:
      "Headliner is a music event search app. This was built alongside the Ticket Master API. The user can search keywords for concert events in their area or by artist.",
    tags: ["React", "CSS", "HTML"],
    image: headliner,
    demoLink: "https://josevillaprz.github.io/headliner-app/#/",
    codeLink: "https://github.com/josevillaprz/headliner-app",
  },
  {
    title: "Origin Fitness",
    description:
      "Origin Fitness is a simple but modern gym site. Users can see the programs offered at the gym and even checkout the pricing.",
    tags: ["JavaScript", "HTML", "CSS"],
    image: origin,
    demoLink: "https://josevillaprz.github.io/",
    codeLink: "https://github.com/josevillaprz/josevillaprz.github.io",
  },
  {
    title: "Quiz App",
    description:
      "This app is a simple quiz application. I created this app with the ability to log in with github's Oauth. I created a MySQl database with sequelize for managing quiz data.",
    tags: ["React", "MySQL", "NodeJs", "Express", "CSS"],
    image: quiz,
    demoLink: "/",
    codeLink: "https://github.com/josevillaprz/quiz_app",
  },
];

const Projects = () => {
  return (
    <div>
      <Header />
      <main className={styles.mainContainer}>
        <H1 text="Projects" />
        <ProjectList projects={projectData} />
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
