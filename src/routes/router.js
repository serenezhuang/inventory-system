import apiRouter from '../api/apiRouter';

import { renderIndexFile } from '../middlewares/routeHandlers';

export default (app) => {
    app.get('/', renderIndexFile);
    app.get('/tools/add', renderIndexFile);
    app.get('/tools/:id', renderIndexFile);
    app.get('/tools/:id/edit', renderIndexFile);
    app.use('/api', apiRouter);
};
