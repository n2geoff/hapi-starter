"use strict";

module.exports = [
    {
        path: "/users",
        method: "GET",
        handler: function(request, reply) {
            reply("got users");
        }
    }
];
