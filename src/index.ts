import express from 'express';
import cors from 'cors';
import routes from './routes';
import moongose from 'mongoose';

require('dotenv').config();

const app = express();
const port = 3333;

app.use(express.json());
app.use(cors());
app.use(routes);

console.log(process.env.DB_USER);

moongose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@clustertest.fgtny.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(port, () => {
  console.log(`O servidor está escutando na porta ${port}`);
});