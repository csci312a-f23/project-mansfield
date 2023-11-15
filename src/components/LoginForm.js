import PropTypes from "prop-types";
import Image from "next/image";
import styles from "../styles/login.module.css";

export default function LoginForm({ user, setUser, setLoggedIn }) {
  const handleLoginClick = () => {
    setLoggedIn(true);
  };

  return (
    <div className={styles.loginForm}>
      <div className={styles.imageContainer}>
        <Image
          src="/favicon.ico"
          alt="mansfield"
          width={100}
          height={100}
          priority
        />
      </div>
      <div className={styles.container}>
        <label for="user">
          <b>Username</b>
        </label>
        <input
          type="text"
          name="user"
          placeholder="Enter Username"
          value={user}
          onChange={(event) => setUser(event.target.value)}
        />
        <label for="pass">
          <b>Password</b>
        </label>
        <input type="password" name="pass" placeholder="Enter Password" />
        {user ? (
          <button type="button" onClick={() => handleLoginClick()}>
            Login
          </button>
        ) : (
          <button type="button">Login</button>
        )}
      </div>
    </div>
  );
}

LoginForm.defaultProps = {
  user: "",
};

LoginForm.propTypes = {
  user: PropTypes.string,
  setUser: PropTypes.func.isRequired,
  setLoggedIn: PropTypes.func.isRequired,
};
