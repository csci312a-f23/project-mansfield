import PropTypes from "prop-types";
import styles from "@/styles/Book.module.css";
import GameShape from "./GameShape";

export default function Bet({ bet, cart, setCart }) {
  function removeBetFromCart() {
    setCart(cart.filter((b) => b.GameID !== bet.GameID));
  }

  return (
    <div className={styles.bet}>
      <h2>{`${bet.HomeTeam} vs. ${bet.AwayTeam}`}</h2>
      <div>
        <button type="button" onClick={removeBetFromCart}>
          remove from cart
        </button>
      </div>
    </div>
  );
}

Bet.propTypes = {
  bet: GameShape.isRequired,
  cart: PropTypes.arrayOf(GameShape).isRequired,
  setCart: PropTypes.func.isRequired,
};
