import request from '../request';
import config from '../../config.json';

console.log('##### HTTP WITH INCLUDES START #####');
console.time('all');
console.time('articles');

request(config.examples.https + '?include=1', (data) => {
    console.timeEnd('articles');
    console.timeEnd('all');
    console.log('##### HTTP WITH INCLUDES END #####');
    process.exit();
});

