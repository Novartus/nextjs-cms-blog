import React from "react";
import Link from "next/link";
import Meta from "../components/Meta";
import postsServices from "../services/posts";
import styles from "../styles/Home.module.css";

const Posts = ({ posts }) => {
  return (
    <>
      <Meta title={"Posts"} description={"Posts page"} />

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
