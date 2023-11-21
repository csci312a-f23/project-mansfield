/* eslint-disable react/jsx-props-no-spreading,react/prop-types */
import "@/styles/globals.css";
import { initializeApp } from "firebase/app";
import { SessionProvider } from "next-auth/react";
import { firebaseConfig } from "../firebase-config";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  initializeApp(firebaseConfig);

  const props = {
    ...pageProps,
  };

  return (
    <SessionProvider session={session}>
      <Component {...props} />
    </SessionProvider>
  );
}
