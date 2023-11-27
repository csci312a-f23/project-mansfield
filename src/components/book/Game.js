import PropTypes from "prop-types";
import styles from "@/styles/Book.module.css";
import GameShape from "../shapes/GameShape";
import BetShape from "../shapes/BetShape";

export default function Game({ game, cart, setCart }) {
  const gameTime = new Date(game.commence_time);

  // don't forget to change this on  2 a.m. EST Sunday, March 10
  // gameTime.setHours(gameTime.getHours() - 4);

  function addBetToCart(betType, spread, total) {
    const newBet = {
      BetID: 0,
      UserID: 69,
      BetType: betType,
      Odds: 1.9,
      Amount: 0,
      WinAmount: 0,
      Payout: 0,
      GameID: game.id,
      AwayTeam: game.away_team,
      HomeTeam: game.home_team,
      CommenceTime: game.commence_time,
      AwayScore: 0,
      HomeScore: 0,
      Active: true,
      Spread: spread,
      Total: total,
    };
    if (!cart.includes(newBet)) setCart([...cart, newBet]);
  }

  const home = game.home_team.split(" ");
  const away = game.away_team.split(" ");

  return (
    <div className={styles.game}>
      <h4>{`${game.home_team} vs. ${game.away_team}`}</h4>
      <h4>{`${gameTime.toLocaleString()} EST`}</h4>
      <div>
        <p>
          {`${home[home.length - 1]}: `}
          <button
            type="button"
            /* disabled={cart.includes(game)} */
            onClick={() => addBetToCart("spread home", -7, 0)}
          >
            {`-7 @ ${"-110"}`}
          </button>
          <button
            type="button"
            /* disabled={cart.includes(game)} */
            onClick={() => addBetToCart("ML home", 0, 0)}
          >
            {`ML @ ${"-360"}`}
          </button>
          <button
            type="button"
            /* disabled={cart.includes(game)} */
            onClick={() => addBetToCart("total over", 0, 54.5)}
          >
            {`Over ${"54.5"} @ ${"-110"}`}
          </button>
        </p>
        <p>
          {`${away[away.length - 1]}: `}
          <button
            type="button"
            /* disabled={cart.includes(game)} */
            onClick={() => addBetToCart("spread away", 7, 0)}
          >
            {`+7 @ ${"-110"}`}
          </button>
          <button
            type="button"
            /* disabled={cart.includes(game)} */
            onClick={() => addBetToCart("ML away", 0, 0)}
          >
            {`ML @ ${"+270"}`}
          </button>
          <button
            type="button"
            /* disabled={cart.includes(game)} */
            onClick={() => addBetToCart("total under", 0, 54.5)}
          >
            {`Under ${"54.5"} @ ${"-110"}`}
          </button>
        </p>
      </div>
    </div>
  );
}

Game.propTypes = {
  game: GameShape.isRequired,
  cart: PropTypes.arrayOf(BetShape).isRequired,
  setCart: PropTypes.func.isRequired,
};
