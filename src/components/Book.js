import styles from "@/styles/Book.module.css";
import Board from "./Board";

// import { useState } from "react";

export default function Book() {
  // const { currentLeague, setCurrentLeague } = useState();

  return (
    <main className={styles.main}>
      <div className={styles.selector}>heh</div>
      <div className={styles.book}>
        <Board />
      </div>
      <div className={styles.cart}>haha</div>
    </main>
  );
}

Book.propTypes = {};
