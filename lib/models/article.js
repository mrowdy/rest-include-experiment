"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getArticleById = getArticleById;
exports.getAllArticles = getAllArticles;

var _db = require("../db");

function getArticleById(id, callback) {
    var stmt = _db.db.prepare("SELECT * from article where id = ?");
    stmt.get(id, function (err, row) {
        callback(row);
    });
    stmt.finalize();
}

function getAllArticles(callback) {
    var stmt = _db.db.prepare("SELECT * from article");
    stmt.all(function (err, rows) {
        callback(rows);
    });
    stmt.finalize();
}