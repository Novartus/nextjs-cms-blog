import React from "react";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import HeaderNav from "../header";
import styles from "../../styles/Home.module.css";

const Post = ({ attributes, content }) => {
  return (
    <>
      <Head>
        <title>{attributes.title}</title>
      </Head>
      <HeaderNav />
      <main className={styles.main}>
        <h1 className={styles.title}> {attributes.title}</h1>
        <p className={styles.description}>{attributes.description}</p>
        {attributes.data.map((data, k) => (
          <div key={k} className={styles.card}>
            <h2>{data.name} &rarr; </h2>
            <p>{data.description}</p>
          </div>
        ))}
        <ReactMarkdown source={content} />
      </main>
    </>
  );
};

Post.getInitialProps = async ({ query }) => {
  const markdownData = await import(`../../content/posts/${query.slug}.md`);
  const { attributes, body: content } = markdownData;
  return { attributes, content };
};

export default Post;
