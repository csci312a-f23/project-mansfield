import { getDatabase, onValue, set, ref } from "firebase/database";

export default async function handler(req, res) {
  const { method } = req;
  const db = getDatabase();
  const nflRef = ref(db, `games/nfl`);

  //  Gets and updates this weeks scores the
  switch (method) {
    case "GET": {
      onValue(nflRef, (snapshot) => {
        const data = snapshot.val();
        res.status(200).json(data);
      });

      break;
    }
    case "PUT": {
      const response = await fetch(
        "https://api.the-odds-api.com/v4/sports/americanfootball_nfl/scores/?daysFrom=3&apiKey=b158eb6223a33277e11148bac490e040",
      );
      const nflgames = await response.json();
      set(nflRef, nflgames);

      res.status(200).json(nflgames);
      break;
    }

    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
