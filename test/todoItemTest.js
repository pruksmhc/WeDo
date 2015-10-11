var Lab = require('lab'),
    Code = require('code'),
    lab = exports.lab = Lab.script(),
    //  Jwt = require("jsonwebtoken"); 
    server = require('../server.js'),
    expect = Code.expect,
    paymentID = "", 
    todoID = 0; 


getToken = function() {
    return "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InlhZGFjbWlzQGdtYWlsLmNvbSIsInNjb3BlIjpbImFkbWluIl0sImlhdCI6MTQzOTgwMTE4OH0.zrVbnkJfmlCXKMwXUZ0nvPKm-z3dMexBHee4yJTKQSU";
}


lab.experiment("ToDoItem", function() {

    lab.test('POST /api/v1/todoitem CREATE', function(done) {
        //Creating two todo items. 
            var options = {
            method: 'POST',
            url: "http://yadas-air:3000/todoitem",
            payload: {
              title: "Yada's Project 2.0",
              description:"I want to complete this website" ,
             due_date: "09/10/2015",
             priority: 1, 
             complete: true
            }
        }; 
        server.inject(options, function(res) {
           // promocodeID = res.result.id;
           //TODO: Make sure that the server injeciton. 

            expect(res.statusCode).to.equal(200);
            console.log("THE RESULT IS "+JSON.stringify(res.result));  
            todoID = res.result.id; 
            console.log("The ID gotten of the newly created todo item is "+todoID); 
         //   expect(res.result.due_date).to.equal(options.payload.due_date); 
           var options2 = {
            method: 'POST',
            url: "http://yadas-air:3000/todoitem",
            payload: {
              title: "Yada's Project 3.0",
              description:"I want to complete this in app version too" ,
             due_date: "09/10/2015",
             priority: 2, 
             complete:  false
            }
        }; 
         server.inject(options2, function(res) {
            done(); 
        });
    });
}); 

    lab.test('GETALL /todoitem ', function(done) {
        var options = {
            method: 'GET',
            url: "/todoitem"
        }; 
        server.inject(options, function(res) {
           // promocodeID = res.result.id;
         console.log("THE RESULT IS "+JSON.stringify(res.result)); 

            expect(res.result).to.be.an.array(); 
            done();
        })
    }); 

        lab.test('GET ONE todoitem/{id} ', function(done) {
        var options = {
            method: 'GET',
            url: "/todoitem/"+todoID
            }

        server.inject(options, function(res) {
            expect(res.statusCode).to.equal(200);
            console.log("THE RESULT IS "+res.result); 
            done();
        })
    });

});







