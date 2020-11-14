import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/Layout";
import Alert from "../../components/Alert";

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <Alert type="success">Success</Alert>
      <Alert type="error">Error</Alert>
      <Alert>Neutral</Alert>
    </Layout>
  );
};

export default FirstPost;
