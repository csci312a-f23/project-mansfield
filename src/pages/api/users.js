import { getDatabase, ref, onValue, set } from "firebase/database";

// write user data using userKey
function writeUserData(username, email, accountBalance) {
  const db = getDatabase();

  const reference = ref(db, `users/${username}`);
  set(reference, {
    username,
    email,
    accountBalance,
  });

  return reference.key;
}

export default async function handler(req, res) {
  const { method } = req;
  const database = getDatabase();

  switch (method) {
    case "GET": {
      const dbRef = ref(database, `users/`);
      onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        res.status(200).json(data);
      });

      break;
    }
    case "POST": {
      // use write user data, pushes and resets
      const key = writeUserData(
        req.body.username,
        req.body.email,
        req.body.accountBalance,
      );
      res.status(200).json({ key });
      break;
    }
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
