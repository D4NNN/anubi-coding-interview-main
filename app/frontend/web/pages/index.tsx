import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Transaction from "../types/transaction";
import styles from "../styles/Home.module.css";
import Table from "../components/Table";
import {baseUrl} from '../config'

const Home  = ({txs}: {txs: Transaction[]}) => {

  const tableHead = [ "", "Tx Id", "Amount","Asset","Symbol","Created On", "By", "Action"]

  const tableData = {
    tHeaderData: tableHead,
    tBodyData: txs
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Anubi Digital Coding Interview</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>

      <main className={styles.main}>
        <Image src={"/logo.png"} width={120} height={32} />
        <Table data={tableData}/>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.anubidigital.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{"Dan"}
          <span className={styles.logo}>
            <Image src="/logo.png" alt="Vercel Logo" width={120} height={32} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${baseUrl}/v1/transactions`);
  const txs = await res.json();

  return {
    props: {
      txs
    }
  }

}

export default Home;
