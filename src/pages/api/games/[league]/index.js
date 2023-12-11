import { createRouter } from "next-connect";

const router = createRouter();

router.get(async (req, res) => {
  const response = await fetch(
    `https://api.the-odds-api.com//v4/sports/${req.query.league}/odds/?apiKey=${process.env.REACT_APP_ODDS_API_KEY}&regions=us&markets=h2h,spreads,totals&bookmakers=fanduel`,
  );
  if (response.ok) {
    const gameOdds = await response.json();
    res.status(200).json(gameOdds);
  } else res.status(400).end("Something went wrong.");
});

export default router.handler();
