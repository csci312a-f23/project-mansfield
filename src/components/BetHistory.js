import styles from "@/styles/Book.module.css";
import GameShape from "./GameShape";
import Bet from "./Bet";
import Navbar from "../../components/Navbar";

export default function BetHistory({setLoggedIn, user }) {
  //array of bets
  const bets = [
    // ... list of bets
  ];

  // Function to filter bets based on the selected time frame
  const filterBets = (selectedTimeFrame) => {
    if (selectedTimeFrame === 'all') {
      return bets;
    } else {
      const currentDate = new Date();


      return ( 
        <div>
            <Navbar bets = {bets} user={user} setLoggedIn={setLoggedIn} />
            <h2>Bet History</h2>
        </div>
      )

      return bets.filter((bet) => {
        const betDate = new Date(bet.createdAt);

        if (selectedTimeFrame === 'today') {
          return betDate.toDateString() === currentDate.toDateString();
        } else if (selectedTimeFrame === 'last7days') {
          const sevenDaysAgo = new Date();
          sevenDaysAgo.setDate(currentDate.getDate() - 7);
          return betDate >= sevenDaysAgo;
        }
        // will add more conditions for other time frames if needed

        return false;
      });
    }
  };

  // Selected time frame (argument for filteredBets, need to change)
  const selectedTimeFrame = 'all';

  // Filtered bets based on selectedTimeFrame
  const filteredBets = filterBets(selectedTimeFrame);

  return ( 
    <div>
        <Navbar bets = {bets} user={user} setLoggedIn={setLoggedIn} />
        <h2>Bet History</h2>
        <select>
            <option value="all">All Time</option>
            <option value="today">Today</option>
            <option value="last7days">Last 7 Days</option>
            <!-- Add more options for other time frames if needed -->
        </select>

        <div>
            ${filteredBets.map((bet) => BetHTML(bet)).join('')}
        </div>
    </div>
  );

}


BetHistory.propTypes = {
    user: PropTypes.string.isRequired,
    setLoggedIn: PropTypes.func.isRequired,
  };