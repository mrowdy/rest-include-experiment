import {db} from '../db';

export function getCategoryById(id, callback) {
    let stmt = db.prepare("SELECT * from category where id = ?");
    stmt.get(id, (err, row) => {
        callback(row);
    });
    stmt.finalize();
}

export function getAllCategories(callback) {
    let stmt = db.prepare("SELECT * from category");
    stmt.all((err, rows) => {
        callback(rows);
    });
    stmt.finalize();
}

export function getCategoryFromIds(ids, callback) {
    db.all("SELECT * from category WHERE id IN(" + ids.join() + ")", (err, rows) => {
        callback(rows);
    });
}