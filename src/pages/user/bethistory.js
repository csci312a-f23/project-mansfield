import PropTypes from "prop-types";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function BetHistory({ setLoggedIn }) {
  const logout = () => {
    setLoggedIn(false);
  };

  return (
    <>
      <Head>
        <title>Bet history</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.description}>
          <Link href="/">
            <p>Back to home</p>
          </Link>
          <p>Bet history page</p>
          <p onClick={logout}>Log out</p>
        </div>
      </main>
    </>
  );
}

BetHistory.propTypes = {
  // loggedIn: PropTypes.bool.isRequired,
  setLoggedIn: PropTypes.func.isRequired,
};