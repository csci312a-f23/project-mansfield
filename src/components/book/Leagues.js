import PropTypes from "prop-types";
import styles from "@/styles/Book.module.css";
import LeagueShape from "../shapes/LeagueShape";

export default function Leagues({ leaguesCollection, setCurrentLeague }) {
  const leaguesList = [...leaguesCollection].map((league) => (
    <button
      key={league.key}
      type="button"
      onClick={() => setCurrentLeague(league)}
    >
      {league.title}
    </button>
  ));

  return (
    <div>
      <h4>Leagues</h4>
      <div className={styles.leagues}>{leaguesList}</div>
    </div>
  );
}

Leagues.propTypes = {
  leaguesCollection: PropTypes.arrayOf(LeagueShape).isRequired,
  setCurrentLeague: PropTypes.func.isRequired,
};
