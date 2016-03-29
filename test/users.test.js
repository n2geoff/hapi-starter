"use strict";

//load dependencies
const Lab  = require("lab");
const Code = require("code");

var server = require("../index");

var lab = exports.lab = Lab.script();

//mirror jasmine/mocha testing style
var describe = lab.describe;
var it       = lab.it;
var before   = lab.before;
var after    = lab.after;
var expect   = Code.expect;

describe("User API Resource", function() {

    before(function(done) {

        done();
    });

    it("should initialize with no records", function(done) {
        server.inject({
            url: "/users",
            method: "GET"
        }, function(response) {
            var result = response.result;

            expect(response.statusCode).to.equal(200);
            expect(result).to.have.length(0);

            done();
        });
    });

});