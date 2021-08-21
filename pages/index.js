import { Component } from "react";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import HeaderNav from "./header";
import styles from "../styles/Home.module.css";
import { attributes, body as homeContent } from "../content/home.md";

export default class Home extends Component {
  render() {
    const { title, cats } = attributes;
    return (
      <>
        <Head>
          <title>Home</title>
          <meta name="description" content="Home page" />
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <article>
          <HeaderNav />

          <main className={styles.main}>
            <h1 className={styles.title}>Welcome to {title}</h1>

            <p className={styles.description}>
              Get started by exploring cats or{" "}
              <a href="/posts" style={{ color: "#0070f3" }}>
                Posts
              </a>{" "}
              !
            </p>

            <ReactMarkdown source={homeContent} />
            <div className={styles.grid}>
              {cats.map((cat, k) => (
                <div key={k} className={styles.card}>
                  <h2>{cat.name} &rarr; </h2>
                  <p>{cat.description}</p>
                </div>
              ))}
            </div>
          </main>
        </article>
      </>
    );
  }
}
