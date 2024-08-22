import express from 'express';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Configuração do pool de conexões
const mysqli = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
});

app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  try {
    // Inserir dados no banco de dados
    const [results] = await mysqli.execute('INSERT INTO usuario(nome, email, senha) VALUES (?, ?, ?)', ['matheus', 'matheus', '123']);
    console.log("Inserção feita com sucesso");
    res.send("ola");
  } catch (err) {
    console.error("Erro ao inserir dados:", err);
    res.status(500).send("Erro ao inserir dados.");
  }
});

app.listen(port, () => {
  console.log(`O servidor está rodando na porta ${port}`);
});
