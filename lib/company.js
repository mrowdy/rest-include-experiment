'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getCompanyById = getCompanyById;

var _db = require('./db');

function getCompanyById(id, callback) {
    var stmt = _db.db.prepare("SELECT * from company where id = ?");
    stmt.get(id, function (err, row) {
        callback({
            id: row.id,
            type: 'company',
            attributes: {
                title: row.title,
                description: row.description
            }
        });
    });
    stmt.finalize();
}