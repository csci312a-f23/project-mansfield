import PropTypes from "prop-types";
import { useSession } from "next-auth/react";
import styles from "@/styles/Home.module.css";
import Book from "../components/book/Book";

export default function Home({ setCurrentPending }) {
  const { data: session } = useSession({
    required: true,
  });

  return session ? (
    <div className={styles.home}>
      <Book setCurrentPending={setCurrentPending} />
    </div>
  ) : (
    <div>Redirecting</div>
  );
}

Home.propTypes = {
  setCurrentPending: PropTypes.func.isRequired,
};
