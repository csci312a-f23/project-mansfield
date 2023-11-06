import PropTypes from "prop-types";

export default function Leagues({ leaguesCollection, setCurrentLeague }) {
  const leaguesCopy = [...leaguesCollection];

  const leaguesList = leaguesCopy.map((league) => (
    <li key={league.key} onClick={() => setCurrentLeague(league)}>
      {league.title}
    </li>
  ));

  return (
    <div>
      <h4>Leagues</h4>
      <ul>{leaguesList}</ul>
    </div>
  );
}

Leagues.propTypes = {
  leaguesCollection: PropTypes.arrayOf.isRequired,
  setCurrentLeague: PropTypes.func.isRequired,
};
