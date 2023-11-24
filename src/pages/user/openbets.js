import { useSession } from "next-auth/react";
import Navbar from "../../components/Navbar";
import Pending from "../../components/active/Pending";

export default function OpenBets() {
  const { data: session } = useSession({
    required: true,
  });
  const balance = 1000;
  // const userconst = "temery";

  return (
    session && (
      <div>
        <Navbar balance={balance} user={session.user.name} />
        <h2>Pending Bets</h2>
        <Pending />
      </div>
    )
  );
}
