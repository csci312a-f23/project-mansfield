import PropTypes from "prop-types";
import { useSession } from "next-auth/react";
import BetShape from "../../components/shapes/BetShape";
import Navbar from "../../components/Navbar";
import Pending from "../../components/active/Pending";

export default function OpenBets({ currentPending }) {
  const { data: session } = useSession({
    required: true,
  });

  const balance = 1000;

  return (
    session && (
      <div>
        <Navbar balance={balance} user={session.user.name} />
        <h2>Pending Bets</h2>
        <Pending currentPending={currentPending} />
      </div>
    )
  );
}

OpenBets.propTypes = {
  currentPending: PropTypes.arrayOf(BetShape).isRequired,
};
