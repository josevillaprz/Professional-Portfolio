import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./Contact.module.css";
import H1 from "../../components/H1/H1";
import H2 from "../../components/H2/H2";
import Form from "../../components/Form/Form";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import LinkList from "../../components/LinkList/LinkList";

const Contact = () => {
  return (
    <div>
      <Header />
      <main className={styles.mainContainer}>
        <H1 text="Contact" />
        <H2 text="Looking forward to hearing from you!" />
        <div className={styles.container}>
          <section className={styles.formSection}>
            <Form />
          </section>
          <section className={styles.listSection}>
            <ul>
              <li className={styles.item}>
                <FaPhoneAlt className={styles.icon} size={30} />
                <address className={styles.address}>
                  jose.villaprz@gmail.com
                </address>
              </li>
              <li className={styles.item}>
                <FaEnvelope className={styles.icon} size={30} />
                <address className={styles.address}>
                  {"+1 (208) 600-3097"}
                </address>
              </li>
            </ul>
            <LinkList />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
