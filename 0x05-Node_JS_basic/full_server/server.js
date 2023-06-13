import express from 'express';
import controllerRouter from './routes/index';

const app = express();
const PORT = 1245;

controllerRouter(app);

app.listen(PORT);

export default app;
