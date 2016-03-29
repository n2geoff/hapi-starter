"use strict";

module.exports = [
    {
        register: require("good"),
        options: {
            reporters: [{
                reporter: require('good-console'),
                events: {
                    response: '*',
                    log: '*'
                }
            }]
        }
    },
    {
        register: require("vision"),
        options: {}
    },
    {
        register: require("inert"),
        options: {}
    },
    {
        register: require("blipp"),
        options: {}
    },
    {
        register: require("tv"),
        options: {}
    },
    {
        register: require("hapi-swagger"),
        options: {}
    }
];
