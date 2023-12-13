import { useSession } from "next-auth/react";
import { useState } from "react";
import stylesHome from "@/styles/Home.module.css";
import Settled from "../../components/history/Settled";
import styles from "../../styles/History.module.css";

export default function BetHistory() {
  const [timeFrame, setTimeFrame] = useState("lastWeek");

  const { data: session } = useSession({
    required: true,
  });

  return (
    session && (
      <div className={stylesHome.home}>
        <h4> Bet History </h4>
        <main className={styles.main}>
          <div className={styles.blank} />
          <div className={styles.history}>
            <div className={styles.date}>
              <select
                value={timeFrame}
                onChange={(e) => setTimeFrame(e.target.value)}
              >
                <option value="today">Today</option>
                <option value="lastWeek">Last Week</option>
                <option value="lastTwo">Last Two Weeks</option>
                <option value="all">All</option>
              </select>
            </div>
            <Settled timeFrame={timeFrame} />
          </div>
          <div className={styles.blank} />
        </main>
      </div>
    )
  );
}
