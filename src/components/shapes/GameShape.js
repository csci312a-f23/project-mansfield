/*
  GameShape.js

  This provides a PropTypes shape descriptor of game objects. This is pulled out
  since its large and annoying.
*/

import PropTypes from "prop-types";

const GameShape = PropTypes.shape({
  Quarter: PropTypes.string.isRequired,
  TimeRemaining: PropTypes.string,
  QuarterDescription: PropTypes.string.isRequired,
  GameEndDateTime: PropTypes.string.isRequired,
  AwayScore: PropTypes.number.isRequired,
  HomeScore: PropTypes.number.isRequired,
  GameID: PropTypes.number.isRequired,
  GlobalGameID: PropTypes.number.isRequired,
  ScoreID: PropTypes.number.isRequired,
  GameKey: PropTypes.string.isRequired,
  Season: PropTypes.number.isRequired,
  SeasonType: PropTypes.number.isRequired,
  Status: PropTypes.string.isRequired,
  Canceled: PropTypes.bool.isRequired,
  Date: PropTypes.string.isRequired,
  Day: PropTypes.string.isRequired,
  DateTime: PropTypes.string.isRequired,
  DateTimeUTC: PropTypes.string.isRequired,
  AwayTeam: PropTypes.string.isRequired,
  HomeTeam: PropTypes.string.isRequired,
  GlobalAwayTeamID: PropTypes.number.isRequired,
  GlobalHomeTeamID: PropTypes.number.isRequired,
  AwayTeamID: PropTypes.number.isRequired,
  HomeTeamID: PropTypes.number.isRequired,
  StadiumID: PropTypes.number.isRequired,
  Closed: PropTypes.bool.isRequired,
  LastUpdated: PropTypes.string.isRequired,
  IsClosed: PropTypes.bool.isRequired,
  Week: PropTypes.number.isRequired,
});

export default GameShape;
