import PropTypes from "prop-types";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import Navbar from "../components/Navbar";
import Book from "../components/book/Book";

export default function Home({ setCurrentPending }) {
  const { data: session } = useSession({
    required: true,
  });

  // const balance = 1000;
  const [balance, setBalance] = useState();

  useEffect(() => {
    (async () => {
      if (session && !(balance !== undefined)) {
        const response = await fetch(`api/${session.user.id}/`, {
          method: "POST",
          body: JSON.stringify({
            username: session.user.name,
            email: session.user.email,
          }),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        if (response.status === 200) {
          const data = await response.json();
          setBalance(data.accountBalance);
        }
      }
    })();
  }, [session]);

  return balance !== undefined ? (
    <div className={styles.home}>
      <Navbar balance={balance} user={session.user.name} />
      <Book setCurrentPending={setCurrentPending} />
    </div>
  ) : (
    <div>Redirecting</div>
  );
}

Home.propTypes = {
  setCurrentPending: PropTypes.func.isRequired,
};
