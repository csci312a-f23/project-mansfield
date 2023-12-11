import {
  getDatabase,
  ref,
  onValue,
  push,
  update,
  remove,
} from "firebase/database";

// GET, POST, and DELETE the active bets

export default async function handler(req, res) {
  const { method, query } = req;
  const db = getDatabase();
  const activeRef = ref(db, `active/${query.id}`);

  switch (method) {
    case "GET": {
      onValue(activeRef, (snapshot) => {
        const data = snapshot.val();
        res.status(200).json(data);
      });
      break;
    }
    case "POST": {
      const betsToPost = req.body;
      const updates = {};

      // TODO: check most recent game data to make sure no games have started
      // const leagueKeys = [...new Set(Object.values(betsToPost).map(item => item.LeagueKey))]
      Object.values(betsToPost).forEach((bet) => {
        const betKey = push(activeRef).key;
        updates[`/${betKey}`] = bet;
      });

      update(activeRef, updates);
      res.status(200).json({ complete: true });
      break;
    }
    case "DELETE": {
      if (!query.betID) {
        res.status(404).json({ "no betID provided": true });
      } else {
        remove(ref(db, `active/${query.id}/${query.betID}`));

        res.status(200).json({ "successful DELETE": query.betID });
      }
      break;
    }

    default:
      res.setHeader("Allow", ["GET", "POST", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
