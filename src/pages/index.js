import { useSession } from "next-auth/react";
import styles from "@/styles/Home.module.css";
import Book from "../components/book/Book";

export default function Home() {
  const { data: session } = useSession({
    required: true,
  });

  return session ? (
    <div className={styles.home}>
      <Book />
    </div>
  ) : (
    <div>Redirecting</div>
  );
}
