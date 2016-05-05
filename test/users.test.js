'use strict';

//load dependencies
const Lab  = require('lab');
const Code = require('code');

let server = require('../index');

let lab = exports.lab = Lab.script();

//mirror jasmine/mocha testing style
let describe = lab.describe;
let it       = lab.it;
let before   = lab.before;
let after    = lab.after;
let expect   = Code.expect;

describe('User API Resource', () => {

    before((done) => {

        done();
    });

    it('should initialize with no records', (done) => {
        server.inject({
            url: '/users',
            method: 'GET'
        }, (response) => {
            let result = response.result;

            expect(response.statusCode).to.equal(200);
            expect(result).to.have.length(0);

            done();
        });
    });

});
