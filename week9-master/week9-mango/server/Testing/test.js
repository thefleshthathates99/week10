var assert = require('assert'); //link in assertion library

var server = require("../server.js");

var http = require('http');

describe('Server Testing', () => {
    before(function() {console.log("Pre-Test");});
    after(function() {console.log("Post-Test");});
});

describe('Begin Testing', () => {
    it('Should get all mongo data', function() {
        http.get('http://localhost:3000/api/getlist', function(response){
            assert.equal(response.statusCode, 200);
        })
    })

});

