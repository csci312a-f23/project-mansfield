import PropTypes from "prop-types";
import { useState } from "react";
import styles from "@/styles/Book.module.css";
import BetShape from "../shapes/BetShape";

function Wager({ wagerAmount, winAmount, setAmounts, removeBetFromCart }) {
  return (
    <div>
      <p>
        {" "}
        {`Wager: `}
        <input
          type="number"
          min="0"
          value={wagerAmount}
          onChange={(event) =>
            setAmounts(parseInt(event.target.value, 10), null)
          }
        />
        {` To Win: `}
        <input
          type="number"
          min="0"
          value={winAmount}
          onChange={(event) =>
            setAmounts(null, parseInt(event.target.value, 10))
          }
        />
        <button type="button" onClick={removeBetFromCart}>
          remove
        </button>
      </p>
    </div>
  );
}

export default function Bet({ bet, cart, setCart }) {
  const [wagerAmount, setWagerAmount] = useState(0);
  const [winAmount, setWinAmount] = useState(0);

  const setAmounts = (wager, toWin) => {
    if (wager) {
      setWagerAmount(Math.round(wager * 100) / 100);
      setWinAmount(Math.round(wager * bet.Odds * 100) / 100);
      // eslint-disable-next-line no-param-reassign
      bet.Amount = Math.round(wager * 100) / 100;
      // eslint-disable-next-line no-param-reassign
      bet.WinAmount = Math.round(wager * bet.Odds * 100) / 100;
    } else {
      setWagerAmount(Math.round((toWin / bet.Odds) * 100) / 100);
      setWinAmount(Math.round(toWin * 100) / 100);
      // eslint-disable-next-line no-param-reassign
      bet.Amount = Math.round((toWin / bet.Odds) * 100) / 100;
      // eslint-disable-next-line no-param-reassign
      bet.WinAmount = Math.round(toWin * 100) / 100;
    }
  };

  const removeBetFromCart = () => {
    /* const tempgame = cart.filter((b) => (b.GameID === bet.GameID));
    const tempbet = tempgame.filter((b) => (b.BetType === bet.BetType)); */

    // const temp = cart.filter((b) => b.GameID !== bet.GameID);
    // setCart(temp.filter((b) => b.BetType !== bet.BetType));
    setCart(cart.filter((b) => b.GameID !== bet.GameID));
  };

  const home = bet.HomeTeam.split(" ");
  const away = bet.AwayTeam.split(" ");

  // if "spread home"
  const spread = bet.Spread >= 0 ? `+${bet.Spread}` : bet.Spread;
  let team = bet.HomeTeam;
  let betInfo = `${spread} @ ${bet.Odds}`;

  if (bet.BetType === "spread away") {
    team = bet.HomeTeam;
    betInfo = `${spread} @ ${bet.Odds}`;
  }
  if (bet.BetType === "ML home") {
    team = bet.HomeTeam;
    betInfo = `Money Line @ ${bet.Odds}`;
  }
  if (bet.BetType === "ML away") {
    team = bet.HomeTeam;
    betInfo = `Money Line @ ${bet.Odds}`;
  }
  if (bet.BetType === "total over") {
    team = `${home[home.length - 1]} vs. ${away[away.length - 1]}`;
    betInfo = `Over ${bet.Total} @ ${bet.Odds}`;
  }
  if (bet.BetType === "total under") {
    team = `${home[home.length - 1]} vs. ${away[away.length - 1]}`;
    betInfo = `Under ${bet.Total} @ ${bet.Odds}`;
  }

  return (
    <div className={styles.bet}>
      <div>
        <h4>{`${team}: ${betInfo}`}</h4>
      </div>
      <Wager
        wagerAmount={wagerAmount}
        winAmount={winAmount}
        setAmounts={setAmounts}
        removeBetFromCart={removeBetFromCart}
      />
    </div>
  );
}

Bet.propTypes = {
  bet: BetShape.isRequired,
  cart: PropTypes.arrayOf(BetShape).isRequired,
  setCart: PropTypes.func.isRequired,
};

Wager.propTypes = {
  wagerAmount: PropTypes.number.isRequired,
  winAmount: PropTypes.number.isRequired,
  setAmounts: PropTypes.func.isRequired,
  removeBetFromCart: PropTypes.func.isRequired,
};
