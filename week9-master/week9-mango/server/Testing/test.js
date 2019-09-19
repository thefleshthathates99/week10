var assert = require('assert'); //link in assertion library

var app = require("../server.js");
let chai = require('chai');
let chaiHttp = require('chai-http')
let should = chai.should();
chai.use(chaiHttp);

var http = require('http');

describe('Server Testing', () => {
    before(function() {console.log("Pre-Test");});
    after(function() {console.log("Post-Test");});

    describe('/read', () => {
        it('Should Check if data exists', function(done) {
            chai.request(app)
                .get('/api/getlist')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
    
        });
        it('Should be an Object', function(done) {
            chai.request(app)
                .get('/api/getlist')
                .end((err, res) => {
                    res.body.should.be.a('object');
                    done();
                });
    
        })
    
    });
    
    // describe('/add', () => {
    //     it('Add to Mongo ', function() {
    //         chai.request(app)
    //             .post('/api/add').type('form')
    //             .send({_id: 99, Name: "Name99", Description: "Description for object99", Price: "$99.99", Units: 123})
    //             .end((err, res) => {
    //                 //res.should.have.status(200);
    //                 res.body.should.have.property('_id');
    //                 res.body.should.have.property('Name');
    //                 res.body.should.have.property('Description');
    //                 res.body.should.have.property('Price');
    //                 res.body.should.have.property('Units');
    //                 done();
    //             });
    //     })
    // });
});


