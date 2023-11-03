import PropTypes from "prop-types";
import Navbar from "../../components/Navbar";

export default function OpenBets({ setLoggedIn, user }) {
  const balance = 1000;
  // const userconst = "temery";

  return (
    <div>
      <Navbar balance={balance} user={user} setLoggedIn={setLoggedIn} />
      <h2>Pending Bets</h2>
    </div>
  );
}

OpenBets.propTypes = {
  user: PropTypes.string.isRequired,
  setLoggedIn: PropTypes.func.isRequired,
};
