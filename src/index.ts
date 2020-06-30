import express from 'express';
import cors from 'cors';
import routes from './routes';

require('dotenv').config();

const app = express();
const port = 3333;

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, () => {
  console.log(`O servidor está escutando na porta ${port}`);
});