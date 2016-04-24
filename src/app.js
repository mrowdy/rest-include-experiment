import {db} from './db';
import express from 'express';
import getCategory from './handler/getCategory';
import getArticles from './handler/getArticles';
import config from '../config.json';

const port = process.env.PORT || 3000;

let app = express();
let router = express.Router();

router.get('/article', getArticles);
router.get('/article/:id/category', getCategory);

app.use(config.base, router);
app.listen(port);
