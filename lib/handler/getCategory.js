'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (req, res) {
    (0, _article.getArticleById)(req.params.id, function (article) {
        (0, _category.getCategoryById)(article.categoryId, function (category) {
            res.json({
                data: (0, _category3.default)(category)
            });
        });
    });
};

var _article = require('../models/article');

var _category = require('../models/category');

var _category2 = require('../schemas/category');

var _category3 = _interopRequireDefault(_category2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }