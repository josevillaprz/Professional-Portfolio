import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Home.module.css";
import Button from "../../components/Buttons/Button";
import { HiOutlineDownload } from "react-icons/hi";
import Character from "../../assets/graphics/character.svg";
// import File from "../../assets/data/JoseVillaResumeResume.pdf";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.mainContainer}>
        <section className={styles.textContainer}>
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
          <Button
            text="Resume"
            icon={<HiOutlineDownload size={20} style={{ marginRight: "5" }} />}
            src="/JoseVillaResumeResume.pdf"
            download="JoseVillaResumeResume"
          />
        </section>
        <section className={styles.imgContainer}>
          <img src={Character} alt="character graphic" className={styles.img} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
