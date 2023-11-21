import { useSession } from "next-auth/react";
import Navbar from "../../components/Navbar";

export default function BetHistory() {
  const { data: session } = useSession({
    required: true,
  });

  const balance = 1000;

  return (
    <div>
      <Navbar balance={balance} user={session.user.name} />
      <h2>Bet History</h2>
    </div>
  );
}
