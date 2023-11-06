import PropTypes from "prop-types";
import styles from "@/styles/Book.module.css";
// import games from "../../data/nfl2023reg7.json";
import Game from "./Game";
import GameShape from "./GameShape";
import NBA from "../../data/nba_odds.json";
import NFL from "../../data/odds.json";
import NHL from "../../data/nhl_odds.json";
import NCAAF from "../../data/ncaaf_odds.json";

export default function Board({ cart, setCart, currentLeague }) {
  if (currentLeague.title === "NBA") {
    const gamesArr = [...NBA].map((g) => (
      <li key={g.id}>
        <Game game={g} cart={cart} setCart={setCart} />
      </li>
    ));

    return (
      <div className={styles.gameList}>
        <h4>Upcoming Games</h4>
        <ul>{gamesArr}</ul>
      </div>
    );
  }
  if (currentLeague.title === "NFL") {
    const gamesArr = [...NFL].map((g) => (
      <li key={g.id}>
        <Game game={g} cart={cart} setCart={setCart} />
      </li>
    ));

    return (
      <div className={styles.gameList}>
        <h4>Upcoming Games</h4>
        <ul>{gamesArr}</ul>
      </div>
    );
  }
  if (currentLeague.title === "NHL") {
    const gamesArr = [...NHL].map((g) => (
      <li key={g.id}>
        <Game game={g} cart={cart} setCart={setCart} />
      </li>
    ));

    return (
      <div className={styles.gameList}>
        <h4>Upcoming Games</h4>
        <ul>{gamesArr}</ul>
      </div>
    );
  }

  const gamesArr = [...NCAAF].map((g) => (
    <li key={g.id}>
      <Game game={g} cart={cart} setCart={setCart} />
    </li>
  ));

  return (
    <div className={styles.gameList}>
      <h4>Upcoming Games</h4>
      <ul>{gamesArr}</ul>
    </div>
  );
}

Board.propTypes = {
  cart: PropTypes.arrayOf(GameShape).isRequired,
  setCart: PropTypes.func.isRequired,
  currentLeague: PropTypes.string.isRequired,
};
