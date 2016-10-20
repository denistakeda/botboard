import { Router } from 'express';
import * as BotController from '../controllers/bot.controller';

const router = new Router();

router.route('/bots')
  .post(BotController.addBot)

export default router;
