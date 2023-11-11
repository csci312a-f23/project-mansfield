// GET and POST bet history given the userId

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET": {
      // res.status(200).json(articles);
      break;
    }
    case "POST": {
      // res.status(200).json({ ...article, id: insertedId });
      break;
    }
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
