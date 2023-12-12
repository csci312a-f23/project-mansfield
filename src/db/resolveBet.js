import { ref, set, get, update, push, remove } from "firebase/database";

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
  // console.log(
  //   "away: " + awayscore + "home: " + homescore + "DID WIN? " + didWin,
  // );
  return didWin ? bet.WinAmount : -bet.Amount;
}

export default function resolveBet(bet, query, tempGame, key, db) {
  const historyRef = ref(db, `history/${query.id}`);
  const userRef = ref(db, `users/${query.id}`);

  if (tempGame && tempGame.completed) {
    // resolve bet if the game is complete
    // add bet to history

    const pushref = push(historyRef);
    set(pushref, bet);

    // delete active bets
    remove(ref(db, `active/${query.id}/${key}`));

    const payout = resolveBalance(bet, tempGame);

    // pay balance
    get(userRef).then((snapshot) => {
      if (snapshot.exists()) {
        const user = snapshot.val();
        const updates = {};

        updates[`users/${query.id}`] = {
          email: user.email,
          username: user.username,
          accountBalance: user.accountBalance + payout,
        };

        update(ref(db), updates);
      }
    });
    // console.log
  }
}
