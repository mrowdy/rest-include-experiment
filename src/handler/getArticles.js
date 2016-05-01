import url from 'url';
import {getAllArticles} from '../models/article';
import {getCategoryFromIds} from '../models/category';
import {cache} from '../cache';

import articleSchema from '../schemas/article';
import categorySchema from '../schemas/category';

function getQueryString(req){
    var url_parts = url.parse(req.url, true);
    return  url_parts.query;
}

function includeCategories(req){
    return getQueryString(req).include == true;
}

function fromCache(req){
    return getQueryString(req).cache == true;
}

function getArticleSchemas(rows){
    let articles = [];
    rows.forEach((row) => {
        articles.push(articleSchema(row));
    });
    return articles;
}

function getCategorySchemas(rows){
    let categories = [];
    rows.forEach((row) => {
        categories.push(categorySchema(row));
    });
    return categories;
}

function getRelatedCategories(articles, callback){
    let categoryIds = [];
    articles.forEach((article) => {
        categoryIds.push(article.relationships.category.data.id);
    });

    getCategoryFromIds(categoryIds, (rows) => {
        callback(getCategorySchemas(rows))
    });
}

function respondWithIncluded(res, data, includes){
    res.json({
        data: data,
        included: [includes]
    });
}

function respond(res, data){
    res.json({
        data: data
    });
}

export default function(req, res) {
    if(fromCache(req)) {
        cache.get('articlesa', (err, reply) => {
            if(!reply) {
                getArticles((articles) => {
                   cache.set('articlesa', JSON.stringify(articles));
                   respond(res, articles);
                });
            } else {
                respond(res, JSON.parse(reply));
            }
        });
    } else if(includeCategories(req)) {
        getArticlesWithCategory((data) => {
            respondWithIncluded(res, data.articles, data.categories);
        })
    } else {
        getArticles((articles) => {
            respond(res, articles);
        });
    }
}

function getArticles(callback){
    getAllArticles((rows) => {
        callback(getArticleSchemas(rows));
    });
}

function getArticlesWithCategory(callback){
    getAllArticles((rows) => {
        let articles = getArticleSchemas(rows);
        getRelatedCategories(articles, (categories) => {
           callback({
               'articles': articles,
               'categories': categories
           });
        });
    });
}
