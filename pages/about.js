import React from "react";
import Head from "next/head";
import HeaderNav from "./header";
import styles from "../styles/Home.module.css";

export default () => (
  <>
    <Head>
      <title>About</title>
      <meta name="description" content="About page" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <HeaderNav />

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
          className={styles.card}
        >
          Visit Me
        </a>
      </p>
    </main>
  </>
);
