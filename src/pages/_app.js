/* eslint-disable react/jsx-props-no-spreading,react/prop-types */
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";


export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [currentPending, setCurrentPending] = useState(null);


  useEffect(() => {
    if (loggedIn) {
      router.push("/");
    } else {
      router.push("/login");
    }
  }, [loggedIn, router]);

  const props = {
    ...pageProps,
    loggedIn,
    setLoggedIn,
    user,
    setUser,
    currentPending,
    setCurrentPending,
  };

  return <Component {...props} />;
}
