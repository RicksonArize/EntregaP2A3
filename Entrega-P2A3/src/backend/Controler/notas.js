
import { openDb } from '../configDB.js';

export async function createNotaTable() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Notas (id INTEGER PRIMARY KEY AUTOINCREMENT, nota INTEGER)');
    });
}

export async function selectNotas(req, res) {
    openDb().then(db => {
        db.all('SELECT * FROM Notas')
            .then(notas => res.json(notas));
    });
}

export async function selectNota(req, res) {
    let id = req.params.id;
    openDb().then(db => {
        db.get('SELECT * FROM Notas WHERE id=?', [id])
            .then(nota => res.json(nota));
    });
}

export async function insertNota(req, res) {
    let nota = req.body;
    openDb().then(db => {
        db.run('INSERT INTO Notas (nota) VALUES (?)', [nota.nota]);
    });
    res.json({
        "statusCode": 200
    });
}

export async function updateNota(req, res) {
    let nota = req.body;
    openDb().then(db => {
        db.run('UPDATE Notas SET name=? WHERE id=?', [nota.nota, nota.id]);
    });
    res.json({
        "statusCode": 200
    });
}

export async function deleteNota(req, res) {
    let id = req.params.id;
    openDb().then(db => {
        db.get('DELETE FROM Notas WHERE id=?', [id])
            .then(result => result);
    });
    res.json({
        "statusCode": 200
    });
}
