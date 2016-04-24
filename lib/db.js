'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = undefined;

var _sqlite = require('sqlite3');

var _sqlite2 = _interopRequireDefault(_sqlite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db = exports.db = new _sqlite2.default.Database('res/db.sqlite');