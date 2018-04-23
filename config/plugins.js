"use strict";

module.exports = [
    {
        plugin: require("good"),
        options: {
            ops: false,
            reporters: {
                console: [{
                    module: "good-squeeze",
                    name: "Squeeze",
                    args: [{
                        log: "*",
                        response: "*"
                    }]
                }, {
                    module: "good-console"
                }, "stdout"]
            }
        }
    },
    {
        plugin: require("inert"),
        options: {}
    },
    {
        plugin: require("vision"),
        options: {}
    },
    {
        plugin: require("blipp"),
        options: {}
    },
    {
        plugin: require("hapi-swagger"),
        options: {}
    }
];
