import React from "react";
import Link from "next/link";
import styles from "../styles/footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

function footer() {
  return (
    <>
      <section className={styles.socialLinks}>
        <Link href="https://github.com/Ellesair" target="_blank">
          <FontAwesomeIcon className={styles.socialLink} icon={faGithub} />
        </Link>
        <Link href="https://www.linkedin.com/in/krystallake/" target="_blank">
        <FontAwesomeIcon className={styles.socialLink} icon={faLinkedinIn} />
        </Link>
      </section>
    </>
  );
}

export default footer;
