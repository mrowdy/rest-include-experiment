'use strict';

var _sqlite = require('sqlite3');

var _sqlite2 = _interopRequireDefault(_sqlite);

var _db = require('./db');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_db.db.serialize(function () {});