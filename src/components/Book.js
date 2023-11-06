import styles from "@/styles/Book.module.css";
import { useState } from "react";
import Board from "./Board";
import Cart from "./Cart";
import Leagues from "./Leagues";
import data from "../../data/selectedsports.json";

export default function Book() {
  // const { currentLeague, setCurrentLeague } = useState();

  const [cart, setCart] = useState([]);
  const [league, setCurrentLeague] = useState(null);
  const leaguesCollection = data;

  return (
    <main className={styles.main}>
      <div className={styles.selector}>
        <Leagues
          leaguesCollection={leaguesCollection}
          setCurrentLeague={setCurrentLeague}
        />
      </div>
      <div className={styles.book}>
        <Board cart={cart} setCart={setCart} league={league} />
      </div>
      <div className={styles.cart}>
        <Cart cart={cart} setCart={setCart} />
      </div>
    </main>
  );
}

Book.propTypes = {};
