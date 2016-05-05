'use strict';

//in-memory database
var records = [];

//dependencies
const Joi = require('joi');

//schema
var schema = Joi.object().keys({
    username: Joi.string().min(3).max(16),
    password: Joi.string().min(4).max(16)
});

module.exports = [
    {
        path: '/users',
        method: 'GET',
        config: {
            tags: ['api', 'users'],
            description: 'return all user records'
        },
        handler: function(request, reply) {
         
            reply(records);
        }
    },
    {
        path: '/users/{id}',
        method: 'GET',
        config: {
            tags: ['api', 'users'],
            description: 'return user record by index',
            validate: {
                params: {
                    id: Joi.number()
                }
            }
        },
        handler: function(request, reply) {
         
            //caputre index
            let id = request.params.id;
         
            reply(records[id]);
        }
    },
    {
        path: '/users',
        method: 'POST',
        config: {
            tags: ['api', 'users'],
            description: 'add user record',
            validation: {
                payload: schema
            }
        },
        handler: function(request, reply) {
         
            //add user record
            records.push(request.payload);
         
            reply(records);
        }
    },
    {
        path: '/users/{id}',
        method: 'PUT',
        config: {
            tags: ['api', 'users'],
            description: 'replace user record',
            validate: {
                payload: schema
            }
        },
        handler: function(request, reply) {

            //caputre index
            let id = request.params.id;

            //replace indexed record
            records[id] = request.payload;

            //return record
            reply(request.payload);
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
        handler: function(request, reply) {

            //caputre index
            let id = request.params.id;

            records.splice(id, 1);

            reply(records);
        }
    }
];
