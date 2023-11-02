import PropTypes from "prop-types";
import styles from "../styles/navigation.module.css";

export default function Navbar({ handleNavClick /* , user, balance */ }) {
  return (
    <div className={styles.navbar}>
      <a onClick={() => handleNavClick("home")}>Mansfield</a>
      <div className={styles.dropdown}>
        <button type="button" className={styles.dropdownButton}>
          (user) ▼
        </button>
        <div className={styles.dropdownContent}>
          <a onClick={() => handleNavClick("bethistory")}>Bet History</a>
          <a onClick={() => handleNavClick("openbets")}>Pending Bets</a>
          <a onClick={() => handleNavClick("logout")}>Logout</a>
        </div>
      </div>
      <div className={styles.balance}>$(balance)</div>
    </div>
  );
}

Navbar.propTypes = {
  handleNavClick: PropTypes.func.isRequired,
  // user: PropTypes.string.isRequired,
  // balance: PropTypes.number.isRequired
};
