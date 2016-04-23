export var api = {
    protocol: "http",
    host: "localhost",
    port: 1337
}

export function baseUrl(){
    return api.protocol + '://' + api.host + ':' + api.port;
}