import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./Contact.module.css";
import H1 from "../../components/H1/H1";
import H2 from "../../components/H2/H2";
import Form from "../../components/Form/Form";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import LinkList from "../../components/LinkList/LinkList";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <meta content="Web Developer Portfolio" />
        <title>Jose Villaperez | Contact</title>
      </Helmet>
      <Header />
      {/* Main container */}
      <main className={styles.mainContainer}>
        <H1 text="Contact" />
        <H2 text="Looking forward to hearing from you!" />
        {/* Container */}
        <div className={styles.container}>
          {/* Form section */}
          <section
            className={styles.formSection}
            data-aos="fade-down"
            data-aos-easing="ease-in-out-back"
            data-aos-duration="1000"
          >
            <Form />
          </section>
          {/* Contact details section */}
          <section
            className={styles.listSection}
            data-aos="fade-left"
            data-aos-easing="ease-in-out-back"
            data-aos-duration="1000"
          >
            <ul className={styles.detailsList}>
              <li className={styles.item}>
                <FaPhoneAlt className={styles.icon} size={25} />
                <address className={styles.address}>
                  jose.villaprz@gmail.com
                </address>
              </li>
              <li className={styles.item}>
                <FaEnvelope className={styles.icon} size={25} />
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
