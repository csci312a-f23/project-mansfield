// import PropTypes from "prop-types";
import styles from "@/styles/Book.module.css";
import { useState } from "react";
import Board from "./Board";
import Cart from "./Cart";
import Leagues from "./Leagues";
import data from "../../data/selectedsports.json";

export default function Book(/* { setCurrentPending } */) {
  const [cart, setCart] = useState([]);
  const [currentLeague, setCurrentLeague] = useState(null);
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
        {currentLeague ? (
          <Board
            cart={cart}
            setCart={setCart}
            currentLeague={
              currentLeague
            } /* setCurrentPending={setCurrentPending} */
          />
        ) : (
          <h4>Upcoming Games</h4>
        )}
      </div>
      <div className={styles.cart}>
        <Cart cart={cart} setCart={setCart} />
      </div>
    </main>
  );
}

Book.propTypes = {
  // setCurrentPending: PropTypes.func.isRequired,
};
