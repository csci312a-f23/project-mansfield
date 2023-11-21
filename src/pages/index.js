import { useSession } from "next-auth/react";
import styles from "@/styles/Home.module.css";
import Navbar from "../components/Navbar";
import Book from "../components/book/Book";

export default function Home() {
  const { data: session } = useSession({
    required: true,
  });

  const balance = 1000;

  return session ? (
    <div className={styles.home}>
      <Navbar balance={balance} user={session.user.name} />
      <Book />
    </div>
  ) : (
    <div>Redirecting</div>
  );
}
