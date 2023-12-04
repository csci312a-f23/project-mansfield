import { useSession } from "next-auth/react";
import PropTypes from "prop-types";
import styles from "@/styles/Book.module.css";
import BetShape from "../shapes/BetShape";
import Bet from "./Bet";

export default function Cart({ cart, setCart }) {
  const { data: session } = useSession();

  const cartArr = cart.map((g) => (
    <li key={g.BetID}>
      <Bet bet={g} cart={cart} setCart={setCart} />
    </li>
  ));

  const setCartPend = () => {
    const betsToPost = cart.filter((b) => b.Amount > 0);

    betsToPost.forEach((bet) => {
      fetch(`/api/${session.user.id}/active`, {
        method: "POST",
        body: JSON.stringify({
          ...bet,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
    });

    setCart(cart.filter((b) => b.Amount === 0));
  };

  return (
    <div className={styles.gameList}>
      <h4>Cart</h4>
      {cart.length === 0 ? (
        <h5>Make some bets!</h5>
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
};
