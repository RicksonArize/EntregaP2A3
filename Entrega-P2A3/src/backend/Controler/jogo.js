// controler/jogo.js
import { openDb } from '../configDB.js';

export async function createJogoTable() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS jogo (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, categoria TEXT, plataforma TEXT, status TEXT, nota TEXT, urlFoto TEXT)');
    });
}

export async function selectJogos(req, res) {
    openDb().then(db => {
        db.all('SELECT * FROM jogo')
            .then(jogos => res.json(jogos));
    });
}

export async function selectJogo(req, res) {
    let id = req.params.id;
    openDb().then(db => {
        db.get('SELECT * FROM jogo WHERE id=?', [id])
            .then(jogo => res.json(jogo));
    });
}

export async function insertJogo(req, res) {
    let jogo = req.body;
    console.log(jogo);
    openDb().then(db => {
        db.run('INSERT INTO jogo (name, categoria, plataforma, status, nota, urlFoto) VALUES (?,?,?,?,?,?)', [jogo.name, jogo.categoria, jogo.plataforma, jogo.status, jogo.nota, jogo.urlFoto]);
    });
    res.json({
        "statusCode": 200
    });
}

export async function updateJogo(req, res) {
    let jogo = req.body;
    openDb().then(db => {
        db.run('UPDATE jogo SET name=?, categoria=?, plataforma=?, status=?, nota=?, urlFoto=? WHERE id=?', [jogo.name,jogo.categoria, jogo.plataforma, jogo.status, jogo.nota , jogo.urlFoto, jogo.id]);
    });
    res.json({
        "statusCode": 200
    });
}

export async function deleteJogo(req, res) {
    let id = req.params.id;
    openDb().then(db => {
        db.get('DELETE FROM Jogo WHERE id=?', [id])
            .then(result => result);
    });
    res.json({
        "statusCode": 200
    });
}
