import express from 'express';
import mysql from 'mysql2/promise';
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`O servidor está rodando na porta ${port}`);
});
