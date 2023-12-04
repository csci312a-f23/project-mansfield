import { useSession } from "next-auth/react";

export default function BetHistory() {
  const { data: session } = useSession({
    required: true,
  });

  return (
    session && (
      <div>
        <h2>Bet History</h2>
      </div>
    )
  );
}
