/* eslint-disable react/jsx-props-no-spreading,react/prop-types */
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import Router from "next/router";
import { initializeApp } from "firebase/app";
import { SessionProvider } from "next-auth/react";
import { firebaseConfig } from "../firebase-config";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [currentPending, setCurrentPending] = useState([]);
  initializeApp(firebaseConfig);

  useEffect(() => {
    if (loggedIn) {
      Router.push("/");
    } else {
      Router.push("/login");
    }
  }, [loggedIn]);

  const props = {
    ...pageProps,
    loggedIn,
    setLoggedIn,
    user,
    setUser,
    currentPending,
    setCurrentPending,
  };

  return (
    <SessionProvider session={session}>
      <Component {...props} />
    </SessionProvider>
  );
}
