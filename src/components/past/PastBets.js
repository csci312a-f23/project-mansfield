import { useState } from "react";
import PropTypes from "prop-types";
import styles from "@/styles/Book.module.css";
import BetShape from "../shapes/BetShape";

export default function PastBets({ pastBets }) {
  const [timeFrame, setTimeFrame] = useState("all");

  const today = new Date();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const filteredPastBets = pastBets.filter((bet) => {
    const betDate = new Date(bet.CommenceTime);
    if (timeFrame === "last7days") {
      // Do bets have a createdAt field
      return betDate >= sevenDaysAgo; 
    } if (timeFrame === 'today') {
      return betDate.toDateString() === today.toDateString();  
    } return true;
  }); 
  
  const gamesArr = filteredPastBets.map((bet) => (
    <li key={bet.GameID}>
      {`${bet.HomeTeam} vs. ${bet.AwayTeam}: ${new Date(
        bet.CommenceTime,
      ).toLocaleString()} EST: bet type:${bet.BetType} wager:${
        bet.Amount
      } to win:${bet.WinAmount}`}
    </li>
  ));

  return (
    <div>
     <select value={timeFrame} onChange={e => setTimeFrame(e.target.value)}>
      <option value="all">All Time</option>
      <option value="today">Today</option>
      <option value="last7days">Last 7 Days</option>
    </select>
    <div className={styles.gameList}>
      <ul>{gamesArr}</ul>
    </div>
    </div>
  );
}


PastBets.propTypes = {
  pastBets: PropTypes.arrayOf(BetShape).isRequired
};