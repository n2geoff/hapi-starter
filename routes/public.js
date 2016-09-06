'use strict';

module.exports = [
    {
        path: '/{path*}',
        method: 'GET',
        handler: {
            directory: {
                path: './public',
                index: true,
                listing: false
            }
        }
    }
];
