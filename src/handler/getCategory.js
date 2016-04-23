import {getArticleById} from '../models/article';
import {getCategoryById} from '../models/category';
import categorySchema from '../schemas/category';

export default function(req, res) {
    getArticleById(req.params.id, (article) => {
        getCategoryById(article.categoryId, (category) => {
            res.json({
                data: categorySchema(category)
            });
        });
    });
}
