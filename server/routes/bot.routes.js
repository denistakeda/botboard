import { Router } from 'express';
import * as BotController from '../controllers/bot.controller';

const router = new Router();

router.route('/bots')
  .get(BotController.getBots)
  .post(BotController.addBot);

router.route('/bots/:botId')
  .get(BotController.getBot);

export default router;
