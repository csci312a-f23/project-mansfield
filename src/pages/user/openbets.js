// import PropTypes from "prop-types";
import { useRouter } from "next/router";
import Navbar from "../../components/navbar";

export default function OpenBets(/* { setLoggedIn } */) {
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
      <Navbar handleNavClick={handleNavClick} />
      <h2>Pending Bets</h2>
    </div>
  );
}

OpenBets.propTypes = {
  // loggedIn: PropTypes.bool.isRequired,
  // setLoggedIn: PropTypes.func.isRequired,
};
