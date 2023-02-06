import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());

app.use(routes);
// app.use(errorMiddleWare);

export default app;
