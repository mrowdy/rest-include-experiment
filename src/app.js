import {db} from './db';
import express from 'express';
import getCategory from './handler/getCategory';
import getArticles from './handler/getArticles';
import {api} from './api';

const port = process.env.PORT || api.port;

let app = express();
let router = express.Router();

router.get('/article', getArticles);
router.get('/article/:id/category', getCategory);

app.use('/', router);
app.listen(port);
