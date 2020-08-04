import { Router } from 'express';

import toolRouter from './toolRouter';

const apiRouter = Router();

apiRouter.use('/tools', toolRouter);

export default apiRouter;
