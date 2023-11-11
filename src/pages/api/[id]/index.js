// import { getDatabase} from "firebase/database";

// GET individual users data

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET": {

      break;
    }
    case "PUT": {
     
     
      break;
    }
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
