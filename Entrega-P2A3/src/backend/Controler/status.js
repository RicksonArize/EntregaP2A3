
import { openDb } from '../configDB.js';

export async function createStatusTable() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Status (id INTEGER PRIMARY KEY AUTOINCREMENT, statu TEXT)');
    });
}

export async function selectStatus(req, res) {
    openDb().then(db => {
        db.all('SELECT * FROM Status')
            .then(status => res.json(status));
    });
}

export async function selectStatu(req, res) {
    let id = req.params.id;
    openDb().then(db => {
        db.get('SELECT * FROM Status WHERE id=?', [id])
            .then(statu => res.json(statu));
    });
}

export async function insertStatu(req, res) {
    let statu = req.body;
    openDb().then(db => {
        db.run('INSERT INTO Status (statu) VALUES (?)', [statu.statu]);
    });
    res.json({
        "statusCode": 200
    });
}

export async function updateStatu(req, res) {
    let statu = req.body;
    openDb().then(db => {
        db.run('UPDATE Status SET statu=? WHERE id=?', [statu.statu, statu.id]);
    });
    res.json({
        "statusCode": 200
    });
}

export async function deleteStatu(req, res) {
    let id = req.params.id;
    openDb().then(db => {
        db.get('DELETE FROM Status WHERE id=?', [id])
            .then(result => result);
    });
    res.json({
        "statusCode": 200
    });
}
