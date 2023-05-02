import React from "react";
import "../styles/global.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import ProfileImage from "../components/ProfileImage";

function _app({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <ProfileImage />
      <Footer />
    </>
  );
}

export default _app;
