import Bot from '../models/bot';

export function getSomething(req, res) {
  return res.status(200).end();
}

export function addBot(req, res) {
  const newBot = new Bot(req.body);
  newBot.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json(saved);
  })
}

export function getBots(req, res) {
  Bot.find().sort('-created').exec((err, bots) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json(bots)
  })
}
