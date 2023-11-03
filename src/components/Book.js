import styles from "@/styles/Book.module.css";
import { useState } from "react";
import Board from "./Board";
import Cart from "./Cart";

export default function Book() {
  // const { currentLeague, setCurrentLeague } = useState();

  const [cart, setCart] = useState([]);

  return (
    <main className={styles.main}>
      <div className={styles.selector}>
        <h4>Leagues</h4>
        heh
      </div>
      <div className={styles.book}>
        <Board cart={cart} setCart={setCart} />
      </div>
      <div className={styles.cart}>
        <Cart cart={cart} setCart={setCart} />
      </div>
    </main>
  );
}

Book.propTypes = {};
