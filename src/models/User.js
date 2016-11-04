'use strict';

var bcrypt = require('bcrypt');

//in-memory database
let records = [{
    username: "admin",
    password: "$2a$10$8pIJQCRbuhb6eu/63lj36O2lIE7N6Icp3Xf6nQWdZTgQoC7FdeWPC",
    active: true
}];

//dependencies
const Joi = require('joi');

//schema
let schema = Joi.object().keys({
    username: Joi.string().min(3).max(64).required(),
    password: Joi.string().min(3).max(64).required(),
    active: Joi.boolean().default(false)
});

//hack: crappy in-memory CRUD model
var users = {
    create: function(user) {
        Joi.validate(user, schema, function (err, value) {
            if(err) {
                return err;
            }

            //todo:check for duplicate

            let result = {
                username: user.username,
                password: bcrypt.hashSync(user.password, 10),
                active: false
            }

            records.push(result);

            return result;
        });
    },
    update: function(id, user) {

        if(records[id]) {
            records[id] = this.create(records[id]);

            return records[id];
        }

        return false;
    },
    delete: function(id) {
        if(records[id]) {
            records[id] = this.create(records[id]);

            records.splice(id, 1);

            return records[id];
        }

        return false;
    },
    find: function(id) {
        return records[id] || {};
    },
    findBy: function(username) {

        let found = false;

        records.forEach(function(item) {
            if(item.username === username) {

                found = item;
            }
        });

        return found;
    },
    all: function() {
        return records;
    },
    count: function() {
        return records.length;
    },
    schema: schema
};

module.exports = users;
