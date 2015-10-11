var Joi = require('joi'),
    Boom = require('boom'),
    thinky = require('thinky'),
    ToDoItem = rootRequire('model').ToDoItem, 
    Errors = thinky.Errors, 
    r = thinky.r; 

    //Create the API for saving the to-do list. 

    //Create a to-do list. 

   function todoItemSchema(option){
   	var schema = Joi.object().keys({
   		title: Joi.string(), 
   		description: Joi.string(), 
   		due_date: Joi.date(), 
   	})
   	if (option && option === 'required') {
        var keys = schema._inner.children.map(function (key) {
            return key.key;
        });
        schema = schema.requiredKeys(keys);
    }
    return schema;
   }
   //How do you build a serach system? 
   
  function create(request, reply) {
    var newToDoItem = new  ToDoItem(request.payload); 
    newToDoItem.save().then(function (todoItem) {
        reply(todoItem).code(200); //replying to get new locaiton. 
        //replysaying that the new todo item has bene created. 
    }).error(function (err) {
      console.log("THE ERROR IS "+err); 
        //reply(Boom.badImplementation(err.message));
    });
};

function getAll(request, reply){
ToDoItem.run().then(function(todos){
  reply(todos).code(200); //reply with teh todo items that are in there. 
}).error(function(err){
  reply(err.message); 
}); 
}; 

function  getOne(request, reply){
ToDoItem.get(request.params.id).then(function(todo){
  reply(todo).code(200); 

}).error(function(err){
  reply(err.message); 
})
}; 

function update(request, reply){
    request.payload['updated_at'] = new Date(); 
    ToDoItem.get(request.params.id).update(request.payload).run().then(function(todo){
      reply(todo).code(200); 
    }).catch(function(err){
      reply(err.message); 
    }); 

}

function remove(request, reply){
  ToDoItem.get(request.params.id).then(function(todo){
    todo.delete().then(function(res){
      reply().code(204); //successful
    }).error(function(err){
      reply(err.message); 
    }); 
  }); 
}
 

module.exports = {
	create: {
		handler: create, 
		description: "creating a new todo item", 
		notes:"yep", 
		tags:['APi']
	}, 
  getAll: {
    handler: getAll, 
    description: "Getting all the todo  items", 
    tags: ['API']
  }, 
  getOne: {
    handler: getOne
  }, 
  update: {
    handler: update
  }, 
  remove: {
    handler: remove 
  }
}