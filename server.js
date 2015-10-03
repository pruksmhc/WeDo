global.rootRequire = function(name) {
    return require(__dirname + '/' + name);
};

var Hapi = require('hapi'),
    config = rootRequire('config')(), 
    todoItemAPI = rootRequire('server/API/todoList.js')
 
   // Routes = rootRequire('server/routes'),
   // Validate = rootRequire('server/validate');

// Start hapi server
var server = new Hapi.S erver();

// Set up server connection through config
server.connection(config.server);

server.register(require('vision'), function (err) {
    server.route({
        engines: {
            html: require('handlebars')
        },
        path: 'templates', 
        isCached: false 
    });
});

var extension = "/api/v1/"; 
server.route({
    method: 'GET',
    path:"/", 
    handler: function(request, reply){
        reply.view("todoPage");  //k here, tbhe routes are used for hte PA
    }
}
) 
server.route(
    {
        method:"POST", 
        path:"/api/v1/todoitem", 
       config:  todoItemAPI.create
    }
)

if (process.env.NODE_ENV === 'production') { 
    //ifthe process is from production. 
    server.register([=
        {
            register: require('hapi-auth-jwt')
        }
    ], function (err) {
        if (err) {
            console.error('Failed to load a plugin:', err);
        } else {
            server.auth.strategy('token', 'jwt', {
               // validateFunc: Validate.validate,
             //   key: config.auth.privateKey
            });
        }
    });
}

// Add route to serverserver.route(Routes);

// Add 404 handler
server.ext('onPreResponse', function (request, reply) {
    if (request.response.isBoom && request.response.output.statusCode === 404) {
        return reply.redirect('/');
    }
    return reply.continue();
});

if (!module.parent) { // Prevent server from starting when module is used in testing
    // Start server
    server.start(function () {
        console.log('Server running at:', server.info.uri);
    });
}

module.exports = server; // Export server as a module for testing
