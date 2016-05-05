'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 8000 });

server.register(require('./config/plugins'), (err) => {
    if (err) {
        return console.log(err);
    }

    // register routes
    server.route(require('./routes/public'));
    server.route(require('./routes/users'));

    // start server
    server.start(() => {
        console.log('API up and running at:', server.info.uri);
    });
});

module.exports = server;
