import { useRouter } from "next/router";
// import PropTypes from "prop-types";
import Navbar from "../../components/navbar";

export default function BetHistory(/* { setLoggedIn } */) {
  // const user = "temery";
  // const balance = 1000;

  const router = useRouter();
  const handleNavClick = (string) => {
    if (string === "openbets") {
      router.push("/user/openbets");
    } else if (string === "logout") {
      router.push("/login");
    } else if (string === "bethistory") {
      router.push("/user/bethistory");
    } else {
      router.push("/");
    }
  };

  /*   const logout = () => {
    setLoggedIn(false);
  }; */

  return (
    <div>
      <Navbar
        handleNavClick={handleNavClick} /* balance={balance} user={user} */
      />
      <h2>Bet History</h2>
    </div>
  );
}

BetHistory.propTypes = {
  // loggedIn: PropTypes.bool.isRequired,
  // setLoggedIn: PropTypes.func.isRequired,
};
