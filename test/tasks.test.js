"use strict";

//load dependencies
let Lab  = require("lab");
let Code = require("code");

let server = require("../src/index");

let lab = exports.lab = Lab.script();

//mirror jasmine/mocha testing style
let describe = lab.describe;
let it       = lab.it;
let before   = lab.before;
let after    = lab.after;
let expect   = Code.expect;

describe("Task API Resource", () => {

    it("should initialize with no records", () => {
        server.inject({
            url: "/tasks",
            method: "GET"
        }, (response) => {
            let result = response.result;

            expect(response.statusCode).to.equal(200);
            expect(result).to.have.length(0);
        });
    });

    it("should initialize with no records", () => {
        server.inject({
            url: "/tasks/count",
            method: "GET"
        }, (response) => {
            let result = response.result;

            expect(response.statusCode).to.equal(200);
            expect(result).to.have.length(0);
        });
    });

    it("should accept a new task", () => {
        server.inject({
            url: "/tasks",
            method: "POST",
            payload: {
                "task": "add a test task",
                "completed": false
            }
        }, (response) => {
            let result = response.result;

            expect(response.statusCode).to.equal(200);
            expect(result).to.have.length(1);
        });
    });

});
