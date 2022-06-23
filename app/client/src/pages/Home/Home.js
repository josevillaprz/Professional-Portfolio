import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Home.module.css";
import Link from "../../components/Link/Link";
import { HiOutlineDownload } from "react-icons/hi";
import Character from "../../assets/graphics/character.svg";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <meta content="Web Developer Portfolio" />
        <title>Jose Villaperez | Home</title>
      </Helmet>
      <Header />
      <main className={styles.mainContainer}>
        <section
          className={styles.textContainer}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p className={styles.subheading}>Hello,</p>
          <h1 className={styles.heading}>
            I'm <span className={styles.highlight}>Jose Villaperez</span>
            {"\n"} a Web Developer
          </h1>
          <p className={styles.body}>
            Based in <strong className={styles.strong}>Nampa, ID.</strong> I
            build everything from small business websites to rich interactive
            web applications.
          </p>
          <Link
            text="Resume"
            icon={<HiOutlineDownload size={20} style={{ marginRight: "5" }} />}
            src="/JoseVillaResumeResume.pdf"
            download="JoseVillaResumeResume"
          />
        </section>
        <section
          className={styles.imgContainer}
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <img src={Character} alt="character graphic" className={styles.img} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
