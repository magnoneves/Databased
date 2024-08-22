import dotenv from 'dotenv';
dotenv.config();

import mysql from 'mysql2/promise';
import express from 'express';

const app = express();
const port = process.env.PORT
app.use(express.urlencoded({ extended: true }));

async function init() {

        // Rota para cadastro
        app.post('/cadastro', async (req, res) => {
            try {
                res.send("ola");
            } catch (err) {
                console.log("Deu erro ao fazer a inserção", err);
                res.status(500).send("Erro ao inserir dados.");
            }
        });

     
        app.post('/login', async (req, res) => {
            try {
                    res.send("ola")
                    console.log("Login bem sucedido");
            } catch (err) {
                console.log("Deu erro ao fazer login", err);
                res.status(500).send("Erro ao fazer login.");
            }
        });

     
        app.listen(port, () => {
            console.log("O servidor está rodando na porta {port}");
        });
        
}

init();

