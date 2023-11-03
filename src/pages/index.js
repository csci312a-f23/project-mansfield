import PropTypes from "prop-types";
import styles from "@/styles/Home.module.css";
import Navbar from "../components/Navbar";
import Book from "../components/Book";

export default function Home({ setLoggedIn, user }) {
  const balance = 1000;
  // const userconst = "temery";

  return user ? (
    <div className={styles.home}>
      <Navbar balance={balance} user={user} setLoggedIn={setLoggedIn} />
      <Book />
    </div>
  ) : (
    <div />
  );
}

Home.propTypes = {
  user: PropTypes.string,
  setLoggedIn: PropTypes.func.isRequired,
};

Home.defaultProps = {
  user: null,
};
