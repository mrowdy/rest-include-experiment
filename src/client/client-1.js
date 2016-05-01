import request from '../request';
import config from '../../config.json';

console.log('##### HTTP WITHOUT INCLUDES START #####');
console.time('all');
console.time('articles');

request(config.examples.https, (data) => {
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
    console.log('##### HTTP WITHOUT INCLUDES END #####');
    process.exit();
}

