import { getServerSession } from "next-auth";
import {
  getDatabase,
  ref,
  onValue,
  set,
  get,
  push,
  remove,
} from "firebase/database";
import { authOptions } from "../auth/[...nextauth]";

import resolveBet from "../../../db/resolveBet";

// GET, POST, PUT and DELETE the active bets

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    res.status(401).json({ message: "You must be logged in." });
    return;
  }
  console.log(session);
  const { method, query } = req;
  if (session.user.id !== query.id) {
    res
      .status(401)
      .json({ message: "You cannot access information of other users." });
    return;
  }

  const db = getDatabase();
  const activeRef = ref(db, `active/${query.id}`);

  switch (method) {
    // returns active bets
    case "GET": {
      onValue(activeRef, (snapshot) => {
        const data = snapshot.val();
        res.status(200).json(data);
      });
      break;
    }

    // push a new history entry into database
    case "POST": {
      const pushref = push(activeRef);
      set(pushref, req.body);

      res.status(200).json({ complete: true });
      break;
    }
    // deletes an active bet
    case "DELETE": {
      if (!query.betID) {
        res.status(404).json({ "no betID provided": true });
      } else {
        onValue(ref(db, `active/${query.id}`), (snapshot) => {
          const bets = snapshot.val();
          const urlID = bets.find((bet) => bet.BetID === query.betID);
          remove(ref(db, `active/${query.id}/${urlID}`));
          res.status(200).json({ "successful DELETE": query.betID });
        });
      }
      break;
    }

    // updating bets when game is completed
    case "PUT": {
      const nflRef = ref(db, `games/nfl`);

      // Get Active Bets
      const snapshot1 = await get(activeRef);
      const data = snapshot1.val();

      // get nfl game data
      const snapshot2 = await get(nflRef);
      const games = snapshot2.val();

      const keys = Object.keys(data);
      const values = Object.values(data);

      // loop through games in firebase db and check if game's ID matches the bet's gameID
      for (let i = 0; i < keys.length; i += 1) {
        const tempGame = games.find((game) => game.id === values[i].GameID);
        resolveBet(values[i], query, tempGame, keys[i], db);
      }

      res.status(200).json({ succes: true });
      break;
    }

    default:
      res.setHeader("Allow", ["GET", "POST", "DELETE", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
