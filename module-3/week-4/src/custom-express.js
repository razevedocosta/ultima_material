import express from 'express';
const app = express();

import rotas from './rotas';
rotas(app);

export default app;