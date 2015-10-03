var thinky = require("thinky")(); 
type = thinky.type;
r = thinky.r; 

//Creating for to-do list 
var ToDoItem = thinky.createModel('ToDoItem', {
	id: type.string(), 
	title: type.string().required(), 
	description: type.string(), 
	due_date: type.date().required(), 
	complete: type.boolean().required(), 
	created_at: type.date().default(r.now()), 
	updated_At:type.date().default(r.now())
}); 

module.exports = {
    //get the location. 
    ToDoItem: ToDoItem
    }