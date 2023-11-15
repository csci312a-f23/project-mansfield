import PropTypes from "prop-types";
import LoginForm from "../components/LoginForm";
import styles from "../styles/login.module.css";

export default function LogIn({ setLoggedIn, user, setUser }) {
  return (
    <div className={styles.login}>
      <LoginForm user={user} setUser={setUser} setLoggedIn={setLoggedIn} />
    </div>
  );
}

LogIn.defaultProps = {
  user: "",
};

LogIn.propTypes = {
  user: PropTypes.string,
  setUser: PropTypes.func.isRequired,
  setLoggedIn: PropTypes.func.isRequired,
};
