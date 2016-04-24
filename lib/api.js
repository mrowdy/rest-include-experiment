"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.baseUrl = baseUrl;
var api = exports.api = {
    protocol: "http",
    host: "localhost",
    port: 1337
};

function baseUrl() {
    return api.protocol + '://' + api.host + ':' + api.port;
}