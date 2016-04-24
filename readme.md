Install
---

```
    npm install
    cp config-sample.json config.json
```

overwrite your config

Run
---

```npm run start``` 

Endpoints
---

```js
/article // list of all articles
/article?include=1 //list of all articles with included categories

/article/[x]/category // category of a specific article
```
