'use strict';

//in-memory database
let records = [];

//dependencies
const Joi = require('joi');

//schema
const schema = Joi.object().keys({
    task: Joi.string().min(3).max(64).required(),
    completed: Joi.boolean().default(false)
});

module.exports = [
    {
        path: '/tasks',
        method: 'GET',
        config: {
            tags: ['api', 'tasks'],
            description: 'return all tasks'
        },
        handler: function(request, reply) {

            reply(records);
        }
    },
    {
        path: '/tasks/count',
        method: 'GET',
        config: {
            tags: ['api', 'tasks'],
            description: 'returns the number of tasks'
        },
        handler: function(request, reply) {

            reply({'count': records.length});
        }
    },
    {
        path: '/tasks/active',
        method: 'GET',
        config: {
            tags: ['api', 'tasks'],
            description: 'returns the number of active tasks'
        },
        handler: function(request, reply) {

            let active = records.filter((item) => item.completed === false);

            reply(active);
        }
    },
    {
        path: '/tasks/completed',
        method: 'GET',
        config: {
            tags: ['api', 'tasks'],
            description: 'returns the number of completed tasks'
        },
        handler: function(request, reply) {

            let completed = records.filter((item) => item.completed === true);

            reply(completed);
        }
    },
    {
        path: '/tasks/{id}',
        method: 'GET',
        config: {
            tags: ['api', 'tasks'],
            description: 'return task by index',
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
        path: '/tasks',
        method: 'POST',
        config: {
            tags: ['api', 'tasks'],
            description: 'add task record',
            validate: {
                options: {
                    allowUnknown: false
                },
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
        path: '/tasks/{id}',
        method: 'PUT',
        config: {
            tags: ['api', 'tasks'],
            description: 'replace existing task',
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
        path: '/tasks/{id}',
        method: 'DELETE',
        config: {
            tags: ['api', 'tasks'],
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
