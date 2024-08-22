import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

const app = express();
const port = process.env.PORT || 3000; // Definindo uma porta padrão se a variável de ambiente não estiver definida

app.use(express.urlencoded({ extended: true }));

async function init() {
    // Rota para cadastro
    app.post('/cadastro', async (req, res) => {
        try {
            res.send("Olá");
        } catch (err) {
            console.log("Deu erro ao fazer a inserção", err);
            res.status(500).send("Erro ao inserir dados.");
        }
    });

    // Rota para login
    app.post('/login', async (req, res) => {
        try {
            res.send("Olá");
            console.log("Login bem sucedido");
        } catch (err) {
            console.log("Deu erro ao fazer login", err);
            res.status(500).send("Erro ao fazer login.");
        }
    });

    // Inicia o servidor
    app.listen(port, () => {
        console.log(`O servidor está rodando na porta ${port}`);
    });
}

init();
