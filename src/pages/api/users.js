import {
  getDatabase,
  ref,
  onValue,
  set,
  push,
} from "firebase/database";


// write user data using userKey
function writeUserData(userkey, username, email, accountBalance) {
    const db = getDatabase();
  
    // Old user
    if (userkey) {
      const reference = ref(db, `users/${userkey}`);
      set(reference, {
        username,
        email,
        accountBalance,
      });
      return userkey;
    } 
    // if new user, we push new ref to users
    
      const reference = ref(db, `users/`);
      const pushRef = push(reference);
      set(pushRef, {
        username,
        email,
        accountBalance,
      });
      
    return pushRef.key;
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
        req.body.userkey,
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




/* When writing new user data, there is no userkey, so we don't use userkey */
/*
fetch("/api/users", {
    method: "POST", 
    body: JSON.stringify({
        username:"testme",
        email: "test@me.com",
        accountBalance: 30303203200
    }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
})
   .then(resp => resp.json())
   .then(data => { console.log(data); });
*/

/* Use userkey when resetting user data to database */
/* 
fetch("/api/users", {
    method: "POST", 
    body: JSON.stringify({
        userkey:"-NimBcINGZleVhZ9y6JW",
        username:"testme",
        email: "test@me.com",
        accountBalance: 30303203200
    }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
})
   .then(resp => resp.json())
   .then(data => { console.log(data); });
*/
