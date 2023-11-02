/* eslint-disable react/jsx-props-no-spreading,react/prop-types */
import "@/styles/globals.css";
import { /* useEffect, */ useState } from "react";
// import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  // const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(true);

  /*   useEffect(() => {
    if (!loggedIn) {
      router.push("/login");
    } else {
      router.push("/");
    }
  }, [loggedIn]); */

  const props = {
    ...pageProps,
    loggedIn,
    setLoggedIn,
  };

  return <Component {...props} />;
}
