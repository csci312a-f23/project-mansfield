/* eslint-disable react/jsx-props-no-spreading,react/prop-types */
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { initializeApp } from "firebase/app";
import {firebaseConfig} from "../firebase-config";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);

  const app = initializeApp(firebaseConfig);

  useEffect(() => {
    if (!loggedIn) {
      router.push("/login");
    } else {
      router.push("/");
    }
  }, [loggedIn]);

  const props = {
    ...pageProps,
    loggedIn,
    setLoggedIn,
  };

  return <Component {...props} />;
}
