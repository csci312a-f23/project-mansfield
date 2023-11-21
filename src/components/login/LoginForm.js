import Image from "next/image";
import styles from "../../styles/login.module.css";
import LoginWidget from "./LoginWidget";

export default function LoginForm() {
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
