/*
  BetShape.js

  This provides a PropTypes shape descriptor of game objects. This is pulled out
  since its large and annoying.
*/

import PropTypes from "prop-types";

const BetShape = PropTypes.shape({
  BetID: PropTypes.string.isRequired,
  UserID: PropTypes.string.isRequired,
  BetType: PropTypes.string.isRequired,
  Amount: PropTypes.number.isRequired,
  Payout: PropTypes.number.isRequired,
  GameID: PropTypes.number.isRequired,
  AwayTeam: PropTypes.string.isRequired,
  HomeTeam: PropTypes.string.isRequired,
  AwayScore: PropTypes.number,
  HomeScore: PropTypes.number,
  Active: PropTypes.bool.isRequired,
});

export default BetShape;
