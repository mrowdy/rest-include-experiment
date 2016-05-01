import url from 'url';
import {getArticleById} from '../models/article';
import {getCategoryById} from '../models/category';
import categorySchema from '../schemas/category';
import {cache} from '../cache';

function getQueryString(req){
    var url_parts = url.parse(req.url, true);
    return  url_parts.query;
}


function fromCache(req){
    return getQueryString(req).cache == true;
}

export default function(req, res) {

    if(fromCache(req)) {
        let cacheKey = 'article_category_' + req.params.id;
        cache.get(cacheKey, (err, reply) => {
            if(!reply) {
               getCategoryFromArticle(req.params.id, (category) => {
                   cache.set(cacheKey, JSON.stringify(category));
                   res.json({
                       data: category
                   });
               });
           } else {
               res.json({
                   data: JSON.parse(reply)
               });
           }
        });

    } else {
        getCategoryFromArticle(req.params.id, (category) => {
            res.json({
                data: category
            });
        });
    }
}

function getCategoryFromArticle(articleId, callback){
    getArticleById(articleId, (article) => {
        getCategoryById(article.categoryId, (category) => {
            callback(categorySchema(category));
        });
    });
}
