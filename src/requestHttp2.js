import http2 from 'http2';
import url from 'url';

const agent = new http2.Agent({ keepAlive: true });

export default function (rawUrl, callback) {

    let options = url.parse(rawUrl);
    options.agent = agent;

    // Receiving the response
    let req = http2.request(options, function (res) {
        let body = '';
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            body += chunk;
        });
        res.on('end', () => {
            callback(JSON.parse(body).data);
        });
    });
    req.end();
}

