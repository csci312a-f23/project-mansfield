import { getDatabase, ref, child, get, set} from "firebase/database";

// GET individual users data

export default async function handler(req, res) {
  const { method, query } = req;
  const database = getDatabase();
  switch (method) {
    case "GET": {
      const dbRef = ref(getDatabase());
      getDatabase(child(dbRef, `users/`)).then((snapshot)=> {
        if (snapshot.exists()){
          res.status(200).json(snapshot.val());
        }else{
          console.log("No snapshot found");
        }
      })
      
      break;

    }
    case "PUT": {
      if (req.body.id !== parseInt(query.id, 10)) {
        res.status(400).end(`URL and object does not match`);
        break;
      }
      // const updates = await knex("Article")
      //   .where({ id: query.id })
      //   .update(req.body);
      // if (updates === 1) {
      //   res.status(200).json(req.body);
      // } else {
      //   res.status(400).end(`Unable to update row`);
      // }
      break;
    }
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
