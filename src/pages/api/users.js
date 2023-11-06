import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, child, get, set} from "firebase/database";

import {firebaseConfig} from "../../firebase-config"


export default async function handler(req, res) {
    const { method, query } = req;
    const app = initializeApp(firebaseConfig);
    const database = getDatabase();


//     const dbRef = ref(database, `users/`);
//     onValue(dbRef, (snapshot) =>{
//         const data = snapshot.val();
//         res.status(200).json(data);
//     });
// }

    switch (method) {
        case "GET": {
            const dbRef = ref(database, `users/`);
            onValue(dbRef, (snapshot) =>{
                const data = snapshot.val();
                res.status(200).json(data);
            });
        
        break;

        }
        case "POST": {
        // res.status(200).json({ message:"Success"});
            const postListRef = ref(db, `user`);
            const newPostRef = push(postListRef);
            set(newPostRef, 'users/', {
                id: query.id,
                username : query.username,
                email: query.email,
                accountBalance: 10000 
            });



        
        break;
        }
        default:
        res.setHeader("Allow", ["GET", "PUT"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
}
