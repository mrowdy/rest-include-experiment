import config from '../config.json';

export function baseUrl(){
    return config.protocol + '://' + config.host + ':' + config.port;
}