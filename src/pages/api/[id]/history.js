// GET and POST bet history given the userId

import { getDatabase, ref, onValue, set, push } from "firebase/database";

export default async function handler(req, res) {
  const { method, query } = req;
  const db = getDatabase();
  const historyRef = ref(db, `history/${query.id}`);

  switch (method) {
    case "GET": {
      onValue(historyRef, (snapshot) => {
        const data = snapshot.val();
        res.status(200).json(data);
      });
      break;
    }

    // push a new history entry into database
    case "POST": {
      const pushref = push(historyRef);
      set(pushref, req.body);

      res.status(200).json({ complete: true });
      break;
    }
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
