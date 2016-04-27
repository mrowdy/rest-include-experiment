import request from '../requestHttp2';

console.time('all');
console.time('articles');

request('https://slemgrim.com/include/article', (data) => {
    let toLoad = data.length;
    data.forEach((article, index) => {
        console.time('category' + index);
        request(article.relationships.category.links.related, (category) => {
            console.timeEnd('category' + index);
            toLoad--;
            if(toLoad <= 0){
                end();
            }
        });
    });
    console.timeEnd('articles');
});

function end(){
    console.timeEnd('all');
    process.exit();
}