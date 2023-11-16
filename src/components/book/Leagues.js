import PropTypes from "prop-types";

export default function Leagues({ leaguesCollection, setCurrentLeague }) {
  const leaguesList = [...leaguesCollection].map((league) => (
    <li key={league.key} onClick={() => setCurrentLeague(league.title)}>
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
  leaguesCollection: PropTypes.arrayOf(
    PropTypes.shape({
      active: PropTypes.bool.isRequired,
      description: PropTypes.string.isRequired,
      group: PropTypes.string.isRequired,
      has_outrights: PropTypes.bool.isRequired,
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  setCurrentLeague: PropTypes.func.isRequired,
};
