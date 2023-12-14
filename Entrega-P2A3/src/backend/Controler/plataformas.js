// controler/Plataforma.js
import { openDb } from '../configDB.js';

export async function createPlataformaTable() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS pataformas (id INTEGER PRIMARY KEY AUTOINCREMENT, nomePlataforma TEXT, urlPlataforma TEXT)');
    });
}

export async function selectPlataformas(req, res) {
    openDb().then(db => {
        db.all('SELECT * FROM plataformas')
            .then(plataformas => res.json(plataformas));
    });
}

export async function selectPlataforma(req, res) {
    let id = req.params.id;
    openDb().then(db => {
        db.get('SELECT * FROM plataformas WHERE id=?', [id])
            .then(plataforma => res.json(plataforma));
    });
}

export async function insertPlataforma(req, res) {
    let plataforma = req.body;
    openDb().then(db => {
        db.run('INSERT INTO plataformas (nomePlataforma, urlPlataforma) VALUES (?,?)', [plataforma.nomePlataforma, plataforma.urlPlataforma]);
    });
    res.json({
        "statusCode": 200
    });
}

export async function updatePlataforma(req, res) {
    let plataforma = req.body;
    openDb().then(db => {
        db.run('UPDATE plataformas SET nome=?, urlPlataforma=? WHERE id=?', [plataforma.nomePlataforma, plataforma.urlPlataforma, plataforma.id]);
    });
    res.json({
        "statusCode": 200
    });
}

export async function deletePlataforma(req, res) {
    let id = req.params.id;
    openDb().then(db => {
        db.get('DELETE FROM plataformas WHERE id=?', [id])
            .then(result => result);
    });
    res.json({
        "statusCode": 200
    });
}


