import PropTypes from "prop-types";
import Image from "next/image";
import styles from "../../styles/login.module.css";
import LoginWidget from "./LoginWidget";

// eslint-disable-next-line no-unused-vars
export default function LoginForm({ user, setUser, setLoggedIn }) {
  // const handleLoginClick = () => {
  //   setLoggedIn(true);
  // };

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
        <LoginWidget />
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
