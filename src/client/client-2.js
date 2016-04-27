import request from '../request';

console.time('all');
console.time('articles');

request('http://http1.slemgrim.com:3001/article?include=1', (data) => {
    console.timeEnd('articles');
    console.timeEnd('all');
});

