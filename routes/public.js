"use strict";

module.exports = [
    {
        path: "/public/{path*}",
        method: "GET",
        handler: {
            directory: {
                path: "./public",
                index: false,
                listing: true
            }
        }
    }
];