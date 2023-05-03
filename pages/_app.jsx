import React from "react";
import "../styles/global.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfileImage from "../components/ProfileImage";
import styles from "../styles/index.module.css";
import { Red_Hat_Text } from "next/font/google";

const red_hat_text = Red_Hat_Text({ 
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'] })

function _app({ Component, pageProps }) {
  return (
    <>
      <main className={red_hat_text.className}>
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
