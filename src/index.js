"use strict";

//requirements
const Hapi = require("hapi");

//server configuration
const server = new Hapi.Server({
    port: 8000,
    host: "localhost"
});

const start = async () => {

    // register plugins
    await server.register(require("./config/plugins"));

    // register routes
    server.route(require("./routes/public"));
    server.route(require("./routes/tasks"));

    await server.start();
    console.log("API up and running at:", server.info.uri);
}

process.on("unHandledRejection", (err) => {
    console.log(err);
    process.exit(1);
});

//testing tie-in
module.exports = server;

start();
