import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Link from "../../components/Link/Link";
import H1 from "../../components/H1/H1";
import TechList from "../../components/TechList/TechList";
import profilePic from "../../assets/images/headshot.webp";
import { HiOutlineDownload } from "react-icons/hi";
import styles from "./About.module.css";
import H2 from "../../components/H2/H2";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div>
      <Helmet>
        <meta content="Web Developer Portfolio" />
        <title>Jose Villaperez | About</title>
      </Helmet>
      <Header />
      <main className={styles.mainContainer}>
        <H1 text="About" />
        <section className={styles.aboutSection}>
          <div className={styles.textContainer}>
            <H2 text="Hello, my name is Jose Villaperez" />
            <p className={styles.body}>
              I'm a full-stack web developer and UI/UX enthusiast from Nampa,
              ID. I recently graduated from Full Sail University where I earned
              my bachelor's in Web Design & Development.
            </p>
            <p className={styles.body}>
              I've always been interested in technology, and I've always enjoyed
              being creative. When I started building websites for my friends,
              it quickly became clear that this was the perfect combination of
              both things. My first love is front-end development, but I also
              love diving into back-end development. I love working on teams
              because it's always fun to see how everyone approaches a problem
              differently.
            </p>
            <p className={styles.body}>
              When I'm not at my workspace coding and creating, you'll probably
              find me writing music or spending time with my family. If you're
              looking for a web developer, please download my resume below or
              head on over to my contact page to send me a message!
            </p>
            <Link
              text="Resume"
              icon={
                <HiOutlineDownload size={20} style={{ marginRight: "5" }} />
              }
              src="/JoseVillaResumeResume.pdf"
              download="JoseVillaResumeResume"
            />
          </div>
          <div
            className={styles.imgContainer}
            data-aos="flip-up"
            data-aos-easing="ease-in-out-back"
            data-aos-duration="1500"
          >
            <img
              src={profilePic}
              alt="jose villaperez web developer"
              className={styles.img}
            />
          </div>
        </section>
        <section className={styles.techSection}>
          <h2 className={styles.h2}>Tech Stack</h2>
          <TechList />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
