
// GET, POST, and DELETE the active bets

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET": {
      
      break;
    }
    case "POST": {
      break;
    }
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
