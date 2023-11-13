// import { getDatabase} from "firebase/database";


import {
  getDatabase,
  ref,
  onValue
} from "firebase/database";


// GET individual users data

export default async function handler(req, res) {
  const { method, query } = req;
  const db = getDatabase();
  

  // get User data by id
  switch (method) {
    case "GET": {
      const userRef = ref(db,`users/${query.id}`)
      onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        res.status(200).json(data);
      });
      break;
    }
    
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
 