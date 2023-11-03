import PropTypes from "prop-types";
import styles from "@/styles/Book.module.css";
import games from "../../data/nfl2023reg7.json";
import Game from "./Game";
import GameShape from "./GameShape";

export default function Board({ cart, setCart }) {
  const gamesArr = games.map((g) => (
    <li key={g.GameID}>
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
};
