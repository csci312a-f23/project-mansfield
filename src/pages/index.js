import PropTypes from "prop-types";
import styles from "@/styles/Home.module.css";
import Navbar from "../components/Navbar";

import Book from "../components/book/Book";

export default function Home({ setLoggedIn, user /* , setCurrentPending  */ }) {
  const balance = 1000;

  return user ? (
    <div className={styles.home}>
      <Navbar balance={balance} user={user} setLoggedIn={setLoggedIn} />
      <Book /* setCurrentPending={setCurrentPending} */ />
    </div>
  ) : (
    <div />
  );
}
Home.propTypes = {
  user: PropTypes.string,
  setLoggedIn: PropTypes.func.isRequired,
  // setCurrentPending: PropTypes.func.isRequired,
};

Home.defaultProps = {
  user: null,
};
