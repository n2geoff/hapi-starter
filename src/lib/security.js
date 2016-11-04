'use strict';

const bcrypt = require('bcrypt');
let User     = require('../models/User');

var security = {
    basic: {
        validate: function validate(request, username, password, callback) {

            console.log('username', username);

            let user = User.findBy(username) || {};

            if (!user) {
                return callback(null, false);
            }

            bcrypt.compare(password, user.password, (err, isValid) => {

                //error, isValid, user object
                callback(null, isValid, user);
            });

        }
    }
}

module.exports = security;
