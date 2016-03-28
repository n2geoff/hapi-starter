const Hapi = require("hapi");

const server = new Hapi.Server();
server.connection({ port: 3000 });

server.register(require("./config/plugins"), function (err) {
    if (err) { return console.log(err); }
    // register routes
    server.route(require('./routes/public'));
    server.route(require('./routes/users'));

    // start server
    server.start(function () {
        console.log('API up and running at:', server.info.uri);
    });
});
