import PropTypes from "prop-types";
import Navbar from "../../components/Navbar";
import Pending from "../../components/Pending";
import GameShape from "../../components/GameShape";

export default function OpenBets({ setLoggedIn, user, currentPending }) {
  const balance = 1000;
  // const userconst = "temery";

  return (
    <div>
      <Navbar balance={balance} user={user} setLoggedIn={setLoggedIn} />
      <h2>Pending Bets</h2>
      <Pending pending={currentPending} />
    </div>
  );
}

OpenBets.propTypes = {
  user: PropTypes.string.isRequired,
  setLoggedIn: PropTypes.func.isRequired,
  currentPending: PropTypes.arrayOf(GameShape).isRequired,
};
