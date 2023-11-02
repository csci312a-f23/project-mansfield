import PropTypes from "prop-types";
import Navbar from "../../components/navbar";

export default function OpenBets({ setLoggedIn }) {
  const user = "temery";
  const balance = 1000;

  return (
    <div>
      <Navbar balance={balance} user={user} setLoggedIn={setLoggedIn} />
      <h2>Pending Bets</h2>
    </div>
  );
}

OpenBets.propTypes = {
  // loggedIn: PropTypes.bool.isRequired,
  setLoggedIn: PropTypes.func.isRequired,
};
