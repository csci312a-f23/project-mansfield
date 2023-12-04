import PropTypes from "prop-types";

const LeagueShape = PropTypes.shape({
  LeagueKey: PropTypes.string.isRequired,
  LeagueGroup: PropTypes.string.isRequired,
  LeagueTitle: PropTypes.string.isRequired,
  LeagueDesc: PropTypes.string.isRequired,
  Active: PropTypes.bool.isRequired,
  HasOutrights: PropTypes.bool.isRequired,
});

export default LeagueShape;
