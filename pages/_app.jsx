import React from "react";
import "../styles/global.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function _app({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default _app;
