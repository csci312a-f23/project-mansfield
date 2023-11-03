import PropTypes from "prop-types";
import { useRouter } from "next/router";
import styles from "../styles/navigation.module.css";

export default function Navbar({ user, balance, setLoggedIn }) {
  const router = useRouter();

  const logOut = () => {
    setLoggedIn(false);
  };

  const handleNavClick = (string) => {
    if (string === "openbets") {
      router.push("/user/openbets");
    } else if (string === "logout") {
      // router.push("/login");
      logOut();
    } else if (string === "bethistory") {
      router.push("/user/bethistory");
    } else {
      router.push("/");
    }
  };

  return (
    <div className={styles.navbar}>
      <a onClick={() => handleNavClick("home")}>Mansfield</a>
      <div className={styles.dropdown}>
        <button type="button" className={styles.dropdownButton}>
          {user} ▼
        </button>
        <div className={styles.dropdownContent}>
          <a onClick={() => handleNavClick("bethistory")}>Bet History</a>
          <a onClick={() => handleNavClick("openbets")}>Pending Bets</a>
          <a onClick={() => handleNavClick("logout")}>Logout</a>
        </div>
      </div>
      <div className={styles.balance}>${balance}</div>
    </div>
  );
}

Navbar.propTypes = {
  user: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
  setLoggedIn: PropTypes.func.isRequired,
};
