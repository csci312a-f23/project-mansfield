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
      {cart.length === 0 ? (
        <p>Make some bets!</p>
      ) : (
        <>
          <ul>{cartArr}</ul>
          <button
            className={styles.placebutton}
            type="button"
            onClick={() => setCart([])}
          >
            Place all bets
          </button>
        </>
      )}
    </div>
  );
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(GameShape).isRequired,
  setCart: PropTypes.func.isRequired,
};
