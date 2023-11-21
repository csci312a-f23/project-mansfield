import LoginForm from "../components/login/LoginForm";
import styles from "../styles/login.module.css";

export default function LogIn() {
  return (
    <div className={styles.login}>
      <LoginForm />
    </div>
  );
}
