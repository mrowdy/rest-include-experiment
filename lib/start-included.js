'use strict';

var _db = require('./db');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _getCategory = require('./handler/getCategory');

var _getCategory2 = _interopRequireDefault(_getCategory);

var _getArticles = require('./handler/getArticles');

var _getArticles2 = _interopRequireDefault(_getArticles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 1337;

var app = (0, _express2.default)();
var router = _express2.default.Router();

router.get('/article', _getArticles2.default);
router.get('/article/:id/category', _getCategory2.default);

app.use('/', router);
app.listen(port);