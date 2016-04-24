'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (description) {
    return {
        id: description.id,
        type: 'category',
        attributes: {
            name: description.name,
            description: description.description
        }
    };
};