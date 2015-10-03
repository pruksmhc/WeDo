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
   		completed: Joi.boolean()
   	})
   	if (option && option === 'required') {
        var keys = schema._inner.children.map(function (key) {
            return key.key;
        });
        schema = schema.requiredKeys(keys);
    }
    return schema;
   }
   
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

/**function getAll(request, reply){
  //you want all of your to do items right, ranked by the due dates (for now), 
  //then we can change for priorities withint hose due dates. 
  ToDoItem.get()

}**/

module.exports = {
	create: {
		handler: create, 
		description: "creating a new todo item", 
		notes:"yep", 
		tags:['APi']
	}
}