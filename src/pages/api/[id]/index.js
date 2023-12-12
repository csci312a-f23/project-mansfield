import { getDatabase, get, ref, set } from "firebase/database";

export default async function handler(req, res) {
  const { method, query } = req;
  const db = getDatabase();

  // get User data by id
  switch (method) {
    case "GET": {
      const reference = ref(db, `users/${query.id}`);
      get(reference).then((snapshot) => {
        if (snapshot.exists()) {
          res.status(200).json(snapshot.val());
        } else {
          res.status(404).end("User does not exist");
        }
      });
      break;
    }
    case "PUT": {
      /**
       * First checks if user exist, create an account if it doesn't
       */
      const reference = ref(db, `users/${query.id}`);

      set(reference, req.body);

      res.status(200).json(req.body);
      break;
    }
    case "POST": {
      /**
       * First checks if user exist, create an account if it doesn't
       */
      const reference = ref(db, `users/${query.id}`);

      const snapshot = await get(reference);
      if (snapshot.exists()) {
        res.status(200).json(snapshot.val());
        return;
      }

      const userInfo = {
        username: req.body.username,
        email: req.body.email,
        accountBalance: 0,
      };

      set(reference, userInfo);

      res.status(200).json(userInfo);
      break;
    }
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
