import PropTypes from "prop-types";
import styles from "@/styles/Home.module.css";
import Navbar from "../components/Navbar";

import { getDatabase, ref, child, get, set } from "firebase/database";
import Book from "../components/Book";

export default function Home({ setLoggedIn, user /* , setCurrentPending  */ }) {
  const balance = 1000;
  // writeUserData("Alex",1,"aoh@middlebury.edu",1000);
  return user ? (
    <div className={styles.home}>
      <Navbar balance={balance} user={user} setLoggedIn={setLoggedIn} />
      <Book /* setCurrentPending={setCurrentPending} */ />
    </div>
  ) : (
    <div />
  );
}

// write user data: username, id, email, accountBalance
// function writeUserData(username, userid, email, accountBalance) {
//   const db = getDatabase();
//   const reference = ref(db, `users/${userid}`);
//   set(reference, {
//       username:username,
//       email: email,
//       accountBalance: accountBalance,
//   })
// };
Home.propTypes = {
  user: PropTypes.string,
  setLoggedIn: PropTypes.func.isRequired,
  // setCurrentPending: PropTypes.func.isRequired,
};

Home.defaultProps = {
  user: null,
};
