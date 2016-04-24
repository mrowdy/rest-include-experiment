'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getJobById = getJobById;

var _db = require('./db');

function getJobById(id, callback) {
    var stmt = _db.db.prepare("SELECT * from job where id = ?");
    stmt.get(id, function (err, row) {
        callback({
            id: row.id,
            type: 'job',
            attributes: {
                title: row.title,
                description: row.description
            },
            relationships: {
                company: {
                    id: row.company,
                    type: 'company',
                    links: {
                        self: 'http://localhost:1337/company/' + row.company
                    }
                }
            }
        });
    });
    stmt.finalize();
}