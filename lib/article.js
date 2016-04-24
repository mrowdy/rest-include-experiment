'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getArticleById = getArticleById;

var _db = require('./db');

function getArticleById(id, callback) {
    var stmt = _db.db.prepare("SELECT * from article where id = ?");
    stmt.get(id, function (err, row) {
        console.log(row);
        callback({
            id: row.id,
            type: 'article',
            attributes: {
                title: row.title,
                text: row.text,
                author: row.author
            },
            relationships: {
                category: {
                    data: {
                        id: row.categoryId,
                        type: 'category'
                    },
                    links: {
                        "self": "http://localhost:1337/category/" + row.id
                    }
                },
                "comments": {
                    "links": {
                        "self": "http://localhost:1337/articles/" + row.id + "/relationships/comments"
                    },
                    "data": [{ "type": "comments", "id": "5" }, { "type": "comments", "id": "12" }]
                }
            }
        });
    });
    stmt.finalize();
}