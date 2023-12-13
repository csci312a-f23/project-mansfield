/*
  BetShape.js

  This provides a PropTypes shape descriptor of game objects. This is pulled out
  since its large and annoying.
*/

import PropTypes from "prop-types";

const BetShape = PropTypes.shape({
  BetID: PropTypes.string.isRequired,
  UserID: PropTypes.number.isRequired,
  BetType: PropTypes.string.isRequired,
  Odds: PropTypes.number.isRequired,
  Amount: PropTypes.number.isRequired,
  WinAmount: PropTypes.number.isRequired,
  GameID: PropTypes.string.isRequired,
  AwayTeam: PropTypes.string.isRequired,
  HomeTeam: PropTypes.string.isRequired,
  AwayScore: PropTypes.number,
  HomeScore: PropTypes.number,
  Active: PropTypes.bool.isRequired,
  Total: PropTypes.number.isRequired,
  Spread: PropTypes.number.isRequired,
  Result: PropTypes.number.isRequired,
});

export default BetShape;
