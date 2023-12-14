import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import sqlite3 from 'sqlite3';
import router from './Routes.js'




const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(router);

const db = new sqlite3.Database('database.db');

db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY, name TEXT, senha TEXT, email TEXT)');
});


app.post('/api/login', (req, res) => {
  const { email, senha } = req.body;

  db.get('SELECT * FROM Users WHERE email = ? AND senha = ?', [email, senha], (err, row) => {
    if (err) {
      console.error('Error during login:', err);
      res.status(500).json({ success: false, message: 'Erro interno' });
    } else {
      if (row) {
        res.json({ success: true, message: 'Logado com sucesso' });
      } else {
        res.json({ success: false, message: 'Credenciais invalidas' });
      }
    }
  });
});

app.post('/api/register', (req, res) => {
  const { name ,email, senha } = req.body;

  db.run('INSERT INTO Users (name ,email, senha) VALUES (?, ?, ?)', [name, email, senha], (err) => {
    if (err) {
      console.error('Erro durante o registro', err);
      res.status(500).json({ success: false, message: 'Erro interno' });
    } else {
      res.json({ success: true, message: 'Registrado com sucesso' });
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}`);
});
