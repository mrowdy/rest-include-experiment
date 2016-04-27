import request from '../request';

console.time('all');
console.time('articles');

request('http://http1.slemgrim.com:3001/article', (data) => {
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
}



