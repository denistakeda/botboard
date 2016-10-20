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

export function getBot(req, res) {
  Bot.findOne({_id: req.params.botId}).exec((err, bot) => {
    if (err) {
      res.status(500).send(err);
    }

    res.json(Object.assign(bot, {
      users: [
        {
          _id: 1,
          bot: "sdfijfsg",
          name: 'Shai Alon',
          gender: "male",
          created : "2016-10-20T13:51:59.968Z"
        },
        {
          _id: 2,
          bot: "sdfijfsg",
          name: 'Denis Krivosheev',
          gender: "male",
          created : "2016-09-20T13:51:59.968Z"
        }
      ]
    }));
  })
}
