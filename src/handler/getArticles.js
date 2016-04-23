import url from 'url';
import {getAllArticles} from '../models/article';
import {getCategoryFromIds} from '../models/category';

import articleSchema from '../schemas/article';
import categorySchema from '../schemas/category';

function getQueryString(req){
    var url_parts = url.parse(req.url, true);
    return  url_parts.query;
}

function includeCategories(req){
    return getQueryString(req).include == true;
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
    console.log(articles);
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
    getAllArticles((rows) => {
        let articles = getArticleSchemas(rows);
        if(includeCategories(req)) {
            getRelatedCategories(articles, (categories) => {
                respondWithIncluded(res, articles, categories);
            });
        } else {
            respond(res, articles)
        }
    });
}
