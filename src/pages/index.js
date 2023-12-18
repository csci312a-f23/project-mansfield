import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

import styles from "@/styles/Home.module.css";
import Book from "../components/book/Book";

export default function Home() {
  const { data: session } = useSession({
    required: true,
  });
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Implementing the setInterval method every 10 seconds
    const interval = setInterval(() => {
      // fetch scores from firebase data against our bets to fulfill bets if completed games
      setCount(count + 1);
      if (session) {
        fetch(`api/${session.user.id}/active`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
      }
    }, 10000);

    // Clearing the interval
    return () => clearInterval(interval);
  }, [count, session]);

  return session ? (
    <div className={styles.home}>
      <Book />
    </div>
  ) : (
    <div>Redirecting</div>
  );
}
