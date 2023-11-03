import styles from "@/styles/Book.module.css";
import GameShape from "./GameShape";

export default function Game({ game }) {
  return (
    <div className={styles.game}>{`${game.HomeTeam} vs. ${game.AwayTeam}`}</div>
  );
}

Game.propTypes = {
  game: GameShape.isRequired,
};
