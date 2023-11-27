import PropTypes from "prop-types";
import styles from "@/styles/Book.module.css";
import BetShape from "../shapes/BetShape";
import Bet from "./Bet";

export default function Cart({ cart, setCart, setCurrentPending }) {
  const cartArr = cart.map((g) => (
    <li key={g.id}>
      <Bet bet={g} cart={cart} setCart={setCart} />
    </li>
  ));

  const setCartPend = () => {
    setCurrentPending(cart.filter((b) => b.Amount !== 0));
    const newCart = cart.filter((b) => b.Amount === 0);
    setCart([]);
    setCart(newCart);
  };

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
            onClick={() => setCartPend([])}
          >
            Place Bets
          </button>
        </>
      )}
    </div>
  );
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(BetShape).isRequired,
  setCart: PropTypes.func.isRequired,
  setCurrentPending: PropTypes.func.isRequired,
};
