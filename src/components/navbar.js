import PropTypes from "prop-types";
import styles from "../styles/navigation.module.css";

export default function Navbar({ handleNavClick }) {
  return (
    <div className={styles.navbar}>
      <a onClick={() => handleNavClick("home")}>Home</a>
      <div className={styles.dropdown}>
        <button type="button" className={styles.dropdownButton}>
          Username ▼
        </button>
        <div className={styles.dropdownContent}>
          <a onClick={() => handleNavClick("bethistory")}>Bet History</a>
          <a onClick={() => handleNavClick("openbets")}>Pending Bets</a>
          <a onClick={() => handleNavClick("logout")}>Logout</a>
        </div>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  handleNavClick: PropTypes.func.isRequired,
  // username: PropTypes.string.isRequired
};
