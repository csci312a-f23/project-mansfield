// GET and POST bet history given the userId

import { snackbarClasses } from "@mui/material";
import { queryByRole } from "@testing-library/react";
import {
  getDatabase,
  ref,
  onValue,
  set,
  push,
} from "firebase/database";


export default async function handler(req, res) {
 
  const { method, query} = req;
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
    case "POST":{  
      const pushref = push(historyRef);
      set(pushref, req.body);

      res.status(200).json({"complete": true});
      break;
    }
    case "DELETE": {
      if (!query.betID) { 
        res.status(404).json({"no betID provided": true});
      } else {
        remove(ref(db, `history/${query.id}/${query.betID}`));

        res.status(200).json({ "successful DELETE": query.betID });
      }
      break;
    }
    
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
