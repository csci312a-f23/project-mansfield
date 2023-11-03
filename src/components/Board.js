import styles from "@/styles/Book.module.css";
import games from "../../data/nfl2023reg7.json";
import Game from "./Game";

const gamesArr = games.map((g) => (
  <li key={g.GameKey}>
    <Game game={g} />
  </li>
));

export default function Board() {
  return (
    <div className={styles.gameList}>
      <h4>Upcoming Games</h4>
      <ul>{gamesArr}</ul>
    </div>
  );
}
