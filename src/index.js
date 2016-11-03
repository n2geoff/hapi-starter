'use strict';

//requirements
const Hapi = require('hapi');

//server configuration
let server = new Hapi.Server();
server.connection({port: 8001});

server.register(require('./config/plugins'), (err) => {
    if (err) {
        return console.log(err);
    }

    // register routes
    server.route(require('./routes/public'));
    server.route(require('./routes/tasks'));

    // start server
    server.start(() => {
        console.log('API up and running at:', server.info.uri);
    });
});

//testing tie-in
module.exports = server;
