import { useSession } from "next-auth/react";
import PastBets from "@/components/past/PastBets";
import Navbar from "../../components/Navbar";

export default function BetHistory() {
  const { data: session } = useSession({
    required: true,
  });

  const balance = 1000;
  const pastBets = [
    {
      "BetID": 0,
      "UserID": 69,
      "BetType": "spread away",
      "Odds": 1.9,
      "Amount": 10,
      "WinAmount": 19,
      "Payout": 0,
      "GameID": "44ff6ef4222500377ee9500872935f93",
      "AwayTeam": "Ball State Cardinals",
      "HomeTeam": "Northern Illinois Huskies",
      "CommenceTime": "2023-11-08T00:00:00Z",
      "AwayScore": 0,
      "HomeScore": 0,
      "Active": true,
      "Spread": 7,
      "Total": 0
  }
  ];

  return (
    session && (
      <div>
        <Navbar balance={balance} user={session.user.name} />
        <PastBets pastBets={pastBets} />
      </div>
    )
  );
}
