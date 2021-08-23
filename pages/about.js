import React from "react";
import Meta from "../components/Meta";
import styles from "../styles/Home.module.css";

const About = () => (
  <>
    <Meta title={"About"} description={"About page"} />

    <main className={styles.main}>
      <h1 className={styles.title}>Welcome to About Page</h1>
      <p className={styles.description}>Hello, My name is Abhee Hudani</p>
      <p className={styles.description}>
        This is just the simple demo blog application with NextJS + Netlify CMS
      </p>
      <p className={styles.description}>
        <a
          href="https://novartus.github.io"
          target="_blank"
          rel="noreferrer"
          className={styles.card}
        >
          Visit Me
        </a>
      </p>
    </main>
  </>
);

export default About;
