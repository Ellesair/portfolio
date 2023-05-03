import React from "react";
import styles from "../styles/contact.module.css"

function contact() {
  return (
    <>
    <section className={styles.contactContainer}>
      <h2>Send me something!</h2>
      <form className={styles.contactForm}>
        <label>
          <input type="text" aria-label="Title" placeholder="Title"></input>
        </label>
        <label>
          <input
            type="text"
            aria-label="Your Name"
            placeholder="Your Name"
          ></input>
        </label>
        <label>
          <textarea
            aria-label="Enter your text here"
            placeholder="Enter your text here"
            rows="20"
          ></textarea>
        </label>
        <button aria-label="Submit" type="submit">
          SUBMIT
        </button>
      </form>
    </section>
    </>
  );
}

export default contact;
