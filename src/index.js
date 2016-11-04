'use strict';

//requirements
const Hapi  = require('hapi');
const basic = require('./lib/security').basic;

//server configuration
let server = new Hapi.Server();
server.connection({port: 8001});

server.register(require('./config/plugins'), (err) => {
    if (err) {
        return console.log(err);
    }

    //register auth
    server.auth.strategy('basic', 'basic', { validateFunc: basic.validate });

    // register routes
    server.route(require('./routes/public'));
    server.route(require('./routes/tasks'));
    server.route(require('./routes/users'));

    // start server
    server.start(() => {
        console.log('API up and running at:', server.info.uri);
    });
});

//testing tie-in
module.exports = server;
