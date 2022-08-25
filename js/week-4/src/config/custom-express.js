import express from './node_modules/express/index.js';
const app = express();

import rotas from '../routes/rotas';
rotas(app);

export default app;