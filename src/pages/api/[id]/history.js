// GET and POST bet history given the userId

import {
  getDatabase,
  ref,
  onValue,
  set,
  push,
  get,
  child,
} from "firebase/database";



export default async function handler(req, res) {
 
  const { method, query} = req;
  const db = getDatabase();
  const historyRef = ref(db, `history/${query.id}`);

  
  switch (method) {
    case "GET": {
      // onValue(historyRef, (snapshot) => {
      //   const data = snapshot.val();
      //   res.status(200).json(data);
      // });
      // https://firebase.google.com/docs/database/web/read-and-write#web-modular-api_3
      try {
        const snapshot = await get(ref(getDatabase()), `history/${query.id}`);
        if (snapshot.exists()) {
          console.log(snapshot.val());
          //console.log(snapshot.val().history.Abe) // Object of bet objects, convert to an array, and send that back to the client
          res.status(200).json(Object.values(snapshot.val().history.Abe));
        }
      } catch (error) {
        console.log(error);
        res.status(500);
      }
      
      break;

    }

    // push a new history entry into database
    case "POST":{  
        
      const pushref = push(historyRef);
      set(pushref, req.body);
  
      res.status(200).json({"complete": true});
      break;
    }
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
