import PropTypes from "prop-types";
import Navbar from "../../components/Navbar";

export default function BetHistory({ setLoggedIn, user }) {
  const balance = 1000;
  // const userconst = "temery";

  return (
    <div>
      <Navbar balance={balance} user={user} setLoggedIn={setLoggedIn} />
      <h2>Bet History</h2>
    </div>
  );
}

BetHistory.propTypes = {
  user: PropTypes.string.isRequired,
  setLoggedIn: PropTypes.func.isRequired,
};
