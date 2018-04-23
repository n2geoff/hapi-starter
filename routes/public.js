"use strict";

module.exports = [
    {
        path: "/{param*}",
        method: "GET",
        handler: {
            directory: {
                path: "./public",
                index: true,
                listing: false
            }
        }
    }
];
