// import PropTypes from "prop-types";
// import { useRouter } from "next/router";
import Navbar from "../components/navbar";

export default function Home(/* { setLoggedIn } */) {
  /*   const logOut = () => {
    setLoggedIn(false);
  }; */

  const user = "temery";
  const balance = 1000;

  return (
    <div>
      <Navbar balance={balance} user={user} />
      <h2>Home</h2>
    </div>
  );
}

Home.propTypes = {
  // loggedIn: PropTypes.bool.isRequired,
  // setLoggedIn: PropTypes.func.isRequired,
};
