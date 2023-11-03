import PropTypes from "prop-types";
import styles from "@/styles/Book.module.css";
import GameShape from "./GameShape";
import Bet from "./Bet";

export default function Cart({ cart, setCart }) {
  const cartArr = cart.map((g) => (
    <li key={g.GameID}>
      <Bet bet={g} cart={cart} setCart={setCart} />
    </li>
  ));

  return (
    <div className={styles.gameList}>
      <h4>Cart</h4>
      {cart.length > 0 ? <ul>{cartArr}</ul> : <p>Make some bets!</p>}
    </div>
  );
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(GameShape).isRequired,
  setCart: PropTypes.func.isRequired,
};
