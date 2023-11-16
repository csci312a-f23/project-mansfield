/*
  GameShape.js

  This provides a PropTypes shape descriptor of game objects. This is pulled out
  since its large and annoying.
*/

import PropTypes from "prop-types";

const GameShape = PropTypes.shape({
  commence_time: PropTypes.string.isRequired,
  home_team: PropTypes.string.isRequired,
  away_team: PropTypes.string.isRequired,
});

export default GameShape;
