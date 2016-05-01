import http from 'https';

export default function(url, callback){
    http.request(url, function(res) {
        let body = '';
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            body += chunk;
        });
        res.on('end', () => {
            callback(JSON.parse(body).data);
        });
    }).end();
}

