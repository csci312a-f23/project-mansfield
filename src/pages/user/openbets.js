import { useSession } from "next-auth/react";
import stylesHome from "@/styles/Home.module.css";
import Pending from "../../components/active/Pending";
import styles from "../../styles/Pending.module.css";

export default function OpenBets() {
  const { data: session } = useSession({
    required: true,
  });

  return (
    session && (
      <div className={stylesHome.home}>
        <h4> Pending Bets </h4>
        <main className={styles.main}>
          <div className={styles.blank} />
          <div className={styles.pending}>
            <Pending />
          </div>
          <div className={styles.blank} />
        </main>
      </div>
    )
  );
}
