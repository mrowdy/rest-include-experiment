import {db} from '../db';

export function getArticleById(id, callback) {
    let stmt = db.prepare("SELECT * from article where id = ?");
    stmt.get(id, (err, row) => {
        callback(row);
    });
    stmt.finalize();
}

export function getAllArticles(callback) {
    let stmt = db.prepare("SELECT * from article");
    stmt.all((err, rows) => {
        callback(rows);
    });
    stmt.finalize();
}