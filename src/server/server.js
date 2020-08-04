import express from 'express';
import morgan from 'morgan';
import path from 'path';

import errorHandler from '../middlewares/errorHandler';
import router from '../routes/router';

const app = express();
const { HOST, PORT } = process.env;

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(morgan('combined'));
app.use('/static', express.static(path.join(__dirname, '../../dist/static')));
router(app);
app.use(errorHandler);

app.listen(PORT, () => `Inventory System is listening on ${HOST}:${PORT}`);
