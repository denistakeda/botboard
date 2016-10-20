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

export function addPost(req, res) {
  if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
    res.status(403).end();
  }

  const newPost = new Post(req.body.post);

  // Let's sanitize inputs
  newPost.title = sanitizeHtml(newPost.title);
  newPost.name = sanitizeHtml(newPost.name);
  newPost.content = sanitizeHtml(newPost.content);

  newPost.slug = slug(newPost.title.toLowerCase(), { lowercase: true });
  newPost.cuid = cuid();
  newPost.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post: saved });
  });
}
