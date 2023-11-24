/* eslint-disable react/jsx-props-no-spreading,react/prop-types */
import "@/styles/globals.css";
import { initializeApp } from "firebase/app";
import { SessionProvider } from "next-auth/react";
import { firebaseConfig } from "../firebase-config";

export default function App({ Component, pageProps }) {
  initializeApp(firebaseConfig);

  /*
  I am not passing any session={session}. Be advised.
  
  Passing the session page prop to the <SessionProvider> allows you to avoid checking
  the session twice on pages that support both server and client side rendering.
  */
  return (
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
