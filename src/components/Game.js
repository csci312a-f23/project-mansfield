import PropTypes from "prop-types";
import styles from "@/styles/Book.module.css";
import GameShape from "./GameShape";

export default function Game({ game, cart, setCart }) {
  const gameTime = new Date(game.DateTimeUTC);

  // don't forget to change this on  2 a.m. EST Sunday, March 10
  gameTime.setHours(gameTime.getHours() - 4);

  function addBetToCart() {
    if (!cart.includes(game)) setCart([...cart, game]);
  }

  return (
    <div className={styles.game}>
      <h2>{`${game.HomeTeam} vs. ${game.AwayTeam}`}</h2>
      <p>
        Game time:
        <br />
        <span>{`${gameTime.toLocaleString()} EST`}</span>
      </p>
      <div>
        <button
          type="button"
          disabled={cart.includes(game)}
          onClick={addBetToCart}
        >
          Add bet
        </button>
      </div>
    </div>
  );
}

Game.propTypes = {
  game: GameShape.isRequired,
  cart: PropTypes.arrayOf(GameShape).isRequired,
  setCart: PropTypes.func.isRequired,
};
