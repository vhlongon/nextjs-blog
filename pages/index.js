import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Nextjs blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Learn <Link href="/posts/first-post">Next.js!</Link>
        </h1>
      </main>
    </div>
  );
}
