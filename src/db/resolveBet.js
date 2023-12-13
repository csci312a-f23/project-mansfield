import { ref, set, update, push, remove } from "firebase/database";

function resolveBalance(bet, game) {
  const betType = bet.BetType;
  const awayscore = game.scores[0].score;
  const homescore = game.scores[1].score;
  let didWin = false;
  switch (betType) {
    case "total over": {
      const total = homescore + awayscore;
      if (total > bet.Total) {
        didWin = true;
      }
      break;
    }
    case "total under": {
      const total = homescore + awayscore;
      if (total < bet.Total) {
        didWin = true;
      }
      break;
    }
    case "spread away": {
      const diff = awayscore - homescore;
      // if negative spread (favorites), must win more than
      if (bet.spread < 0 && diff >= Math.abs(bet.spread)) {
        didWin = true;
      }
      // if positive spread (underdogs), must lose by less than spread
      else if (diff <= bet.spread) {
        didWin = true;
      }
      break;
    }
    case "spread home": {
      const diff = homescore - awayscore;
      // if negative spread (favorites), must win more than
      if (bet.spread < 0 && diff >= Math.abs(bet.spread)) {
        didWin = true;
      }
      // if positive spread (underdogs), must lose by less than spread
      else if (diff <= bet.spread) {
        didWin = true;
      }
      break;
    }
    case "ML away": {
      if (awayscore > homescore) didWin = true;
      break;
    }
    case "ML home": {
      if (homescore > awayscore) didWin = true;
      break;
    }
    default: {
      return 0;
    }
  }
  return didWin ? bet.WinAmount : -bet.Amount;
}

export default function resolveBet(bet, query, game, key, db, user) {
  const historyRef = ref(db, `history/${query.id}`);
  const activeRef = ref(db, `active/${query.id}/${key}`);

  // resolve bet if the game is complete
  if (game && game.completed) {
    // delete bet from active table
    remove(activeRef);

    // payout and updates account Balance
    const payout = resolveBalance(bet, game);

    // update user info
    const updates = {};
    updates[`users/${query.id}`] = {
      email: user.email,
      username: user.username,
      accountBalance: user.accountBalance + payout,
    };

    const newbet = bet;
    newbet.AwayScore = game.scores[0].score;
    newbet.HomeScore = game.scores[1].score;
    newbet.Result = payout;

    // add bet to history table
    const pushref = push(historyRef);
    set(pushref, bet);

    update(ref(db), updates);
  }
}
