import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "@/styles/Pending.module.css";
import BetShape from "../shapes/BetShape";

function Bet({ bet, number }) {
  const home = bet.HomeTeam.split(" ");
  const away = bet.AwayTeam.split(" ");

  // if "spread home"
  const spread = bet.Spread >= 0 ? `+${bet.Spread}` : bet.Spread;
  let team = bet.HomeTeam;
  let betInfo = `${spread} @ ${bet.Odds}`;

  if (bet.BetType === "spread away") {
    team = bet.HomeTeam;
    betInfo = `${spread} @ ${bet.Odds}`;
  }
  if (bet.BetType === "ML home") {
    team = bet.HomeTeam;
    betInfo = `Money Line @ ${bet.Odds}`;
  }
  if (bet.BetType === "ML away") {
    team = bet.HomeTeam;
    betInfo = `Money Line @ ${bet.Odds}`;
  }
  if (bet.BetType === "total over") {
    team = `${home[home.length - 1]} vs. ${away[away.length - 1]}`;
    betInfo = `Over ${bet.Total} @ ${bet.Odds}`;
  }
  if (bet.BetType === "total under") {
    team = `${home[home.length - 1]} vs. ${away[away.length - 1]}`;
    betInfo = `Under ${bet.Total} @ ${bet.Odds}`;
  }

  return (
    <div>
      {number === 0 ? (
        <div className={styles.bet}>
          <div className={styles.time}>
            <h4>Time</h4>
            <p>{`${new Date(bet.CommenceTime).toLocaleString()} EST`} </p>
          </div>
          <div className={styles.details}>
            <h4>Details</h4>
            <p>{`${team}: ${betInfo}`} </p>
          </div>
          <div className={styles.risk}>
            <h4>Risk</h4>
            <p>{`${bet.Amount}`} </p>
          </div>
          <div className={styles.toWin}>
            <h4>To Win</h4>
            <p>{`${bet.WinAmount}`} </p>
          </div>
        </div>
      ) : (
        <div className={styles.bet2}>
          <div className={styles.time}>
            <p> {`${new Date(bet.CommenceTime).toLocaleString()} EST`} </p>
          </div>
          <div className={styles.details}>
            <p>{`${team}: ${betInfo}`}</p>
          </div>
          <div className={styles.risk}>
            <p>{`${bet.Amount}`}</p>
          </div>
          <div className={styles.toWin}>
            <p> {`${bet.WinAmount}`}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Pending() {
  const [currentPendingBets, setCurrentPendingBets] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/${session.user.id}/active/`);
      if (response.ok) {
        const pendingBets = await response.json();
        if (pendingBets) setCurrentPendingBets(Object.values(pendingBets));
      }
    })();
  }, [session.user.id]);

  const pendingBetsCopy = [...currentPendingBets];
  pendingBetsCopy.sort(
    (a, b) => new Date(a.CommenceTime) - new Date(b.CommenceTime),
  );

  const gamesArr = pendingBetsCopy.map((bet, number) => (
    <li key={bet.BetID}>
      <Bet bet={bet} number={number} />
    </li>
  ));

  return (
    <div className={styles.pending}>
      <div className={styles.betList}>
        <ul>{gamesArr}</ul>
      </div>
    </div>
  );
}

Bet.propTypes = {
  bet: BetShape.isRequired,
  number: PropTypes.number.isRequired,
};
