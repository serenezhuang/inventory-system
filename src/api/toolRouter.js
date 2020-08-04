import { Router } from 'express';

import asyncCatchHandler from '../utils/asyncCatchHandler';

import {
    addTool,
    decrementTool,
    deleteTool,
    getTool,
    getTools,
    incrementTool,
    updateTool,
} from '../controllers/ToolController';

const toolRouter = Router();

toolRouter.get('/', asyncCatchHandler(getTools));
toolRouter.post('/', asyncCatchHandler(addTool));
toolRouter.get('/:id', asyncCatchHandler(getTool));
toolRouter.patch('/:id', asyncCatchHandler(updateTool));
toolRouter.delete('/:id', asyncCatchHandler(deleteTool));
toolRouter.patch('/:id/decrement', asyncCatchHandler(decrementTool));
toolRouter.patch('/:id/increment', asyncCatchHandler(incrementTool));

export default toolRouter;
