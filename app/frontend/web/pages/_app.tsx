import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";
import Nav from '../components/layout/Nav'
import styles from "../styles/Home.module.css";
import Image from "next/image";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container m-4 pr-7 pl-7 min-h-full min-w-full">
      <Head>
        <title>Anubi Digital Coding Interview</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <Nav/>
        <main className={styles.container}>
          <Component {...pageProps} />
        </main>
        <footer className={styles.footer}>
        <a
          href="https://www.anubidigital.com"
          target="_blank"
          rel="noopener noreferrer">
          <span className={styles.logo}>
            <Image src="/logo.png" alt="Vercel Logo" width={120} height={32} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export default MyApp
