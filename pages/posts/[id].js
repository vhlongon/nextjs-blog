import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout";
import Date from "../../components/Date";
import { getAllPostsById, getPostData } from "../../lib/posts";
import * as utilStyles from "../../styles/utils";

export const getStaticPaths = async () => {
  // Return a list of possible value for id
  const paths = getAllPostsById();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id);
  return { props: { postData } };
};

const Post = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1 css={utilStyles.heading2Xl}>{postData.title}</h1>
      <div css={utilStyles.lightText}>
        <Date dateString={postData.date} />
        <br />
        <span>id: {postData.id}</span>
      </div>
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
};

export default Post;
