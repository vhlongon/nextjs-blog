import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import * as utilStyles from "../styles/utils";

const Home = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Front-end developer 🇧🇷 🇸🇪</p>
        <p>
          (Learning how to use nextjs{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
};

export default Home;
