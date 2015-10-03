var Lab = require('lab'),
    Code = require('code'),
    lab = exports.lab = Lab.script(),
    //  Jwt = require("jsonwebtoken"); 
    server = require('../server.js'),
    expect = Code.expect,
    paymentID = "";


getToken = function() {
    return "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InlhZGFjbWlzQGdtYWlsLmNvbSIsInNjb3BlIjpbImFkbWluIl0sImlhdCI6MTQzOTgwMTE4OH0.zrVbnkJfmlCXKMwXUZ0nvPKm-z3dMexBHee4yJTKQSU";
}


lab.experiment("ToDoItem", function() {

    lab.test('POST /api/v1/todoitem CREATE', function(done) {
        var token = getToken();
        var options = {
            method: 'POST',
            url: "/api/v1/todoitem",
            payload: {
              title: "Yada's Project 2.0",
              description:"I want to complete this website" ,
             due_date: "09/10/2015",
             complete: true
            }
        }; 
        server.inject(options, function(res) {
           // promocodeID = res.result.id;
            paymentID = res.result.id;  
            expect(res.statusCode).to.equal(200);
            console.log("THE RESULT IS "+res.result); 
            expect(res.result.due_date).to.equal(options.payload.due_date); 
            done();
        })
    });


});
