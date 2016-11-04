'use strict';

var User = require('../models/User');
var Joi  = require('joi');

module.exports = [
    {
        path: '/users',
        method: 'GET',
        config: {
            tags: ['api', 'users'],
            description: 'return all users'
        },
        handler: function (request, reply) {

            reply(User.all());
        }
    },
    {
        path: '/users/count',
        method: 'GET',
        config: {
            tags: ['api', 'users'],
            description: 'returns the number of users'
        },
        handler: function (request, reply) {

            reply({'count': User.count()});
        }
    },
    {
        path: '/users/active',
        method: 'GET',
        config: {
            tags: ['api', 'users'],
            description: 'returns active users'
        },
        handler: function (request, reply) {

            let records = User.all();

            let active = records.filter((item) => item.active === true);

            reply(active);
        }
    },
    {
        path: '/users/{id}',
        method: 'GET',
        config: {
            tags: ['api', 'users'],
            description: 'return user by index',
            validate: {
                params: {
                    id: Joi.number()
                }
            }
        },
        handler: function (request, reply) {

            //caputre index
            let id = request.params.id;

            reply(User.find(id));
        }
    },
    {
        path: '/users',
        method: 'POST',
        config: {
            auth: 'basic',
            tags: ['api', 'users'],
            description: 'add user',
            validate: {
                options: {
                    allowUnknown: false
                },
                payload: User.schema
            }
        },
        handler: function (request, reply) {

            //add user record
            let user = User.create(request.payload);

            reply(user);
        }
    },
    {
        path: '/users/{id}',
        method: 'PUT',
        config: {
            auth: 'basic',
            tags: ['api', 'users'],
            description: 'replace existing user',
            validate: {
                payload: User.schema
            }
        },
        handler: function (request, reply) {

            //caputre index
            let id = request.params.id;

            //replace indexed record
            let user = User.update(id, request.payload);

            //return record
            reply(user);
        }
    },
    {
        path: '/users/{id}',
        method: 'DELETE',
        config: {
            tags: ['api', 'users'],
            description: 'delete user',
            validate: {
                params: {
                    index: Joi.number()
                }
            }
        },
        handler: function (request, reply) {

            //caputre index
            let id = request.params.id;

            let user = User.delete(id);

            reply(user);
        }
    }
];
