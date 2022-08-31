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
              I am a web developer with three years of academic experience from
              Full Sail University, where I earned my bachelor's in Web Design &
              Development. I have a passion for creating clean and creative
              designs while also creating accessible and responsive sites and
              web applications.
            </p>
            <p className={styles.body}>
              I have experience in frontend development, backend development,
              and design. My experience has allowed me to understand how each of
              these components works together to create a cohesive product that
              is easy to use and understand.
            </p>
            <p className={styles.body}>
              I'm always looking for new ways to improve my work. I love
              learning new technologies, always on the hunt for new tools and
              resources that can help me do my job better. If you're looking for
              a web developer, please download my resume below or head on over
              to my contact page to send me a message!
            </p>
            <Link
              text="Resume"
              icon={
                <HiOutlineDownload size={20} style={{ marginRight: "5" }} />
              }
              src="/JoseVillaperezResume.pdf"
              download="JoseVillaperezResume"
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
