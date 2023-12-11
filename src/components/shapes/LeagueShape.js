import PropTypes from "prop-types";

const LeagueShape = PropTypes.shape({
  key: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  has_outrights: PropTypes.bool.isRequired,
});

export default LeagueShape;
