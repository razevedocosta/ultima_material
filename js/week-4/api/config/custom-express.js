import express from 'express';
const app = express();

import rotas from '../routes/routes.js';
rotas(app);

export default app;