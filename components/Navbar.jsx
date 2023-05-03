import Link from "next/link";
import React from "react";
import styles from "../styles/navbar.module.css";
import { Questrial } from "next/font/google";

const questrial = Questrial({
  weight: "400",
  subsets: ["latin"],
});

function navbar() {
  return (
    <>
      <nav className={questrial.className}>
        <ul className={styles.navbarContainer}>
          <li className={styles.link}>
            <Link aria-label="Home" href="/">
              HOME
            </Link>
          </li>
          <li className={styles.link}>
            <Link aria-label="About" href="/about">
              ABOUT
            </Link>
          </li>
          <li className={styles.link}>
            <Link aria-label="Projects" href="/projects">
              PROJECTS
            </Link>
          </li>
          <li className={styles.link}>
            <Link aria-label="Contact" href="/contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default navbar;
