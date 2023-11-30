// This component displays upcoming games

// import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "@/styles/Book.module.css";
// import games from "../../data/nfl2023reg7.json";
import Game from "./Game";
import BetShape from "../shapes/BetShape";
import NBA from "../../../data/nba_odds.json";
import NFL from "../../../data/odds.json";
import NHL from "../../../data/nhl_odds.json";
import NCAAF from "../../../data/ncaaf_odds.json";

export default function Board({ cart, setCart, currentLeague }) {
  // this is the implementation for the Odds api, it is working I just disabled it to make sure
  // that we don't reach the limit of our api
  // const [games, setGames] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch(
  //       `https://api.the-odds-api.com//v4/sports/${currentLeague.key}/odds/?apiKey={apikey}&regions=us&markets=h2h,spreads,totals&bookmakers=fanduel`,
  //     );
  //     if (response.ok) {
  //       const gameOdds = await response.json();
  //       setGames(gameOdds);
  //     }
  //   })();
  // }, [currentLeague]);

  // const gamesArr = [...games].map((g) => (
  //   <li key={g.id}>
  //     <Game game={g} cart={cart} setCart={setCart} />
  //   </li>
  // ));

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
  cart: PropTypes.arrayOf(BetShape).isRequired,
  setCart: PropTypes.func.isRequired,
  currentLeague: PropTypes.string.isRequired,
};
