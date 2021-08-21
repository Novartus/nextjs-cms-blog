import React from "react";
import Link from "next/link";
import Head from "next/head";
import postsServices from "../services/posts";
import HeaderNav from "./header";
import styles from "../styles/Home.module.css";

const Posts = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts</title>
        <meta name="description" content="Posts page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderNav />

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Posts Page</h1>
        {posts.map(({ document, slug }) => (
          <div className={styles.grid} key={slug}>
            <section key={slug}>
              <h2>{document.attributes.title}</h2>
              <p className={styles.description}>
                {document.attributes.description}
              </p>
              <Link href="/post/[slug]" as={`/post/${slug}`}>
                <a className={styles.card}>Click Here to read more about it</a>
              </Link>
            </section>
          </div>
        ))}
      </main>
    </>
  );
};

Posts.getInitialProps = () => {
  return postsServices.getAll();
};

export default Posts;
