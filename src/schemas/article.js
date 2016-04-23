import {baseUrl} from '../api';

export default function(article) {
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
                    related: baseUrl() + "/article/" + article.id + "/category",
                }
            }
        }
    }
}