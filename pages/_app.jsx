import React from "react";
import "../styles/global.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfileImage from "../components/ProfileImage";
import styles from "../styles/index.module.css";

function _app({ Component, pageProps }) {
  return (
    <>
      <main>
        <Navbar />
        <section className={styles.bodyContainer}>
          <Component {...pageProps} />
          <ProfileImage />
        </section>
        <Footer />
      </main>
    </>
  );
}

export default _app;
