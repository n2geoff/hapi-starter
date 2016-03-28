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
        register: require("inert"),
        option: {}
    },
    {
        register: require("blipp"),
        option: {}
    }
];
