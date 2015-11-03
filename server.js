global.rootRequire = function(name) {
    return require(__dirname + '/' + name);
};

var Hapi = require('hapi'), 
config = rootRequire("config.js"); 
    todoItemAPI = rootRequire('server/API/todoList.js')
 
   // Routes = rootRequire('server/routes'),
   // Validate = rootRequire('server/validate');

// Start hapi server
var server = new Hapi.Server();

// Set up server connection through config

server.connection({ port: 3000 });

server.register(require('inert'), function (err) {
    /**server.route({
        engines: {
            html: require('handlebars')
        },
        path: 'templates', 
        isCached: false 
    });**/ 
   if (err) {
        throw err;
    }


server.route({
     method: 'GET',
    path:"/loggedIn", 
    handler: function(request, reply){
        reply.file("templates/index.html"); //To do page. 
    }
}), 
server.route({
    method: "GET",
    path: "/{path*}",
    handler: {
        directory: {
            path: "./templates",
            listing: false,
            index: false
        }
    }
});


/**server.route({
    method:"GET", 
    path:"/{tag_words}", 
    config: todoItemAPI.searchTag
})**/

server.route(
    {
        method:"POST", 
        path:"/todoitem", 
       config:  todoItemAPI.create
    }
) 

server.route({
    method:"GET", 
    path:"/", 
    handler:function(reqeust, reply){
        reply.file("templates/homepage.html"); 
    }
})
server.route({
    method:"GET", 
    path:"/footer.html", 
    handler:function(reqeust, reply){
        reply.file("templates/footer.html"); 
    }
})
//get all. 
server.route(
{
    method:"GET", 
    path:"/todoitem", 
    config: todoItemAPI.getAll
}); 
//do the todo item get one. 

server.route({
    method: "GET", 
    path:"/dashboard" , 
    handler:function(request, reply){
        reply.file("templates/dashboard.html")
    }
})

server.route({
    method:"GET", 
    path:"/todoitem/{id}" , 
    config: todoItemAPI.getOne
}); 
server.route({
    method:"DELETE", 
    path: "/todoitem/{id}", 
    config: todoItemAPI.remove
}); 

server.route({
    method:"PUT", 
    path:"/todoitem/{id}", 
    config: todoItemAPI.update
}); 




server.route(
    {
        method:"GET", 
        path:"/app.js", 
        handler: function(request, reply){
            reply.file("app.js");  //in here, tbhe routes are used for hte PA
        }
    }
); 

  server.start(function () {
     if (err) {
            throw err;
        }
        console.log('Server running at:', server.info.uri);
    });

});

module.exports = server;

// Add route to serverserver.route(Routes);

