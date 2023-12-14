// Controler/Categoria.js
import { openDb } from '../configDB.js';

export async function createCategoriaTable() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Categorias (id INTEGER PRIMARY KEY AUTOINCREMENT, categoria TEXT)');
    });
}

export async function selectCategorias(req, res) {
    openDb().then(db => {
        db.all('SELECT * FROM Categorias')
            .then(categorias => res.json(categorias));
    });
}

export async function selectCategoria(req, res) {
    let id = req.params.id;
    openDb().then(db => {
        db.get('SELECT * FROM Categorias WHERE id=?', [id])
            .then(categoria => res.json(categoria));
    });
}

export async function insertCategoria(req, res) {
    let categoria = req.body;
    openDb().then(db => {
        db.run('INSERT INTO Categorias (categoria) VALUES (?)', [categoria.categoria]);
    });
    res.json({
        "statusCode": 200
    });
}

export async function updateCategoria(req, res) {
    let categoria = req.body;
    openDb().then(db => {
        db.run('UPDATE Categorias SET name=? WHERE id=?', [categoria.categoria, categoria.id]);
    });
    res.json({
        "statusCode": 200
    });
}

export async function deleteCategoria(req, res) {
    let id = req.params.id;
    openDb().then(db => {
        db.get('DELETE FROM Categorias WHERE id=?', [id])
            .then(result => result);
    });
    res.json({
        "statusCode": 200
    });
}
