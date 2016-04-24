"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getCommentById = getCommentById;

var _db = require("./db");

function getCommentById(id, callback) {
    var stmt = _db.db.prepare("SELECT * from comment where id = ?");
    stmt.get(id, function (err, row) {
        callback(row);
    });
    stmt.finalize();
}