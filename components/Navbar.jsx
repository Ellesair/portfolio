import Link from "next/link";
import React from "react";
import styles from "../styles/navbar.module.css";

function navbar() {
  return (
    <>
      <nav>
        <ul className={styles.navbarContainer}>
          <li className={styles.link}>
            <Link aria-label="Home" href="/">
              Home
            </Link>
          </li>
          <li className={styles.link}>
            <Link aria-label="About" href="/about">
              About
            </Link>
          </li>
          <li className={styles.link}>
            <Link aria-label="Projects" href="/projects">
              Projects
            </Link>
          </li>
          <li className={styles.link}>
            <Link aria-label="Contact" href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default navbar;
