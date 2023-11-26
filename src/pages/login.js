import LoginForm from "../components/login/LoginForm";
import styles from "../styles/login.module.css";

export default function LogIn() {
  return (
    <div className={styles.login}>
      <h1>Mansfield Sports Book</h1>
      <LoginForm />
    </div>
  );
}
