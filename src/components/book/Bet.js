import PropTypes from "prop-types";
import styles from "@/styles/Book.module.css";
import GameShape from "../shapes/GameShape";

export default function Bet({ bet, cart, setCart }) {
  function removeBetFromCart() {
    setCart(cart.filter((b) => b.id !== bet.id));
  }

  return (
    <div className={styles.bet}>
      <h5>{`${bet.home_team} vs. ${bet.away_team}`}</h5>
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
