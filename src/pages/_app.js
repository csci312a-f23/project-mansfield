/* eslint-disable react/jsx-props-no-spreading,react/prop-types */
import "@/styles/globals.css";
import { initializeApp } from "firebase/app";
import { SessionProvider } from "next-auth/react";
import { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import { firebaseConfig } from "../firebase-config";

export default function App({ Component, pageProps }) {
  initializeApp(firebaseConfig);
  const [currentPending, setCurrentPending] = useState([]);
  const [balance, setBalance] = useState();

  const props = {
    ...pageProps,
    currentPending,
    setCurrentPending,
  };

  /**
   * I am not passing any session={session}. Be advised.
   *
   * Passing the session page prop to the <SessionProvider> allows you to avoid checking
   * the session twice on pages that support both server and client side rendering.
   */
  return (
    <SessionProvider>
      <Head>
        <title>Mansfield Sports Book</title>
        <link rel="icon" href="/mountains-svgrepo-com.svg" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Navbar balance={balance} setBalance={setBalance} />
      <Component {...props} />
    </SessionProvider>
  );
}
