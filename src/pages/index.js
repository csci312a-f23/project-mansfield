import PropTypes from "prop-types";
import Navbar from "../components/navbar";

export default function Home({ setLoggedIn }) {
  const user = "temery";
  const balance = 1000;

  return (
    <div>
      <Navbar balance={balance} user={user} setLoggedIn={setLoggedIn} />
      <h2>Home</h2>
    </div>
  );
}

Home.propTypes = {
  // loggedIn: PropTypes.bool.isRequired,
  setLoggedIn: PropTypes.func.isRequired,
};
