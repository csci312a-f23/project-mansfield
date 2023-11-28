import PropTypes from "prop-types";
import styles from "@/styles/Book.module.css";
import BetShape from "../shapes/BetShape";

export default function Pending({ currentPending }) {
  const gamesArr = [...currentPending].map((bet) => (
    <li key={bet.GameID}>
      {`${bet.HomeTeam} vs. ${bet.AwayTeam}: ${new Date(
        bet.CommenceTime,
      ).toLocaleString()} EST: bet type:${bet.BetType} wager:${
        bet.Amount
      } to win:${bet.WinAmount} ${bet.Odds}`}
    </li>
  ));

  return (
    <div className={styles.gameList}>
      <ul>{gamesArr}</ul>
    </div>
  );
}

Pending.propTypes = {
  currentPending: PropTypes.arrayOf(BetShape).isRequired,
};
