import express from 'express';

import { bodyParser } from './main/middlewares';
import { router } from './main/routes';

const app = express();

app.use(bodyParser);

app.use(router);

export default app;
