import express from 'express';
import mysql from 'mysql2/promise';
const app = express();
const port = process.env.PORT || 3000;
try{
 const mysqli = mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });
}
catch(err){
  res.send(err);
}



app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
   const [results] = mysqli.execute('INSERT INTO usuario(nome, email, senha) VALUES (matheus, matheus, 123)');
    console.log("Inserção feita com sucesso");
    res.send("ola");
 
});
app.listen(port, () => {
  console.log(`O servidor está rodando na porta ${port}`);
});
