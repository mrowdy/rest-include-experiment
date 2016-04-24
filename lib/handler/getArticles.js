'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (req, res) {
    (0, _article.getAllArticles)(function (rows) {
        var articles = getArticleSchemas(rows);
        if (includeCategories(req)) {
            getRelatedCategories(articles, function (categories) {
                respondWithIncluded(res, articles, categories);
            });
        } else {
            respond(res, articles);
        }
    });
};

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _article = require('../models/article');

var _category = require('../models/category');

var _article2 = require('../schemas/article');

var _article3 = _interopRequireDefault(_article2);

var _category2 = require('../schemas/category');

var _category3 = _interopRequireDefault(_category2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getQueryString(req) {
    var url_parts = _url2.default.parse(req.url, true);
    return url_parts.query;
}

function includeCategories(req) {
    return getQueryString(req).include == true;
}

function getArticleSchemas(rows) {
    var articles = [];
    rows.forEach(function (row) {
        articles.push((0, _article3.default)(row));
    });
    return articles;
}

function getCategorySchemas(rows) {
    var categories = [];
    rows.forEach(function (row) {
        categories.push((0, _category3.default)(row));
    });
    return categories;
}

function getRelatedCategories(articles, callback) {
    console.log(articles);
    var categoryIds = [];
    articles.forEach(function (article) {
        categoryIds.push(article.relationships.category.data.id);
    });

    (0, _category.getCategoryFromIds)(categoryIds, function (rows) {
        callback(getCategorySchemas(rows));
    });
}

function respondWithIncluded(res, data, includes) {
    res.json({
        data: data,
        included: [includes]
    });
}

function respond(res, data) {
    res.json({
        data: data
    });
}