"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getCategoryById = getCategoryById;
exports.getAllCategories = getAllCategories;
exports.getCategoryFromIds = getCategoryFromIds;

var _db = require("../db");

function getCategoryById(id, callback) {
    var stmt = _db.db.prepare("SELECT * from category where id = ?");
    stmt.get(id, function (err, row) {
        callback(row);
    });
    stmt.finalize();
}

function getAllCategories(callback) {
    var stmt = _db.db.prepare("SELECT * from category");
    stmt.all(function (err, rows) {
        callback(rows);
    });
    stmt.finalize();
}

function getCategoryFromIds(ids, callback) {
    _db.db.all("SELECT * from category WHERE id IN(" + ids.join() + ")", function (err, rows) {
        callback(rows);
    });
}