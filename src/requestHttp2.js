import http2 from 'http2';

export default function (url, callback) {

    var request = http2.get(url);

    // Receiving the response
    request.on('response', function (res) {
        let body = '';
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            body += chunk;
        });
        res.on('end', () => {
            callback(JSON.parse(body).data);
        });
    });
}

