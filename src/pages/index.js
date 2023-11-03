import PropTypes from "prop-types";
import styles from "@/styles/Home.module.css";
import Navbar from "../components/navbar";
import Book from "../components/Book";

export default function Home({ setLoggedIn }) {
  const user = "temery";
  const balance = 1000;

  return (
    <div className={styles.home}>
      <Navbar balance={balance} user={user} setLoggedIn={setLoggedIn} />
      <Book />
    </div>
  );
}

Home.propTypes = {
  // loggedIn: PropTypes.bool.isRequired,
  setLoggedIn: PropTypes.func.isRequired,
};
