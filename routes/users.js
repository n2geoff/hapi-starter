"use strict";

//in-memory database
var records = [];

//dependencies
const Joi = require("joi");

//schema
var schema = Joi.object().keys({
    username: Joi.string().min(3).max(16),
    password: Joi.string().min(4).max(16)
});

module.exports = [
    {
        path: "/users",
        method: "GET",
        config: {
            tags: ["api", "users"],
            description: "return all user records"
        },
        handler: function(request, reply) {
         
            reply(records);
        }
    },
    {
        path: "/users",
        method: "POST",
        config: {
            tags: ["api", "users"],
            description: "add user record",
            validation: {
                payload: schema
            }
        },
        handler: function(request, reply) {
         
            //add user record
            records.push(request.payload);
         
            reply(records);
        }
    }
];
