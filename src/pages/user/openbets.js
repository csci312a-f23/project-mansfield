// import PropTypes from "prop-types";
// import { useRouter } from "next/router";
import Navbar from "../../components/navbar";

export default function OpenBets(/* { setLoggedIn } */) {
  /*   const logout = () => {
    setLoggedIn(false);
  }; */

  return (
    <div>
      <Navbar /* balance={balance} user={user} */ />
      <h2>Pending Bets</h2>
    </div>
  );
}

OpenBets.propTypes = {
  // loggedIn: PropTypes.bool.isRequired,
  // setLoggedIn: PropTypes.func.isRequired,
};
