// controler/user.js
import { openDb } from '../configDB.js';

export async function createUserTable() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS User (id INTEGER PRIMARY KEY, name TEXT, senha TEXT, email TEXT)');
    });
}

export async function selectUsers(req, res) {
    openDb().then(db => {
        db.all('SELECT * FROM User')
            .then(users => res.json(users));
    });
}

export async function selectUser(req, res) {
    let id = req.params.id;
    openDb().then(db => {
        db.get('SELECT * FROM User WHERE id=?', [id])
            .then(user => res.json(user));
    });
}

export async function insertUser(req, res) {
    let user = req.body;
    openDb().then(db => {
        db.run('INSERT INTO User (name, senha, email) VALUES (?,?,?)', [user.name, user.senha, user.email]);
    });
    res.json({
        "statusCode": 200
    });
}

export async function updateUser(req, res) {
    let user = req.body;
    openDb().then(db => {
        db.run('UPDATE User SET nome=?, senha=?, email=? WHERE id=?', [user.name, user.senha, user.email, user.id]);
    });
    res.json({
        "statusCode": 200
    });
}

export async function deleteUser(req, res) {
    let id = req.params.id;
    openDb().then(db => {
        db.get('DELETE FROM User WHERE id=?', [id])
            .then(result => result);
    });
    res.json({
        "statusCode": 200
    });
}


