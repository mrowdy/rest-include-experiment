'use strict';

var _migration = require('./migration');

var _migration2 = _interopRequireDefault(_migration);

var _sqlite = require('sqlite3');

var _sqlite2 = _interopRequireDefault(_sqlite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db = new _sqlite2.default.Database('res/db.sqlite');

(0, _migration2.default)(db);

db.close();