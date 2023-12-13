import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "@/styles/History.module.css";
import BetShape from "../shapes/BetShape";

function Bet({ bet, number }) {
  const home = bet.HomeTeam.split(" ");
  const away = bet.AwayTeam.split(" ");

  // if "spread home"
  const spread = bet.Spread >= 0 ? `+${bet.Spread}` : bet.Spread;
  const score = `${home[home.length - 1]} ${bet.HomeScore} vs ${
    away[away.length - 1]
  } ${bet.AwayScore}`;
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
          <div className={styles.date}>
            <h4>Date</h4>
            <p>
              {`${new Date(bet.CommenceTime).toLocaleString().slice(0, 9)}`}{" "}
            </p>
          </div>
          <div className={styles.details}>
            <h4>Details</h4>
            <p>{`${team}: ${betInfo}`} </p>
          </div>
          <div className={styles.score}>
            <h4>Score</h4>
            <p>{`${score}`} </p>
          </div>
          {bet.Result > 0 ? (
            <div className={styles.result}>
              <h4>Result</h4>
              <p>{`${bet.Result}`} </p>
            </div>
          ) : (
            <div className={styles.resultNeg}>
              <h4>Result</h4>
              <p>{`${bet.Result}`} </p>
            </div>
          )}
        </div>
      ) : (
        <div className={styles.bet2}>
          <div className={styles.date}>
            <p>
              {" "}
              {`${new Date(bet.CommenceTime)
                .toLocaleString()
                .slice(0, 9)}`}{" "}
            </p>
          </div>
          <div className={styles.details}>
            <p>{`${team}: ${betInfo}`}</p>
          </div>
          <div className={styles.score}>
            <p>{`${score}`}</p>
          </div>
          {bet.Result > 0 ? (
            <div className={styles.result}>
              <p>{`${bet.Result}`} </p>
            </div>
          ) : (
            <div className={styles.resultNeg}>
              <p>{`${bet.Result}`} </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function Settled({ timeFrame }) {
  const [currentHistory, setCurrentHistory] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/${session.user.id}/history/`);
      if (response.ok) {
        const history = await response.json();
        if (history) setCurrentHistory(Object.values(history));
      }
    })();
  }, [session.user.id]);

  const historyCopy = [...currentHistory];

  const historyFiltered = historyCopy.filter((bet) => {
    const betDate = new Date(bet.CommenceTime);
    if (timeFrame === "today") {
      const today = new Date();
      return betDate.toDateString() === today.toDateString();
    }
    if (timeFrame === "lastWeek") {
      const lastWeek = new Date();
      lastWeek.setDate(lastWeek.getDate() - 7);
      return betDate >= lastWeek;
    }
    if (timeFrame === "lastTwo") {
      const lastTwo = new Date();
      lastTwo.setDate(lastTwo.getDate() - 14);
      return betDate >= lastTwo;
    }
    return true;
  });

  historyFiltered.sort(
    (a, b) => new Date(a.CommenceTime) - new Date(b.CommenceTime),
  );

  const gamesArr = historyFiltered.map((bet, number) => (
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

Settled.propTypes = {
  timeFrame: PropTypes.string.isRequired,
};
