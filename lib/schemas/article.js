'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (article) {
    return {
        id: article.id,
        type: 'article',
        attributes: {
            title: article.title,
            text: article.text,
            author: article.author
        },
        relationships: {
            category: {
                data: {
                    id: article.categoryId,
                    type: 'category'
                },
                links: {
                    related: (0, _api.baseUrl)() + "/article/" + article.id + "/category"
                }
            }
        }
    };
};

var _api = require('../api');