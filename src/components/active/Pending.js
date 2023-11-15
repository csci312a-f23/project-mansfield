// import PropTypes from "prop-types";
import styles from "@/styles/Book.module.css";
// import GameShape from "./GameShape";
import pendingBets from "../../../data/pendingdata.json";

export default function Pending(/* { currentPending } */) {
  const gamesArr = [...pendingBets].map((g) => (
    <li key={g.id}>
      {`${g.home_team} vs. ${g.away_team}: ${new Date(
        g.commence_time,
      ).toLocaleString()} EST`}
    </li>
  ));

  return (
    <div className={styles.gameList}>
      <ul>{gamesArr}</ul>
    </div>
  );
}

Pending.propTypes = {
  // currentPending: PropTypes.arrayOf(GameShape).isRequired,
};
