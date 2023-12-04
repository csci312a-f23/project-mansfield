import styles from "@/styles/Book.module.css";
import { useState } from "react";
import Board from "./Board";
import Cart from "./Cart";
import Leagues from "./Leagues";
import data from "../../../data/selectedsports.json";

export default function Book() {
  const [cart, setCart] = useState([]);
  const [currentLeague, setCurrentLeague] = useState(null);
  const leaguesCollection = data;

  return (
    <main className={styles.main}>
      <div className={styles.selector}>
        <Leagues
          leaguesCollection={leaguesCollection}
          setCurrentLeague={setCurrentLeague}
          currentLeague={currentLeague}
        />
      </div>
      <div className={styles.book}>
        {currentLeague ? (
          <Board cart={cart} setCart={setCart} currentLeague={currentLeague} />
        ) : (
          <div>
            <h4>Upcoming Games</h4>
            <h5>Select a League!</h5>
          </div>
        )}
      </div>
      <div className={styles.cart}>
        <Cart cart={cart} setCart={setCart} />
      </div>
    </main>
  );
}
