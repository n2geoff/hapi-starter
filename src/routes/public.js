"use strict";

const path = require("path");

module.exports = [
    {
        path: "/{param*}",
        method: "GET",
        handler: {
            directory: {
                path: path.join(__dirname, "../public"),
                index: true,
                listing: false
            }
        }
    }
];
