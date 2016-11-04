'use strict';

module.exports = [
    {
        register: require('good'),
        options: {
            ops: false,
            reporters: {
                console: [{
                    module: 'good-console',
                    args: [{ log: '*', response: '*' }]
                }, 'stdout']
            }
        }
    },
    {
        register: require('vision'),
        options: {}
    },
    {
        register: require('inert'),
        options: {}
    },
    {
        register: require('blipp'),
        options: {}
    },
    {
        register: require('tv'),
        options: {}
    },
    {
        register: require('hapi-swagger'),
        options: {}
    },
    {
        register: require('hapi-auth-basic'),
        options: {}
    }
];
