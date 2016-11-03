'use strict';

let path = require('path');

module.exports = [
    {
        path: '/{path*}',
        method: 'GET',
        handler: {
            directory: {
                path: path.resolve('../', 'public'),
                index: true,
                listing: false
            }
        }
    }
];
